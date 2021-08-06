//Made by Bill Konchellah
//Use it for educational purposes

const express = require('express')
const app = express()
const port = 7071
app.use(express.urlencoded({
    extended: true
}));


app.post('/api/post',(req, res) => {
    var form = req.body
    res.send(form)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})