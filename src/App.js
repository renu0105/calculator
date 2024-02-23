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
    <div className=" bg-slate-700 flex items-center justify-center h-screen ">
      <div className="bg-black p-8   w-[500px] text-white rounded-3xl ">
        <input
          type="text"
          className=" mb-8 p-4  text-black text-end rounded-xl text-3xl w-full"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
        <div className="flex flex-wrap gap-6  items-center justify-center">
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
