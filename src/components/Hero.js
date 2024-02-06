import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
    const [typed, setTyped] = React.useState();

    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>Hello, It's Me</p>
                <h1 className='md:text-6xl ms:text-5xl text-4xl font-bold md:py-4'>Damisu Sefu</h1>

                <div>
                    <p className='fixed md:text-2xl sm:text-1xl text-xl ml-24 py-4'>And I'm a <span className='text-[#00df9a] md:text-5xl'>
                        <ReactTyped typedRef={setTyped} strings={["Full Stack Developer", "Backend Developer", "Frontend Developer"]} typeSpeed={120} backSpeed={140} loop />
                    </span></p>
                </div>
                <div>
                <p className='md:text-[20px] py-20 sm:text-[16px]'>I'm a seasoned Web Developer specializing in crafting high-quality web applications from scratch. With expertise in HTML, CSS, JavaScript, React, and Express,and Other I bring ideas to life with sleek design and intuitive functionality.</p>
                </div>
               <button className='bg-[#00df9a] w-[200px] text-black rounded-md font-medium my-6 mx-auto px-6 py-3'>Hire Me</button>
            </div>
        </div>
    );
}

export default Hero;
