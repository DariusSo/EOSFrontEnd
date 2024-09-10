import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import CardsPosition from '../components/cards/CardsPosition';
import CardsStationary from '../components/cards/CardsStationary';



export default function StationaryCards ({ setIsTidy, setData, data}) {
  return (
    <>
      <div>
        <section className="w-screen flex justify-center">
          <CardsStationary setIsTidy={setIsTidy} setData={ setData } data={data} />
        </section>
      </div>
    </>
  );
}


