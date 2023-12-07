import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Clients(props) {
  return (
    <div className='ml-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {props.data.map((a) => (
      <div key={a.id} className='bg-white shadow-lg p-4 rounded-lg'>
        <div className='mb-4'>
          <p className=' font-semibold p-1 text-gray-800'>Nom Complet:</p>
          <p className='bg-slate-200 pl-2 rounded text-slate-700'>{`${a.firstName} ${a.lastName}`}</p>
        </div>
  
        <div className='mb-4'>
          <p className=' font-semibold p-1 text-gray-800'>Numéro de téléphone:</p>
          <p className='bg-slate-200 pl-2 rounded text-slate-700'>{a.phone}</p>
        </div>
  
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
        <button  className='rounded-lg m-2 bg-red-400 hover:bg-red-500 p-2 '>Supprimer<FontAwesomeIcon className='pl-2' icon={faTrash}/> </button>
      </div>
    ))}
  </div>
  )
}

export default Clients