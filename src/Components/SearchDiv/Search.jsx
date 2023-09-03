import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { CiHome } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Search = () => {
    return (
        <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
            <form action="">
                <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">

                    <div className='flex gap-2 items-center'>
                        <CiSearch className='text-[28px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%] ml-2'
                            placeholder="Search job here. . " />
                        <IoIosCloseCircleOutline className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>


                    <div className='flex gap-2 items-center'>
                        <CiHome className='text-[28px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%] ml-2'
                            placeholder="Search by company. . " />
                        <IoIosCloseCircleOutline className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>


                    <div className='flex gap-2 items-center'>
                        <CiLocationOn className='text-[28px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%] ml-2'
                            placeholder="Search by location. . " />
                        <IoIosCloseCircleOutline className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>

                    <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300' >Search</button>

                </div>
            </form>

            <div className="secDiv flex items-center gap-10 justify-center">

                <div className="singleSearch flex items-center gap-4 ">
                    <label htmlFor="relavance" className='text-[#808080]' >Sort by: </label>
                    <select name="" id="relavance" className='bg-white rounded-[3px] px-4 py-1 cursor-pointer' >
                        <option value="Relevance">Relevance</option>
                        <option value="Inclusion">Inclusion</option>
                        <option value="Start with">Start with</option>
                        <option value="Contains">Contains</option> 
                    </select>
                </div>

                <div className="singleSearch flex items-center gap-4 ">
                    <label htmlFor="type" className='text-[#808080]' >Sort by Type: </label>
                    <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1 cursor-pointer' >
                        <option value="Full-time">Full-time</option>
                        <option value="Remote">Remote</option>
                        <option value="Contract">Contract</option>
                        <option value="Part-time">Part-time</option>
                    </select>
                </div>

                <div className="singleSearch flex items-center gap-4 ">
                    <label htmlFor="level" className='text-[#808080]' >Sort by Level: </label>
                    <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1 cursor-pointer' >
                        <option value="Senior Developer">Senior Developer</option>
                        <option value="Junior Developer">Junior Developer</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>


                <button className='text-[#a1a1a1] hover:text-black cursor-pointer' >Clear All</button>


            </div>


        </div>
    )
}

export default Search