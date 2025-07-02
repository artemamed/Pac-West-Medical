import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Biomedical Devices | Surgical Instruments | Pacwest",
  description:
    "Discover high-quality biomedical devices and precision surgical instruments from Pacwest. We provide innovative, and reliable solutions.",
};

export default function BioMedicalLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
