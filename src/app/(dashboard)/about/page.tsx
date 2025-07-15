import Image from "next/image"
export default function About(){
return(
    <>
    <main>
        <section className="text-center">
        <h1 className="text-2xl text-green-400 font-bold mt-10 mx-12  md:text-4xl">Who Am I?</h1>
        <p className="text-white max-w-xl mx-auto px-4 md:px-0  mt-2 text-sm md:text-lg">Hi, I'm Saim — a dedicated full stack developer passionate about building scalable, modern web applications. I enjoy working with technologies like Next.js, Tailwind CSS, and TypeScript to bring ideas to life. I'm also comfortable with Docker and FastAPI, and always eager to improve my backend and deployment skills. Outside of coding, I like exploring new tech tools, solving interesting problems, and taking on challenges that push me to grow.
</p>
        </section>
        <section >
<h1 className="text-2xl md:text-4xl text-green-400 font-bold mb-4 mt-6 mx-12">Skills</h1>
            <ul className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-x-8 gap-y-6 text-sm md:text-lg text-white mx-4 md:mx-12">
                    <li className="flex gap-4 items-center">
              <Image src="/html.png" alt="html" width={30} height={30} />HTML</li>
             <li className="flex gap-4 items-center"><Image src={"/ts.svg"} alt="Typescript" width={30} height={30}/>TypeScript</li>
<li className="flex  gap-4 items-center"><Image src={"/node-removebg-preview.png"} alt="Node JS" width={40} height={40}/>Node JS</li>
                    <li className="flex gap-4 items-center"><Image src={"/tailwind-removebg-preview (1).png"} alt="Tailwind CSS" width={30} height={30}/>Tailwind CSS</li>
                    <li className="flex gap-4 items-center"><Image src={"/python-removebg-preview.png"} alt="Python" width={30} height={30}/>Python</li>
                    <li className="flex gap-4 items-center"><Image src={"/fastapi.svg"} alt="Fast Api" width={30} height={30}/>FastAPI</li>
                    <li className="flex gap-4 items-center"><Image src={"/react-removebg-preview.png"} alt="React" width={30} height={30}/>React</li>
            <li className="flex gap-4 items-center"> <Image src={"/c.png"} alt="C" width={30} height={30}/>C</li>
                    <li className="flex gap-4 items-center"><Image src={"/docker.png"} alt="Docker" width={30} height={30}/>Docker</li>
                    <li className="flex gap-4 items-center"><Image src={"/nextjs.png"} alt="NextJs" width={30} height={30}/>Next.js</li>
            <li className="flex gap-4 items-center"> <Image src={"/C++-removebg-preview (1).png"} alt="C++" width={35} height={30}/>C++</li>
                    <li className="flex gap-4 items-center"><Image src={"/sql-removebg-preview.png"} alt="Sql" width={30} height={30}/>Postgres SQL</li>
            </ul>

        </section>
    </main>
    </>
)
}