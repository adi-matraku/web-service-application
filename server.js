const express = require('express');
const app = express();
const port = 3210;

app.get('/number-of-digits', (req, res) => {
    console.log(req, 'REQUEST!');
    const number = req.query.number;
    if(!number || isNaN(number)){
        return res.status(400).send('Number is required');
    }
    const numDigits = number.length;
    res.json({number, numberOfDigits: numDigits});
});

app.get('/frequency-of-digits', (req, res) => {
    const number = req.query.number;
    if(!number || isNaN(number)){
        return res.status(400).send('Number is required');
    }
    const frequency = {};
    for(let digit of number){
        if(frequency[digit]){
            frequency[digit]++;
        } else {
            frequency[digit] = 1;
        }
    }
    res.json({number, frequency});
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
