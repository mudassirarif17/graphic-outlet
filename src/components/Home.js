import React from 'react' 
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import bn2 from "../img/Banner/4.png"

import em1 from "../img/Emotes/1.png"
import em2 from "../img/Emotes/2.png"

import girlrigg from "../img/2d models/girlrigg.png"
import psd from "../img/2d models/psd.png"
import pinky from "../img/2d models/pinky.png"

import tw1 from "../img/Twitch Overlays/1.png"
import tw2 from "../img/Twitch Overlays/2.png"
import tw3 from "../img/Twitch Overlays/3.png"

import pfp1 from "../img/pfp/1.png"
import pfp2 from "../img/pfp/2.png"

const Home = () => {
  const history = useHistory();
  const navigateHandler = () =>{
    setTimeout(() => {
      history.push("/portfolio");
    }, 300);
  }
  return (
    <div className=''>
      {/* Banners */ }
      <h3 id="design" className='mt-10 text-center title-font sm:text-4xl lg:text-4xl mb-4 font-medium text-gray-900'>NEWEST DESIGNS</h3>
      <div className='card-wrapper mb-10'>
        <div className='cards mb-2'>
          <img className="my-3" src={ bn2 } alt="girl" width={ 1000 } height={ 300 } />
        </div>
      </div>

      {/*NEWEST EMOTES */ }
      <div className='card-wrapper mb-10'>
        <div className='cards mb-2 lg:space-x-16'>
        <img className="my-3" src={ em1 } alt="girl" width={ 450 } height={ 300 } />
        <img className="my-3" src={ em2 } alt="girl" width={ 450 } height={ 300 } />
        </div>
      </div>

      {/* 2D MODELS*/ }
      <div className='card-wrapper mb-10'>
        <div className='cards'>
          <img src={ girlrigg } alt="girl" width={ 250 } height={ 250 } />
          <img src={ pinky } alt="girl" width={ 280 } height={ 250 } />
          <img src={ psd } alt="girl" width={ 250 } height={ 250 } />
        </div>
      </div>

      {/* Twitch */ }
      <div className='card-wrapper'>
        <div className='cards mb-2'>
          <img className="m-3" src={ tw1 } alt="girl" width={ 300 } height={ 250 } />
          <img className="m-3" src={ tw2 } alt="girl" width={ 300 } height={ 250 } />
          <img className="m-3" src={ tw3 } alt="girl" width={ 300 } height={ 250 } />
        </div>
      </div>

      {/* pfp */ }
          <div className='card-wrapper'>
            <div className='cards mb-2'>
              <img className="m-3" src={ pfp1 } alt="girl" width={ 450 } height={ 250 } />
              <img className="m-3" src={ pfp2 } alt="girl" width={ 450 } height={ 250 } />
            </div>
          </div>

      {/*Show more   */ }
      <div className="p-2 w-full">
        {/* <Link to="/portfolio"><a href='2dmodels' className="flex w-fit  mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Show More</a></Link> */}

        <a onClick={navigateHandler} href='#design' className="flex w-fit  mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Show More</a>
        
      </div>
    </div>
  )
}

export default Home
