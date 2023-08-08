import Layout from "./components/Layout";
import {useState, useEffect } from 'react';
import {useRouter} from 'next/router'




const Dashboard = () => {

    const router = useRouter();
    const [data, setData] = useState('')
   

    const [feelings, setFeelings] = useState({
        happy: false,
        sad: false,
        angry: false,
        anxious: false,
        neutral: false,
    });

    const handleSubmit = async(feeling)=>{
      
       
        // console.log({
        //   ...feelings,
        //   [feeling]: true, 
        // })

        const data = {...feelings, [feeling]: true};
        console.log("DATA::", data);

        
        
        const resp = await fetch("http://localhost:3001/api/moods", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({...data})
        });
        const json = resp.json();


        
        return data;


    }

    

    

    

    

  



     
    return ( 
        <Layout>

            <div className="p-20 flex text-2xl -mb-5 text-center justify-center sm:text-center sm:text-7xl sm:mt-20 sm:-mb-36">
                How are you feeling today?
            </div>
        
 
                <div className="buttons flex flex-col  mb-14 items-center  gap-3 sm:flex sm:flex-row sm:justify-center sm:m-15 sm:gap-3 sm:p-36">
                    <button className="btn w-40 "
                         onClick={()=>{
                       
                            handleSubmit('happy')
                        
                    }}
                    
                    >
                        Happy
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <button className="btn w-40" 
                         onClick={(e)=>{
                     
                            setFeelings({...feelings, sad: true})
                            handleSubmit('sad')
                        
                    }}
                    >
                        Sad
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <button className="btn w-40"
                         onClick={(e)=>{
                     
                            setFeelings({...feelings, neutral: true})
                            handleSubmit('neutral')
                    }}
                    >
                        Neutral
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <button className="btn w-40" onClick={(e)=>{
                     
                     setFeelings({...feelings, anxious: true})
                     handleSubmit('anxious')
                           
                        
                    }}>
                        Anxious
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <button className="btn w-40"  onClick={(e)=>{
                     
                            setFeelings({...feelings, angry: true})
                            handleSubmit('angry')
                   
                 
             }}>
                        Angry
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                </div>
      
        
        </Layout>
     );
}
 
export default Dashboard;