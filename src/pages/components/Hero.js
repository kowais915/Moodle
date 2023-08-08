import Link from 'next/link'
const Hero = () => {
    return ( 
        <>
           <div className=" hero sm:min-h-screen w-fit sm:w-full bg-base-200 ">

                <div className="hero-content sm:flex flex-col p-28 lg:flex-row-reverse sm:hidden flex-row ">
                     
                    <div className='text-center sm:text-start'>
                    <h1 className="text-center text-md text-3xl font-bold ">Moodle - your mood tracker.</h1>
                    <p className="py-6 text-center sm:text-start">Your ultimate solution to keep track of your changing moods.</p>
                    <Link href="/dashboard" className="btn btn-primary ">Get Started</Link>
                    </div>
                </div>


                {/* large screens */}
                <div className="sm:hero-content hidden sm:flex-row-reverse sm:flex sm:flex-row ">

                    <img src="img.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-center sm:text-start'>
                    <h1 className="text-center text-md text-5xl font-bold sm:text-start">Moodle - your mood tracker.</h1>
                    <p className="py-6 text-center sm:text-start">Your ultimate solution to keep track of your changing moods.</p>
                    <Link href="/dashboard" className="btn btn-primary " >Get Started</Link>
                    </div>
                </div>

            </div>
        </>
     );
}
 
export default Hero;