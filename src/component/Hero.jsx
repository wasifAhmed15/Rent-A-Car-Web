import React, { useEffect } from 'react'
import './Component.css'
import WAbutton from './WAbutton';
import AOS from 'aos'
// import "aos/dist/aos.css"
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = ({theme}) => {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      offset: 200,
      delay: 100,
    });
  })
  return <>
  <div className="dark:bg-black dark:text-white duration-300">
  <div className="container min-h-[620px] ">
   <div className="row">
    <div className="col-lg-6">
        <div className="py-5 space-y-5">
            <p className='text-orange-400 text-xl font-Serif text-5xl '
             data-aos="fade-up"
             data-aos-duration="1500"
            >Effortless</p>
            <h1 className='font-semibold text-5xl'
            data-aos="fade-down"
            data-aos-duration="1500"
       
            >Car Rental</h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati culpa sit velit magnam aperiam eius?Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div   data-aos="fade-up"
             data-aos-duration="1500">
            <WAbutton title='wow' className=' bg-orange-400 px-5 text-black py-2 rounded-md   transition delay-150 duration-300 ease-in-out hover:bg-primary/80 duration-300 '/>

            </div>
        </div>
        
    </div>
    <div className="col-lg-6 place-items-center">
              <div className="flex justify-content-center py-5">
              <div className="flex justify-content-center py-5"   data-aos="zoom-in"  data-aos-duration="1500">
                <img src={theme === "dark" ? "https://images.pexels.com/photos/38570/lamborghini-car-speed-prestige-38570.jpeg" : "https://images.pexels.com/photos/100650/pexels-photo-100650.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" className=' drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] '
              
                
                />
              </div>
              </div>
            </div>
   </div>
  </div>

  </div>
  
  </>
  
}

export default Hero