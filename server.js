const express = require('express')
const PORT = process.env.PORT || 2007 
require ('./database/database')

const app = express();
app.use(express.json())

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT : ${PORT}`)
})