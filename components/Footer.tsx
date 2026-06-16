import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="hakkimizda"
      className="bg-gray-900 text-gray-300 py-16 border-t-4 border-red-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-white p-2 rounded-lg">
              <Image
                src="/logoo.png"
                alt="Tutar Turizm Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Tutar Turizm olarak yılların verdiği tecrübeyle; konfor, güven ve
              şeffaflığı ön planda tutarak İstanbul Avrupa Yakası'ndan kadınlara
              özel plajlara ve aile plajlarına profesyonel ulaşım hizmeti
              sunuyoruz. Yolculuğunuz bizimle güzel.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b border-gray-700 pb-2 uppercase tracking-wider">
              Hızlı Menü
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="#hizmetler"
                  className="hover:text-red-500 transition-colors"
                >
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/905320693425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                >
                  WhatsApp Rezervasyon
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b border-gray-700 pb-2 uppercase tracking-wider">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-red-500 mr-3 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>İstanbul / Avrupa Yakası</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-red-500 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="font-bold">0532 069 34 25</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Tutar Turizm. Tüm hakları
            saklıdır.
          </p>
          <p className="mt-4 md:mt-0">
            Powered by <span className="font-bold text-white">Enes Şahin</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
