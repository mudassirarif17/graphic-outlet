import React from 'react'
import contact from '../img/pk.png'

const Contact = () => {
  return (
    <>
      <section className="w-[80vw] mx-auto text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl  mb-4 font-medium text-gray-900">Contact Us.
              {/* <br className="hidden lg:inline-block"/>readymade gluten */ }
            </h1>
            <p className="mb-4 leading-relaxed">We would love to hear from you!</p>
            <p className='mb-4 leading-relaxed'>Whether you have inquiries, feedback, or simply want to connect with us, we are here to listen and engage. Feel free to reach out to us using the following contact information:</p>
            <p className='mb-4 leading-relaxed'>
              Email: graphicoutlets@gmail.com<br/>
              Social Media:<br/>
              Twitter: @graphicoutlets<br/>
              Instagram: graphicoutlets
            </p>
            <p className="mb-4 leading-relaxed">We welcome collaboration opportunities, art commissions, and exhibition requests. If you are interested in acquiring any of the artworks featured in our portfolio or have specific project ideas in mind, please don't hesitate to get in touch. We will be happy to discuss details and provide you with further information.</p>
            <p className="mb-4 leading-relaxed">Thank you for your interest in our art portfolio. We value your support and look forward to hearing from you soon. Let's embark on this artistic journey together!</p>
            <p className='mb-4'>Hit me on <a className='underline font-semibold text-blue-900 hover:text-blue-500 hover:font-bold' href='https://twitter.com/GraphicOutlets' target="__blank">Twitter</a> or <a className='underline font-semibold text-blue-900 hover:text-blue-500 hover:font-bold' href='https://www.instagram.com/graphicoutlets/?igshid=MzRlODBiNWFlZA%3D%3D' target='__blank' >Instagram</a></p>
          </div>
          <div className="lg:max-w-lg lg:w-full h-[800px] md:w-1/2 w-5/6">
            <img className="object-cover w-full h-[600px] object-center rounded" alt="hero" src={ contact } />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
