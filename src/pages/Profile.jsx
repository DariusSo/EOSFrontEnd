import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AlertModal from "../components/AlertModal";
import ConfirmModal from "../components/ConfirmDelete";
import ConfirmDeleteModal from "../components/ConfirmDelete";
import ReviewPopUp from "../components/ReviewPopUp";
import getCookie from "../modules/Cookies";
import TimeFormatter, { DateFormatter } from "../modules/DateTimeFormat";

export default function Profile(){
  const [data, setData] = useState([]);
  const [dataNotAttended, setDataNotAttended] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOk, setIsOpenOk] = useState(false);
  const [refundPrice, setRefundPrice] = useState(0);
  const [reviewModal, setReviewModal] = useState(false);
  const [currentEventId, setCurrentEventId] = useState(0);
  const backgroundImage = "/src/assets/img/bg2.jpg";

  useEffect(() => {
      getReservationsAttended({ setData });
      getReservationsAttendedNot({ setDataNotAttended });
  }, []);

  const toggleCancelModal = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleModalOk = () => {
    setIsOpenOk(!isOpenOk);
  };

  return (
          <div>
            <Navbar/>
            <div className="flex justify-center items-center mt-10">
                <h1 className="mb-8 font-extrabold text-4xl text-lime-600">
                  Reservations
                </h1>
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})` }} 
                className="min-h-screen bg-gray-100 flex items-start 
                          justify-center p-4 bg-cover">
              <div className="w-full max-w-screen-2xl bg-white shadow-lg 
                                rounded-lg overflow-hidden">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-400 via-orange-200 
                                to-yellow-200 backdrop-blur-sm p-6 text-white">
                      <th className="w-1/4 p-4 text-left text-xl font-semibold">Event</th>
                      <th className="w-1/6 p-4 text-left text-xl font-semibold">Date</th>
                      <th className="w-1/6 p-4 text-left text-xl font-semibold">Time</th>
                      <th className="w-1/4 p-4 text-left text-xl font-semibold">Place</th>
                      <th className="w-1/6 p-4 text-left text-xl font-semibold">Category</th>
                      <th className="w-1/6 p-4 text-left text-xl font-semibold">Price</th>
                      <th className="w-1/6 p-4 text-left text-xl font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataNotAttended.map((event, index)   => (
                      <>
                        <tr
                          key={index}
                          className={`${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-200'
                          } hover:bg-gray-100 transition duration-300`}>

                          <td className="p-4 text-gray-800 text-lg font-medium">
                            {event.title}
                          </td>

                          <td className="p-4 text-gray-600 text-lg">{DateFormatter(event.dateAndTime)}</td>
                          <td className="p-4 text-gray-600 text-lg">{TimeFormatter(event.dateAndTime)}</td>
                          <td className="p-4 text-gray-600 text-lg">{event.place}</td>
                          <td className="p-4 text-gray-600 text-lg">{event.category}</td>
                          <td className="p-4 text-gray-800 text-lg font-bold">
                            ${event.price}
                          </td>
                          <td>
                            <a id={event.id + "event"} 
                                className="hidden">
                              {event.id}
                            </a>
                            <a id="priceE" className="hidden">{event.price}</a>
                            <button className="bg-gradient-to-r from-red-500 to-pink-500 
                                            text-white py-2 px-4 rounded-full shadow-md 
                                            hover:bg-red-600 transition duration-300"
                                    onClick={async () => {
                                        let i = await getRefundAmount(event.id);
                                        setCurrentEventId(event.id);
                                        setRefundPrice(i);
                                        toggleCancelModal()}}>
                                Cancel
                            </button>
                          </td>    
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
                  <div className="flex justify-center items-center mt-10">
                    <h1 className="mb-8 font-extrabold text-4xl text-lime-600">
                      Attended
                    </h1>
                  </div>
                  <div className="w-full max-w-screen-2xl bg-white shadow-lg 
                                  rounded-lg overflow-hidden">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-gradient-to-r from-green-400 via-orange-200 
                                      to-yellow-200 backdrop-blur-sm p-6 text-white">
                          <th className="w-1/4 p-4 text-left text-xl font-semibold">Event</th>
                          <th className="w-1/6 p-4 text-left text-xl font-semibold">Date</th>
                          <th className="w-1/6 p-4 text-left text-xl font-semibold">Time</th>
                          <th className="w-1/4 p-4 text-left text-xl font-semibold">Place</th>
                          <th className="w-1/6 p-4 text-left text-xl font-semibold">Category</th>
                          <th className="w-1/6 p-4 text-left text-xl font-semibold">Price</th>
                          <th className="w-1/6 p-4 text-left text-xl font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((event, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? 'bg-white' : 'bg-gray-200'
                            } hover:bg-gray-100 transition duration-300`}>
                            <td className="p-4 text-gray-800 text-lg font-medium">
                              {event.title}
                            </td>
                            <td className="p-4 text-gray-600 text-lg">{DateFormatter(event.dateAndTime)}</td>
                            <td className="p-4 text-gray-600 text-lg">{TimeFormatter(event.dateAndTime)}</td>
                            <td className="p-4 text-gray-600 text-lg">{event.place}</td>
                            <td className="p-4 text-gray-600 text-lg">{event.category}</td>
                            <td className="p-4 text-gray-800 text-lg font-bold">
                              ${event.price}
                            </td>
                            <td>
                            <button className="bg-gradient-to-r from-green-300 to-orange-400 
                                            text-white py-2 px-4 rounded-full shadow-md 
                                            hover:bg-green-500 transition duration-300"
                                    onClick={() => {
                                        setReviewModal(true);
                                        setCurrentEventId(event.id);
                                    }}>
                              Review
                            </button>
                            </td>    
                          </tr>
                        ))}
                      </tbody>
                    </table>
              </div>
            </div>     
          </div>
          <ConfirmDeleteModal text="cancel" 
                              titleText="Cancel Reservation" 
                              setIsOpen={setIsOpen} 
                              isOpen={isOpen} 
                              toggleModalOk={toggleModalOk} 
                              price={refundPrice} 
                              eventId={currentEventId}
                              />                 
          <AlertModal toggleModalOk={toggleModalOk} 
                      isOpenOk={isOpenOk} 
                      text="deleted."/>
          {reviewModal && (
            <ReviewPopUp setReviewModal={setReviewModal} 
                          reviewModal={reviewModal} 
                          eventId={currentEventId}/>
          )} 
        </div>
          
      
    )
}
async function getReservationsAttended({ setData }) {

    const response = await fetch('http://localhost:8080/api/reservations/attended', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie("loggedIn")
        },
        
        });
    
        const responseJson = await response.json();
        setData(responseJson)
        
}
async function getReservationsAttendedNot({ setDataNotAttended }) {

  const response = await fetch('http://localhost:8080/api/reservations/notAttendedYet', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': getCookie("loggedIn")
      },
      
      });
  
      const responseJson = await response.json();
      setDataNotAttended(responseJson)
      
}
const getRefundAmount = async (eventId) => {
  const response = await fetch('http://localhost:8080/getChargeAmount?eventId=' + eventId, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie("loggedIn")
    },
    
    });
    const responeDouble = await response.json();
    return responeDouble;
}