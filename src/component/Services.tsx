import React from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './Component.css'
import ServiceCards from './ServiceCards';
export default function Services() {
    return <div className='dark:bg-black dark:text-white duration-300'>
        <div className="container">
            <div className='text-3xl font-semibold text-center py-5'>
                <h1>Why Choose Us</h1>
            </div>
            <div className="row   m-auto flex justify-center py-5">
                <div className="col-lg-4 col-md-6 col-sm-12 py-2   space-y-3"    data-aos="fade-up"
              data-aos-duration="1500">
                    <div className="w-100 serviceCard">
                    <ServiceCards icon={<CameraAltIcon className='  fs-1 icon'/>} title='Best Price' discription='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quam sed suscipit! Totam, ut eaque!' Link={"learn more"}/>

                    </div>

                    
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12  py-2  space-y-3"    data-aos="fade-up"
              data-aos-duration="1500">
                    <div className="w-100 serviceCard">

                    <ServiceCards icon={<CameraAltIcon className='  fs-1 icon'/>} title='Best Price' discription='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quam sed suscipit! Totam, ut eaque!' Link={"learn more"}/>
                    </div>

                    
                </div>


                <div className="col-lg-4 col-md-6 col-sm-12  py-2  space-y-3"   data-aos="fade-up"
              data-aos-duration="1500" >
                    <div className="w-100 serviceCard">

                    <ServiceCards icon={<CameraAltIcon className='  fs-1 icon'/>} title='Best Price' discription='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quam sed suscipit! Totam, ut eaque!' Link={"learn more"}/>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>

}
 