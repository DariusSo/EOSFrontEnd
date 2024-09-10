import React from 'react';
import { Link } from 'react-router-dom';
import TimeFormatter, { DateFormatter } from '../../modules/DateTimeFormat';


export default function CardStationary ({ event }) {
    return (
            <div>
                <div className="relative w-56 h-72 rounded-lg 
                                overflow-hidden shadow-lg transition-transform 
                                transform hover:scale-105 hover:shadow-2xl">
    
                    <div className="absolute inset-0 bg-black rounded-lg p-1">
                        <div className="w-full h-full bg-white rounded-lg" />
                    </div>
    
                    <div
                        className="absolute inset-0 w-full h-full 
                                bg-cover bg-center opacity-50 
                                rounded-lg"
                        style={{ backgroundImage: `url(${event.imageUrl})` }}>
                    </div>
                    <div className="relative z-10 p-4 bg-gradient-to-t 
                                    from-black/70 via-black/50 to-transparent 
                                    rounded-lg h-full flex flex-col justify-between">
            
                        <div className="flex-grow">
            
                            <div className="bg-black bg-opacity-70 p-2 
                                            rounded-lg h-full flex flex-col 
                                            justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-white 
                                                    drop-shadow-md mb-1 opacity-100">
                                        {event.title}
                                    </h3>
                                    <hr className="border-t-2 border-white opacity-60 my-1" />
                                    <div className="text-white text-lg drop-shadow-sm">
                                        <p>{DateFormatter(event.dateAndTime)}</p>
                                        <p>{TimeFormatter(event.dateAndTime)}</p>
                                        <p>{event.place}</p>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <Link to={"event/" + event.id}>
                                        <button className="w-full px-3 py-2 mt-4 bg-gradient-to-r 
                                                        from-orange-300 to-red-300 text-white 
                                                        font-semibold rounded-lg hover:from-orange-700 
                                                        hover:to-red-700 transition-colors duration-300 
                                                        drop-shadow-lg">
                                        More Info
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  };