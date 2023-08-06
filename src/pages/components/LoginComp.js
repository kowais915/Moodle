
const LoginComp = () => {
    return ( 
        <>
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col gap-5 lg:flex-row-reverse">

                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                  <p className="py-6">Login with your favourite social media apps. We use industry standard tools to keep your data secure.</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                  
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </>
     );
}
 
export default LoginComp;
