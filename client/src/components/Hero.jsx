import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
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
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Свяжитесь с нами и мы ответим на все Ваши вопросы!</p>
        <ul className='list'>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' style={{marginRight: "20px"}}>Telegram</button>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' style={{marginRight: "20px"}}>WhatsApp</button>
      </ul>
      </div>
    </div>
  );
};

export default Hero;
