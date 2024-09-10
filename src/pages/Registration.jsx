import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Registration(){
    return (
            <div>
                <Navbar/>
                <div className="items-center flex justify-center px-5 lg:px-0 mt-40">
                    <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
                        <div className="flex-1 bg-lime-100 text-center hidden md:flex">
                            <div
                                className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                                style={{
                                backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
                                }}>

                            </div>
                        </div>
                        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                            <div className=" flex flex-col items-center">
                                <div className="text-center">
                                    <h1 className="text-2xl xl:text-4xl font-extrabold text-orange-300">
                                        Sign up
                                    </h1>
                                    <p className="text-[12px] text-gray-500">
                                        Hey, enter your details to create your account
                                    </p>
                                </div>
                                <div className="w-full flex-1 mt-8">
                                    <div className="mx-auto max-w-xs flex flex-col gap-4">
                                        <input className="w-full px-5 py-3 
                                                            rounded-lg font-medium 
                                                            bg-gray-100 border 
                                                            border-gray-200 
                                                            placeholder-gray-500 text-sm"
                                                type="email"
                                                placeholder="Enter your email"
                                                id="email">

                                        </input>
                                        <input className="w-full px-5 py-3 rounded-lg 
                                                            font-medium bg-gray-100 border 
                                                            border-gray-200 placeholder-gray-500 
                                                            text-sm"
                                                type="password"
                                                placeholder="Password"
                                                id="password"
                                        />
                                        <button className="mt-5 tracking-wide font-semibold 
                                                        bg-orange-300 text-gray-100 w-full 
                                                            py-4 rounded-lg hover:bg-orange-500 
                                                            transition-all duration-300 ease-in-out 
                                                            flex items-center justify-center"
                                                type="button"
                                                onClick={() => signUp()}>
                                            <svg
                                                className="w-6 h-6 -ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3">Sign Up</span>
                                        </button>
                                        <p className="mt-6 text-xs text-gray-600 text-center">
                                        Already have an account?{" "}
                                        <Link to={"/login"}>
                                            <span className="text-orange-300 font-semibold">Sign in</span>
                                        </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
      );
    
}
async function signUp(){
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        try {
            const response = await fetch('http://localhost:8080/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    email : email,
                    password: password,
                    })
            });
        
            const token = await response.text();
            
            if(response.status == 200){
              setCookie("loggedIn", token);
              window.location.href = "./login"
            }else{
              
            }
            
        } catch (error) {
          console.log(error);
        }
}
function setCookie(name, value) {
    document.cookie = name + "=" + (value || "") + "; path=/";
}