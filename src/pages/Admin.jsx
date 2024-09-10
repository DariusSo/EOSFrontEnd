import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { button } from "@material-tailwind/react";
import CreateNewsLetter from "../components/CreateNewsLetter";
import SubmittingSvg from "../assets/svg/SubmittingSvg";
import AddEvent from "../modules/AddEvent";
import AddEventForm from "../components/AddEventForm";

export default function Admin(){

    return( <>
                <Navbar/>
                <AddEventForm/> 
            </>
        
    )
}
