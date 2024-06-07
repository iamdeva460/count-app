import './App.css'
import React, { useState } from 'react';
import Button from './Components/Button';


export default function App() {
  const [count,setCount] =  useState(0);

  const updateCount =(sign)=>{
let c = count
if(sign === '+'){
 setCount( c + 1 )
}
else if(sign === '-')setCount(c - 1)
else if(sign === 'Reset')setCount(0)

  }
  return (
    <div className='app'>
        <h1>Deva Will Shine</h1>
        <div className='item1'>
             <Button sign='+' updateCount={updateCount}/>
  <div className='count'>
       {count}
  </div>  
              <Button sign='-' updateCount={updateCount}/>
        </div>
        <br/>
        <br/>
        <div className='item2'>
              <Button sign='Reset' updateCount={updateCount}/>
        </div>
    </div>
  )
}
