import React, { useEffect, useState } from 'react'
import videoBg from "../assets/videoBg.mp4"
import "./App.css"
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { faAngleDown, faAngleUp, faLocation, faLocationDot, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './contact/ContactForm';



function Contact() {
    return (
      <section className="bg bg-opacity-20 bg-gray-900 text-white overflow-x-hidden"
      >
  
        <div className=" flex items-center justify-center w-screen h-fit shadow-lg py-5 " >

          <div className={`backdrop-blur-lg -z-10  overlay`}></div>

          <video className='w-screen h-screen -z-20 bg-center absolute' src={videoBg} autoPlay loop muted/>

          <aside className=' backdrop-blur-lg flex flex-col justify-center items-center mt-10  text-slate-600   p-2 h-fit w-screen  shadow-xl'>
              <h2 className=" p-5 text-2xl sm:text-4xl uppercase font-bold text-white drop-shadow-lg ">Contactez-Nous</h2>
              <hr className=' pt-5 w-[70%]'/>
        
                <div className="flex flex-col  items-center justify-center  ">
                  
                  <p className="text-white mb-8 text-left w-[70%] sm:w-[50%]">
                    Pour nous contacter, veuillez remplir le formulaire en cliquant sur le bouton dédié à la rubrique "Contact". Nous vous assurons une réponse rapide de la part de notre équipe.
                  </p>

                  <hr className=' pt-5 w-[70%]'/>

                  <div className=" flex flex-col items-center w-[90%] sm:w-[70%] px-[2%]">

                    <ContactForm />

                  </div>
                </div>
          </aside>
          


        </div>
      </section>
    );
  }
  
  

export default Contact