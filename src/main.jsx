import React from "react";
import { Link } from "react-router-dom";
import Imageone from "./image/moon-earth-landing-astronaut-wallpaper-preview.jpg";
import Car from "./image/classic-car-06.jpg";
import Venice from "./image/venice.jpg";
import Nature from "./image/nature.jpg";
import Woman from "./image/Woman.jpg";
import Painting from "./image/painting.jpg";
import Game from './image/game.jpg';
import House from './image/house.jpeg'
import Retro from './image/retro.jpg';
import Fashion from './image/fashion.jpg';
import Tech from './image/tech.jpg';
import AB from './image/Ab.jpg';
import Galaxy from './image/galaxy.jpg';
export default function Main() {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:justify-items-center lg:my-[100px] lg:gap-11 lg:mx-10
    md:grid grid-cols-1 grid-rows-1
    ">

<div class="card">
<div class="relative card__front  rounded-lg ">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="d relative w-[600px] h-[330px] rounded-lg" src={Imageone} />
    <div className="text-overlay absolute left-[40px] bottom-[40px] p-[10px] rounded-[5px] text-[36px] bg-blue-50/50 ">
     Space
   </div>
    <div className="card__back rounded">Load</div>
  </button>
</a>
</div>


<div className="card__back absolute border-8 border-neutral-800/20 z-0 top-0 w-full h-full text-center rounded	bg-pink-500/50 " >3sadsadsadsad</div>
</div>

<div class="card">
<div class="card__front  rounded-lg ">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="d w-[600px] h-[330px] rounded-lg" src={Car} />
    <div className="text-overlay absolute left-[40px] bottom-[40px] p-[10px] rounded-[5px] text-[36px] bg-blue-50/50 ">
     Cars
   </div>
    <div className="card__back rounded  ">dsfdsfdsfdsfs</div>
  </button>
</a>
</div>
<div class="card__back absolute border-8 border-neutral-800/20 z-0 top-0 w-full h-full text-center rounded	bg-pink-500/50 ">321</div>
</div>


<div class="card">
<div class="card__front  rounded-lg ">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="d w-[600px] h-[330px] rounded-lg" src={Venice} />
    <div className="text-overlay absolute left-[40px] bottom-[40px] p-[10px] rounded-[5px] text-[36px] bg-blue-50/50 ">
    Сities
   </div>
    <div className="card__back ">dsfdsfdsfdsfs</div>
  </button>
</a>
</div>
<div class="card__back absolute border-8 border-neutral-800/20 z-0 top-0 w-full h-full text-center rounded	bg-pink-500/50 ">321</div>
</div>


<div class="card">
<div class="card__front  rounded-lg ">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="d w-[600px] h-[330px] rounded-lg" src={Nature} />
    <div className="text-overlay absolute left-[40px] bottom-[40px] p-[10px] rounded-[5px] text-[36px] bg-blue-50/50 ">
    Nature
   </div>
    <div className="card__back">dsfdsfdsfdsfs</div>
  </button>
</a>
</div>
<div class="card__back absolute border-8 border-neutral-800/20 z-0 top-0 w-full h-full text-center rounded	bg-pink-500/50 ">321</div>
</div>

<div class="card">
<div class="card__front  rounded-lg">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="d w-[600px] h-[330px] rounded-lg" src={Woman} />
    <div className="text-overlay absolute left-[40px] bottom-[40px] p-[10px] rounded-[5px] text-[36px] bg-blue-50/50 ">
     Woman
   </div>
    <div className="card__back">dsfdsfdsfdsfs</div>
  </button>
</a>
</div>
<div class="card__back absolute border-8 border-neutral-800/20 z-0 top-0 w-full h-full text-center rounded	bg-pink-500/50 ">321</div>
</div>

<div class="card">
<div class="card__front  rounded-lg ">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="d w-[600px] h-[330px] rounded-lg" src={Painting} />
    <div className="text-overlay absolute left-[40px] bottom-[40px] p-[10px] rounded-[5px] text-[36px] bg-blue-50/50 ">
   Art
   </div>
    <div className="card__back">dsfdsfdsfdsfs</div>
  </button>
</a>
</div>
<div class="card__back absolute border-8 border-neutral-800/20 z-0 top-0 w-full h-full text-center rounded	bg-pink-500/50 ">321</div>
</div>

<div class="card">
<div class="card__front ">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="d w-[600px] h-[330px] rounded-lg" src={Game} />
    <div className="text-overlay absolute left-[40px] bottom-[40px] p-[10px] rounded-[5px] text-[36px] bg-blue-50/50 ">
   Games
   </div>
    <div className="card__back">dsfdsfdsfdsfs</div>
  </button>
</a>
</div>
<div class="card__back absolute border-8 border-neutral-800/20 z-0 top-0 w-full h-full text-center rounded	bg-pink-500/50 ">321</div>
</div>

<div class="card">
<div class="card__front  rounded-lg ">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="d w-[600px] h-[330px] rounded-lg" src={House} />
    <div className="text-overlay absolute left-[40px] bottom-[40px] p-[10px] rounded-[5px] text-[36px] bg-blue-50/50 ">
    Interior / Exterior
   </div>
    <div className="card__back">dsfdsfdsfdsfs</div>
  </button>
</a>
</div>
<div class="card__back absolute border-8 border-neutral-800/20 z-0 top-0 w-full h-full text-center rounded	bg-pink-500/50 ">321</div>
</div>


<div class="card">
<div class="card__front  rounded-lg ">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="d w-[600px] h-[330px] rounded-lg" src={Fashion} />
    <div className="card__back">dsfdsfdsfdsfs</div>
    <div className="text-overlay absolute left-[40px] bottom-[40px] p-[10px] rounded-[5px] text-[36px] bg-blue-50/50 ">
    Animals
   </div>
  </button>
</a>
</div>
<div class="card__back absolute border-8 border-neutral-800/20 z-0 top-0 w-full h-full text-center rounded	bg-pink-500/50 ">321</div>
</div>


<div class="card">
<div class="card__front  rounded-lg">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="d w-[600px] h-[330px] rounded-lg" src={Retro} />
    <div className="card__back">dsfdsfdsfdsfs</div>
  </button>
  <div className="text-overlay absolute left-[40px] bottom-[40px] p-[10px] rounded-[5px] text-[36px] bg-blue-50/50 ">
  Retro
   </div>
</a>
</div>
<div class="card__back absolute border-8 border-neutral-800/20 z-0 top-0 w-full h-full text-center rounded	bg-pink-500/50 ">321</div>
</div>

<div class="card">
<div class="card__front  rounded-lg ">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="d w-[600px] h-[330px] rounded-lg" src={Tech} />
    <div className="card__back">dsfdsfdsfdsfs</div>
  </button>
  <div className="text-overlay absolute left-[40px] bottom-[40px] p-[10px] rounded-[5px] text-[36px] bg-blue-50/50 ">
  Technologies
   </div>
 
</a>
</div>
<div class="card__back absolute border-8 border-neutral-800/20 z-0 top-0 w-full h-full text-center rounded	bg-pink-500/50 ">321</div>
</div>


<div class="card">
<div class="card__front  rounded-lg ">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="d w-[600px] h-[330px] rounded-lg" src={AB} />
    <div className="card__back">dsfdsfdsfdsfs</div>
  </button>
  <div className="text-overlay absolute left-[40px] bottom-[40px] p-[10px] rounded-[5px] text-[36px] bg-stone-800/50 ">
 Tatto
   </div>
</a>
</div>



<div class="card__back absolute border-8 border-neutral-800/20 z-0 top-0 w-full h-full text-center rounded	bg-pink-500/50 ">321</div>
</div>

    </div>
  )
}