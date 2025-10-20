import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Srajan Kumar - Juspay",
    template: "Srajan Kumar - Juspay | %s",
  },
  description: "Juspay Assignment",
  openGraph: {
    title: "Srajan Kumar - Juspay",
    description: "Juspay Assignment",
    url: "https://srajan-juspay.vercel.app",
    siteName: "Srajan Kumar - Juspay",
    images: [
      {
        url: "https://srajan-juspay.vercel.app/assets/mockups/mockup2.png",
        width: 1200,
        height: 630,
        alt: "Srajan Kumar - Juspay",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srajan Kumar - Juspay",
    description: "Juspay Assignment",
    creator: "@kumarsrajan02",
    images: ["https://srajan-juspay.vercel.app/assets/mockups/mockup2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
