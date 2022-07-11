import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo1.png'

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
        <button className='p-4 font-bold' onClick={() => {window.location = '/conditions'}}>Условия</button>
        <button className='p-4 font-bold' onClick={() => {window.location = '/blog'}}>Блог</button>
        <button className='p-4 font-bold' onClick={() => {window.location = '/about'}}>О нас</button>
        <button className='p-4 font-bold' onClick={() => {window.location = '/question'}}>Вопрос/Ответ</button>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <button onClick={() => {window.location = '/'}}><img src={Logo}/></button>
          <li className='p-4 border-b border-gray-600 font-bold'>Главная</li>
          <li className='p-4 border-b border-gray-600 font-bold'>Условия</li>
          <li className='p-4 border-b border-gray-600 font-bold'>Блог</li >
          <li className='p-4 border-b border-gray-600 font-bold'>О нас</li>
          <li className='p-4 border-b border-gray-600 font-bold'>Вопрос/Ответ</li>
      </ul>
    </div>
  );
};

export default Navbar;
