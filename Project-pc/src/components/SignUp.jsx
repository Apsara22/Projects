import { useState } from "react"
import Icon from "../assets/codepen.svg"
import UserAuthIn from "../componentsall/UserAuthIn"
import { MdMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
export default function SignUp(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    return(
        <>
        <div className="w-full py-6">
            <img src={Icon} alt="" className="object-contain w-32 opacity-50 h-auto"/>

            <div className="w-full flex  flex-col items-center justify-center py-8">
                <p className="py-12 text-2xl text-primary text-yellow-100">Join with US!🙂</p>
                
                <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-8">
                    {/* login or sign of box with email, password, login btn */}
                    {/* create props */}
                    <UserAuthIn 
                    label="Email"
                     placeholder="Email" 
                     isPass={false}
                      key="Email"
                       setStateFunction={setEmail}
                        Icon={MdMail}/>

                    {/* password */}
                    <UserAuthIn 
                    label="Password" 
                    placeholder="Password"
                     isPass={true}
                      key="Password"
                       setStateFunction={setPassword} 
                       Icon={MdPassword}/>

                    </div>

            </div>
        </div>
        </>

        
    )

}