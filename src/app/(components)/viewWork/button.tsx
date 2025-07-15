'use client'

import { useRouter } from "next/navigation"

export default function Button(){
    const router=useRouter()
    return(
       
            <button className="bg-green-600 text-white mt-8 px-4 py-2 rounded-md font-bold shadow-lg hover:scale-105 hover:bg-green-700 cursor-pointer text-sm md:text-base " onClick={()=>{
             router.push("/projects")
            }}>
        View My Work
        </button>
    )
}
