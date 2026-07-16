import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "Lumina Living",
  description:
    "A private three-level residence on the Limassol shoreline. Considered interiors, coastal proximity, curated stays from 3 days to a full year.",
  icons: {
    icon: [
      { url: "/LuminaLiving/favicon.webp", type: "image/png", sizes: "32x32", color: "#ffffff" },
      { url: "/LuminaLiving/favicon.webp", type: "image/png", sizes: "48x48", color: "#ffffff" },
      { url: "/LuminaLiving/favicon.webp", type: "image/png", sizes: "64x64", color: "#ffffff" },
      { url: "/LuminaLiving/favicon.webp", type: "image/png", sizes: "128x128", color: "#ffffff" },
      { url: "/LuminaLiving/favicon.webp", type: "image/png", sizes: "256x256", color: "#ffffff" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased no-scroll">
        {children}

        {/* GSAP Core */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="beforeInteractive"
        />
        {/* ScrollTrigger */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        {/* ScrollToPlugin — smooth anchor navigation */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js"
          strategy="beforeInteractive"
        />
        {/* Site animations */}
        <Script src="/LuminaLiving/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
