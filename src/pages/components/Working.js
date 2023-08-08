import Featured from "./Featured";
import Hero from "./Hero";

const Working = () => {
    return ( 
        <div className="mt-5 flex flex-col items-center w-fit sm:w-fit">

            <div className="mockup-browser border bg-base-300 ">
            <div className="mockup-browser-toolbar">
                <div className="input">Moodle</div>
            </div>
            <div className="flex justify-center flex-col w-fit px-4 py-16 bg-base-200">
                
                <div className="cards flex flex-col sm:flex-row justify-center gap-5 h-fit">

                    <div className="card sm:w-fit bg-base-100 shadow-xl">
                        <figure><img src="img.jpeg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                           Sign up!
                            <div className="badge badge-warning">Step 1</div>
                            </h2>
                            <p>Create an account with us!</p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                    </div>


                    <div className="card sm:w-fit bg-base-100 shadow-xl">
                        <figure><img src="img.jpeg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Pick an Emoji!
                            <div className="badge badge-warning">Step 2</div>
                            </h2>
                            <p>From our set of emojis, just pick how you feel every day when you visit your dashboard</p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                    </div>



                    <div className="card sm:w-fit bg-base-100 shadow-xl">
                        <figure><img src="img.jpeg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            Results 
                            <div className="badge badge-warning">Step 3</div>
                            </h2>
                            <p>Get stats at the end of the week that shows how your mood changed throughout the week</p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                    </div>

                </div>

            </div>





            </div>
          
        </div>
     );
}
 
export default Working;