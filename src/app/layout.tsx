import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEAL Platform",
  description: "A modern onboarding and lab operations platform for SEAL."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
