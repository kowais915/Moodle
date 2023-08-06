import Link from "next/link";

const Footer = () => {
    return (

        <>
        
                <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                    <div className="grid grid-flow-col gap-4">
                        <a className="link link-hover" href="/about">About us</a> 
                        <a className="link link-hover" href="https://github.com/kowais915/Moodle">Code</a> 
                        <Link className="link link-hover" href="/">Home</Link>
                    </div> 
                    
                    <div>
                        <p>Copyright © 2023 - Moodle</p>
                    </div>
                </footer>
        </>
      );
}
 
export default Footer;