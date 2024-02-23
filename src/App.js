import React from "react";
import Button from "./components/Button";
import { useState } from "react";

export default function App() {
  const nums = [
    "AC",
    "DC",
    ".",
    "/",
    "9",
    "8",
    "7",
    "*",
    "6",
    "5",
    "4",
    "-",
    "3",
    "2",
    "1",
    "+",
    "0",
    "(",
    ")",
    "=",
  ];

  const [inputVal, setInputVal] = useState("");
  return (
    <div className=" bg-slate-700 flex items-center justify-center h-screen">
      <div className="bg-black h-[70%] w-[30%] text-white ">
        <input
          type="text"
          className="w-[90%] m-4  p-4 mx-5 text-black text-end"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
        <div className="flex flex-wrap gap-1 mx-5  items-center justify-center">
          {nums.map((num, i) => (
            <Button
              key={i}
              num={num}
              inputVal={inputVal}
              setInputVal={setInputVal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
