export default function Contact(){
    return(
        <>
        <header>
        </header>
        <main>
      <form action={"https://formspree.io/f/mzzvbzea"} method="POST" className='bg-gray-700 max-w-xs md:max-w-lg  mt-12 mx-auto p-8 rounded-xl shadow-xl space-y-3'>
            <h1 className="text-white text-center mb-4 text-2xl font-serif">Contact Me</h1>
        <div className="flex flex-col">
            <label htmlFor="name" className="text-white font-medium mb-1">Enter Your Name</label>
            <input 
            type="text"
            name="name"
             id="name" 
             placeholder="Your Name"
             className="p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400  border border-green-400 hover:shadow transition"></input>
            <label htmlFor="email" className="text-white font-medium mt-4 mb-1">Enter Your Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email"className="p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400 border border-green-400 "></input>
            <label htmlFor="message" className="font-medium text-white mt-4 mb-1 ">Enter Message</label>
            <textarea name="message" id="message" placeholder="Your Message..." rows={4} className="p-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 border border-green-400 "></textarea>
        </div>
        <button type="submit"className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition font-bold ">
            Submit
</button>
      </form>
        </main>
        </>
    )
}