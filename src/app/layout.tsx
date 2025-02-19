import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react"; // Import React
import { ThemeProvider } from "../context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akanksha Kumari - Portfolio",
  description: "Frontend Developer specializing in React and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider> {children}</ThemeProvider>
      </body>
    </html>
  );
}
