"use client";
import { Car } from "@/app/types";
import React from "react";

const OrderButton = ({ car }: { car: Car }) => {
  const handleClick = () => {
    //backendde ödeme sayfasının linkini oluşturması iğçin istek atıyoruz
    fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.href = data.url;
      });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 w-full p-2 rounded-lg text-white font-bold transition hover:bg-blue-600"
    >
      Aracı Kirala
    </button>
  );
};

export default OrderButton;
