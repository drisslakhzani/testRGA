import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, database} from '../../config/firebase'
import { signOut } from 'firebase/auth'
import { collection, getDocs , onSnapshot } from 'firebase/firestore'
import Clients from '../assets/Clients'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Config_Data from '../assets/Config_Data'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
function Main_dash() {
    const [isShown,setIsShown]=useState(false)
    const [isShownClients,setIsShownClients]=useState(true)
    const [clients,setClients]=useState([])
    const [dataPerso,setDataPerso]=useState([])
    const clientsCollectionRef=collection(database,"client")
    const persoInfoCollectionRef=collection(database,"persoData")
    const handleModify=()=>{
        setIsShown(true)
        setIsShownClients(false)
    }
    const handleClients=()=>{
        setIsShownClients(true)
        setIsShown(false)

    }


    useEffect(()=>{
        // thsi one is for clients 
        const getClientsList= async ()=>{
            try{
            // const data= await getDocs(clientsCollectionRef)
            // const filteredData=data.docs.map(doc=>({
            //     ...doc.data(),id:doc.id
            // }))
            await onSnapshot(clientsCollectionRef,(data)=>{
                const users= data.docs.map((item)=>({
                    ...item.data(),id:item.id
                }))
                const identifs=data.docs.map((item)=>{
                    return item.id
                })
                setClients(users)
                console.log(clients)
                
            })
            
            }catch(err){
                console.error(err)
            }
    
            
        }
        // this one for modifying the data (perso)
        const getData= async ()=>{
            try{
            // const data= await getDocs(clientsCollectionRef)
            // const filteredData=data.docs.map(doc=>({
            //     ...doc.data(),id:doc.id
            // }))
            await onSnapshot(persoInfoCollectionRef,(data)=>{
                const dataP= data.docs.map((item)=>({
                    ...item.data(),id:item.id
                }))
                setDataPerso(dataP)
                console.log(dataPerso)
               
                
            })
            
            }catch(err){
                console.error(err)
            }
    
            
        }
        getData()
        getClientsList()
    }
        ,[])
        
       


// it runs auto when the page is loaded
// useEffect(()=>{
//     const getClientsList= async ()=>{
//         try{
//         const data= await getDocs(clientsCollectionRef)
//         const filteredData=data.docs.map(doc=>({
//             ...doc.data(),id:doc.id
//         }))
//         setClients(filteredData)
//         console.log(data.docs.id)
//         console.log(filteredData)
//         }catch(err){
//             console.error(err)
//         }
//     }
//     getClientsList()
// },[]

// )
   

    const history = useNavigate()

    const handleClick = async () =>{
        await signOut(auth).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
  return (
    <div className='bg-slate-300 h-fit w-screen text-white flex flex-wrap flex-row  items-start sm:items-center '>

        <div className='flex flex-row  w-screen  h-fit  justify-between pl-3 pb-3 pt-40 text-white items-center  bg-slate-400 shadow-xl'>

            <h1 className=' text-xl sm:text-3xl text-slate-200 uppercase '>dashboard</h1>
            <span className='flex flex-row pr-10 items-center'>
                <h1 onClick={handleClients} className={` capitalize text-black px-4  hover:cursor-pointer hover:underline ${isShownClients&&"underline"}`}>clients </h1>
                <h1 onClick={handleModify} className={` capitalize text-black  hover:cursor-pointer hover:underline ${isShown&&"underline"}`}>modifier les infos </h1> 
                <button type='button' className='p-2 text-center ml-7 ' onClick={handleClick}>Deconnecter <FontAwesomeIcon icon={faPowerOff}/></button>
            </span>
            
            
        </div>

        {isShownClients&&<div className='flex  justify-center items-center   py-10 '>
                <Clients data={clients}/>   
        </div>}
        {!isShownClients&&<div className='flex items-center justify-center'>
            <Config_Data data={dataPerso[0]}/>
        </div>}
            
    </div>
  )
}

export default Main_dash