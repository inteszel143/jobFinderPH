import React from 'react'

// image import
import logo1 from '../../Assets/comLogo1.png';
import logo2 from '../../Assets/comLogo2.png';
import logo3 from '../../Assets/comLogo3.png';


const data = [
    {
        id: 1,
        image: logo1,
        title: "Simplicity",
        desc: "Things being made beautiful simple are at the heart of everything we do.",
    },
    {
        id: 2,
        image: logo2,
        title: "Simplicity",
        desc: "Things being made beautiful simple are at the heart of everything we do.",
    },
    {
        id: 3,
        image: logo3,
        title: "Simplicity",
        desc: "Things being made beautiful simple are at the heart of everything we do.",
    },

];


const Value = () => {
    return (
        <div className='mb-[4rem] mt-[6rem] ' >
            <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>
                The value that holds us true and to account
            </h1>

            <div className="grid gap-[6rem] grid-cols-3 items-center">

                {
                    data.map((item) => (
                        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] cursor-pointer">
                            <div className="flex items-center gap-3 ">
                                <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
                                    <img src={item.image} alt="" className='w-[70%]' />
                                </div>
                                <span className='font-semibold text-textColor text-[18px]' >
                                    {item.title}</span>
                            </div>

                            <p className='text-[15px] text-textColor opacity-[.7] py-[1rem]' >
                                {item.desc}
                            </p>

                        </div>
                    ))
                }
            </div>


            <div className="card mt-[2rem] flex justify-between p-[5rem] rounded-[10px] bg-greyIsh">

                <div>
                    <h1 className='text-blueColor text-[30px] font-bold' >Ready to switch a career</h1>
                    <h2 className='text-textColor text-[25px]'>Let's get started!</h2>
                </div>
                <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor' >
                    Get Started</button>

            </div>


        </div>
    )
}

export default Value