import axios from "axios";
import { 
    fetchConvertRequest, 
    fetchConvertSuccess,
    fetchConvertError } 
    from "./convert-actions";
// import requestOptions from '../services/apilayer'

const API_KEY = 'fAIHNZO7zUdLvocWuQgPMpmVaQSrbtTR';

// const myHeaders = new Headers();
// myHeaders.append("apikey", API_KEY);

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
    "apikey": API_KEY,
    }
  };

const lev = "UAH"
const lev2 = "USD"

export const fetchConvert = () => async dispatch =>{
    dispatch(fetchConvertRequest());
    try{
        const {data} = await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4');
        dispatch(fetchConvertSuccess(data))
        // console.log(data)
       
        } catch(error){
        dispatch(fetchConvertError(error))
    }
}