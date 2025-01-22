import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wiedijk",
  description: "Coded with <3 by Paul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
