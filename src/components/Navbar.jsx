import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Navbar = () => {
  return (
    <div className=' flex items-center justify-between py-6 '>
        <div className=' flex  flex-shrink-0 items-center '>
          <h3  className=' w-8 mx-2 text-bold  text-xl cursor-pointer   ' >AR</h3>
        </div>
        

        <div className=' text-neutral-100 flex items-center gap-6 text-xl '>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            <FaFacebook/>
        </div>
    </div>
  )
}

export default Navbar