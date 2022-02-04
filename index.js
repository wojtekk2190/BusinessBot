const express = require('express')
const app = express()
const axios = require('axios');

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.post('/message', (req, res) => {
  console.log(req.body)
  let message=req.body.data
  let result=message.replace(/ /g,"%20")
  axios.post(`https://api.telegram.org/bot5098609286:AAGVnu2MPkePfcm9TDpgzMkfgtXXIaDVgZg/sendMessage?chat_id=-1001655033140&text=${result}`)
  res.send("ok")
})

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log("server is up on 4000");
})
