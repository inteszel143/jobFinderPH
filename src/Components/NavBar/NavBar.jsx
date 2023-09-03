import React from 'react'
import icon from '/svgicon.png';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';



const NavBar = () => {
    return (
        <div className="navBar flex justify-between items-center p-[3rem]">

            <div className="logoDiv cursor-pointer flex justify-between">
                <img src={icon} alt="icon" className='w-[35px]' />
                <h1 className="logo text-[25px] text-blueColor ">
                    <strong>Job</strong>FinderPH
                </h1>
            </div>

            <div className="menu flex gap-8">
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Companies</li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor ">About</li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Contact</li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Blog</li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor flex items-center gap-1 ml-4">
                    <AiOutlineLock />
                    Login</li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor flex items-center gap-1">
                    <AiOutlineUser />
                    Register</li>
            </div>


        </div>
    )
}

export default NavBar