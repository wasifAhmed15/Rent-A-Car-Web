 import  { useEffect } from 'react'
import Navbar from '../component/Navbar'
 import { useState } from 'react'
import Hero from '../component/Hero'
import AOS from 'aos'
import "aos/dist/aos.css"
import About from '../component/About'
import Services from '../component/Services'
import CarList from '../component/CarList'
 export const Home = () => {
  const [theme,settheme] = useState(
    localStorage.getItem("theme") 
    ? localStorage.getItem("theme") 
    : "dark"
  )
  const element = document.documentElement

  useEffect(()=>{
if(theme === "dark"){
  element.classList.add("dark");
  element.classList.remove('light'); 
  localStorage.setItem("theme", "dark");
}else{
  element.classList.remove("dark");
  element.classList.add('light'); 
  localStorage.setItem("theme", "light");
}
  },[theme]);


 

   return <>
   
   <Navbar theme = {theme} settheme={settheme}/>

 <Hero theme={theme}/>

<About theme={theme}/>
   <Services/>

   <CarList/>
   </>



   
 }
 