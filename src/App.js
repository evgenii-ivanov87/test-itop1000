import { useEffect } from 'react';
import {apiFatch, apiConvert} from './services/apilayer';

function App() {
  apiFatch('uah', 'usd')
  apiFatch('uah', 'EUR')
  apiConvert('UAH','USD',100)
  
  
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
