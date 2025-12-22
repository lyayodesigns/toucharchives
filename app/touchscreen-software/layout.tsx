import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interactive Touchscreen Software for Digital Hall of Fame",
  description:
    "Discover our interactive touchscreen software for digital halls of fame, recognition walls, and award displays. Perfect for schools, universities, museums, and organizations. Easy to use, cloud-based platform.",
  keywords: [
    "touchscreen software",
    "interactive touchscreen display",
    "digital hall of fame software",
    "touchscreen kiosk software",
    "recognition display software",
    "interactive display system",
    "digital signage software",
    "touchscreen hall of fame",
    "wall-mounted touchscreen",
    "floor standing kiosk",
  ],
  openGraph: {
    title: "Interactive Touchscreen Software for Digital Hall of Fame | Touch Archive",
    description:
      "Discover our interactive touchscreen software for digital halls of fame, recognition walls, and award displays. Cloud-based, easy to use platform.",
    type: "website",
    url: "https://toucharchive.com/touchscreen-software",
    images: [
      {
        url: "/Touchstone Kiosk.jpg",
        width: 1200,
        height: 630,
        alt: "Touch Archive Touchscreen Software Display",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Touchscreen Software for Digital Hall of Fame",
    description:
      "Discover our interactive touchscreen software for digital halls of fame, recognition walls, and award displays.",
    images: ["/Touchstone Kiosk.jpg"],
  },
  alternates: {
    canonical: "https://toucharchive.com/touchscreen-software",
  },
}

export default function TouchscreenSoftwareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
