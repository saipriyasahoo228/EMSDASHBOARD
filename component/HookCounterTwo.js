import React,{useState} from 'react'

function HookCounterTwo() {
    const initiatCount=0
    const[count,setCount]=useState(initiatCount)

    const incrementFive =()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount =>prevCount+1)
        }
    }
  return (
    <div>
      Count:{count}
      <button onClick={()=>setCount(initiatCount)}>Reset</button>
      <button onClick={()=>setCount(prevCount =>prevCount+1)}>Increment</button>
      <button onClick={()=>setCount(prevCount =>prevCount-1)}>Decrement</button>
      <button onClick={incrementFive}>Increment</button>
    </div>
  )
}

export default HookCounterTwo


