import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompliOS — AI-Powered Legal Software",
  description: "CompliOS turns your most tedious legal workflows into automated, intelligent processes — so your team can focus on work that actually matters.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
