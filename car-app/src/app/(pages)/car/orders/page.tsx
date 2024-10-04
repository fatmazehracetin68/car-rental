import { Order } from "@/app/types";
import Container from "@/components/Container";
import Header from "@/components/Header";
import OrderCard from "@/components/OrderCard";
import React from "react";

type ResType = {
  message: String;
  orders: Order[];
};

const getOrders = async (): Promise<ResType | null> => {
  try {
    const res = await fetch("http://localhost:3000/car/orders");

    // Yanıtın başarılı olup olmadığını kontrol et
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching orders:", error);
    return null;
  }
};

const page = async () => {
  const data = await getOrders();
  console.log(data);

  return (
    <div>
      <Header designs={""} />
      <Container designs="">
        <h2 className="mb-10 text-4xl">Siparişlerim</h2>
        <div className="grid gap-10">
          {data?.orders.map((order, key) => (
            <OrderCard order={order} key={key} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
