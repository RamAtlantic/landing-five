"use client"

import { UserPlus, UploadCloud } from "lucide-react"

export function Navbar() {
  const handleMakerClick = () => {
    window.open("https://mooneymaker.co/?ref=48215", "_blank")
  }

  return (
    <nav className="fixed top-0 w-full bg-black z-40 py-3">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="https://mooneymaker.co/frontend/CSOFTV7/img/logo%20mooney.png" alt="Mooney Maker" width="110" className="h-auto" />
        </a>

        <div className="flex gap-2 md:gap-3">
          <button
            onClick={handleMakerClick}
            className="bg-black hover:bg-green-600 text-white font-bold text-2xl py-3 px-8 rounded-full border-4 border-green-400 transition-colors duration-200 max-w-none font-chango flex items-center gap-2"
          >
            <UserPlus className="w-7 h-7 mr-2" />
            REGISTRARSE
          </button>
          <button
            onClick={handleMakerClick}
            className="bg-black hover:bg-green-600 text-white font-bold text-2xl py-3 px-8 rounded-full border-4 border-green-400 transition-colors duration-200 max-w-none font-chango flex items-center gap-2"
          >
            <UploadCloud className="w-7 h-7 mr-2" />
            CARGAR
          </button>
        </div>
      </div>
    </nav>
  )
}
