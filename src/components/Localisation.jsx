import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { database } from '../config/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faLocationDot, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Localisation() {

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
    <section className='w-screen h-fit  flex items-center justify-center py-20'>

        <div className='mt-[20%] lg:mt-[4%] sm:mt-[10%] py-10  flex flex-col items-center justify-center h-fit w-[95%] bg-slate-50 shadow-xl'>
            <h1 className=' p-2 text-4xl uppercase font-bold text-blue-900 drop-shadow-lg '>Localisation</h1>
            <hr className=' p-5 w-[70%]' />

            <aside className='flex flex-col  justify-evenly items-center  w-screen  '>
            

                <div className='flex flex-col items-center w-[90%] sm:w-[70%] p-[2%]'>
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
                    <hr className='w-[70%] mt-6' />
                    <span className='w-[80%] sm:w-[60%] mt-3 '>
                        <p className='text-left p-3'>
                            Pour nous contacter, veuillez remplir le formulaire en cliquant sur le bouton dédié à la rubrique "Contact". Nous vous assurons une réponse rapide de la part de notre équipe.
                        </p>
                        <Link className='ml-2 p-2 text-center shadow-blue-700 text-white font-bold bg-blue-700 hover:bg-blue-800 hover:shadow-blue-800' to="/contact">Nous Contacter</Link>
                    </span>
                    

                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.6562187473723!2d-6.8496592245712025!3d34.00136302041573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c8f49f41adf%3A0x353e339b347503b3!2sn%C2%B04%2C%2015%20Av.%20Al%20Abtal%2C%20Rabat%2010000!5e0!3m2!1sfr!2sma!4v1701736454816!5m2!1sfr!2sma"  className=' border-0 w-screen h-[300px] sm:h-[400px] px-[5%]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </aside>
        </div>

    </section>
  )
}

export default Localisation