import type { Metadata } from "next";
import "./globals.css";
import { Alex_Brush } from 'next/font/google'


const alexBrush = Alex_Brush({
  weight: "400",
  variable: "--font-alex_brush",
  subsets: ['latin'],
  display: "swap",
  style: "normal",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={` ${alexBrush.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
