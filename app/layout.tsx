import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Anton, Montserrat, Chango } from "next/font/google"
import { TrackingProvider } from "./context/tracking-context"

const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-anton" })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
})
const chango = Chango({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-chango" })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "Gifty 2.0",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${anton.variable} ${montserrat.variable} ${chango.variable}`}>
      <body>
        <TrackingProvider>
          {children}
        </TrackingProvider>
      </body>
    </html>
  )
}
