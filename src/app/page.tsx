import Link from "next/link"
import Image from "next/image"
import Button from "./(components)/viewWork/button"
import ContactButton from "./(components)/ContactMe/button"
export default function Home(){
  return(
<>
<main className=" text-white flex flex-col-reverse md:flex-row px-10 mx-4 justify-between items-center">
<div className="space-y-4 mt-10 md:mt-30">
  <h1 className="text-3xl md:text-5xl font-serif font-bold">Hi,I'm Saim</h1>
  <h2 className="text-lg md:text-2xl text-green-400 mt-2">Full Stack Developer</h2>
  <p className="text-base md:text-lg md:pt-4  text-white max-w-lg"> I'm a passionate developer focused on building full stack web applications 
  with Next.js, Tailwind CSS, and TypeScript. I also work with Docker, FastAPI, 
  and SQL, and love exploring new technologies, solving problems, and taking on 
  challenging projects.</p>
  <div className="flex flex-wrap  space-x-4 mb-3">
 <Button/>
<ContactButton/>
  </div>

</div>
  <Image src="/Developer activity-bro.png" alt="Picture Not Found" width={500} height={500} className="" ></Image>
</main> 
</>
  )
}