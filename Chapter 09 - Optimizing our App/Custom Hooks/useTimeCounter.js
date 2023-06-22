import { useState, useEffect } from 'react';
  // Write your custom Hook in this file!
const useTimeCounter=()=>{
  const[initialTimeOut,setInitialTimeOut]=useState(0);
  useEffect(()=>{
    const id = setInterval(() => {
      setInitialTimeOut((prev)=> prev+1);
    }, 1000);

  return ()=>clearInterval(id)

  },[])


  return [initialTimeOut,setInitialTimeOut]
}

export default useTimeCounter;
