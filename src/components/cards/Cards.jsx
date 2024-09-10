import { Card } from "./Card";
import React, { useEffect, useRef } from "react";

export const Cards = ({setData, data}) => {
    const containerRef = useRef(null);
  
    return (
      <div className="absolute inset-0 z-10" ref={containerRef}>
          {data.map((event, index) => (
                                  
              <Card
                  key={index}
                  event = {event}
                  containerRef={containerRef}
                  src=""
                  alt="Example image"
                  rotate={getRandomInt(-20,20) + "deg"}
                  top={getRandomInt(2,65) + "%"}
                  left={getRandomInt(2,90) + "%"}
                  className="w-36 md:w-56"
              />                        
          ))}
      </div>
    );
};
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
