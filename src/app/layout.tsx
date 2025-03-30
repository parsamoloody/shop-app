import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Navbar from "./components/header/Header";

import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"]
});

export const metadata: Metadata = {
  title: " فروشگاه اینترنتی  ",
  description: " technoglogy shop ",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
      <body

        className={`${vazirmatn.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
