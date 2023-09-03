import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-10 grid grid-cols-5 m-auto items-start justify-center'>
  

            <div>
                <div className="logoDiv">
                    <h1 className='logo text-[25px] text-white pb-[1.5rem]' >
                        <strong>Job</strong>FinderPH
                    </h1>
                </div>
                <p className='text-white pb-[13px] opacity-70 leading-7' >
                    We always make our seekers and componies find the best jobs and employers find the best candidates.
                </p>

            </div>

            <div className="grid">
                <span className='didTitle text-[20px] font-semibold pb-[1.5rem] text-white' >
                    Company
                </span>

                <div className="grid gap-3">
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
                </div>

            </div>

            <div className="grid">
                <span className='didTitle text-[20px] font-semibold pb-[1.5rem] text-white' >
                    Resources
                </span>

                <div className="grid gap-3">
                    <li className='text-white opacity-[.7] hover:opacity-[1]'> Account</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact US</li>
                </div>

            </div>

            <div className="grid">
                <span className='didTitle text-[20px] font-semibold pb-[1.5rem] text-white' >
                    Supports
                </span>

                <div className="grid gap-3">
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
                </div>

            </div>

            <div className="grid">
                <span className='didTitle text-[20px] font-semibold pb-[1.5rem] text-white' >
                    Contact Info
                </span>

                <small className='text-[14px] text-white font-semibold '>
                    intesedzel@gmail.com
                </small>
                <small className='text-[14px] text-white pt-2 font-semibold ' >
                    +639 282 321 3311
                </small>

                <div className="icons flex gap-4 py-[1rem] ">
                    <a href="https://github.com/" target="_blank">
                        <AiFillGithub className='text-white h-[35px] w-[35px]' />
                    </a>
                    <a href="https://www.linkedin.com/login/" target="_blank">
                        <AiFillLinkedin className='text-white h-[35px] w-[35px]' />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <AiFillFacebook className='text-white h-[35px] w-[35px]' />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <AiFillInstagram className='text-white h-[35px] w-[35px]' />
                    </a>
                </div>

            </div>


        </div>
    )
}

export default Footer