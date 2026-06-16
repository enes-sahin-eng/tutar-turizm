import React from "react";
import Image from "next/image";

export default function Services() {
  const WHATSAPP_NUMBER = "905320693425";

  const services = [
    {
      id: 1,
      title: "Kadınlara Özel Plaj Hizmeti",
      description:
        "Haftanın dilediğiniz günü, sadece kadınlara özel tahsis edilmiş plajlarda rahatlığın ve denizin tadını çıkarın.",
      image: "/kadinlar-plaji.jpg",
      icon: (
        <svg
          className="w-8 h-8 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      badge: "Popüler Seçim",
      whatsappMessage:
        "Merhaba, Tutar Turizm web sitenizden ulaşıyorum. Kadınlara Özel Plaj Hizmeti hakkında bilgi almak ve rezervasyon yaptırmak istiyorum.",
    },
    {
      id: 2,
      title: "Aile Plajı Ulaşım Hizmeti",
      description:
        "Ailenizle birlikte huzurlu ve keyifli bir hafta sonu tatili için özel olarak seçilmiş aile plajlarına güvenli ulaşım.",
      image: "/aile-plaji.jpg",
      icon: (
        <svg
          className="w-8 h-8 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      badge: "Ailelere Özel",
      whatsappMessage:
        "Merhaba, Tutar Turizm web sitenizden ulaşıyorum. Aile Plajı Ulaşım Hizmeti hakkında bilgi almak ve rezervasyon yaptırmak istiyorum.",
    },
  ];

  return (
    <section id="hizmetler" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 tracking-wide uppercase">
            Size Özel Seçenekler
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Hizmetlerimiz
          </p>
          <div className="mt-4 w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-wider shadow-lg">
                  {service.badge}
                </div>
              </div>

              <div className="p-8 pt-10 relative flex-1 flex flex-col">
                <div className="absolute -top-10 left-8 bg-white w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 rotate-3 group-hover:rotate-0 transition-transform">
                  <div className="bg-red-50 w-full h-full rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 font-bold group-hover:text-red-800 transition-colors after:absolute after:inset-0"
                >
                  Bilgi Al ve Rezervasyon Yap
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
