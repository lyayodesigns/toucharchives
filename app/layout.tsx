import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://toucharchives.com"),
  title: {
    default: "Touch Archive - Digital Hall of Fame & Interactive Recognition Display",
    template: "%s | Touch Archive",
  },
  description:
    "Transform your hall of fame, awards, and achievements into an engaging digital touchscreen display. Interactive recognition platform for schools, museums, and organizations.",
  keywords: [
    "digital hall of fame",
    "interactive touchscreen display",
    "recognition wall",
    "digital awards display",
    "touchscreen kiosk",
    "athletic hall of fame",
    "donor recognition",
    "wall of honor",
    "interactive trophy case",
    "digital signage",
  ],
  authors: [{ name: "Touchstone Digital Signage", url: "https://touchstone-ds.com" }],
  creator: "Touchstone Digital Signage",
  publisher: "Touchstone Digital Signage",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toucharchives.com",
    siteName: "Touch Archive",
    title: "Touch Archive - Digital Hall of Fame & Interactive Recognition Display",
    description:
      "Transform your hall of fame, awards, and achievements into an engaging digital touchscreen display. Interactive recognition platform for schools, museums, and organizations.",
    images: [
      {
        url: "/Touchstone Kiosk.jpg",
        width: 1200,
        height: 630,
        alt: "Touch Archive Digital Hall of Fame Display",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Touch Archive - Digital Hall of Fame & Interactive Recognition Display",
    description:
      "Transform your hall of fame, awards, and achievements into an engaging digital touchscreen display.",
    images: ["/Touchstone Kiosk.jpg"],
    creator: "@touchstoneds",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
