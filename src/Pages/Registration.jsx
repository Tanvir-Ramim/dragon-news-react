import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Navbar from "../Shared/Navbar";
import { Link } from "react-router-dom";
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai';
import { sendEmailVerification, updateProfile } from "firebase/auth";


const Registration = () => {
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [show,setShow]=useState(false)
  const { createUser,logOut } = useContext(AuthContext)
  const handleSubmit = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const photoURL = form.get('photoURL')
    const email = form.get('email')
    const password = form.get('password')
    const name = form.get('name')
     const terms=e.target.terms.checked 

      setSuccess('')
      setError('')
     if(password.length<6){
       return setError('Password should be at least 6 characters')
     }
     else if(!/^(?=.*[A-Z])(?=.*\d).+/.test(password)){
      return setError('Must have a UpperCase and Number')
     }
     else if(!terms){
      return setError('Accept This is Terms')
     }
    createUser(email, password)
      .then(result => {
         updateProfile(result.user ,{
            displayName: name,
            photoURL: photoURL
         })
         .then()
         .catch(error=>{
          setError(error.message)
         })

         sendEmailVerification(result.user)
         .then(()=>{
            logOut()
            alert('Check your email')
         })
        setSuccess('User Created Successfully.')
      })


      .catch(error => {
        setError(error.message)
      })

  }
  return (
    <div>
      <Navbar></Navbar>
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
            
              <input   type={show ? 'text': 'password' } name="password" placeholder="password" className=" input input-bordered" required />
              <span   className="cursor-pointer absolute bottom-4 right-3" onClick={()=> setShow(!show)} >
                {
                  show ?  <AiFillEye></AiFillEye>: <AiFillEyeInvisible></AiFillEyeInvisible> 
                }
              </span>

            </div>
            <div>
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms">Accept This terms</label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
            <div>
        <Link to={'/login'}>Login Page</Link>
      </div>
          </form>
          <div>
            {
              success&& <h1 className="text-green-700 text-center mb-5 font-semibold">{success}</h1>
            }
          </div>
          <div>
            {
              error&& <h1 className="text-red-600 text-center mb-5 font-semibold">{error}</h1>
            }
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Registration;