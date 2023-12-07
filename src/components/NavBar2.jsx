
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBars, faLocationDot, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar2() {
  const [smallerBar,setSmallerbar]=useState(false)
  const [showNav,setShowNav]=useState(false)
  const [facebook,setFacebook]=useState("")
  const [instagram,setInstagram]=useState("")
  const [main,setMain]=useState(false)
  const [soins,setSoins]=useState(false)
  const [spec,setSpec]=useState(false)

  const handleMain=()=>{
    setMain(true)
    setSoins(false)
    setSpec(false)
  }
  const handleSoins=()=>{
    setMain(false)
    setSoins(true)
    setSpec(false)
  }
  const handleSpec=()=>{
    setMain(false)
    setSoins(false)
    setSpec(true)
  }




  const showNavBar=()=>{
      setShowNav(!showNav)
  }


 const handleSmallBar=()=>{
    if(window.innerWidth<=1174){
      setSmallerbar(true)
    }else{
      setSmallerbar(false)
    }
 }
useEffect(()=>{
  window.addEventListener("resize",handleSmallBar)
  handleSmallBar()
  console.log(smallerBar)
  return(
      window.removeEventListener("resize",handleSmallBar)
  )
},[])
    

  return (
    <section className='fixed z-50 w-screen bg-white h-fit shadow-lg'>

         {/* the new navbar that contains two parts  */}
    <div className='flex items-center pt-2  ml-2 sm:px-20 '>
      {/* for the logo */}
       <span className='sm:w-1/3 w-screen pt-2 -mt-5 flex items-center justify-start   '>
       {!showNav&& <img className='w-[25%]' src="./images/logo.png" alt="" />}
          {!showNav&&<p className='text-centr text-m w-[80%] sm:w-[55%] font-bold text-gray-600'>Entreprise de Travaux Construction & Travaux Divers</p>}
       </span>

       {/* for the opening and the exiting of the navigation bar  */}
       { smallerBar&&<div>
        {!showNav&&<span  className='p-3 text-slate-600 text-xl hover:text-sky-700'>
          <FontAwesomeIcon onClick={showNavBar} icon={faBars}/>
        </span> }
        {showNav&&<span  className='p-3 text-slate-600 text-xl hover:text-sky-800 '>
          <FontAwesomeIcon onClick={showNavBar} icon={faXmark}/>
        </span> }
       </div> }
       
        {/* for the rest of the bar */}
        {!smallerBar&& <span className='w-2/3 -mt-3'>
            <aside className='flex items-center justify-end'>
            <span className="flex items-center justify-center mr-2  h-fit">
              <a className='text-2xl text-gray-600 mx-1' href={""}><FontAwesomeIcon
                  className="p-1 cursor-pointer hover:text-black duration-200"
                  icon={faFacebook}/> </a>

              <a className='text-2xl text-gray-600 mx-1' href={""}><FontAwesomeIcon
                className="p-1 cursor-pointer hover:text-black duration-200"
                icon={faInstagram}/> </a>

              <Link className='text-white mx-3 w-fit active:underline  flex items-center bg-sky-600 text-md  duration-150 py-1 px-4 rounded-full hover:bg-yellow-500 hover:shadow-yellow-500 shadow-lg  hover:shadow-lg ' to="/contact"><FontAwesomeIcon className='pr-2 text-xl' icon={faEnvelope}/> Nous contacter </Link>

              <Link className='text-sky-700 w-fit flex items-center ml-3 mr-5 bg-white text-md shadow-lg border-2 hover:text-white hover:bg-sky-600 duration-150 py-1 px-4 hover:shadow-sky-600  hover:shadow-lg hover:border-0 rounded-full' to="/Localisation"><FontAwesomeIcon  className='pr-2 text-xl' icon={faLocationDot}/> Nous trouver</Link>
              
              <a className='text-blue-600 ' href="#"><FontAwesomeIcon icon={faSearch}/></a>

              <select className='ml-2 px-3' name="lang" id="lang">
                <option value="french">
                   Francais
                </option>
                <option value="french">
                   Arabic
                </option>
              </select>
            </span>
            </aside>

            <aside className=' mt-2 flex justify-center items-center ml-20'>
                <ul className='flex items-center justify-center'> 
                  <li>
                    <Link onClick={handleMain} to={"/"} className={`nav ${main&&"underline text-sky-700"} `}>Acceuil</Link>
                  </li>
                  <li>
                    <Link onClick={handleSoins} to={"/Realisation"} className={`nav ${soins&&"underline text-sky-700"} `}>Nos Realisations</Link>
                  </li>
                  <li>
                    <Link onClick={handleSpec} to={"/Specialities"} className={`nav ${spec&&"underline text-sky-700"} `}>Spécialités</Link>
                  </li>
                </ul>
            </aside>
        </span> }

    </div>






    {<div className={`flex flex-col items-center justify-start w-screen  sm:w-[25%] bg-slate-200      absolute ${showNav?"-mr-[0px]":"-mr-[400px]"} right-0 h-screen duration-200`}>

          <span className='pt-10 flex  items-center justify-center'>
            <img className='w-[25%]' src="./images/logo.png" alt="" />
            <p className='text-centr w-[70%] font-bold text-gray-600'>Entreprise de Travaux Construction & Travaux Divers</p>
          </span>

    
      <aside className=' mt-2 flex  justify-center items-center -ml-10'>
                <ul className='flex flex-col text-2xl font-bold  items-center justify-center'>
                  <li  className='mt-4'>
                    <Link onClick={showNavBar}  to={"/"} className='nav p-2 text-2xl font-bold '>Acceuil</Link>
                  </li>
                  <li className='mt-4'>
                    <Link onClick={showNavBar} to={"/Realisation"} className='nav p-2 '>Nos realisation</Link>
                  </li>
                  <li className='mt-4'>
                    <Link onClick={showNavBar} to={"/Specialities"} className='nav p-2 '>Spécialités</Link>
                  </li>
                </ul>
      </aside>

      <span className="flex flex-col items-center justify-center mt-10  h-fit">
              
              <Link onClick={showNavBar} className='text-white my-2 mx-3 w-fit active:underline  flex items-center bg-sky-600 text-md hover:bg-yellow-500 duration-150 py-1 px-4 rounded-full hover:shadow-yellow-500 shadow-lg  hover:shadow-lg ' to="/contact"><FontAwesomeIcon className='pr-2 text-xl' icon={faEnvelope}/> Nous contacter </Link>

              <Link onClick={showNavBar} className='text-sky-600 my-2 w-fit flex items-center ml-3 mr-5 bg-white text-md shadow-lg border-2 hover:text-white hover:bg-sky-600 duration-150 py-1 px-4 hover:shadow-sky-600  hover:shadow-lg hover:border-0 rounded-full' to="/Localisation"><FontAwesomeIcon  className='pr-2 text-xl' icon={faLocationDot}/> Nous trouver</Link>

              <span className='text-gray-600 mt-3'>
                <p className=' capitalize'>
                  Notre reseaux sociaux
                </p>
                <div className='flex justify-center'>
                  <a onClick={showNavBar} className='text-2xl  mx-' href={""}><FontAwesomeIcon
                      className="p-1 cursor-pointer hover:text-sky-600 duration-200"
                      icon={faFacebook}/> </a>

                  <a onClick={showNavBar} className='text-2xl mx-1' href={""}><FontAwesomeIcon
                    className="p-1 cursor-pointer hover:text-sky-600 duration-200"
                    icon={faInstagram}/> </a>
                </div>
                
              </span>
             

              
      </span>

    </div>}
    </section>
    
  )
}

export default NavBar2