import React from 'react'
import { Grid,Paper, TextField, Button, Typography,Link } from '@material-ui/core'
import { useState } from 'react';
import axios from 'axios'

const Invest = () => {
  const url = '/api/invest'
  const [data, setData] = useState({
    name: "",
    phone: "",
    promo: ""
  })
  const handle = (e) => {
    const newData = {...data}
    console.log(newData)
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }
  const isFilled = (string) => {
    if (string.trim().length === 0) {
      return false
    } else {
      return true
    }
  }
  const submitData = (e) => {
    if (isFilled(data.name) && isFilled(data.phone) && isFilled(data.promo)) {
      axios.post(url, {
        name: data.name,
        phone: data.phone,
        promo: data.promo
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
  const paperStyle={padding :20,height:'35vh',width:600, margin:"20px auto"}
  const btnstyle={margin:'8px 0'}
  return (
    <div>
      <br/>
      <br/>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={{fontWeight: 'bold'}}>Стань инвестором нашего таксопарка</h2>
                </Grid>
                <TextField onChange={(e) => handle(e)} value={data.name} id="name" label='Имя' placeholder='Введите имя' fullWidth required/>
                <TextField onChange={(e) => handle(e)} value={data.phone} id="phone" label='Телефон' placeholder='Введите номер телефона' fullWidth required/>
                <TextField onChange={(e) => handle(e)} value={data.promo} id="promo" label='Промокод' placeholder='Введите промокод (если есть)' fullWidth/>
                <Button onClick={submitData} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Отправить заявку</Button>
                <Typography >
                  Нажимая на кнопку, вы принимаете <br/> <Link href="#">условия передачи информации</Link> и <Link href="#">пользовательское соглашение</Link>
                </Typography>
            </Paper>
        </Grid>
  </div>
  )
}

export default Invest