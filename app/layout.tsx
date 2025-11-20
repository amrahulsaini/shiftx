import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.easyshiftxpackersandmovers.com'),
  title: {
    default: "EasyshiftX Packers and Movers - Professional Moving Services Across India",
    template: "%s | EasyshiftX Packers and Movers"
  },
  description: "Professional packers and movers services across PAN India. Door-to-door shifting, office moving, car transport, storage, and more. Trusted, reliable, and affordable relocation services.",
  keywords: ["packers and movers", "relocation services", "house shifting", "office moving", "car transport", "India movers", "door to door shifting", "professional movers", "storage services", "packing services"],
  authors: [{ name: "EasyshiftX Packers and Movers" }],
  creator: "EasyshiftX Packers and Movers",
  publisher: "EasyshiftX Packers and Movers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "EasyshiftX Packers and Movers - Professional Moving Services",
    description: "Professional packers and movers services across PAN India. Door-to-door shifting, office moving, car transport, storage, and more.",
    url: 'https://www.easyshiftxpackersandmovers.com',
    siteName: 'EasyshiftX Packers and Movers',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '50e7699cc5ca17c3',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
