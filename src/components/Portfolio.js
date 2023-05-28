import React from 'react'
import "../css/portfolio.css"
import girlrigg from "../img/2d models/girlrigg.png"
import ko from "../img/2d models/ko.png"
import psd from "../img/2d models/psd.png"
import police from "../img/2d models/police.png"
import pinky from "../img/2d models/pinky.png"

import sx5 from "../img/3d models/656.png"
import gum from "../img/3d models/gum.png"
import op from "../img/3d models/op.png"
import uk from "../img/3d models/uk.png"

import bn1 from "../img/Banner/3.png"
import bn2 from "../img/Banner/4.png"
import bn3 from "../img/Banner/33.png"
import bn4 from "../img/Banner/kj.png"

import dg1 from "../img/DigiArt/2.png"
import dg2 from "../img/DigiArt/3.png"
import dg3 from "../img/DigiArt/6.png"

import tw1 from "../img/Twitch Overlays/1.png"
import tw2 from "../img/Twitch Overlays/2.png"
import tw3 from "../img/Twitch Overlays/3.png"
import tw4 from "../img/Twitch Overlays/4.png"
import tw5 from "../img/Twitch Overlays/5.png"
import tw6 from "../img/Twitch Overlays/6.png"



const Portfolio = () => {
  return (
    <>
      <section className="text-gray-600 w-[90vw] mx-auto body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">WELCOME TO MY PORTFOLIO!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here are just a few pieces I’ve done over the years (not in chronological order) that I feel really show my talent and skill.
            </p>
          </div>
        </div>
      {/* 2d models */ }
      <div>
        <h3 className='mb-4'>2D Models</h3>
        <div className='card-wrapper'>
        <div className='cards'>
          <img src={girlrigg} alt="girl" width={250} height={250} />
          <img src={ko} alt="girl" width={280} height={250}  />
          <img src={psd} alt="girl" width={250}  height={250} />
        </div>
        </div>
        <div className='card-wrapper'>
        <div className='cards'>
          <img src={police} alt="girl" width={250} height={250} />
          <img src={pinky} alt="girl" width={280} height={250}  />
        </div>
        </div>

        {/* 3d models */ }
        <h3 className='mb-4'>3D Models</h3>
        <div className='card-wrapper'>
        <div className='cards mb-2'>
          <img className="mx-3" src={sx5} alt="girl" width={280} height={250} />
          <img className="mx-3" src={gum} alt="girl" width={280} height={250}  />
        </div>
        </div>
        <div className='card-wrapper'>
        <div className='cards mb-2'>
          <img className="mx-3" src={op} alt="girl" width={280} height={250} />
          <img className="mx-3" src={uk} alt="girl" width={280} height={250}  />
        </div>
        </div>

        {/* Banners */ }
        <h3 className='mb-4'>Banners</h3>
        <div className='card-wrapper'>
        <div className='cards mb-2'>
          <img className="mx-3" src={bn1} alt="girl" width={680} height={250} />
        </div>
        </div>
        <div className='card-wrapper'>
        <div className='cards mb-2'>
          <img className="mx-3" src={bn2} alt="girl" width={680} height={250} />
        </div>
        </div>
        <div className='card-wrapper'>
        <div className='cards mb-2'>
          <img className="mx-3" src={bn3} alt="girl" width={680} height={250} />
        </div>
        </div>
        <div className='card-wrapper'>
        <div className='cards mb-2'>
          <img className="mx-3" src={bn4} alt="girl" width={680} height={250} />
        </div>
        </div>

      {/* Digiart */ }
      <h3 className='mb-4'>DigiArt</h3>
        <div className='card-wrapper'>
        <div className='cards mb-2'>
          <img className="mx-3" src={dg1} alt="girl" width={300} height={250} />
          <img className="mx-3" src={dg2} alt="girl" width={300} height={250} />
          <img className="mx-3" src={dg3} alt="girl" width={300} height={250} />
        </div>
        </div>

        {/* Twitch */ }
      <h3 className='mb-4'>Twitch Overlays</h3>
        <div className='card-wrapper'>
        <div className='cards mb-2'>
          <img className="mx-3" src={tw1} alt="girl" width={300} height={250} />
          <img className="mx-3" src={tw2} alt="girl" width={300} height={250} />
          <img className="mx-3" src={tw3} alt="girl" width={300} height={250} />
        </div>
        </div>
        <div className='card-wrapper'>
        <div className='cards mb-2'>
          <img className="mx-3" src={tw4} alt="girl" width={300} height={250} />
          <img className="mx-3" src={tw5} alt="girl" width={300} height={250} />
          <img className="mx-3" src={tw6} alt="girl" width={300} height={250} />
        </div>
        </div>

{/* new work */}
      </div>
      </section>
    </>
  )
}

export default Portfolio;
