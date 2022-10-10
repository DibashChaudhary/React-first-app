import {useState} from 'react';

import './App.css';
import { Title } from "./Title"
import {Display} from "./Display"
import {Form} from "./Form"

const App = ()=> {
  const [counter, setCounter] = useState(12);

const increment = () => {
  setCounter(counter + 1);
}

const decrement = ()=>{
  setCounter(counter - 1)
}
console.log(counter);

  return (
  <div> 
    {/* <Title />
  
    <Display counterHolder = {counter}/>
    <p>

      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

    </p> */}
    <Form />
    
  </div>

  );
};


export default App;
