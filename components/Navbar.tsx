"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${styles.glassNav} sticky w-full top-0 z-50 transition-all duration-300`}
    >
      <div className="w-full px-4 md:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center justify-start">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/logoo.png"
                alt="Tutar Turizm Logo"
                width={200}
                height={70}
                priority
                style={{ marginTop: "20px" }}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-end space-x-10">
            <Link href="/" className={styles.navLink}>
              Ana Sayfa
            </Link>
            <Link href="#hizmetler" className={styles.navLink}>
              Hizmetlerimiz
            </Link>
            <Link href="#hakkimizda" className={styles.navLink}>
              Hakkımızda
            </Link>

            <a
              href="https://wa.me/905320693425"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.rezervasyonBtn}
            >
              WhatsApp Rezervasyon
            </a>
          </div>

          <div className="md:hidden flex items-center justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-red-600 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link
              href="/"
              className="text-gray-800 hover:text-red-600 block py-3 text-lg font-bold border-b border-gray-50"
            >
              Ana Sayfa
            </Link>
            <Link
              href="#hizmetler"
              className="text-gray-800 hover:text-red-600 block py-3 text-lg font-bold border-b border-gray-50"
            >
              Hizmetlerimiz
            </Link>
            <Link
              href="#hakkimizda"
              className="text-gray-800 hover:text-red-600 block py-3 text-lg font-bold border-b border-gray-50"
            >
              Hakkımızda
            </Link>
            <a
              href="https://wa.me/905320693425"
              target="_blank"
              className="bg-green-500 text-white block py-3 mt-4 rounded-md font-bold text-center text-lg shadow-md"
            >
              WhatsApp Rezervasyon
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
