import type { Metadata, Viewport } from "next";
import { Archivo_Black, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import "./globals.css";

const display = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "ShelterTech — Connecting people in need", template: "%s | ShelterTech" },
  description: "ShelterTech builds technology that connects San Franciscans to free internet access, human services, and opportunity.",
  openGraph: { title: "ShelterTech", description: "Technology that connects people to services and opportunity.", url: site.url, siteName: site.name, locale: "en_US", type: "website", images: [{ url: "/images/opengraph.jpg", width: 1200, height: 630, alt: "ShelterTech community representatives and volunteers with an SF Service Guide banner" }] },
  twitter: { card: "summary_large_image", title: "ShelterTech", description: "Technology that connects people to services and opportunity.", images: ["/images/opengraph.jpg"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a48ff" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
