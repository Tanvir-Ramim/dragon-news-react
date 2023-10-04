import { useContext , useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";





const Registration = () => {
    const [success,setSuccess]=useState(null)
    const [error,setError]=useState(null)
    const {createUser}=useContext(AuthContext)
    const handleSubmit=e=>{
         e.preventDefault()
         const form= new FormData(e.currentTarget)
         const photoURL=form.get('photoURL')
         const email=form.get('email')
         const password=form.get('password')
         const name=form.get('name')
         //  console.log(photoURL,name,email,password)
         createUser(email,password)
         .then(result=>{
            console.log(result.user)
            setSuccess(result.user)
         })
         .catch(error=>{
            setError(error.message)
         })

         console.log(success,error)
        
    }
   
    
     
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photoURL" placeholder="URL" className="input input-bordered" required />
        </div>
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
          <input type="password"  name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Registration;