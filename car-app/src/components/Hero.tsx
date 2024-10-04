import { models } from "@/models/constants";
import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <div>
      <Header designs="absolute text-white" />
      <div className="h-[80vh] grid place-items-center bg-[linear-gradient(#00000084,#00000084),url('/car.jpeg')] bg-center bg-cover text-white bg-[#00000084]">
        <div className="text-center flex flex-col gap-8">
          <p>Yakındaki kiralık araçları keşfet</p>
          <h1 className="text-4xl md:text-5xl font-bold">Kendin İçin En Mükemmel Aracı Bul</h1>

          <p>Kendine Uygun Modeli Belirle</p>
          <div className="flex gap-4 justify-center">
            {models.map((item, index) => (
              <button
                key={index}
                className="px-3 py-2 rounded-full bg-gray-100/25 transition hover:bg-gray-500"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
