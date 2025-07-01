"use client";

import { Gift, ArrowRight, Wallet, Gamepad2, UserPlus } from "lucide-react";

export function HeroSection() {
  const handleMakerClick = () => {
    window.open("https://mooneymaker.co/?ref=48215", "_blank");
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center flex-col px-3 lg:px-0 pt-20 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left z-10">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-2 font-chango">
                BIENVENIDO
              </h1>

              <h2 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent mb-4 font-chango tracking-wider">
                MOONEY MAKER
              </h2>

              <p className="text-lg text-white mb-6">
                <span className="font-bold">REGISTRESE</span> Y RECIBA
                RECOMPESAS <br /> DEPÓSITO DE HASTA <span className="font-bold">$10.000.000</span>
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Gift className="w-8 h-8 text-green-400" />
                  <span className="text-white">Registro</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white" />

                <div className="flex items-center gap-2">
                  <Wallet className="w-8 h-8 text-green-400" />
                  <span className="text-white">Deposite</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white" />

                <div className="flex items-center gap-2">
                  <Gamepad2 className="w-8 h-8 text-green-400" />
                  <span className="text-white">Juga</span>
                </div>
                

                
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              <button
                onClick={handleMakerClick}
                className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 text-2xl rounded-full border-4 border-green-400 transition-all duration-200 hover:scale-105 font-chango tracking-wider flex items-center gap-2"
              >
                <UserPlus className="w-7 h-7 mr-2" />
                REGISTRO
              </button>
              <button
                onClick={handleMakerClick}
                className="bg-gradient-to-r from-gray-100/80 via-white/80 to-gray-300/80 hover:from-gray-200 hover:to-white text-black font-bold py-3 px-8 text-2xl rounded-full border-4 border-black-400 transition-all duration-200 hover:scale-105 font-chango tracking-wider shadow-md flex items-center gap-2"
                style={{ backdropFilter: 'blur(6px)' }}
              >
                <Wallet className="w-7 h-7 mr-2" />
                DEPOSITO
              </button>
            </div>
             {/* Final CTA Section */}
 <div className="mb-6 lg:mb-0">
            
          </div>  
         
        
          </div>

          <div className="flex justify-center lg:justify-end items-end h-full">
            <div className="image-gradient-bear flex items-end">
              <img
                src="/gift2.gif"
                className="w-[380px] h-[380px] top-72 lg:w-[400px] lg:h-[400px] object-contain object-bottom"
                alt="Mooney Maker Bear"
                // Elimina el style con position absolute
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
