import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo1.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <button onClick={() => {window.location = '/'}}><img src={Logo}/></button>
      {/* <button onClick={() => {window.location = '/'}}><h1 className='w-full text-3xl font-bold text-[#00df9a]'>RUSSO.</h1></button> */}
      <ul className='hidden md:flex'>
        <button className='p-4 font-bold' onClick={() => {window.location = '/'}}>Главная</button>
        <Link style={{cursor: "pointer"}} to="cards" spy={true} smooth={true} offset={50} duration={500} className='p-4 font-bold'>Условия</Link>
        <button className='p-4 font-bold' onClick={() => {window.location = '/invest'}}>Стать инвестором</button>
        <Link style={{cursor: "pointer"}} to="footer" spy={true} smooth={true} offset={50} duration={500} className='p-4 font-bold'>О нас</Link>
        <button className='p-4 font-bold' onClick={() => {window.location = '/question'}}>Вопрос/Ответ</button>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul style={{zIndex: 3}} className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <button onClick={() => {window.location = '/'}}><img src={Logo}/></button>
          <li onClick={() => {window.location = '/'}} className='p-4 border-b border-gray-600 font-bold' style={{cursor: "pointer"}}>Главная</li>
          <li className='p-4 border-b border-gray-600 font-bold'>Условия</li>
          <li onClick={() => {window.location = '/invest'}} style={{cursor: "pointer"}} className='p-4 border-b border-gray-600 font-bold'>Стать инвестором</li >
          <li className='p-4 border-b border-gray-600 font-bold'>О нас</li>
          <li onClick={() => {window.location = '/question'}} className='p-4 border-b border-gray-600 font-bold' style={{cursor: "pointer"}}>Вопрос/Ответ</li>
      </ul>
    </div>
  );
};

export default Navbar;
