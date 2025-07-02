import ScrollTop from "@/components/Buttons/ScrollTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surgical Tools Podcast | Insights from Surgical Experts & Innovators",
  description: "Listen to our podcast series featuring leading surgeons and medical experts discussing the latest trends, innovations, about surgical instruments.",
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
