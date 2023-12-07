import React, { useState } from 'react'
import videoBg from "../assets/videoBg.mp4"
import "./App.css"

const Vback = () => {
  const [isHover,setIsHover]=useState(false);
  const MouseIn=()=>{
    setIsHover(true)
  }
  const MouseOut=()=>{
    setIsHover(false)
  }
  return (
    <div className={` main overflow-y-hidden `}>
        <div className={` ${isHover&&"backdrop-blur-lg "} overlay`}></div>
            <video src={videoBg} autoPlay loop muted/>
            <div onMouseEnter={MouseIn} onMouseLeave={MouseOut} className={`content text-center font-bold text-white`}>
                <h1 className='text-5xl w-[60%] leading-[60px]'>RGA Building: Excellence in Construction et Travaux Génie Civil</h1>
                <p className='text-xl font-normal w-[70%] mt-10'>Bienvenue chez RGA Building, où la précision rencontre l'excellence dans la Construction et les Travaux de Génie Civil, y compris la Plateforme de Forage. Notre expertise s'étend aux Travaux minutieux de Chaudronnerie, de Soudure et de Tuyauterie de Gaz Naturel. Votre vision est notre priorité, alors unissons nos forces pour construire un avenir marqué par la qualité et l'innovation.</p>
            </div>
        
        
    </div>
  )
}

export default Vback