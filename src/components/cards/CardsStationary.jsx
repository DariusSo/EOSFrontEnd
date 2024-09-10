import React, { useEffect, useState, useRef } from 'react';
import CardStationary from './CardStationary';




export default function CardsStationary({setIsTidy, setData, data}) {
    const containerRef = useRef(null);
    //const [data, setData] = useState([]);
  
    
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 
                      md:grid-cols-3 lg:grid-cols-4 
                      gap-6 w-full px-4 mt-5 mx-96" 
           ref={containerRef}>
  
          {data.map((event, index) => (
              <CardStationary
              key={index}
              event={event}
              />
          ))}
      </div>
    );
  };