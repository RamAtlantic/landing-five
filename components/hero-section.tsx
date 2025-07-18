"use client"

import { Gift, ArrowRight, Wallet, Gamepad2, UserPlus } from "lucide-react"
import { useUserTracking } from "../app/context/tracking-context"
import { sendMetaEvent } from "@/services/metaEventService"
import { useState } from "react"
import { Loader } from "./loader"

declare global {
  interface Window {
    fbq: any;
  }
}

export function HeroSection() {
  const { sendTrackingData } = useUserTracking()
  const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({})

  const handleButtonClick = async (buttonId: string) => {
    setLoadingStates((prevStates) => ({ ...prevStates, [buttonId]: true }))

    try {
     /*  const tempEmail = `user_${Date.now()}@example.com`
      const success = await sendMetaEvent(tempEmail, "10")

      if (success) {
        console.log("Evento de registro enviado exitosamente a Meta")
      } else {
        console.warn("No se pudo enviar el evento a Meta")
      } */

      try {
        window.fbq("track", "Lead", {
          content_name: "Botón CTA",
          value: 10,
          currency: "USD",
        });
        await sendTrackingData()
        console.log("Datos de tracking enviados exitosamente")
      } catch (error) {
        console.warn("Error enviando datos de tracking:", error)
      }

      const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL
      if (registerUrl) {
        window.location.href = registerUrl
      }
    } catch (error) {
      console.error("Error en el proceso de registro:", error)
      const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL
      if (registerUrl) {
        window.location.href = registerUrl
      }
    } finally {
      setLoadingStates((prevStates) => ({ ...prevStates, [buttonId]: false }))
    }
  }

  return (
    <section className="min-h-screen bg-black flex items-center justify-center flex-col px-3 lg:px-0 pt-20 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="text-center lg:text-left z-10">
            <div className="lg:mb-8">
              <h1 className="text-4xl lg:text-7xl font-bold text-white mb-2 font-chango">BIENVENIDO</h1>
              <h2 className="text-5xl lg:text-8xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent mb-3 lg:mb-4 font-chango tracking-wider">
                MOONEY MAKER
              </h2>
              <p className="text-base lg:text-lg text-white mb-4 lg:mb-6">
                <span className="font-bold">REGISTRESE</span>
                <br /> DEPÓSITO DE HASTA <span className="font-bold">$10.000.000</span>
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-4 mb-6 lg:mb-8">
                <div className="flex items-center gap-1 lg:gap-2">
                  <Gift className="w-4 lg:w-6 h-4 lg:h-6 text-green-400" />
                  <span className="text-sm lg:text-base text-white">Registro</span>
                </div>
                <ArrowRight className="w-2 lg:w-3 h-2 lg:h-3 text-white" />
                <div className="flex items-center gap-1 lg:gap-2">
                  <Wallet className="w-4 lg:w-6 h-4 lg:h-6 text-green-400" />
                  <span className="text-sm lg:text-base text-white">Deposite</span>
                </div>
                <ArrowRight className="w-2 lg:w-3 h-2 lg:h-3 text-white" />
                <div className="flex items-center gap-1 lg:gap-2">
                  <Gamepad2 className="w-4 lg:w-6 h-4 lg:h-6 text-green-400" />
                  <span className="text-sm lg:text-base text-white">Juga</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-3 lg:gap-4 mb-8">
              <button
                id="cta-button"
                onClick={() => handleButtonClick("register")}
                disabled={loadingStates["register"]}
                className="bg-green-500 hover:bg-green-600 disabled:bg-green-400 disabled:cursor-not-allowed text-black font-bold py-2 lg:py-3 px-6 lg:px-8 text-xl lg:text-2xl rounded-full border-4 border-green-400 transition-all duration-200 hover:scale-105 disabled:hover:scale-100 font-chango tracking-wider flex items-center justify-center gap-2 min-h-[60px] lg:min-h-[72px]"
              >
                {loadingStates["register"] ? (
                  <div className="flex items-center gap-2">
                    <Loader />
                    <span>CARGANDO...</span>
                  </div>
                ) : (
                  <>
                    <UserPlus className="w-6 lg:w-7 h-6 lg:h-7" />
                    REGISTRO
                  </>
                )}
              </button>

              <button
                id="deposit-button"
                onClick={() => handleButtonClick("deposit")}
                disabled={loadingStates["deposit"]}
                className="bg-gradient-to-r from-gray-100/80 via-white/80 to-gray-300/80 hover:from-gray-200 hover:to-white disabled:from-gray-300/60 disabled:to-gray-400/60 disabled:cursor-not-allowed text-black font-bold py-2 lg:py-3 px-6 lg:px-8 text-xl lg:text-2xl rounded-full border-4 border-black-400 transition-all duration-200 hover:scale-105 disabled:hover:scale-100 font-chango tracking-wider shadow-md flex items-center justify-center gap-2 min-h-[60px] lg:min-h-[72px]"
                style={{ backdropFilter: "blur(6px)" }}
              >
                {loadingStates["deposit"] ? (
                  <div className="flex items-center justify-center gap-2 rounded-full w-full">
                    <Loader />
                    <span className="text-white">CARGANDO...</span>
                  </div>
                ) : (
                  <>
                    <Wallet className="w-6 lg:w-7 h-6 lg:h-7" />
                    DEPOSITO
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-end h-full relative top-24">
            <div className="image-gradient-bear flex items-end">
              <img
                src="/gift2.gif"
                className="w-84 h-84 lg:w-[400px] lg:h-[400px] object-contain object-bottom opacity-50 lg:opacity-100"
                alt="Mooney Maker Bear"
                style={{ position: "relative", bottom: "-130px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .image-gradient-bear img {
            bottom: 80px !important;
          }
        }
      `}</style>
    </section>
  )
}
