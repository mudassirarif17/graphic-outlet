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

import pfp1 from "../img/pfp/1.png"
import pfp2 from "../img/pfp/2.png"
import pfp3 from "../img/pfp/3.png"
import pfp4 from "../img/pfp/4.png"
import pfp5 from "../img/pfp/5.png"

import em1 from "../img/Emotes/1.png"
import em2 from "../img/Emotes/2.png"
import em3 from "../img/Emotes/3.png"
import em4 from "../img/Emotes/4.png"



const Portfolio = () => {
  return (
    <>
      <section className="text-gray-600 w-[90vw] mx-auto body-font">
        <div className="container px-5 pt-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">WELCOME TO MY PORTFOLIO!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here are just a few pieces I’ve done over the years (not in chronological order) that I feel really show my talent and skill.
            </p>
          </div>
        </div>
        {/* 2d models */ }
        <div>
          <h3 className='mb-4 text-center text-2xl'>2D MODELS</h3>
          <div className='card-wrapper'>
            <div className='cards space-x-4'>
              <img src={ girlrigg } alt="girl" width={ 300 } height={ 250 } />
              <img src={ psd } alt="girl" width={ 300 } height={ 250 } />
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='cards space-x-4'>
              <img src={ police } alt="girl" width={ 300 } height={ 250 } />
              <img src={ pinky } alt="girl" width={ 300 } height={ 250 } />
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='cards'>
              <img src={ ko } alt="girl" width={ 500 } height={ 250 } />
            </div>
          </div>

          {/* 3d models */ }
          <h3 className='mt-14 text-center text-2xl'>3D MODELS</h3>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="my-3 lg:mx-3" src={ sx5 } alt="girl" width={ 400 } height={ 250 } />
              <img className="my-3 lg:mx-3" src={ gum } alt="girl" width={ 400 } height={ 250 } />
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="my-3 lg:mx-3" src={ op } alt="girl" width={ 400 } height={ 250 } />
              <img className="my-3 lg:mx-3" src={ uk } alt="girl" width={ 400 } height={ 250 } />
            </div>
          </div>

          {/* Banners */ }
          <h3 className='mt-14 text-center text-2xl'>BANNERS</h3>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="my-3" src={ bn1 } alt="girl" width={ 800 } height={ 250 } />
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="my-3" src={ bn2 } alt="girl" width={ 800 } height={ 250 } />
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="my-3" src={ bn3 } alt="girl" width={ 800 } height={ 250 } />
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="my-3" src={ bn4 } alt="girl" width={ 800 } height={ 250 } />
            </div>
          </div>

          {/* Digiart */ }
          <h3 className='mt-14 text-center text-2xl'>DIGIART</h3>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="" src={ dg1 } alt="girl" width={ 450 } height={ 250 } />
              <img className="" src={ dg2 } alt="girl" width={ 450 } height={ 250 } />
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="" src={ dg3 } alt="girl" width={ 450 } height={ 250 } />
            </div>
          </div>

          {/* Twitch */ }
          <h3 className='my-14 text-center text-2xl'>TWITCH OVERLAYS</h3>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="m-3" src={ tw1 } alt="girl" width={ 300 } height={ 250 } />
              <img className="m-3" src={ tw2 } alt="girl" width={ 300 } height={ 250 } />
              <img className="m-3" src={ tw3 } alt="girl" width={ 300 } height={ 250 } />
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="m-3" src={ tw4 } alt="girl" width={ 300 } height={ 250 } />
              <img className="m-3" src={ tw5 } alt="girl" width={ 300 } height={ 250 } />
              <img className="m-3" src={ tw6 } alt="girl" width={ 300 } height={ 250 } />
            </div>
          </div>

          {/* pfp */ }
          <h3 className='mt-14 text-center text-2xl'>PFP</h3>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="m-3" src={ pfp1 } alt="girl" width={ 450 } height={ 250 } />
              <img className="m-3" src={ pfp2 } alt="girl" width={ 450 } height={ 250 } />
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="m-3" src={ pfp3 } alt="girl" width={ 450 } height={ 250 } />
              <img className="m-3" src={ pfp4 } alt="girl" width={ 450 } height={ 250 } />
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="m-3" src={ pfp5 } alt="girl" width={ 450 } height={ 250 } />
            </div>
          </div>

        {/* Emotes */ }
        <h3 className='mt-14 text-center text-2xl'>EMOTES</h3>
          <div className='card-wrapper mb-8'>
            <div className='cards mb-2 lg:space-x-16'>
              <img className="my-3" src={ em1 } alt="girl" width={ 450 } height={ 300 } />
              <img className="my-3" src={ em2 } alt="girl" width={ 450 } height={ 300 } />
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='cards mb-2 lg:space-x-16'>
              <img className="my-3" src={ em3 } alt="girl" width={ 450 } height={ 300 } />
              <img className="my-3" src={ em4 } alt="girl" width={ 450 } height={ 300 } />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Portfolio;
