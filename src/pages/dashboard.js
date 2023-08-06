import Layout from "./components/Layout";
import {useState } from 'react';
import {useRouter} from 'next/router'




const Dashboard = () => {

    const router = useRouter();
    const [happy, setHappy] = useState(false);
    const [sad, setSad] = useState(false);
    const [angry, setAngry] = useState(false);
    const [anxious, setAnxious] = useState(false);
    const [neutral, setNeutral] = useState(false);


    const handleSubmit =(e)=>{
       
        console.log({
            happy,
            sad,
            angry,
            anxious,
            neutral
        })

        router.push("/thankyou")


    }

     
    return ( 
        <Layout>

            <div className="text-center text-7xl mt-36 -mb-36">
                How are you feeling today?
            </div>
        
 
                <div className="buttons flex flex-row justify-center m-28 gap-3 p-36">
                    <button className="btn"
                         onClick={(e)=>{
                     
                           setHappy()
                        
                    }}
                    
                    >
                        Happy
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <button className="btn" 
                         onChange={(e)=>{
                     
                            setSad(true)
                            handleSubmit();
                        
                    }}
                    >
                        Sad
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <button className="btn"
                         onChange={(e)=>{
                     
                            setNeutral(true)
                            handleSubmit();
                        
                    }}
                    >
                        Neutral
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <button className="btn" onChange={(e)=>{
                     
                            setAnxious(true)
                            handleSubmit();
                        
                    }}>
                        Anxious
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <button className="btn"  onChange={(e)=>{
                     
                     setAngry(true)
                     handleSubmit();
                 
             }}>
                        Angry
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                </div>
      
        
        </Layout>
     );
}
 
export default Dashboard;