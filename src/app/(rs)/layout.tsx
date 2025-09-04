import Footer from "@/components/Footer";
import { Metadata } from "next";

export default function RSLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="px-2 py-2">{children}</div>
      <Footer />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://beins.de"),
    title: "Beinsa Project",
    description:
      "Auf der Webseite finden Sie Vörträge, Bücher und Musik des spirituellen Lehrers Petar Danov.",
    openGraph: {
      title: "Beinsa Projekt",
      description:
        "Auf der Webseite finden Sie Vörträge, Bücher und Musik des spirituellen Lehrers Petar Danov.",
      type: "website",
      url: "https://beinsa.de",
      siteName: "Beinsa Projekt",
      images: "opengraph-image.png",
    },
    twitter: {
      card: "summary_large_image",
      site: "@beinsa",
      title: "Beinsa Projekt",
      description:
        "Auf der Webseite finden Sie Vörträge, Bücher und Musik vom spirituellen Lehrer Petar Danov.",
      images: "opengraph-image.png",
    },
  };
}
