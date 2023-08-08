import Link from "next/link";

const Navbar = () => {
    return ( 


    
            <>


<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>About</a></li>
        <li>
          <a>Source Code</a>
          <ul className="p-2">
            <li><a>Frontend</a></li>
            <li><a>Backend</a></li>
          </ul>
        </li>
        
      </ul>
    </div>
    <div className="flex flex-row justify-center">

    <div className="mt-3 mx-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
    </div>

    <div className="brand">
        <Link className="btn btn-ghost normal-case text-xl  -ml-1" href="/">Moodle</Link>
    </div>

    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/about">About </Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Source Code</summary>
          <ul className="p-2">
            <li><a href="https://github.com/kowais915/Moodle">Frontend</a></li>
            <li><a href="https://github.com/kowais915/moodle-backend">Backend</a></li>
          </ul>
        </details>
      </li>
      <li><Link href="/">How it works?</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <input type="checkbox" className="toggle toggle-warning"  />
  </div>
</div>
            </>
        
 
     );
}
 
export default Navbar;