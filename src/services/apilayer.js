
const API_KEY = 'fAIHNZO7zUdLvocWuQgPMpmVaQSrbtTR';

const myHeaders = new Headers();
myHeaders.append("apikey", API_KEY);

 const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export function apiFatch (symbols, base) {
    fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch()
};

export function  apiConvert(to, from, amount)  {
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
    .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result)
            return data
        })
    .catch()
};
 

