"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-elevated)] backdrop-blur-md shadow-lg border-b border-[var(--accent-soft)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
        
        {/* Lado Izquierdo: Enlaces */}
        <nav className="flex items-center gap-8 text-sm font-medium justify-start">
          <Link
            href="#inicio"
            className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="#servicios"
            className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors"
          >
            Servicios
          </Link>
        </nav>

        {/* Centro: Logo + Marca */}
        <div className="flex justify-center">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/Drone-prueba.png"
              alt="Logo SPECTRUS"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              unoptimized
            />
            <span className="text-[var(--fg)] font-bold text-sm tracking-widest uppercase font-mono">
              SPECTRUS
            </span>
          </Link>
        </div>

        {/* Lado Derecho: Enlaces */}
        <nav className="flex items-center gap-8 text-sm font-medium justify-end">
          <Link
            href="#redes"
            className="text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors"
          >
            Nuestras redes
          </Link>
          <Link
            href="#contacto"
            className="px-5 py-2 text-xs font-semibold tracking-wider text-[var(--bg-base)] bg-[var(--accent)] rounded-[var(--radius-pill)] hover:opacity-90 transition-opacity"
          >
            Contacto
          </Link>
        </nav>

      </div>
    </header>
  );
}