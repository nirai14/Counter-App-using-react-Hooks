import React from 'react'
import './counter.css'

const Counter = () => {

    const [count,setCount]=React.useState(0)
if(count<0){
    setCount(0)
}

function add(){
setCount(count=>count+1)
    }

function minus(){
        setCount(count=>count-1)
        }
function reset(){
setCount(0)
}
    
  return (
    <div className='app'>
<h1>Counter App</h1>
<div className='allbutton'>
    <button onClick={minus}>-</button>
    <div className='count'>{count}</div>
    <button onClick={add}>+</button>
</div>
<button className='reset' onClick={reset}>Reset</button>


    </div>
  )
}

export default Counter