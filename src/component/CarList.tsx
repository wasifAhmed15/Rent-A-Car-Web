import React from 'react'
import Carlistcomponent from './Carlistcomponent'
import img1 from '../assent/pexels-mike-bird-170811-removebg-preview.png'
import WAbutton from './WAbutton'
export default function CarList() {
  return (
    <div className=' dark:bg-black dark:text-white' style={{paddingBottom:"60px"}}>
        
        <div className="container py-5">
            <div>
                <p className='text-5xl font-semibold'>Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quam molestiae cumque.</p>
            </div>

         
                <div className='row  gap-2 d-flex justify-content-center py-5'>
                    <div className="col-lg-3 col-md-4 mx-1  space-y-4  border-2 border-gray-300   p-3 rounded-xl">
                       <Carlistcomponent  img={img1} name='BMW' Price={100}/>
                    </div>

                    <div className="col-lg-3 col-md-4 mx-1 space-y-4 border-2 border-gray-300 p-3 rounded-xl ">
                       <Carlistcomponent  img={img1} name='BMW' Price={100}/>
                    </div>

                    <div className="col-lg-3 col-md-4 mx-1   space-y-4  border-2 border-gray-300 p-3 rounded-xl ">
                       <Carlistcomponent  img={img1} name='BMW' Price={100}/>
                    </div>

                    <div className="d-flex justify-content-center py-5">
                        <WAbutton title='More Detail...' className='bg-orange-400 rounded px-5 py-2  btnhoverc border rounded'/>
                    </div>

               
            </div>
        </div>
    </div>
  )
}
