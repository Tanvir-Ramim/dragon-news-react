import { FaGoogle,FaGithub,FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';


const RightSideHome = () => {
    const {googleLogin}=useContext(AuthContext)
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            {/* login section  */}
            <div className='p-3 '>
                <h1 className="text-lg font-bold">Login With Google</h1>
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full text-blue-600 mt-4">
                <FaGoogle></FaGoogle>
                Login With Google
                </button>
                <button  className="btn btn-outline w-full mt-2">
                <FaGithub></FaGithub>
                Login With Github
                </button>
            </div>
            <div className='p-3'>
                 <h1 className='text-lg font-semibold mb-3'>Find Us On </h1>
                 <a className='gap-2 p-4 flex text-lg items-center border rounded-t-lg' href="">
                  <FaFacebook></FaFacebook>
                 Facebook
                 </a>
                 <a className='gap-2 p-4 flex text-lg items-center border-x ' href="">
                  <FaTwitter></FaTwitter>
                 Twitter
                 </a>
                 <a className='gap-2 p-4 flex text-lg items-center border rounded-b-lg' href="">
                  <FaInstagram></FaInstagram>
                  Instagram
                 </a>
            </div>
            <div>
            <div className='p-4 space-y-3 mb-6 bg-[#F3F3F3 ]'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            </div>
        </div>
    );
};

export default RightSideHome;