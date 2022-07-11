import React from 'react';
import Logo from '../assets/logo.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-12' src={Logo} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>ПОСТОЯННОЕ СОТРУДНИЧЕСТВО С YANDEX GO</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Преимущества работы самозанятым через парк</h1>
          <p>
            1. Вы не платите налог с комиссий Яндекс. ТАКСИ и заправок*
            <br/>
            2. Круглосуточная поддержка парка
            <br/>
            3. Моментальные выплаты
            <br/>
            4. Автоматическая сверка начислений за бонусы и заказы
            <br/>
            5. Покупка смен в долг*
            <br/>
            6. 2 балла приоритета с заправок в Яндекс. ПРО
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Скачать презентацию</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
