import Layout from "./components/Layout";
import Link from "next/link";

const About = () => {
    return (

        <Layout>  

            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Your ulitmate mood tracker!</h1>
                <p className="py-6">Use this app to track your moods daily. At the end of each week, get access to insights.</p>
                <Link  href="/dashboard" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
            </div>
        
        </Layout>
      );
}
 
export default About;