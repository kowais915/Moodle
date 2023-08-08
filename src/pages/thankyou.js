import Layout from "./components/Layout";

const Thankyou = () => {
    return ( 

        <>
            <Layout>

                    <div className="flex p-20 text-md mb-52 sm:flex-col sm:justify-center sm:text-4xl sm:p-40 sm:m-10 sm:text-center">

                        <h1>Thank you. You have sucessfully registered your mood for today.</h1>

                        <div className="icon mt-5">
                        
                                <div className="flex flex-row justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </div>

                             
                        </div>

                    </div>

            </Layout>
        </>
     );
}
 
export default Thankyou;