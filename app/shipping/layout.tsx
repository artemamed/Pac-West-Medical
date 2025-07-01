import ScrollTop from "@/components/Buttons/ScrollTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Medical Instruments | Pacwest",
  description: "Learn about Pacwest’s reliable shipping policies for medical instruments, including delivery timelines, tracking, and secure packaging for safe arrival.",
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
