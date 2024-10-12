import React from "react";
import { GiChessKnight } from "react-icons/gi";
import { GiNightSky } from "react-icons/gi";
import { FaTelegram } from "react-icons/fa";
export default function Header() {
  return (
    <div className="flex  justify-evenly flex-wrap my-10">
 
        <div className=""><p className="text-red-500">
          NS <GiNightSky className="my-3.5" style={{color: 'black', fontSize: '30px'}} /> {/* night */}
        </p></div>
        <div className=""> <p className="text-red-500">
         Welcome to the ImageCenter <br/> 
         
         <span className="flex justify-center">Drop!!! </span> 
          <div className="flex justify-center text-black">
         <GiChessKnight style={{color: 'black', fontSize: '150px'}}  />   {/* chess */}
         </div>
        </p></div>
        <div className=""> <p className="text-red-500 ">
        Telegram
        </p>
        <FaTelegram className="my-3.5 ml-[10px]" style={{color: 'black', fontSize: '30px'}}/> {/* Tg */}
        </div>
    </div>
  )
}