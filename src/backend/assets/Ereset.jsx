import React from 'react'

function Ereset() {



  return (
    <form action="" className='bg-white p-4'>
        <div className=' flex flex-col justify-center items-start text-black bg-slate-100 p-5 shadow-xl'>

        <span className={`p-3 bg-slate-300 flex flex-col sm:flex-row items-center justify-evenly w-full rounded-lg mb-3`}>
              <label htmlFor="current_adress">Nouveau Adress:</label>
              <input className='p-1' type="text" value={props.data.adress} onChange={handleChange} id='current_adress'name='adress' />

              <div>

              <button className=' mx-2 text-white p-2 duration-150 rounded  bg-blue-500 hover:bg-blue-700' type='button' onClick={}>
                    <FontAwesomeIcon className='pr-2' icon={faWrench}/> Modifier
                </button>
              </div>
              </span>
        </div>
    
    
    
    
    </form>
  )
}

export default Ereset