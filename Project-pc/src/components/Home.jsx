import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import {Link} from "react-router-dom"
import { CiCircleChevLeft } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Icon from "../assets/codepen.svg"
import Projects from "./Projects";
import SignUp from "./SignUp";

export default function Home(){
    const [issideMenu, setSideMenu] = useState(false)
    const [user, setUser] = useState(null)

    return(
        <>
        <div className={`w-2 ${issideMenu? "w-2": "flex-[.2] xl:flex-[.2]"} min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out`}>
            {/* anchor */}
            <div onClick={() => setSideMenu(!issideMenu)} className="w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer">
                <CiCircleChevLeft className=" text-white text-2xl"/>
                </div>
                <div className="overflow-hidden w-full flex flex-col gap-4">
                    <Link to={"/home"}>
                <img src={Icon} alt="" className="bg-transparent object-contain w-72 h-auto rounded-[12px]"/>
                    </Link>
                    <Link to={"/newprojects"}>
                    <div className="px-3 py-2 flex items-center justify-center rounded-xl border border-gray-400 cursor-default group hover:border-gray-200">
                        <p className="text-gray-400 group-hover:text-gray-200 capitalize">Start Coding</p>
                    </div>
                    </Link>
                    {/* HOMe Nav */}
                    {user &&(
                        <Link to={"/home/projects"} className="flex items-center justify-center gap-6">
                            <IoHomeOutline className="text-primaryText text-xl"/>
                            <p className="text-lg text-primaryText">Home</p>
                        </Link>
                     )}
                     
                    </div> 
                    </div>
                    
{/* Right setSideMenu */}

 <div className="flex-1 min-h-screen max-h-screen overflow-hidden overflow-y-scroll h-full flex flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12">
    <div className="w-full flex items-center justify-between gap-3">
        <div className="bg-secondary w-full px-4 py-3 rounded-md flex items-center justify-center">
            <CiSearch className="text-2xl text-primaryText"/>
                <input type="text" className="flex-1 px-4 py-1 text-xl bg-transparent outline-none border-none text-primaryText placeholder:text-gray-600 " placeholder="Search here..." />

        </div>
        {/* profile section */}
        {!user &&(
            <div className="flex items-center justify-center gap-3">
                <Link to={"/home/auth"} className="bg-emerald-500 rounded-md text-white text-lg cursor-pointer hover:bg-emerald-700">
                SignUp
                </Link>
            </div>
        )}
        {user && (
            <div></div>
        )}
</div>
<div className="w-full">
    <Routes>
        <Route path="/*" element={<Projects/>}></Route>
        <Route path="/auth" element={<SignUp/>}></Route>
    </Routes>
    
</div>


 </div>
           
        </>
    )
}