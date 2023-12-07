import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBars, faLocationDot, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import NavBar2 from './components/NavBar2';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './backend/pages/Login_auth';
import Main_dash from './backend/pages/Main_dash';
import Localisation from './components/Localisation';
import Realisation from './components/Realisation';
import Projet1 from './components/projects/projet1';
import Projet2 from './components/projects/projet2';
import ScrollTop from './components/ScrollTop';






function App(){
    
    return (
        <main className='page relative sm:overflow-x-scroll overflow-x-hidden'>
        <BrowserRouter >
            <ScrollTop/>
            <NavBar2/>
            
            <Routes>

                <Route path='/' element={<Home/>}/>
                <Route path='/Realisation' element={<Realisation/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/Localisation' element={<Localisation/>}/>
                <Route path='/projet1' element={<Projet1/>}/>
                <Route path='/projet2' element={<Projet2/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path="/dashboard" element={<Main_dash/>} />
                
            </Routes> 
            <Footer/> 
        </BrowserRouter>
        </main>
        
        
    )
}
export default App