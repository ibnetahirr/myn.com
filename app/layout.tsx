import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/aos.css"
import "/public/assets/css/vendors/odometer.css"
import "/public/assets/css/vendors/carouselTicker.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css"
import "/public/assets/fonts/boxicons/boxicons.min.css"
import "/public/assets/fonts/satoshi/satoshi.css"
import "/public/assets/css/main.css"

import "@/node_modules/react-modal-video/css/modal-video.css"
import { SpeedInsights } from "@vercel/speed-insights/next"


import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "My Yoga Network: Yoga Teachers for Hotels, Resorts, and Healthcare",
  description: "My Yoga Network provides certified yoga teachers for hotels, resorts, healthcare facilities, and private practices, promoting wellness for all. Contact today!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Calendly CSS */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}

        {/* Calendly JS */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
         <SpeedInsights />
      </body>
    </html>
  )
}
