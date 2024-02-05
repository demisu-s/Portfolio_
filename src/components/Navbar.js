import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-[1240px] mr-auto: text-white'>
  <h1 className='w-full text-3xl font-bold text-[#00df9a]'>PORTFOLIO.</h1>
  <ul className='flex'>
    <li className='p-4'>Home</li>
    <li className='p-4'>About</li>
    <li className='p-4'>Project</li>
    <li className='p-4'>Contact</li>
  </ul>
    </div>
  )
}

export default Navbar