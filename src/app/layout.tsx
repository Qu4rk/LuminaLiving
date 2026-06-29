import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Limassol Circuit — Private Coastal Residence",
  description:
    "A private three-level residence on the Limassol shoreline. Considered interiors, coastal proximity, curated stays from 3 days to a full year.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
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
