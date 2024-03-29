import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div id="cards" className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>50 рублей в сутки</h2>
              <p className='text-center text-4xl font-bold'>Курьер доставка</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>После выполнения первого заказа</p>
                  <p className='py-2 border-b mx-8'>один раз сутки</p>
                  <p className='py-2 border-b mx-8'>только при выходе на линию</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Подключиться</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Фиксированно с заказа</h2>
              <p className='text-center text-4xl font-bold'>Грузовой тариф</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>8 рублей при работе в регионе 1% вывод</p>
                  <p className='py-2 border-b mx-8'>11 рублей при работе в Москве 1% вывод</p>
                  <p className='py-2 border-b mx-8'>Идеальный тариф для грузовых и премиальных тарифов</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Подключиться</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>3% с заказа</h2>
              <p className='text-center text-4xl font-bold'>Путевые листы</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Подходит для водителей / курьеров</p>
                  <p className='py-2 border-b mx-8'>в небольших городах, где средняя</p>
                  <p className='py-2 border-b mx-8'>стоимость заказа не более 100 руб</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Подключиться</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
