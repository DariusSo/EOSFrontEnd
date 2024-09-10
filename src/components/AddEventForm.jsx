import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { button } from "@material-tailwind/react";
import CreateNewsLetter from "../components/CreateNewsLetter";
import SubmittingSvg from "../assets/svg/SubmittingSvg";
import AddEvent from "../modules/AddEvent";


export default function AddEventForm(){
    
    const [image64Url, setImage64Url] = useState("");
    const [cardTitle, setCardTitle] = useState("");
    const [cardDate, setCardDate] = useState("");
    const [cardTime, setCardTime] = useState("");
    const [cardPlace, setCardPlace] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const categoryeRef = useRef(null);
    const priceRef = useRef(null);
    const placeRef = useRef(null);
    const dateRef = useRef(null);
    const timeRef = useRef(null);
    const imageRef = useRef(null);
    const buttonRef = useRef(null);
    const refund100Ref = useRef(null);
    const refund24Ref = useRef(null);
    const [isAddingItem, setIsAddingItem] = useState(false);

    const handleCheckBox = () => {
        setIsChecked(!isChecked);
    }

    const handleAddEvent = async () => {
        setIsAddingItem(true);
        await AddEvent(image64Url, titleRef, descriptionRef, categoryeRef, priceRef, placeRef, dateRef, timeRef, imageRef, buttonRef, refund100Ref, isChecked);
        setIsAddingItem(false);
    };
    
    return (
            <div className="p-10 h-48 bg-white">
                <h1 className="mb-8 font-extrabold text-4xl">Add event</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form className="border-2 p-5 max-h-screen">
                        <div>
                            <label className="block font-semibold" >
                                Title
                            </label>

                            <input className="w-full shadow-inner 
                                        bg-gray-100 rounded-lg 
                                        placeholder-black text-2xl 
                                        p-4 border-none block mt-1"
                                    id="title"
                                    ref={titleRef} 
                                    type="text"
                                    name="name" 
                                    required="required" 
                                        
                                    onChange={(e) => {setCardTitle(e.target.value) }}>
                            </input>
                        </div>
                        <div>
                            <label className="block font-semibold" >
                                Description
                            </label>

                            <input className="w-full shadow-inner 
                                        bg-gray-100 rounded-lg 
                                        placeholder-black text-2xl 
                                        p-4 border-none block mt-1 h-36" 
                                    id="description" 
                                    type="textarea"
                                    name="name" 
                                    required="required" 
                                   
                                    ref={descriptionRef}>
                            </input>
                        </div>
                        <div>
                            <label className="block font-semibold" >
                                Category
                            </label>

                            <input className="w-full shadow-inner 
                                        bg-gray-100 rounded-lg 
                                        placeholder-black text-2xl 
                                        p-4 border-none block mt-1"
                                    id="category" 
                                    type="text"
                                    name="name" 
                                    required="required" 
                                        
                                    ref={categoryeRef}>
                            </input>
                        </div>
                        <div>
                            <label className="block font-semibold">
                                Price
                            </label>

                            <input className="w-full shadow-inner 
                                        bg-gray-100 rounded-lg 
                                        placeholder-black text-2xl 
                                        p-4 border-none block mt-1" 
                                    id="price" 
                                    type="number"
                                    name="name" 
                                    required="required" 
                                        
                                    ref={priceRef}>
                            </input>
                        </div>
                        <div>
                            <label className="block font-semibold">
                                Place
                            </label>

                            <input className="w-full shadow-inner 
                                        bg-gray-100 rounded-lg 
                                        placeholder-black text-2xl 
                                        p-4 border-none block mt-1" 
                                    id="place" 
                                    type="text"
                                    name="name" 
                                    required="required" 
                                    
                                    ref={placeRef}
                                    onChange={(e) => {setCardPlace(e.target.value) }}>
                            </input>
                        </div>
                        <div className="flex">
                            <label className="block font-semibold w-full">
                                Date
                            </label>
                            <label className="block font-semibold w-full">
                                Time
                            </label>
                        </div>
                        <div className="flex">
                            
                            <input type="date" 
                                    id="date"
                                    className="w-full shadow-inner 
                                        bg-gray-100 rounded-lg 
                                        placeholder-black text-2xl 
                                        p-4 border-none block mt-1 mr-5"
                                    ref={dateRef}
                                    onChange={(e) => {setCardDate(e.target.value) }}>
                            </input>
                                
                            <input type="time"
                                    id="time" 
                                    className="w-full shadow-inner 
                                        bg-gray-100 rounded-lg 
                                        placeholder-black text-2xl 
                                        p-4 border-none block mt-1 "
                                    ref={timeRef}
                                    onChange={(e) => {setCardTime(e.target.value) }}>
                            </input>
                        </div>
                        <div>
                            <label className="block font-semibold">
                                Image
                            </label>

                            <input className="w-full shadow-inner 
                                        bg-gray-100 rounded-lg 
                                        placeholder-black text-2xl 
                                        p-4 border-none block mt-1" 
                                    id="imageUpload"
                                    onChange={(e) => handleFileRead(e, {setImage64Url})} 
                                    type="file"
                                    name="name" 
                                    required="required" 
                                        
                                    ref={imageRef}>
                            </input>
                        </div>
                        <div className="flex">
                            <label className="block font-semibold w-full">
                                Days till event for a 100% return
                            </label>
                            <label className="block font-semibold w-full ml-32">
                                No refund less then 24h before event
                            </label>
                        </div>
                        <div className="flex">
                            
                            <input type="number" 
                                    id="date"
                                    className="w-full shadow-inner 
                                        bg-gray-100 rounded-lg 
                                        placeholder-black text-2xl 
                                        p-4 border-none block mt-1 mr-5"
                                    ref={refund100Ref}>
                            </input>
                                
                            <input type="checkbox"
                                    id="time" 
                                    className="w-96 h-16 shadow-inner 
                                        bg-gray-100 rounded-lg 
                                        placeholder-black text-2xl 
                                        p-4 border-none block mt-1 "
                                    ref={refund24Ref}
                                    onClick={handleCheckBox}>
                                    
                            </input>
                        </div>      
                        <div className="flex items-center justify-between mt-8">
                        <button
                            onClick={handleAddEvent}
                            className={`mt-3 w-full py-2 bg-gradient-to-r 
                                    from-orange-400 to-red-500 
                                    text-white font-bold rounded-lg 
                                    hover:from-orange-500 hover:to-red-600 
                                    transition-colors duration-300 flex 
                                    items-center justify-center ${
                            isAddingItem ? 'cursor-not-allowed' : ''
                            }`}

                            disabled={isAddingItem}>
                            {isAddingItem ? (
                            <SubmittingSvg/>
                            ) : null}
                            {isAddingItem ? 'Adding...' : 'Add item'}
                        </button>

                        </div>
                    </form>
                
                    <aside className="">          
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
                                style={{ backgroundImage: `url(${image64Url})` }}>
                            </div>
                            <div className="relative z-10 p-4 bg-gradient-to-t 
                                            from-black/70 via-black/50 to-transparent 
                                            rounded-lg h-full flex flex-col">
                                <div className="bg-black bg-opacity-70 p-2 
                                                rounded-lg flex-grow flex flex-col 
                                                justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-white 
                                                        drop-shadow-md mb-1">
                                        {cardTitle}
                                        </h3>
                                        <hr className="border-t-2 border-white 
                                                        opacity-60 my-1" />
                                        <div className="text-white text-lg drop-shadow-sm">
                                            <p>{cardDate}</p>
                                            <p>{cardTime}</p>
                                            <p>{cardPlace}</p>
                                        </div>
                                    </div>
                                    <button className="w-full px-3 py-2 mt-4 
                                                    bg-gradient-to-r from-orange-300 
                                                    to-red-300 text-white font-semibold 
                                                    rounded-lg hover:from-orange-700 hover:to-red-700 
                                                    transition-colors duration-300 drop-shadow-lg">
                                        More Info
                                    </button>
                                </div>
                            </div>
                        </div>
                            <img id="hiddenSrc" src="" className="hidden"></img>
                            <CreateNewsLetter/>
                    </aside>
                </div>
            </div>
    )
}
const handleFileRead = async (event, { setImage64Url }) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file)
    setImage64Url(base64)
    document.getElementById("hiddenSrc").src = base64;
}
const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
}