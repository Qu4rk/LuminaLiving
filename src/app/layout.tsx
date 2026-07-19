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
    "A private three-level residence on the Limassol shoreline. Considered interiors, coastal proximity, curated stays from 5 days to a full year.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.png", type: "image/png", sizes: "144x144" },
      { url: "/favicon.png", type: "image/png", sizes: "288x288" },
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
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
