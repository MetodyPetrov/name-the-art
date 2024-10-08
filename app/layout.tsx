import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fun Art Game",
  description: "Dixit Inspired Art Game",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="w-full flex justify-between flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
