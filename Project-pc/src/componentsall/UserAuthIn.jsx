import { useState } from "react";
import { FaEye } from "react-icons/fa";
// import { motion } from "framer-motion";

export default function UserAuthIn(
    {label,
         placeholder,
          isPass,
           key, 
           setStateFunction,
           Icon}){
    const[value, setValue] = useState("");
    const[showPass, setshowPass] = useState("");
    return(
        <div className="flex flex-col items-start justify-start">
            <label className="text-sm text-gray-300">{label}</label>
            <div className="flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 bg-gray-200">
                <Icon className="text-text555 text-2xl"/>
                <input 
                type={isPass ? "password" : "text"} 
                 placeholder={placeholder} 
                 className="flex-1 w-full py-2 outline-none border-none bg-transparent text-text555 text-lg" 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                />
                {isPass && (
                    <div  className="cursor-pointer">
                    <FaEye className="text-text-555 "/>

                </div>
                )}
                


            </div>
        </div>
    )
}