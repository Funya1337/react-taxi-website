import React, { useState } from 'react';
import Typed from 'react-typed';
import DialogWindow from './DialogWindow'

const Hero = () => {
  const [open, setOpen] = useState(false)

  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          Таксопарк RUSSO более 60 городов и поддержка 24/7
        </p>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>
          Подключение водителей к Яндекс такси
        </h1>
        <div className='flex justify-center items-center'>
          <Typed
          className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Минимальная комиссия', 'Свободный График', 'Быстрые выплаты', 'Много заказов']}
            typeSpeed={180}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Мы сертифицированный парк, подкючаем Uber, Ситимобил</p>
        <ul className='list'>
        <button onClick={() => window.open("tel:+79672220414")} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' style={{marginRight: "20px"}}>Позвонить</button>
        <button onClick={() => window.location = 'mailto:russo2220414@yandex.ru'} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' style={{marginRight: "20px", marginTop: "auto"}}>Email</button>
      </ul>
      <button onClick={handleClickToOpen} className='bg-[#00df9a] w-[350px] rounded-md font-medium mx-auto py-3 text-black'>Подключиться</button>
      <DialogWindow open={open} handleToClose={handleToClose}/>
      </div>
    </div>
  );
};

export default Hero;
