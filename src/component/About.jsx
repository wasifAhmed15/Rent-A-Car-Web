import React from 'react'
import { useEffect } from 'react';
import './Component.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import WAbutton from './WAbutton';
export default function About({theme}) {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      offset: 200,
      delay: 100,
    });
  })
  return <>
  <div className="dark:bg-black bg-slate-100 dark:text-white  h-[600px] items-center">

  <div className="container py-5  ">
    <div className="row">
        <div className="col-lg-6 place-item-center  "  data-aos="slide-right"  data-aos-duration="1500">
            <img src="https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='motion rounded hover:drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'/>

</div>
        <div className="col-lg-6 place-item-center pb-5">
          <div className="space-y-5 m-auto ">

          <h1 className="text-3xl font-bold" data-aos="fade-up" data-aos-duration="1500">About</h1>
<p data-aos="fade-up"
              data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet esse eligendi iste laboriosam.</p>
<p data-aos="fade-up"  data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, omnis.</p>
        </div>

        <div className='py-5' data-aos="fade-up"  data-aos-duration="1500">
         <WAbutton title='Get Start' className='bg-orange-400 rounded px-5 py-2 hover:bg-white text-black border rounded transition delay-150 duration-300 ease-in-out '  />
        </div>
          </div>

    </div>

  </div>
  
  </div>
  </>
}
