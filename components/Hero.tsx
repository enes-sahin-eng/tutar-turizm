import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Tutar Turizm Plaj Ulaşımı"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
          Yolculuğunuz <span className="text-red-500">Bizimle Güzel</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-10 font-medium drop-shadow-md max-w-3xl mx-auto">
          İstanbul Avrupa Yakası'ndan kadınlara özel ve aile plajlarına
          güvenilir, konforlu ve gidiş-dönüş VIP ulaşım hizmeti.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/905320693425"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-105"
          >
            Hemen Rezervasyon Yap
          </a>
          <Link
            href="#hizmetler"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            Hizmetlerimizi İncele
          </Link>
        </div>
      </div>
    </section>
  );
}
