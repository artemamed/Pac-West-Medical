// app/api/pay/route.ts

import nodemailer from "nodemailer";

export async function GET(req: Request) {
  return handlePayRequest(req);
}
export async function POST(req: Request) {
  return handlePayRequest(req);
}

async function handlePayRequest(req: Request) {
  try {
    // --- Parse params from URL ---
    const url = new URL(req.url);
    const sessionId = url.searchParams.get("sessionId") || "DEFAULT_SESSION_ID";
    const orderId = url.searchParams.get("orderId") || "DEFAULT_orderId";
    const amount = url.searchParams.get("amount") || "0";

    // --- Get user info from cookies (optional) ---
    const cookies = req.headers.get("cookie") || "";
    const cookieData: Record<string, string> = Object.fromEntries(
      cookies.split(";").map((cookie) => {
        const [key, value] = cookie.trim().split("=");
        return [decodeURIComponent(key), decodeURIComponent(value)];
      })
    );
    const parsedContactInfo = cookieData["shipping_contact_info"]
      ? JSON.parse(cookieData["shipping_contact_info"])
      : {};
    const userEmail = parsedContactInfo?.email || "customer@unknown.com";
    const cardholderName = parsedContactInfo?.name || "Valued Customer";

    // --- Make Mastercard payment request ---
    const MID = process.env.MERCHANT_ID!;
    const Pass = process.env.MERCHANT_PASS!;
    const apiUrl = `${process.env.URL}.gateway.mastercard.com/api/rest/version/74/merchant/${MID}/order/${orderId}/transaction/${orderId + 1}`;

    const body = {
      apiOperation: "PAY",
      authentication: { transactionId: orderId },
      order: { amount, currency: process.env.CURRENCY },
      session: { id: sessionId },
    };

    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        Authorization: `Basic ${Buffer.from(`merchant.${MID}:${Pass}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    let data;
    if (response.ok) {
      data = await response.json();
    } else {
      // This console log is fine for debugging
      console.error("Mastercard API response not OK:", await response.text());
      throw new Error("Payment gateway response error.");
    }

    const gatewayCode = data.response?.gatewayCode;
    const amountReceived = data.transaction?.amount || amount;

    // --- Set headers to allow iframe embedding for 3DS callback ---
    const headers = new Headers();
    headers.set("X-Frame-Options", "ALLOWALL");
    headers.set("Content-Type", "text/html");

    // --- Success flow ---
    if (gatewayCode === "APPROVED") {
      // Send confirmation email (optional)
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: userEmail,
          subject: "Payment Successful",
          html: `
            <div>
              <h1>Payment Successful</h1>
              <p>Dear ${cardholderName}, thank you for your payment of USD ${amountReceived}.</p>
            </div>
          `,
        });
      } catch (emailErr) {
        // No need to do anything if email fails, just log
        console.error("Failed sending success email:", emailErr);
      }

      // --- Return HTML with loading spinner and redirect ---
      return new Response(
        `<html>
          <head>
            <title>Processing Payment...</title>
            <style>
              body { text-align: center; font-family: Arial, sans-serif; margin-top: 40px;}
              .spinner {
                margin: 30px auto 20px auto;
                width: 40px; height: 40px;
                border: 6px solid #eee; border-top: 6px solid #4caf50;
                border-radius: 50%; animation: spin 1s linear infinite;
              }
              @keyframes spin {
                0% { transform: rotate(0deg);}
                100% { transform: rotate(360deg);}
              }
              .success-msg { color: green; font-size: 22px; }
            </style>
          </head>
          <body>
            <div class="spinner"></div>
            <div class="success-msg">Payment Successful</div>
            <div>Redirecting to your order summary...</div>
            <script>
              var targetUrl = "/cart/checkOut/orderComplete?amount=${amountReceived}&name=${encodeURIComponent(cardholderName)}";
              if (window.top !== window.self) {
                window.top.location = targetUrl;
                setTimeout(function() {
                  document.body.innerHTML += '<p>If you are not redirected, <a href="' + targetUrl + '" target="_top">click here</a>.</p>';
                }, 2500);
              } else {
                window.location = targetUrl;
              }
            </script>
          </body>
        </html>`,
        { headers }
      );
    }

    // --- Failure flow ---
    return new Response(
      `<html>
        <body style="text-align: center;">
          <h1 style="color:red;">Payment Failed</h1>
          <p>There was a problem processing your payment. <a href="/cart">Go back to cart</a> and try again.</p>
        </body>
      </html>`,
      { status: 400, headers }
    );
  } catch {
    // --- Error fallback ---
    const headers = new Headers();
    headers.set("X-Frame-Options", "ALLOWALL");
    headers.set("Content-Type", "text/html");
    return new Response(
      `<html>
        <body style="text-align: center;">
          <h1 style="color: red;">Payment processing failed</h1>
          <p>There was an error during payment processing. <a href="/cart">Back to Cart</a></p>
        </body>
      </html>`,
      { status: 500, headers }
    );
  }
}
