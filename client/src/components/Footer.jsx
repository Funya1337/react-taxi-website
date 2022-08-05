import React from 'react';
import Logo from '../assets/logo1.png'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <img src={Logo}/>
      </div>
      <div className='lg:col-span-1 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Контакты</h6>
        <ul>
            <li className='py-2 text-sm'>Адрес:</li> МО, г. Люберцы, ул. Кирова <br/> (116 квартал), д. 20А, офис 2
            <li className='py-2 text-sm'>Часы работы: <span style={{color: 'green'}}>c 09-00 до 21-00</span></li>
            <li className='py-2 text-sm'>Почта: <span style={{color: 'green'}}>russo2220414@yandex.ru</span></li>
            <li className='py-2 text-sm'>Телефон: <span style={{color: 'green'}}>89672220414</span></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Таксопарк</h6>
        <ul>
            <a href="#"><li className='py-2 text-sm'>Главная</li></a>
            <a href="#"><li className='py-2 text-sm'>Условия</li></a>
            <a href="#"><li className='py-2 text-sm'>Блог</li></a>
            <a href="#"><li className='py-2 text-sm'>О нас</li></a>
        </ul>
    </div>
    </div>
    </div>
  );
};

export default Footer;
