// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Provider from "@/components/Provider";
// import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

// Define a custom type extending Metadata to include Bing verification and Open Graph
// interface ExtendedMetadata extends Metadata {
//   verification: {
//     google: string;
//     bing?: string;
//   };
//   openGraph: {
//     title: string;
//     description: string;
//     url: string;
//     type: string;
//     images: {
//       url: string;
//       width: number;
//       height: number;
//       alt: string;
//     }[];
//   };
// }

const inter = Inter({ subsets: ["latin"] });

// export const metadata: ExtendedMetadata = {
  // metadataBase: new URL("https://artemamed.com/"),
  // title: "Medical Equipment | Surgical Instruments | Artema Medical",
  // description:
    // "Discover high-quality Medical equipment at Artema Medical. We manufacture and supply a wide range of surgical instruments.",
  // verification: {
    // google: "_Lqn7kh6lWaoH47eD0BgKLq-XihIvljbrnmT3tdu5gk",
    // bing: "BAEE953253739AE12DC726DBB54CCFA0", // Add Bing verification code here
  // },
  // alternates: {
  //   canonical: "./",
  // },
  // openGraph: {
  //   title: "Medical Equipment | Surgical Instruments | Artema Medical",
  //   description:
  //     "Discover high-quality Medical equipment at Artema Medical. We manufacture and supply a wide range of surgical instruments.",
  //   url: "https://artemamed.com/",
  //   type: "website",
  //   images: [
  //     {
  //       url: "https://artemamed.com/images/OG_Artema.jpg", // Ensure this is a valid image URL
  //       width: 1200,
  //       height: 630,
  //       alt: "Artema Medical Surgical Instruments",
  //     },
  //   ],
  // },
// };

// const homepageSchema = {
//   "@context": "https://schema.org",
//   "@type": "MedicalOrganization",
//   name: "Artema Medical Group",
//   alternateName: "AMG",
//   url: "https://artemamed.com/",
//   logo: "https://artemamed.com/images/Artema%20Logo.png",
//   contactPoint: {
//     "@type": "ContactPoint",
//     telephone: "+1 (210) 468 7779",
//     contactType: "technical support",
//     areaServed: ["US", "PK"],
//   },
//   sameAs: [
//     "https://www.facebook.com/people/Artema-Medical-Group/61556179106203/",
//     "https://www.instagram.com/surgical.medical.instruments/",
//     "https://www.linkedin.com/company/artema-medical-group/?viewAsMember=true",
//   ],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <Provider>{children}</Provider>
        <ToastContainer
          className="!mt-[3.5rem]"
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* <GoogleAnalytics gaId="G-P5724QJXKY" /> */}
        {/* <GoogleTagManager gtmId="AW-16664181016" /> */}
        {/* Authorize.Net Seal */}
        <div className="AuthorizeNetSeal">
          <script
            dangerouslySetInnerHTML={{
              __html: `var ANS_customer_id="72765026-801c-410a-a6ae-9c6fc23960f5";`,
            }}
          />
          <script
            async
            src="//verify.authorize.net:443/anetseal/seal.js"
          />
        </div>
      </body>
    </html>
  );
}
