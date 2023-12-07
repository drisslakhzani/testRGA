import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { database } from '../../config/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCross, faWrench, faXmark } from '@fortawesome/free-solid-svg-icons'

function Config_Data(props) {

// to set weather you change data or not 
const [modAdress,setAdress]=useState(false)
const [modAdAr,setAdAr]=useState(false)
const [modPhone,setPhone]=useState(false)
const [modEmail,setEmail]=useState(false)
const [modFace,setFace]=useState(false)
const [modInst,setInst]=useState(false)

// this is for opening the modification 
const handleAdress=()=>{
  setAdress(true)
  setAdAr(false)
  setEmail(false)
  setFace(false)
  setPhone(false)
  setInst(false)
}

const handleAdAr=()=>{
  setAdress(false)
  setAdAr(true)
  setEmail(false)
  setFace(false)
  setPhone(false)
  setInst(false)
}
const handlePhone=()=>{
  setAdress(false)
  setAdAr(false)
  setEmail(false)
  setFace(false)
  setPhone(true)
  setInst(false)
}
const handleEmail=()=>{
  setAdress(false)
  setAdAr(false)
  setEmail(true)
  setFace(false)
  setPhone(false)
  setInst(false)
}
const handleFacebook=()=>{
  setAdress(false)
  setAdAr(false)
  setEmail(false)
  setFace(true)
  setPhone(false)
  setInst(false)
}
const handleInstagram=()=>{
  setAdress(false)
  setAdAr(false)
  setEmail(false)
  setFace(false)
  setPhone(false)
  setInst(true)
}


// this is for opening the modification 
const handleQuitAdress=()=>{
  setAdress(false)
}

const handleQuitAdAr=()=>{
  setAdAr(false)
}
const handleQuitPhone=()=>{
  setPhone(false)
}
const handleQuitEmail=()=>{
  setEmail(false)
}
const handleQuitFacebook=()=>{
  setFace(false)
}
const handleQuitInstagram=()=>{
  setInst(false)
}



  // to add the modified data
  const [modifyData,setModifyData]=useState({
    adress:"",
    adress_arabic:"",
    phone:"",
    email:"",
    instagram:"",
    facebook:"",
  })


  // this part for the moment when changing the data 
  const docToUpdate=doc(database,"persoData","68teHqFt8T1Oj5Ud09s3");
  const handleModifying=async()=>{
    try{
      updateDoc(docToUpdate,
        {
          adress:(modifyData.adress?modifyData.adress:props.data.adress),
          adress_arabic:(modifyData.adress_arabic?modifyData.adress_arabic:props.data.adress_arabic),
          phone:(modifyData.phone?modifyData.phone:props.data.phone),
          email:(modifyData.email?modifyData.email:props.data.email),
          facebook:(modifyData.facebook?modifyData.facebook:props.data.facebook),
          instagram:(modifyData.instagram?modifyData.instagram:props.data.instagram),
        })
    }
    catch{

    }
    handleQuitAdress()
    handleQuitAdAr()
    handleQuitPhone()
    handleQuitEmail()
    handleQuitFacebook()
    handleQuitInstagram()

    
  }


  const handleChange=(e)=>{
    const {name,value}=e.target
    setModifyData(a=>({
      ...a,[name]:value
    }))
    console.log(modifyData)
  }






  return (
    <div className='flex bg-slate-300 h-fit w-screen  flex-col justify-center items-center sm:py-6'>
        

      <form action="" className='bg-white p-4'>
          <h1 className='text-2xl underline p-2 text-slate-600 capitalize'>modification des donnees</h1>
          <div className=' flex flex-col justify-center items-start text-black bg-slate-100 p-5 shadow-xl'>


            <span className={`p-3 bg-slate-300 flex flex-col sm:${!modEmail?"flex-row":"flex-col"} items-center justify-evenly w-full rounded-lg mb-3`}>
              <label htmlFor="current_adress">{!modAdress?"L'adresse actuelle":"Nouveau Adress"}:</label>
              {!modAdress&&<input className='p-1' type="text" value={props.data.adress} onChange={handleChange} id='current_adress'name='adress' />}

              {modAdress&&<input className='p-1' type="text" value={modifyData.adress} onChange={handleChange} id='current_adress'name='adress' />}


              <div>
                  {!modAdress&&<button className=' mx-2 text-white p-2 duration-150 rounded  bg-blue-500 hover:bg-blue-700' type='button' onClick={handleAdress}>
                                  <FontAwesomeIcon className='pr-2' icon={faWrench}/> Modifier
                              </button>}

                  {modAdress&&<button className='m-2 text-white p-2 duration-150 rounded  bg-green-500 hover:bg-green-700' type='button' onClick={handleModifying}>
                                  <FontAwesomeIcon className='pr-2' icon={faCheck}/> Appliquer
                                </button>}

                  {modAdress&&<button className='m-2 text-white p-2 duration-150 rounded  bg-red-500 hover:bg-red-700' type='button' onClick={handleQuitAdress}>
                                  <FontAwesomeIcon className='pr-2' icon={faXmark}/>Annuller
                                </button>}
              </div>
            </span>



            <span className={`p-3 bg-slate-300 flex flex-col sm:${!modEmail?"flex-row":"flex-col"} items-center justify-evenly w-full rounded-lg mb-3`}>
              <label htmlFor="current_adress">{!modAdAr?"L'adresse arabic actuelle":"Nouveau Adress Arabic"}:</label>
              {!modAdAr&&<input className='p-1'  type="text" value={props.data.adress_arabic} onChange={handleChange} id='current_adress' name='adress_arabic' />}

              {modAdAr&&<input className='p-1' type="text" value={modifyData.adress_arabic} onChange={handleChange} id='current_adress' name='adress_arabic' />}

              <div>
                  {!modAdAr&&<button className='mx-2 text-white p-2 duration-150 rounded  bg-blue-500 hover:bg-blue-700' type='button' onClick={handleAdAr}>
                                  <FontAwesomeIcon className='pr-2' icon={faWrench}/>Modifier
                              </button>}

                  {modAdAr&&<button className='m-2 text-white p-2 duration-150 rounded  bg-green-500 hover:bg-green-700' type='button' onClick={handleModifying}>
                                  <FontAwesomeIcon className='pr-2' icon={faCheck}/>Appliquer
                              </button>}

                  {modAdAr&&<button className='m-2 text-white p-2 duration-150 rounded  bg-red-500 hover:bg-red-700' type='button' onClick={handleQuitAdAr}>
                                  <FontAwesomeIcon className='pr-2' icon={faXmark}/>Annuller
                              </button>}
              </div>
            </span>


            <span className={`p-3 bg-slate-300 flex flex-col sm:${!modEmail?"flex-row":"flex-col"} items-center justify-evenly w-full rounded-lg mb-3`}>
              <label htmlFor="current_adress">{!modPhone?"Numero Telephone actuelle":"Nouveau num de tele "}:</label>
              {!modPhone&&<input className='p-1' type="text" value={props.data.phone} onChange={handleChange} id='current_adress' name='phone' />}

              {modPhone&&<input className='p-1' type="text" value={modifyData.phone} onChange={handleChange} id='current_adress' name='phone' />}

              <div>
                  {!modPhone&&<button className='mx-2 text-white p-2 duration-150 rounded  bg-blue-500 hover:bg-blue-700' type='button' onClick={handlePhone}>
                                  <FontAwesomeIcon className='pr-2' icon={faWrench}/>Modifier
                                </button>}

                  {modPhone&&<button className='m-2 text-white p-2 duration-150 rounded  bg-green-500 hover:bg-green-700' type='button' onClick={handleModifying}>
                                  <FontAwesomeIcon className='pr-2' icon={faCheck}/>Appliquer
                              </button>}

                  {modPhone&&<button className='m-2 text-white p-2 duration-150 rounded  bg-red-500 hover:bg-red-700' type='button' onClick={handleQuitPhone}>
                                  <FontAwesomeIcon className='pr-2' icon={faXmark}/>Annuller
                              </button>}
              </div>
            </span>


            <span className={`p-3 bg-slate-300 flex flex-col sm:${!modEmail?"flex-row":"flex-col"} items-center justify-evenly w-full rounded-lg mb-3`}>
              <label htmlFor="current_adress">{!modEmail?"L'Email actuelle":"Nouveau Email"}:</label>
              {!modEmail&&<input className='p-1' type="text" value={props.data.email} onChange={handleChange} id='current_adress' name='email' />}

              {modEmail&&<input className='p-1' type="text" value={modifyData.email} onChange={handleChange} id='current_adress' name='email' />}

              <div>
                  {!modEmail&&<button className='mx-2 text-white p-2 duration-150 rounded  bg-blue-500 hover:bg-blue-700' type='button' onClick={handleEmail}>
                                  <FontAwesomeIcon className='pr-2' icon={faWrench}/>Modifier
                                </button>} 

                  {modEmail&&<button className='m-2 text-white p-2 duration-150 rounded  bg-green-500 hover:bg-green-700' type='button' onClick={handleModifying}>
                                  <FontAwesomeIcon className='pr-2' icon={faCheck}/>Appliquer
                              </button>}

                  {modEmail&&<button className='m-2 text-white p-2 duration-150 rounded  bg-red-500 hover:bg-red-700' type='button' onClick={handleQuitEmail}>
                                  <FontAwesomeIcon className='pr-2' icon={faXmark}/>Annuller
                              </button>}
              </div>
            </span>


            <span className={`p-3 bg-slate-300 flex flex-col sm:${!modEmail?"flex-row":"flex-col"} items-center justify-evenly w-full rounded-lg mb-3`}>
              <label htmlFor="current_adress">{!modFace?"L'adresse facebook actuelle":"Nouveau Adress facebook"}:</label>
              {!modFace&&<input className='p-1' type="text" value={props.data.facebook} onChange={handleChange} id='current_adress' name='facebook' />}

              {modFace&&<input className='p-1' type="text" value={modifyData.facebook} onChange={handleChange} id='current_adress' name='facebook' />}

              <div>
                  {!modFace&&<button className='mx-2 text-white p-2 duration-150 rounded  bg-blue-500 hover:bg-blue-700' type='button' onClick={handleFacebook}>
                                  <FontAwesomeIcon className='pr-2' icon={faWrench}/>Modifier
                              </button>}

                  {modFace&&<button className='m-2 text-white p-2 duration-150 rounded  bg-green-500 hover:bg-green-700' type='button' onClick={handleModifying}>
                                  <FontAwesomeIcon className='pr-2' icon={faCheck}/>Appliquer
                            </button>}

                  {modFace&&<button className='m-2 text-white p-2 duration-150 rounded  bg-red-500 hover:bg-red-700' type='button' onClick={handleQuitFacebook}>
                                  <FontAwesomeIcon className='pr-2' icon={faXmark}/>Annuller
                              </button>}
              </div>
            </span>


            <span className={`p-3 bg-slate-300 flex flex-col sm:${!modEmail?"flex-row":"flex-col"} items-center justify-evenly w-full rounded-lg mb-3`}>
              <label htmlFor="current_adress">{!modInst?"L'adresse instagram actuelle":"Nouveau Adress instagram"}:</label>

              {!modInst&&<input className='p-1' type="text" value={props.data.instagram} onChange={handleChange} id='current_adress' name='instagram' />}

              {modInst&&<input className='p-1' type="text" value={modifyData.instagram} onChange={handleChange} id='current_adress' name='instagram' />}

              <div>
                  {!modInst&&<button className='mx-2 text-white p-2 duration-150 rounded  bg-blue-500 hover:bg-blue-700' type='button' onClick={handleInstagram}>
                                  <FontAwesomeIcon className='pr-2' icon={faWrench}/>Modifier
                              </button>}

                  {modInst&&<button className='m-2 text-white p-2 duration-150 rounded  bg-green-500 hover:bg-green-700' type='button' onClick={handleModifying}>
                                  <FontAwesomeIcon className='pr-2' icon={faCheck}/>Appliquer
                            </button>}

                  {modInst&&<button className='m-2 text-white p-2 duration-150 rounded  bg-red-500 hover:bg-red-700' type='button' onClick={handleQuitInstagram}>
                                  <FontAwesomeIcon className='pr-2' icon={faXmark}/>Annuller
                            </button>}
              </div>
            </span>

          </div>

      </form>
        
    </div>
  )
}

export default Config_Data