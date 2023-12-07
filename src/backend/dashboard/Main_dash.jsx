import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, database} from '../../config/firebase'
import { signOut } from 'firebase/auth'
import { collection, getDocs , onSnapshot } from 'firebase/firestore'
import Clients from './Clients'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Main_dash() {
    const [isShown,setIsShown]=useState(false)
    const [clients,setClients]=useState([])
    const clientsCollectionRef=collection(database,"client")

    const handleShow=()=>{
        setIsShown(true)
    }
    const handleUnShow=()=>{
        setIsShown(false)
    }


    useEffect(()=>{
        const getClientsList= async ()=>{
            try{
            // const data= await getDocs(clientsCollectionRef)
            // const filteredData=data.docs.map(doc=>({
            //     ...doc.data(),id:doc.id
            // }))
            await onSnapshot(clientsCollectionRef,(data)=>{
                const users= data.docs.map((item)=>{
                    return item.data()
                })
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
    <div className='bg-slate-300 h-screen w-screen text-white flex flex-wrap flex-row items-center justify-center'>
        <div>
                <Clients data={clients}/>   
        </div>
            
    </div>
  )
}

export default Main_dash