import ScrollTop from "@/components/Buttons/ScrollTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ's | Surgical Equipment | PacWest Surgical",
  description: "Find answers to frequently asked questions about our surgical equipment, product quality, certifications, ordering, and support at PacWest Surgical.",
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
