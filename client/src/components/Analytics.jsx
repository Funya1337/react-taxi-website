import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Logo from '../assets/logo.png'
import Box from '@mui/material/Box';
import LogoCard from '../assets/visit.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const Analytics = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-12' src={Logo} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>ПОСТОЯННОЕ СОТРУДНИЧЕСТВО С YANDEX GO</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Преимущества работы самозанятым через парк</h1>
          <p>
            1. Вы не платите налог с комиссий Яндекс. ТАКСИ и заправок*
            <br />
            2. Круглосуточная поддержка парка
            <br />
            3. Вывод при сумме от 3500
            <br />
            4. Путевые листы 500р 60 штук на месяц, через киссарт 1800
            <br />
            5. Покупка смен в долг*
            <br />
            6. 2 балла приоритета с заправок в Яндекс. ПРО
          </p>
          <button onClick={handleOpen} className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Наша визитка</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <img src={LogoCard}/>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
