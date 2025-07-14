// Nuevo archivo: components/banner-bottom.tsx
export function BannerBottom() {
    return (
      <div className="w-full bg-gradient-to-r from-green-500 via-yellow-400 to-green-600 py-6 flex flex-col items-center justify-center">
        <span className="text-black text-2xl md:text-3xl font-chango text-center">
          ¡Aprovecha las mejores promociones y bonos exclusivos!
        </span>
        <button id="promotions-button" onClick={() => {
          window.fbq("track", "Lead", {
            content_name: "Botón CTA",
            value: 10,
            currency: "USD",
          }).then(() => {
            window.location.href = process.env.NEXT_PUBLIC_REGISTER_URL || '' ;
          });
        }} className="mt-4 bg-black text-green-400 font-chango font-bold px-8 py-3 rounded-full text-lg hover:bg-gray-900 hover:text-white transition">
          Ver Promociones
        </button>
      </div>
    )
  }