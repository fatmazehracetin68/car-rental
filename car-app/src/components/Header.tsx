"use client";

import Link from "next/link";
import React from "react";
import Container from "./Container";

const Header = ({ designs }: { designs: string }) => {
  return (
    <header className={`w-full text-black ${designs}`}>
      <Container designs="flex justify-between">
        <h1 className="font-bold text-2xl md:text-3xl">
          <Link href="/">Drive</Link>
        </h1>
        <nav className="text-sm  md:text-base flex gap-2 md:gap-4">
          <Link href="/">Keşfet</Link>
          <Link href="/car/orders">Siparişlerim</Link>
          <Link href="/">Hakkımızda</Link>
          <Link className="max-md:hidden" href="/">
            Fiyatlandırma
          </Link>
        </nav>

        <div>
          <button className="max-md:hidden">İletişim</button>
          <button className="bg-white text-black rounded-full px-5 py-2 text-nowrap mx-3 transition hover:bg-gray-100">
            Giriş Yap
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
