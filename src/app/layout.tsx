import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://beins.de"),
    title: "Beinsa Project",
    description:
      "Auf der Webseite finden Sie Vörträge, Bücher und Musik des spirituellen Lehrers Petar Danov.",
    openGraph: {
      title: "Beinsa Project",
      description:
        "Auf der Webseite finden Sie Vörträge, Bücher und Musik des spirituellen Lehrers Petar Danov.",
      type: "website",
      url: "https://beinsa.de",
      siteName: "Beinsa Project",
      images: "opengraph-image.png",
    },
    twitter: {
      card: "summary_large_image",
      site: "@beinsa",
      title: "Beinsa Project",
      description:
        "Auf der Webseite finden Sie Vörträge, Bücher und Musik vom spirituellen Lehrer Petar Danov.",
      images: "opengraph-image.png",
    },
  };
}