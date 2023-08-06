import Link from 'next/link'
const Hero = () => {
    return ( 
        <>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="img.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">Moodle - your mood tracker.</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary"><Link href="/dashboard">Get Started</Link></button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Hero;