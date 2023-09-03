import React from 'react'
import { BiTimeFive } from 'react-icons/bi'

// image import
import logo1 from '../../Assets/comLogo1.png';
import logo2 from '../../Assets/comLogo2.png';
import logo3 from '../../Assets/comLogo3.png';
import logo4 from '../../Assets/comLogo4.png';

// ARRAY
const Data = [
    {
        id: 1,
        image: logo1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Manitoba City, Canada',
        desc: 'ReactJS, React Native, Javascript, Database(Mongo DB, Firebase MySql, Sqlite)?',
        company: 'Novac Linux Co.',
    },
    {
        id: 2,
        image: logo2,
        title: 'Mobile Developer',
        time: '2mins',
        location: 'Davao City, Philippines',
        desc: 'React Native, Javascript, Database(Mongo DB, Firebase MySql, Sqlite)?',
        company: 'Infinit Solution Co.',
    },
    {
        id: 3,
        image: logo3,
        title: 'Virtual Assistant',
        time: '24mins',
        location: 'Yishun City, Singapore',
        desc: 'ReactJS, React Native, Javascript, Database(Mongo DB, Firebase MySql, Sqlite)?',
        company: 'Infinit Solution Co.',
    },
    {
        id: 4,
        image: logo4,
        title: 'Virtual Assistant',
        time: '10mins',
        location: 'Cebu City, Philippines',
        desc: 'ReactJS, React Native, Javascript, Database(Mongo DB, Firebase MySql, Sqlite)?',
        company: 'Inriver Details Co.',
    },
    {
        id: 5,
        image: logo4,
        title: 'Mobile Developer',
        time: '10mins',
        location: 'Davao City, Philippines',
        desc: 'ReactJS, React Native, Javascript, Database(Mongo DB, Firebase MySql, Sqlite)?',
        company: 'Lemon Gray IT Solution.',
    },
    {
        id: 6,
        image: logo3,
        title: 'Web Front-end Developer',
        time: '24mins',
        location: 'Yishun City, Singapore',
        desc: 'ReactJS, React Native, Javascript, Database(Mongo DB, Firebase MySql, Sqlite)?',
        company: 'Infinit Solution Co.',
    },
    {
        id: 7,
        image: logo2,
        title: 'Mobile Developer',
        time: '2mins',
        location: 'Davao City, Philippines',
        desc: 'React Native, Javascript, Database(Mongo DB, Firebase MySql, Sqlite)?',
        company: 'Infinit Solution Co.',
    },
    {
        id: 1,
        image: logo1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Manitoba City, Canada',
        desc: 'ReactJS, React Native, Javascript, Database(Mongo DB, Firebase MySql, Sqlite)?',
        company: 'Novac Linux Co.',
    },

];
const Jobs = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10" >

                {
                    Data.map((item) => (
                        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg show-greyIsh-400/700 hover:shadow-lg cursor-pointer">
                            <span className='flex justify-between items-center gap-4 cursor-pointer' >
                                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white' >{item.title}</h1>
                                <span className='flex items-center text-[14px] text-[#ccc] gap-1' >
                                    <BiTimeFive />{item.time}
                                </span>
                            </span>
                            <h6 className='text-[#ccc] pt-1'>{item.location}</h6>
                            <p className='text-[15px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white '>{item.desc}</p>

                            <div className="company flex items-center gap-2 pt-2">
                                <img src={item.image} alt="Company Logo" className='w-[35px] pt-1' />
                                <span className='text-[15px] py-[1rem] block group-hover:text-white'> {item.company} </span>
                            </div>

                            <button className='border-[2px] rounded-[10px] mt-3 block p-[10px] w-full text-[14px] hover:bg-white font-semibold text-textColor group-hover/item:text-textColor group-hover:text-black' >Apply now</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Jobs