'use client'
import { useRouter } from "next/navigation"
export default function ContactButton(){
    const router=useRouter() 
    return(
        <button className="bg-green-600  mt-8 w-auto text-white font-bold text-sm md:text-base px-5 py-2 shadow-xl rounded-md  hover:bg-green-700 hover:scale-105 cursor-pointer " onClick={()=>{
            router.push("/Contact")
        }}>Contact Me</button>
    )
}