import { useState } from "react";

export const Time = (className) =>{
  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return <h1 className="font-bold">{ctime}</h1>
}