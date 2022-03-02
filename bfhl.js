if(process.env.NODE_ENV!=='production')
{
    require('dotenv').config();
}

const express= require("express");
const Cors= require("cors")
const app = express();
const port = process.env.PORT || 8001;
app.use(express.json());
app.use(Cors());
const http = require('http').createServer(app);

app.get('/', (req, res) => res.status(200).send("Hello bajaj"));

app.post('/bfhl', (req, res) => {
    const data = [...req.body.data]

    let numbers = data.filter((value) => !isNaN(value))

    let alphabets = data.filter((value) => (/[a-zA-Z]/).test(value));
    res.status(200).send({
        'is_success': 'true',
        'user_id': 'lakshay_tyagi_30012001',
        'email': 'lakshay1490.cse19@chitkara.edu.in',
        'roll_number': '1910991490',
        'numbers': numbers,
        'alphabet': alphabets
    })
})

http.listen(port, () => console.log(`listening :${port}`));
