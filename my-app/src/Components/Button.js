import './Button.css'
import React from 'react'

export default function Button({sign ,updateCount}) {
const clickHandler = sign => {
  updateCount(sign)
}

  return (
    <div>
       <button className={sign === '+' ? 'plus' :
                         sign === '-' ? 'minus':
                         sign === 'Reset' ? 'reset' : ''} onClick={()=> clickHandler(sign)}> 
                         {sign} 
                         </button>
    </div>
  )
}
