"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Car } from "@/app/types";
import Card from "./Card";

type ReturnType = {
  message: string;
  data: Car[];
};

const getCars = async (): Promise<ReturnType> => {
  const res = await fetch("http://localhost:3000/api/vehicles");
  return res.json();
};

const List = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await getCars();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container designs="">
      <React.Fragment>
        <h1 className="text-2xl md:text-3xl font-bold">Bütün Araçları Keşfedin</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {cars.map((car, key) => (
            <Card car={car} key={key} />
          ))}
        </div>
      </React.Fragment>
    </Container>
  );
};

export default List;
