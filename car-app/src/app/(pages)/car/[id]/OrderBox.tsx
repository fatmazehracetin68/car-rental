import Image from "next/image";
import React from "react";
import pp from "../../../../../public/pp.png";
import OrderButton from "./OrderButton";
import { Car } from "@/app/types";

const OrderBox = ({ car }: { car: Car }) => {
  return (
    <div className="border shadow rounded-md p-5 max-lg:mt-10 w-full xl:col-span-2">
      <div className="flex gap-5">
        <Image src={pp} alt="profile" />
        <div className="text-xl">
          <h2 className="font-semibold">Udemig Galeri</h2>
          <p>İstanbul,Maltepe</p>
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <div>
          <p>Lokasyonu Gör</p>
        </div>
        <div>
          <p>+90 555 666 77 88</p>
        </div>
      </div>

      <OrderButton car={car} />
      <button className="bg-green-500 w-full p-2 rounded-lg text-white font-bold transition hover:bg-green-600 mt-5">
        Whatsapp
      </button>
    </div>
  );
};

export default OrderBox;
