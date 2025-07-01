import ScrollTop from "@/components/Buttons/ScrollTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Surgical Instruments Suppliers In USA | Pacwest",
  description: "Pacwest working as surgical instruments supplier in the USA, delivering high-quality tools to hospitals, clinics, and medical professionals nationwide.",
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
