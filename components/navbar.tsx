"use client"

import { UserPlus, UploadCloud } from "lucide-react"
import { useUserTracking } from "../app/context/tracking-context"
import { sendMetaEvent } from "@/services/metaEventService"
import { useState } from "react"
import { Loader } from './ui/loader'


export function Navbar() {
  const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({});

  const { sendTrackingData } = useUserTracking();

  const handleButtonClick = async (buttonId: string) => {
    setLoadingStates((prevStates) => ({ ...prevStates, [buttonId]: true }));
    try {
/*       const tempEmail = `user_${Date.now()}@example.com`;
      const success = await sendMetaEvent(tempEmail, "10");

      if (success) {
        console.log('Evento de registro enviado exitosamente a Meta');
      } else {
        console.warn('No se pudo enviar el evento a Meta');
      } */

      

      try {
        window.fbq("track", "Lead", {
          content_name: "Botón CTA",
          value: 10,
          currency: "USD",
        });
        await sendTrackingData();
        
        console.log('Datos de tracking enviados exitosamente');
      } catch (error) {
        console.warn('Error enviando datos de tracking:', error);
      }

      const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL;
      if (registerUrl) {
        window.location.href = registerUrl;
      }
    } catch (error) {
      console.error('Error en el proceso de registro:', error);
      const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL;
      if (registerUrl) {
        window.location.href = registerUrl;
      }
    } finally {
      setLoadingStates((prevStates) => ({ ...prevStates, [buttonId]: false }));
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black z-40 py-2 md:py-3">
      <div className="container mx-auto px-3 md:px-5 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="https://mooneymaker.co/frontend/CSOFTV7/img/logo%20mooney.png" alt="Mooney Maker" width="90" className="h-auto" />
        </a>

        <div className="flex gap-1 md:gap-3">
          <button
            id="cta-button"
            onClick={() => handleButtonClick('register')}
            className="bg-black hover:bg-green-600 text-white font-bold text-xl md:text-2xl py-2 md:py-3 px-4 md:px-8 rounded-full border-4 border-green-400 transition-colors duration-200 max-w-none font-chango flex items-center gap-1 md:gap-2"
          >
            {loadingStates['register'] ? <Loader /> : <><UserPlus className="w-5 md:w-7 h-5 md:h-7 mr-1 md:mr-2" /><span className="hidden md:inline">REGISTRARSE</span></>}
          </button>
          <button
            id="upload-button"
            onClick={() => handleButtonClick('upload')}
            className="bg-black hover:bg-green-600 text-white font-bold text-xl md:text-2xl py-2 md:py-3 px-4 md:px-8 rounded-full border-4 border-green-400 transition-colors duration-200 max-w-none font-chango flex items-center gap-1 md:gap-2"
          >
            {loadingStates['upload'] ? <Loader /> : <><UploadCloud className="w-5 md:w-7 h-5 md:h-7 mr-1 md:mr-2" /><span className="hidden md:inline">CARGAR</span></>}
          </button>
        </div>
      </div>
    </nav>
  )
}
