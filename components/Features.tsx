import React from "react";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Gidiş - Dönüş Ulaşım",
      description:
        "Avrupa Yakası'ndan belirlenen noktalardan alınarak, güvenli ve konforlu araçlarımızla gidiş-dönüş ulaşımınız sağlanır.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Plaj Giriş Ücreti Dahil",
      description:
        "Sürpriz masraflar yok! Ödediğiniz ücrete, gideceğiniz kadınlar veya aile plajının giriş biletleri tamamen dahildir.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Şeffaf Fiyatlandırma",
      description:
        "Avrupa Yakası için kişi başı net fiyatımız 800 TL'dir. Uzak bölgelerden alınacak rezervasyonlarda mesafeye göre fiyat farkı uygulanmaktadır.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Kaporalı Güvenli Rezervasyon",
      description:
        "Rezervasyonlar kaporalı sistemle çalışmaktadır. Yolcu bilgileri ve araç detayları, rezervasyon tarihinden 1 gün önce sizinle paylaşılır.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sürecimiz Nasıl İşliyor?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Turizmin yıllara dayanan tecrübesiyle, baştan sona planlı ve şeffaf
            bir yolculuk deneyimi sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 shadow-md transform -translate-y-12 border-4 border-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-[-2rem]">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-gray-900 z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-left mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                <span className="text-yellow-400">Gruplara Özel</span> İndirimli
                Fiyatları Kaçırmayın!
              </h3>
              <p className="text-gray-300 text-lg">
                Kalabalık aileler veya arkadaş grupları için özel fiyat
                tekliflerimiz mevcuttur.
              </p>
            </div>
            <a
              href="https://wa.me/905320693425"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105 whitespace-nowrap"
            >
              Fiyat Teklifi Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
