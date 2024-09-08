import { BsThreeDots } from "react-icons/bs";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

export default function Todo() {

  const [isOptionClick, setOptionClick] = useState(false);

  return (
    <div id="single-todo" className={`py-4 px-6 bg-[#141414] my-[1px] flex items-center justify-between ${isOptionClick && "py-8 todoClicked"}`}>
      <div id="todo-name">
        <p className="text-sm text-gray-400">12-11-2023</p>
        <h3 className="pt-1 text-xl">Teamwork</h3>
      </div>
      <div className="relative">
        <div id="options" className={` p-3 rounded-full cursor-pointer ${isOptionClick ? "bg-[#888888]" : "bg-[#606060]"}`} onClick={() => {
          setOptionClick(prev => !prev)
        }}>
        <BsThreeDots />
      </div>
        {isOptionClick && (<><div className={`edit absolute  bg-[#141414] p-2 shadow-[#4d4d4d] shadow-md rounded-full ${isOptionClick ? "top-1 right-20" : ""} cursor-pointer`}><MdModeEdit /></div>
        <div className={`edit absolute  bg-[#141414] p-2 shadow-[#4d4d4d] shadow-md rounded-full ${isOptionClick ? "top-11 right-12" : ""} cursor-pointer`}><MdDelete /></div>
        <div className={`edit absolute  bg-[#141414] p-2 shadow-[#4d4d4d] shadow-md rounded-full ${isOptionClick ? "bottom-11 right-12" : ""} cursor-pointer`}><FaCheck /></div></>)}
      </div>
    </div>
  )
}