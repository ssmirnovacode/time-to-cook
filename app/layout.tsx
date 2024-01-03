import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/MainHeader/MainHeader";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burger Time",
  description: "Order food online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
