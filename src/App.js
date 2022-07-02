import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import {apiFatch, apiConvert} from './services/apilayer';
import {fetchConvert} from './redux/convert-operations'
import { store } from './redux/store';



function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchConvert());
  }, [dispatch]);

  console.log(store.getState())
 
  // apiFatch('uah', 'usd')
  // apiFatch('uah', 'EUR')
  // apiConvert('UAH','USD',100)
  
 
  
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
