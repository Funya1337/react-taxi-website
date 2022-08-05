import React from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const TextForm = (props) => {

  const test = () => {
    console.log(props)
  }

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="standard-basic" onChange={test} label="Ваше ФИО" variant="standard" />
    <TextField id="standard-basic" label="Телефон" variant="standard" />
    <TextField id="standard-basic" label="Электронная почта" variant="standard" />
    <TextField id="standard-basic" label="Город" variant="standard" />
    <br/>
    <br/>
    <h1 style={{fontSize: '1.25rem', whiteSpace: 'nowrap'}}>Водительское удостоверение</h1>
    <TextField id="standard-basic" label="Серия и номер" variant="standard" />
    <TextField style={{width: '15ch'}} id="standard-basic" label="Дата выдачи" variant="standard" />
    <TextField style={{width: '15ch'}} id="standard-basic" label="Дата окончания" variant="standard" />
    <br/>
    <br/>
    <h1 style={{fontSize: '1.25rem', whiteSpace: 'nowrap'}}>Автомобиль</h1>
    <TextField id="standard-basic" label="Марка" variant="standard" />
    <TextField id="standard-basic" label="Модель" variant="standard" />
    <TextField id="standard-basic" label="Цвет" variant="standard" />
    <TextField id="standard-basic" label="Гос.номер" variant="standard" />
    <TextField id="standard-basic" label="Год выпуска" variant="standard" />
    <br/>
    <br/>
    <Button variant="contained" color="primary" component="span">
      Паспорт 2 стороны
    </Button>
    <Button variant="contained" color="primary" component="span">
      4 фото авто
    </Button>
    <Button style={{whiteSpace: 'nowrap', width: 'auto'}} variant="contained" color="primary" component="span">
      Лицензия (не обязательно)
    </Button>
    <br/>
    <FormControlLabel control={<Checkbox />} style={{whiteSpace: 'nowrap'}} label="Согласен на обработку моих персональных данных" />
    <br/>
    <FormControlLabel control={<Checkbox />} style={{whiteSpace: 'nowrap'}} label="Согласен с условиями Договора-оферты" />
    <br/>
    <Button style={{whiteSpace: 'nowrap', width: 'auto'}} variant="contained" color="primary" component="span">
      Отправить
    </Button>
  </Box>
  )
}

export default TextForm