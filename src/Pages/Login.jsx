import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Login = () => {
  const [success,setSuccess]=useState(null)
  const [error,setError]=useState(null)
  const {loginUser}=useContext(AuthContext)
  const handleSubmit=(e)=>{
      e.preventDefault()
      const form=new FormData(e.currentTarget)
      const email=form.get('email')
      const password=form.get('password')
      console.log(email,password)
       loginUser(email,password)
       .then(result=>{
           setSuccess(result.user)

       })
       .catch(error=>{
           setError(error)
       })

  }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        </div>
          <button className="btn btn-primary">Login</button>
        <div>
        <Link to={'/registration'}>Registration Page</Link>
      </div>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default Login;