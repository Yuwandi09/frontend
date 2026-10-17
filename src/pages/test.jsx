import React, { useState } from "react";

export default function Test() {
 
  const[count, setCount] = useState(0);

  return (
     
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[400px] h-[200px] bg-blue-900 shadow flex justify-center items-center gap-5 ">
        <button onClick={() => {
          setCount(count - 1)
        }}
        className="w-[100px] bg-blue-300 text-[30px] cursor-pointer " >-</button>

        <span className="w-[120px] h-[70px] bg-red-500 text-center justify-center items-center text-bold text-[30px] flex" >{count}</span>

        <button 
        onClick={() => {
          setCount(count + 1)
        }}
        className="w-[100px] bg-blue-300 text-[30px] cursor-pointer" >+</button>
      </div>
    </div>
  );

}