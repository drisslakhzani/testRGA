import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { database } from '../config/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faLocationDot, faPhone, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

function Footer() {

  const [adress,setAdress]=useState("")
  const [phone_2,setPhone_2]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")

  useEffect(()=>{
    const getData= ()=>{
      try{
      // const data= await getDocs(clientsCollectionRef)
      // const filteredData=data.docs.map(doc=>({
      //     ...doc.data(),id:doc.id
      // }))
      const persoInfoCollectionRef=collection(database,"persoData")
       onSnapshot(persoInfoCollectionRef,(data)=>{
          const dataP= data.docs.map((item)=>({
              ...item.data(),id:item.id
          }))
          setAdress(dataP[0].adress)
          setPhone_2(dataP[0].fixe)
          setPhone(dataP[0].phone)
          setEmail(dataP[0].email)
         
          
      })
      
      }catch(err){
          console.error(err)
      }

      
  }
  getData()
  },[]
  )

  return (
    <section className='flex flex-col items-center  bg-gray-600 overflow-hidden  '>
      <div className='flex flex-col justify-around items-center pt-10  sm:py-10  sm:flex-row '>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.6562187473723!2d-6.8496592245712025!3d34.00136302041573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c8f49f41adf%3A0x353e339b347503b3!2sn%C2%B04%2C%2015%20Av.%20Al%20Abtal%2C%20Rabat%2010000!5e0!3m2!1sfr!2sma!4v1701736454816!5m2!1sfr!2sma" className="mt-6 sm:mt-0 border-0 w-screen h-[300px] sm:w-[40%] sm:pr-[5%]"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <aside>
          
        <div className='flex flex-col  items-center text-md sm:text-lg  w-fit  p-[2%]'>
                    {/* this is for adresses */}
                    <div className="py-3 flex  items-start bg-slate-100 rounded-lg shadow-md p-2 mt-4 sm:mt-0">
                        <FontAwesomeIcon className="text-blue-800 pr-3" icon={faLocationDot} />
                        <span className='text-gray-700 leading-tight   '>{adress}</span>
                    </div>

                    <div className="py-2 flex mt-3 bg-slate-100 rounded-lg shadow-md p-2">
                        <FontAwesomeIcon className="text-blue-800 pr-2" icon={faPhoneSquare} />
                        <span className='text-gray-700 leading-tight w-fit '>{phone_2}</span>
                    </div>     
                    
                    {/* this is for number phone */}
                    <div className="py-3 flex items-start mt-3 bg-slate-100 rounded-lg shadow-md p-2">
                        <FontAwesomeIcon className="text-blue-800 pr-2" icon={faPhoneSquare} />
                        <span className='text-gray-700 leading-tight '>{phone}</span>
                    </div>

                    {/* this is for email adress */}
                    <div className="py-3 flex items-start mt-3 bg-slate-100 rounded-lg shadow-md p-2">
                        <FontAwesomeIcon className="text-blue-800 pr-2" icon={faEnvelopeSquare} />
                        <span  className='text-gray-700 leading-tight '>{email}</span>
                    </div>
                    </div>
        </aside>
        
        <aside className='mt-5 flex text-white flex-col w-full sm:w-1/3 items-center '>
          <h1 className='font-bold text-2xl sm:text-xl'>Contactez-nous</h1>
          <p className='text-sm py-2 w-4/6' >Pour nous contacter, veuillez remplir le formulaire en cliquant sur le bouton dédié à la rubrique "Contact". Nous vous assurons une réponse rapide de la part de notre équipe.</p>
          <Link className="bg-white text-blue-800 rounded-sm mt-5 p-3 hover:bg-blue-800 hover:text-white font-bold duration-200  text-lg  " to="/Contact">
            Contact
          </Link>
        </aside>

      </div>
      <div className='bg-blue-900 flex items-center text-white capitalize justify-center w-screen p-3'> <span>&copy;</span>all copyrights preserved</div>
      
    </section>
    
  )
}

export default Footer