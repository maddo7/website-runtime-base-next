import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Launch Canvas",
  description: "A reusable Next.js starter tuned for Cloudflare Workers and iterative site design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--canvas)] text-[var(--ink)] flex flex-col">
        {children}
      </body>
    </html>
  );
}
