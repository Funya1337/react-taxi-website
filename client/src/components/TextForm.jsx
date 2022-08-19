import Box from '@mui/material/Box';
import { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'

const TextForm = () => {

  const url = '/api/request'

  const isFilled = (string) => {
    if (string.trim().length === 0) {
      return false
    } else {
      return true
    }
  }

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    carNumber: "",
    carDateStart: "",
    carDateEnd: "",
    carBrand: "",
    carModel: "",
    carColor: "",
    carGosNumber: "",
    CarReleaseDate: ""
  })

  const handle = (e) => {
    const newData = {...data}
    console.log(newData)
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  const submitData = (e) => {
    if (isFilled(data.name) && isFilled(data.phone) && isFilled(data.email) && isFilled(data.city) && isFilled(data.carNumber) 
    && isFilled(data.carDateStart) && isFilled(data.carDateEnd) && isFilled(data.carBrand) && isFilled(data.carModel)
    && isFilled(data.carColor) && isFilled(data.carGosNumber) && isFilled(data.CarReleaseDate)) {
      axios.post(url, {
        name: data.name,
        phone: data.phone,
        email: data.email,
        city: data.city,
        carNumber: data.carNumber,
        carDateStart: data.carDateStart,
        carDateEnd: data.carDateEnd,
        carBrand: data.carBrand,
        carModel: data.carModel,
        carColor: data.carColor,
        carGosNumber: data.carGosNumber,
        CarReleaseDate: data.CarReleaseDate
      })
        .then(res => {
          console.log(res)
          alert("Заявка успешно отправлена!")
        })
        .catch(err => console.log(err))
    } else {
      alert("Заполните все поля")
    }
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
    <TextField onChange={(e) => handle(e)} value={data.name} id="name" label="Ваше ФИО" variant="standard" />
    <TextField onChange={(e) => handle(e)} value={data.phone} id="phone" label="Телефон" variant="standard" />
    <TextField onChange={(e) => handle(e)} value={data.email} id="email" label="Электронная почта" variant="standard" />
    <TextField onChange={(e) => handle(e)} value={data.city} id="city" label="Город" variant="standard" />
    <br/>
    <br/>
    <h1 style={{fontSize: '1.25rem', whiteSpace: 'nowrap'}}>Водительское удостоверение</h1>
    <TextField onChange={(e) => handle(e)} value={data.carNumber} id="carNumber" label="Серия и номер" variant="standard" />
    <TextField onChange={(e) => handle(e)} value={data.carDateStart} style={{width: '15ch'}} id="carDateStart" label="Дата выдачи" variant="standard" />
    <TextField onChange={(e) => handle(e)} value={data.carDateEnd} style={{width: '15ch'}} id="carDateEnd" label="Дата окончания" variant="standard" />
    <br/>
    <br/>
    <h1 style={{fontSize: '1.25rem', whiteSpace: 'nowrap'}}>Автомобиль</h1>
    <TextField onChange={(e) => handle(e)} value={data.carBrand} id="carBrand" label="Марка" variant="standard" />
    <TextField onChange={(e) => handle(e)} value={data.carModel} id="carModel" label="Модель" variant="standard" />
    <TextField onChange={(e) => handle(e)} value={data.carColor} id="carColor" label="Цвет" variant="standard" />
    <TextField onChange={(e) => handle(e)} value={data.carGosNumber} id="carGosNumber" label="Гос.номер" variant="standard" />
    <TextField onChange={(e) => handle(e)} value={data.CarReleaseDate} id="CarReleaseDate" label="Год выпуска" variant="standard" />
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
    <Button onClick={submitData} style={{whiteSpace: 'nowrap', width: 'auto'}} variant="contained" color="primary" component="span">
      Отправить
    </Button>
  </Box>
  )
}

export default TextForm