import React from "react";
import { Contact, Faq, Hero, NewProducts } from "../index";

const Home = () => {
  return (
    <div className="flex flex-col gap-6 last:pb-6">
      <Hero />
      {/* <Faq /> */}
      {/* <Contact /> */}
      <NewProducts />
    </div>
  );
};

export default Home;