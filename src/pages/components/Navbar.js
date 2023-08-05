

const Navbar = () => {
    return ( 


    

            <div className={`p-6 flex flex-row justify-between bg-blue-100 mb-20`}>
                <div className="title text-3xl">
                    Moodle
                </div>

                <div className="links flex flex-row justify-around gap-5">
                    <a><h3 className="cursor-pointer hover:bg-teal-300 p-2">About</h3></a>
                    <a><h3 className="cursor-pointer hover:bg-teal-300 p-2">Contact</h3></a>
                    <a><h3 className="cursor-pointer hover:bg-teal-300 p-2">How it works?</h3></a>

                </div>
            </div>
        
 
     );
}
 
export default Navbar;