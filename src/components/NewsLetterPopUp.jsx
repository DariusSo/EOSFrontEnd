import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

 
export function DialogDefault() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    checkCookie({handleOpen});
  }, []);
 
  return (
    <>
      
      <Dialog open={open} handler={handleOpen}>
        <div className="relative mx-auto
                        max-w-4xl rounded-lg 
                        bg-lime-200 shadow-lg h-full">
            
                <svg onClick={() => {setCookie("newsletter", 1); handleOpen()}} xmlns="http://www.w3.org/2000/svg" 
                    className="absolute right-2 top-2 h-6 w-6 cursor-pointer" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2">

                    <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M6 18L18 6M6 6l12 12"/>              
                </svg>
                      
            <div className="p-8 md:p-12 lg:px-16">
                <div className="max-w-lg">
                    <h2 id="nTitle" className="text-2xl font-bold text-lime-900 md:text-3xl">
                        Subscribe to stay ahead
                    </h2>

                    <p id="nText" className="hidden text-lime-900 sm:mt-4 sm:block">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus dicta mollitia!
                    </p>
                </div>
                <div className="mt-8 max-w-xl">
                    <form className="sm:flex sm:gap-4">
                        <div className="sm:flex-1">
                            <label className="sr-only">
                                Email
                            </label>

                            <input type="email" id="nEmail" 
                                    placeholder="Email address" 
                                    className="w-full rounded-md 
                                            border-indigo-200 
                                            bg-white p-3 
                                            text-lime-700 shadow-sm transition 
                                            focus:border-white focus:outline-none 
                                            focus:ring focus:ring-indigo-400">
                            </input>
                        </div>
                
                        <button id="nButton" type="button" onClick={() => subscribeForNewsletter()}
                                className=" group mt-4 flex w-full 
                                            items-center justify-center rounded-md 
                                            bg-lime-600 px-5 py-3 text-white 
                                            transition focus:outline-none focus:ring 
                                            focus:ring-lime-400 sm:mt-0 sm:w-auto">
                
                            <span className="text-sm font-medium"> 
                                Subscribe 
                            </span>
                
                            <svg className="ml-3 h-5 w-5 transition-all group-hover:translate-x-2"
                                 xmlns="http://www.w3.org/2000/svg" 
                                 fill="none" viewBox="0 0 24 24" 
                                 stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </Dialog>
    </>
  );
}
async function subscribeForNewsletter(){
    var email = document.getElementById("nEmail").value;
    console.log(email)
    const rawResponse = await fetch('http://localhost:8080/subscribe?email=' + email, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      document.getElementById("nTitle").textContent = "Thanks for your subscription!";
      document.getElementById("nText").textContent = "You will be hearing from us soon."
      document.getElementById("nButton").classList.add("hidden");
      document.getElementById("nEmail").classList.add("hidden");
      setCookie("newsletter", "1");
}
function setCookie(name, value) {
    document.cookie = name + "=" + (value || "") + "; path=/";
}
function checkCookie({handleOpen}){
    if(getCookie("newsletter")){

    }else{
        {handleOpen()}
    }
}
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}