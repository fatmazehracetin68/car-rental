import { Order } from "@/app/types";
import Image from "next/image";
import React from "react";

const OrderCard = ({ order }: { order: Order }) => {
  return (
    <div className="border p-4 rounded-md gap-5 shadow items-center justify-between grid grid-cols-3 xl:grid-cols-5 hover:bg-zinc-100/10 transition cursor-pointer">
      <Image width={100} height={100} src={order.product.imageUrl} unoptimized alt="orderImage" />

      <h2>
        <span>{order.product.make}</span>
        <span className="font-bold mx-2">{order.product.model}</span>
      </h2>

      <p className=" flex max-md:flex-col gap-2">
        <span>Ödenen Tutar</span>
        <span>{order.money_spend}</span>
      </p>

      <p className=" flex max-md:flex-col gap-2">
        <span>Ödeme Tipi</span>
        <span>{order.money_spend}</span>
      </p>
    </div>
  );
};

export default OrderCard;
