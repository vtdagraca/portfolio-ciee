import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from 'next/font/google';

// Configuração da fonte Quicksand
const quicksand = Mulish({
  weight: "200", // ou outros pesos que você desejar
  variable: "--font-quicksand",
  subsets: ['latin'],
  display: "swap",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Portfolio CIEE",
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
        className={`${quicksand.variable} antialiased`} // Correção da variável da fonte
      >
        {children}
      </body>
    </html>
  );
}
