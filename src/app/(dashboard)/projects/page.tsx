const projects=[{
    name:'Portfolio Website',
    description:"A responsive portfolio built with Next.js, Tailwind CSS, and TypeScript. Hosted on Vercel, featuring dynamic routes and a dark theme UI.",
    Tech:"Next.js • Tailwind CSS • TypeScript • Vercel",
    link:"abc"
}]
export default function Projects(){
return(
    <>
    <div>
        {
            projects.map((project,index)=>(
                <div key={index} className="grid grid-cols-12 ">
        <section className="col-span-12 md:col-span-6 mt-12 md:mt-24 hover:scale-105  bg-slate-800 border border-gray-700 w-[80%] md:w-[60%]  mx-8 md:mx-12  text-green-400 rounded-xl shadow-lg p-6 space-y-2">

            <h1 className="text-green-400 text-2xl md:text-3xl font-bold">{project.name}</h1>
            <p className="text-white text-base ">{project.description}</p>
            <p className="text-white text-sm pb-2">{project.Tech}</p>
            <a  href={project.link}className="text-white text-lg hover:underline hover:text-green-400 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">View Project</a>
        </section>
        <section className= " hover:scale-105 bg-slate-800 border mt-10 md:mt-24  w-[80%] border-gray-700 text-green-400 rounded-xl shadow-lg space-y-2 col-span-12 md:col-span-6 mx-8 md:mx-[30%]  md:w-[60%] p-6 "  >
        <h1 className="text-green-400 text-2xl md:text-3xl font-bold">New Project</h1>
        <p className="text-white text-base mt-2">A new project is currently under development. Exciting things coming soon!</p>
        <p className="text-white text-sm  italic pt-2">Stay tuned 🚀</p>
               </section>
                </div>
            
            ))
        }
    </div>
   
    </>
)
}