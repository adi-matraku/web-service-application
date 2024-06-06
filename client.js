const axios = require('axios');

const getNumberOfDigits = async (number) => {
    try {
        const response = await axios.get('http://localhost:3210/number-of-digits?number=' + number);
        console.log('Number of digits', response.data);
    } catch (e) {
        console.error('Error', e);
    }
};

const getFrequencyOfDigits = async (number) => {
    try {
        const response = await axios.get('http://localhost:3210/frequency-of-digits?number=' + number);
        console.log('Frequency of digits', response.data);
    } catch (e) {
        console.error('Error', e);
    }
};

getNumberOfDigits('1111333').then(r => console.log('Number of digits operation done'));
getFrequencyOfDigits('1111333').then(r => console.log('Frequency of digits operation done'));