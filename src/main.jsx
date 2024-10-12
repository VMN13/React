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




export default function Main() {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:justify-items-center lg:my-[100px] lg:gap-11 lg:mx-10
    md:grid grid-cols-1 grid-rows-1
    ">
<a href="/about">
  <button className="" type="button" class="btn">
    <img  className="w-[600px] h-[330px] rounded-lg" src={Imageone} />
  </button>
</a>

<a href="/about">
  <button type="button" class="btn">
  <img className="w-[600px] h-[330px] rounded-lg" src={Car} />
  </button>
</a>
<a href="/about">
  <button type="button" class="btn">
  <img className="w-[600px] h-[330px] rounded-lg" src={Venice} />
  </button>
</a>
<a href="/about">
  <button type="button" class="btn">
  <img  className="w-[600px] h-[330px] rounded-lg" src={Nature} />
  </button>
</a>
<a href="/about">
  <button type="button" class="btn">
  <img className="w-[600px] h-[330px] rounded-lg" src={Woman} />
  </button>
</a>
<a href="/about">
  <button type="button" class="btn">
  <img className="w-[600px] h-[330px] rounded-lg" src={Painting} />
  </button>
</a>
<a href="/about">
  <button type="button" class="btn">
  <img className="w-[600px] h-[330px] rounded-lg" src={Game} />
  </button>
</a>
<a href="/about">
  <button type="button" class="btn">
  <img className="w-[600px] h-[330px] rounded-lg" src={House} />
  </button>
</a>
<a href="/about">
  <button type="button" class="btn">
  <img  className="w-[600px] h-[330px] rounded-lg" src={Fashion} />
  </button>
</a>
<a href="/about">
  <button type="button" class="btn">
  <img className="w-[600px] h-[330px] rounded-lg" src={Retro} />
  </button>
</a>
<a href="/about">
  <button type="button" class="btn">
  <img className="w-[600px] h-[330px] rounded-lg" src={Tech} />
  </button>
</a>
<a href="/about">
  <button type="button" class="btn">
  <img className="w-[600px] h-[330px] rounded-lg" src={AB} />
  </button>
</a>
    </div>
  )
}