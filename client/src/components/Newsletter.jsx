import React, { useState } from 'react';

const Newsletter = () => {

  const url = ''
  const [data, setData] = useState({
    email: ""
  })

  const handle = (e) => {
    console.log(e)
    console.log(data.email)
  }

  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-3xl sm:text-3xl text-2xl font-bold py-2'>
            Остались сомнения и хочешь узнать больше о нас?
          </h1>
          <p>Оставь свой Email и мы вышлем тебе подробую информацию</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              onChange={(e) => handle(e)}
              id="email"
              value={data.email}
              className='p-3 flex w-full rounded-md text-black'
              type='text'
              placeholder='Введите Email'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Отправить
            </button>
          </div>
          <p>
            Мы всегда уважаем права наших клиентов и никогда не разглашаем информацию о них{' '}
            <br/>
            <span className='text-[#00df9a]'>Лицензионное соглашение</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
