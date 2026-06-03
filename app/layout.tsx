import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kenai — The way of AI.",
  description:
    "kenai — AI consulting for HR and AI & automation training for businesses and colleges. Learn by doing. The way of AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
