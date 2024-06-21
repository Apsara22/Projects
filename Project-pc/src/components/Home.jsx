import { useState } from "react"

export default function Home(){
    const [issideMenu, setSideMenu] = useState(false)

    return(
        <div>
            <div className={`w-40 ${issideMenu ? "w-40": "flex-[.2] xl:flex-[.2]"} min-h-screen max-h-screen relative bg-secondary`}></div>
            <div></div>
        </div>
    )
}