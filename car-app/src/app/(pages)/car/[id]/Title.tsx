import { Car } from "@/app/types";
import React from "react";
import gas from "../../../../../public/icon/gas-2.svg";
import mile from "../../../../../public/icon/mile.svg";
import transmission from "../../../../../public/icon/transmission.svg";
import Image from "next/image";
Image;

const Title = ({ car }: { car: Car }) => {
  const arr = [
    {
      icon: gas,
      name: car.fuelType,
    },
    {
      icon: mile,
      name: car.mileage,
    },
    {
      icon: transmission,
      name: car.transmission,
    },
  ];

  return (
    <div className="mt-10 flex justify-between">
      <div className="font-bold text-3xl md:text-4xl">
        <h1>
          {car.make} {car.model}
        </h1>
        <div className="flex gap-5 mt-5">
          {arr.map((item, key) => (
            <div className="py-1 px-3 rounded-full bg-blue-500/30 flex gap-1 items-center mb-5">
              <Image width={15} height={15} src={item.icon} key={key} alt="icon" />
              <span className="text-xs">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="font-bold text-3xl md:text-4xl">${car.price.toLocaleString()}</div>
    </div>
  );
};

export default Title;
