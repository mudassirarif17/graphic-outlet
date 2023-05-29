import React from 'react'
import about from "../img/about.png"

const About = () => {
  return (
    <>
    <section className="text-gray-600 body-font overflow-hidden ">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-1/2 h-64 object-cover object-center rounded" src={about}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">GRAPHIC OUTLETS</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Welcome to Graphics Outlet!
</h1>
        <div className="flex mb-4">
          <span className="flex ">
          {/* <a href='https://facebook.com/GraphicOutlets' target="__blank" class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a> */}
      <a href='https://twitter.com/GraphicOutlets' target="__blank" class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a href='https://www.instagram.com/graphicoutlets/?igshid=MzRlODBiNWFlZA%3D%3D' target='__blank' class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
          </span>
        </div>
        <p className="leading-relaxed pb-6">Here, we are passionate about the limitless possibilities of digital art. We believe that technology has revolutionized the art world, opening up new avenues for creativity and self-expression. Our digital artworks are a testament to the power of digital tools and their ability to bring imagination to life.</p>

        <p className="leading-relaxed pb-6">With a deep love for art and technology, we seamlessly merge the two worlds to create captivating and visually stunning pieces. Our digital art is a fusion of traditional art techniques and digital manipulation, resulting in a unique and contemporary aesthetic that pushes boundaries and challenges conventions.</p>

        <p className="leading-relaxed">Using advanced software and cutting-edge techniques, we manipulate colors, shapes, textures, and lighting to create dynamic and captivating compositions. We enjoy experimenting with different styles, from bold and vibrant to subtle and ethereal, always striving to evoke emotions and provoke thought in the minds of our audience.
      </p>
        <p className="leading-relaxed">Thank you for visiting our digital art website. We invite you to explore our Portfolio and experience the wonder and innovation of digital art. Feel free to reach out to us for inquiries, collaborations, or simply to share your thoughts. Together, let's embrace the digital realm and celebrate the endless possibilities of digital art.
      </p>

        <div className="flex">
          {/* <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Button</button> */}
          {/* <button className="rounded-full ml-auto w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default About
