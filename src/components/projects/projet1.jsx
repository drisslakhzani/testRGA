import React, { useEffect, useState } from 'react'
import videoBg from "../../assets/videoBg.mp4"
import main from "../../assets/oil/main_img.jpg"
import travail_1 from "../../assets/oil/travail_1.jpg"
import travail_2 from "../../assets/oil/travail_2.jpg"
import travail_3 from "../../assets/oil/travail_3.png"
const Projet1 = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [count, setCount] = useState(1);
  const handleSmall = () => {
    if (window.innerWidth <= 500) {
      setIsSmall(true);
    }
    else (
      setIsSmall(false)
    );
  };

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setIsSmall(true);
    }
    else (
      setIsSmall(false)
    );
  },

    []);

  useEffect(() => {
    window.addEventListener("resize", handleSmall);
    return (
      window.removeEventListener("resize", handleSmall)
    );
  },

    []);

      // for the counter 
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 3) {
        setCount(prevCount => prevCount + 1);
      } else {
        setCount(1); 
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  const images=[
    require('../../assets/oil/travail_4-1.png'),
    require('../../assets/oil/travail_4-2.png'),
    require('../../assets/oil/travail_4-3.png'),
  ]

  return (
    <div className={`h-fit w-screen relative overflow-y-hidden flex flex-col items-center  `}>

      <div className='w-screen h-[64vh] relative overflow-hidden'>
            <div className={` backdrop-blur-2xl overlay3`}></div>
            <video  src={videoBg} autoPlay loop muted/>
            <div className='absolute top-0 mt-[50px] h-fit w-screen flex  items-start justify-between  z-40'>
                <span className='flex items-center  text-center shadow-white text-white '>
                    <img className='' src={main} alt={main} />
                    <h1 className='uppercase text-5xl drop-shadow-lg sm:ml-10 sm:leading-[60px]  font-[700] p-3'> CIRCLE OIL LIMITED</h1>
                </span>
            </div>
      </div>
      
      <aside className='w-screen h-fit py-10 '>

        <div className='w-screen h-fit shadow-lg bg-white flex flex-col sm:flex-row justify-evenly items-center sm:px-12 my-5'>

            <img className='w-screen sm:w-[30%] rounded-lg pb-3' src={travail_1} alt={travail_1} />

            <p className='text-left h-fit pb-3 w-[90%] sm:w-[50%] font-[600] text-[20px] text-slate-700 '>
              Travaux de génie civil pour construction de plateformes de forage et 
              l’aménagement des pistes d’accès pour l’amenée et le repli du matériel sur les 
              chantiers des forages à DAR GUEDDARI permis SEBOU et LALLA MIMOUNA.
            </p>
        </div>

        <div className='w-screen h-fit shadow-lg bg-white flex flex-col sm:flex-row justify-evenly items-center sm:px-12 my-10'>

          {isSmall && <img className='w-screen sm:w-[40%] pb-3' src={travail_2} alt={travail_2} />}

          <p className='text-left h-fit pb-3 w-[90%] font-[600] sm:w-[50%] text-[20px] text-slate-700 '>
            Construction des routes d’accès aux plateformes de plus que 20Km 
          </p>

          {!isSmall && <img className='sm:w-[25%] pb-3 rounded-lg' src={travail_2} alt={travail_2} />}
        </div>

        <div className='w-screen h-fit shadow-lg bg-white flex flex-col sm:flex-row justify-evenly items-center sm:px-12 my-5'>

            <img className='w-screen sm:w-[30%] rounded-lg pb-3' src={travail_3} alt={travail_3} />

            <p className='text-left h-fit pb-3 w-[90%] sm:w-[50%] font-[600] text-[20px] text-slate-700 '>
                Travaux d’installation et de soudage de pipe de 8¨ d’une longueur de 35 km 

            </p>
        </div>

        <div className='w-screen h-fit shadow-lg bg-white flex flex-col sm:flex-row justify-evenly items-center sm:px-12 my-10'>

          {isSmall && <img className='w-screen sm:w-[40%] pb-3' src={images[count - 1]} alt={images[count - 1]} />}

          <p className='text-left h-fit pb-3 w-[90%] font-[600] sm:w-[50%] text-[20px] text-slate-700 '>
            Travaux de connexion des puits aux réseaux existant de gaz naturel 
          </p>

          {!isSmall && <img className='sm:w-[25%] pb-3 rounded-lg' src={images[count - 1]} alt={images[count - 1]} />}
        </div>

      

      </aside>

      <div className='py-5 px-[100px] bg-slate-50 w-[70%] shadow-lg mb-10'>
        <h1 className='text-4xl text-sky-600 text-center capitalize font-[700]'>Puits de forage :</h1>
        <ul className='text-center text-2xl font-[500]' >
          <li className='my-4'>LNB-1, LMS-1, ANS-2, NFA et LMS-2 LALLA MIMOUNA</li>
          <li className='my-4'>KSR-A, KSR-10, KSR-11, KSR- 16, KSR-14, KSR- 17 BELKSIRI</li>
          <li className='my-4'>CGD-13, CGD-10, CGD-11, CGD-12 DAR GUEDDARI</li>
        </ul>
      </div>
    </div>
    
  )
}

export default Projet1