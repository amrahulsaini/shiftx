import type { Metadata } from "next";
import { MuseoModerno, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  subsets: ["latin"],
  weight: ["500"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Easy Swift Packers and Movers",
  description: "Professional packers and movers services across PAN India. Door-to-door shifting, office moving, car transport, storage, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${museoModerno.variable} ${sourceSans3.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
