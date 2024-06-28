import React,{useState,useEffect, useId, useInsertionEffect} from 'react'

const HookThreatOne = () => {
    const[count,setCount]=useState(0)
useEffect(()=>{
    document.title=`you clicked ${count} times`
})
    
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>count {count}</button>
    </div>
  )
}

export default HookThreatOne