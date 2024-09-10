import React, { useEffect, useRef, useState } from "react"
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import getCookie from "../modules/Cookies";
import TimeFormatter, { DateFormatter } from "../modules/DateTimeFormat";


const EventInfo = ({props}) => {
  
  const params = useParams();
  const [event, setEvent] = useState("");
  const [ratings, setRatings] = useState({});
  const backgroundImage = "/src/assets/img/bg2.jpg"
  
  var date = DateFormatter(event.dateAndTime);
  var time = TimeFormatter(event.dateAndTime);

  useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://js.stripe.com/v3/";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      }
    }, []);
  useEffect(() => {
      fetch('http://localhost:8080/api/events/getById?id=' + params.eventId)
      .then(response => response.json())
      .then(data1 => setEvent(data1))
      .catch(err => console.log(err))
  }, []);
    
  useEffect(() => {
    fetch('http://localhost:8080/get/ratingData?eventId=' + params.eventId)
    .then(response => response.json())
    .then(data1 => setRatings(data1))
    .catch(err => console.log(err))
  }, []);

  

  return (
          <>
            <Navbar/>

            <section style={{ backgroundImage: `url(${backgroundImage})` }} 
                    className="relative grid w-full 
                              h-screen place-content-center 
                              overflow-hidden bg-cover">
              <div>
                <div className="w-full max-w-screen-xl bg-white shadow-lg 
                                rounded-lg overflow-hidden mx-4 md:mx-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-96 lg:h-auto">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover">
                      </img>
                      <div className="absolute inset-0 bg-gradient-to-t 
                                      from-black/50 to-transparent">
                      </div>
                    </div>
                    <div className="p-10 lg:p-16 flex flex-col justify-center">
                      <h2 className="text-5xl font-bold text-gray-800 mb-8">
                        {event.title}
                      </h2>
                      <p className="text-xl text-gray-600 mb-10">
                        {event.description}
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-2 
                                      gap-8 text-gray-700 mb-12">
                        <div>
                          <p className="font-semibold">Price:</p>
                          <p>${event.price}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Date:</p>
                          <p>{date}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Time:</p>
                          <p>{time}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Place:</p>
                          <p>{event.place}</p>
                        </div>
                        
                        <div className="sm:col-span-2">
                          <p className="font-semibold">Category:</p>
                          <p>{event.category}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Rating:</p>    
                          <div className="flex text-3xl text-yellow-700">
                              {'★'.repeat(ratings.avgRating)}
                              {'☆'.repeat(5 - ratings.avgRating)}
                          </div>
                          <p className="font-semibold">{ratings.ratingCount} votes</p>  
                        </div>
                        <div className="sm:col-span-2">
                          <p className="font-semibold">Discount code:</p>
                          <input type="text" id="discountCode"></input>
                        </div>
                      </div>
                      <button className="w-full py-4 bg-gradient-to-r from-orange-400 
                                      to-red-500 text-white font-bold rounded-lg 
                                      hover:from-orange-500 hover:to-red-600 transition 
                                        duration-300"
                              onClick={(e) => stripe(event.id, e)}>
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
              <Reviews eventId={params.eventId}/> 
          </>
          
      
    )
}
export default EventInfo
        
async function stripe(eventId, e){
    
    e.target.textContent = "Loading..."
    var discountCode = document.getElementById("discountCode").value;
    const stripe = Stripe('pk_test_51PlEGq2KAAK191iLnqMx4EzwlRUP93zGEFdyBKynSDBAtbQcJTR2TwbWiKYVSHLVWL0kBq7jK3vyWABKrHB8ZvRm00Kd1TqbuX'); 
    const response = await fetch('http://localhost:8080/create-checkout-session?eventId=' + eventId + '&code=' + discountCode, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie("loggedIn")
    },
    
    });
    

    const session = await response.json();
    const sessionId = session.id;
    const s = session.payment_int;
    console.log(session.s);

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
        console.error("Stripe Checkout error:", error.message);
    }
}
  