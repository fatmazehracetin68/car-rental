import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import List from "@/components/List";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Brands />
      <List />
    </React.Fragment>
  );
};

export default Home;
