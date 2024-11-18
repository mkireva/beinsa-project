import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Metadata } from "next";

export default function RSLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <Header />
        <div className="px-4 py-2">{children}</div>
        <Footer />
      </div>
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
