import React, { useState } from "react";
import CardsPosition from "../components/cards/CardsPosition";
import { Cards } from "../components/cards/Cards";



export const MovingEventCards = ({ setData, data }) => {
  const backgroundImage = "/src/assets/img/bg2.jpg"
  return (
    <>
    <section className="relative grid min-h-screen w-full 
                        place-content-center overflow-hidden 
                        bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})`}}>
      <Cards setData={setData} data={data} />
    </section>
    </>
  );
};