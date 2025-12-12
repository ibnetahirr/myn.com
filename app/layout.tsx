// app/layout.tsx
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
  description:
    "My Yoga Network provides certified yoga teachers for hotels, resorts, healthcare facilities, and private practices, promoting wellness for all. Contact today!",
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

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9R0KB4WPDK"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9R0KB4WPDK');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-K3GP8W3J');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K3GP8W3J"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* Calendly JS */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />

        {/* ✅ Bootstrap JS Bundle (needed for modal) */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <SpeedInsights />
      </body>
    </html>
  )
}
