import React, { useState } from 'react'
import videoBg from "../assets/videoBg.mp4"
import "./App.css"
import logo1 from "../assets/oil/main_img.jpg"
import logo2 from "../assets/sdx/logo.png"
import { Link } from 'react-router-dom'

const Realisation = () => {
    const [isHover,setIsHover]=useState(false);
    const MouseIn=()=>{
      setIsHover(true)
    }
    const MouseOut=()=>{
      setIsHover(false)
    }
  return (
    <div className={`h-fit w-screen relative overflow-hidden  `}>
        <div className='w-screen h-[70vh] overflow-hidden'>
            <div className={` backdrop-blur-xl overlay2`}></div>
            <video  src={videoBg} autoPlay loop muted/>
            <div className='absolute top-0 mt-[200px] h-[70vh] w-screen flex  items-start justify-center p-10 z-40'>
                <span className='flex flex-col items-center text-center justify-between  shadow-white text-white sm:w-[60%]'>
                    <h1 className='uppercase text-5xl drop-shadow-lg  font-[700] p-4'>Nos Realisation</h1>
                    <p className='pl-2 text-lg font-[500] tracking-wide leading-[25px] '>Notre entreprise excelle dans la réalisation de projets variés en génie civil et construction, allant de la construction de plateformes de forage à la restauration de structures existantes. Ces succès témoignent de notre engagement envers la qualité et l'efficacité, renforçant notre réputation dans le secteur. Chaque réalisation atteste de notre expertise et de notre capacité à relever les défis avec succès.</p>
                </span>
            </div>
        </div>
    <aside className='w-screen flex flex-col items-center justify-center'>
            <div className='w-screen h-fit sm:py-20 sm:ml-[300px] sm:px-[100px] flex items-center justify-between'>
                <img className='w-[40%]' src={logo1} alt={logo1} />
                <span className='ml-10 flex flex-col items-start justify-between'>
                    <h1 className='text-6xl font-bold w-[60%] text-yellow-500'>EN 2011 au 2015 : CIRCLE OIL LIMITED </h1>
                    <Link  to={"/projet1"} className={`btn p-2 sm:my-10`}>Afficher les détails du projet</Link>
                </span>
            </div>

            <hr className=' pt-5 w-[70%]'/>

            <div className='w-screen h-fit sm:py-20 sm:ml-[300px] sm:px-[100px] flex items-center justify-center'>
                <img className='' src={logo2} alt={logo2} />
                <span className='ml-10 flex flex-col items-start justify-between '>
                    <h1 className='text-6xl font-bold w-[60%] text-yellow-500'>EN 2017-2018 : SOCIETE SDX ENERGY MOROCCO</h1>
                    <Link   to={"/projet2"} className={`btn p-2 sm:my-10`}>Afficher les détails du projet</Link>
                    
                </span>
            </div>
    </aside>
        
    
    
    </div>
  )
}

export default Realisation