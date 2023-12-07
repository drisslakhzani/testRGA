import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { auth, database} from '../../config/firebase'
import React from 'react'
import { deleteDoc, doc } from 'firebase/firestore'
 
function Clients(props) {

  const handleDelete = async(id)=>{
    const deleteClient=doc(database,"client",id)
    await deleteDoc(deleteClient)
    console.log("deleted")
  }


  return (
    <div className='flex flex-row flex-wrap justify-center  '>
    {props.data.map((a) => (
      <div key={a.id} className='bg-white shadow-lg p-4 rounded-lg m-2'>
        <div className='mb-4'>
          <p className=' font-semibold p-1 text-gray-800'>Nom Complet:</p>
          <p className='bg-slate-200 pl-2 rounded text-slate-700'>{`${a.firstName} ${a.lastName}`}</p>
        </div>
  
        <div className='mb-4'>
          <p className=' font-semibold p-1 text-gray-800'>Numéro de téléphone:</p>
          <p className='bg-slate-200 pl-2 rounded text-slate-700'>{a.phone}</p>
        </div>S
  
        <div className='mb-4'>
          <p className=' font-semibold p-1 text-gray-800'>Adresse Email:</p>
          <p className='bg-slate-200 pl-2 rounded text-slate-700'>{a.email || "Non"}</p>
        </div>
  
        <div className='mb-4'>
          <p className=' font-semibold p-1 text-gray-800'>Sujet:</p>
          <p className='bg-slate-200 pl-2 rounded text-slate-700'>{a.subject}</p>
        </div>
  
        <div>
          <p className=' font-semibold p-1 text-gray-800'>Message:</p>
          <p className='bg-slate-200 pl-2 rounded text-slate-700'>{a.message}</p>
        </div>
        <button  onClick={()=>(handleDelete(a.id))} className='rounded-lg m-2 bg-red-400 hover:bg-red-500 p-2 '>Supprimer<FontAwesomeIcon className='pl-2' icon={faTrash}/> </button>
      </div>
    ))}
  </div>
  )
}

export default Clients