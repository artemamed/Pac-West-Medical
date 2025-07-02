import ScrollTop from "@/components/Buttons/ScrollTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IFU | Medical Equimpent Suppliers | Pacwest",
  description: "IFU (Instructions for Use) | Trusted Medical Equipment Suppliers – Providing detailed product guidelines and high-quality equipment for safe medical use.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="z-50 fixed bottom-5 right-5  ">
        <ScrollTop />
      </div>
    </div>
  );
}
