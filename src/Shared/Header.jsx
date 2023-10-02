  import logo  from '../assets/logo.png'
  import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
               <img className='mx-auto' src={logo} alt="" />
               <h1 className='text-[#706F6F]text-[18px]'>Journalism Without Fear or Favourz</h1>
               <p className='text-3xl'>{moment().format("dddd, MMMM D, YYYY")}</p>

        </div>
    );
};

export default Header;