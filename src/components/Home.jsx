import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Vback from './main_home';

function Home(ref) {
  const images1 = [
    require('../assets/pic_part1_1.jpg'),
    require('../assets/pic_part1_2.jpg'),
    require('../assets/pic_part1_3.jpg')
  ];
  const images2 = [
    require('../assets/pic_pat2_1.jpg'),
    require('../assets/pic_pat2_2.jpg'),
    require('../assets/pic_pat2_3.jpg'),
    require('../assets/pic_pat2_4.jpg'),
  ];


  const [isHover,setIsHover]=useState(false);
  const[smBar,setSmBar]=useState(false)
  const[smScreen,setSmScreen]=useState(false)
  const [smLayout,setSmLayout]=useState(false)
  const [count, setCount] = useState(1);
  const [countTwo, setCountTwo] = useState(1);

  const MouseIn=()=>{
    setIsHover(true)
  }
  const MouseOut=()=>{
    setIsHover(false)
  }
  const handleSmBar=() => {
    
    if (window.innerWidth <= 1215) {
      setSmBar(true);

    } else {
      setSmBar(false);
    }
  }
  const handleLayout=()=>{
    if (window.innerWidth <= 1115) {
      setSmLayout(true);
      console.log("gg")

    } else {
      setSmLayout(false);
      console.log("ggez")
    }
  }
  const handleBackground=()=>{
    if(window.innerWidth<=900){
      setSmScreen(true)
    }
  }
  const handleBackground2=()=>{
    if(window.innerWidth>900){
      setSmScreen(false)
    }
  }
  useEffect(() => {
    window.addEventListener('resize',handleBackground );

    return () => {
      window.removeEventListener('resize',handleBackground  );
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleLayout  );

    return () => {
      window.removeEventListener('resize',handleLayout  );
    };
  }, []);

  useEffect(() => {
    const handleBackground=()=>{
      if(window.innerWidth<=900){
        setSmScreen(true)
      }
    }
    const handleBackground2=()=>{
      if(window.innerWidth>900){
        setSmScreen(false)
      }
    }
    handleSmBar()
    handleBackground()
    handleBackground2()
    handleLayout()
    
  }, []);

  useEffect(() => {
    window.addEventListener('resize',handleBackground2 );

    return () => {
      window.removeEventListener('resize',handleBackground2);
    };
  },[]);

  // for the counter 
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 3) {
        setCount(prevCount => prevCount + 1);
      } else {
        setCount(1); 
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (countTwo < 3) {
        setCountTwo(prevCount => prevCount + 1);
      } else {
        setCountTwo(1); 
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countTwo]);

console.log(window.innerWidth)

  return (
    <section className="page relative bg-slate-100 overflow-x-hidden">
        {/* the background video */}
        <div >
          <Vback/>
        </div>

        {/* main part in the home section */}
        <div className='bg-slate-100 shadow-lg items-center py-20 px-32 text-xl h-fit flex flex-col '>

          <h1 className='text-center text-sky-600 text-2xl sm:text-4xl font-bold w-screen p-3 flex flex-col'>
            Présentation de Notre Entreprise dans le Génie Civil et la Construction :
          </h1>

          {/* the text  */}
          {!smLayout&&<div className={`${isHover&&"backdrop-blur-sm"} duration-200  relative py-10 z-30 w-screen h-fit  flex flex-col items-center justify-center  `}>
          
          <div onMouseEnter={MouseIn} onMouseLeave={MouseOut} className=' bg-white mt-5 small-bg  h-fit w-4/5 flex shadow-xl '>
            
              <span className=' ml-3 flex flex-col justify-center items-center tracking-[-0.75px]'>

                <p className='ml-4 px-10 text-gray-500 text-lg font-[600]  '>Notre entreprise, spécialisée dans le génie civil et la construction, se distingue par son expertise approfondie dans la réalisation de projets de gros œuvres et de seconds œuvres. Forte d'une gamme complète de services, nous sommes déterminés à offrir des solutions intégrées et de haute qualité à nos clients, couvrant une diversité de besoins allant du terrassement à la construction de plateformes de forage pour le gaz naturel, en passant par la conception de routes, le bétonnage, et bien d'autres domaines. </p>
                
              </span>
              
              <img className='w-[500px] h-[500px] redius' src={images1[count - 1]} alt="#" />

          </div>

          <div onMouseEnter={MouseIn} onMouseLeave={MouseOut} className='tracking-[-0.75px] bg-white mt-5  h-fit w-4/5 small1-bg flex justify-between shadow-xl'>
              
              
              <img className='w-[500px] h-[500px] redius1' src={images2[countTwo - 1]} alt="#" />

              <span className=' ml-3 flex flex-col justify-center items-center'>

                <p className='ml-4 px-10 text-gray-500 text-lg font-[600]  '>Notre engagement envers l'excellence transparaît dans notre capacité à gérer des projets complexes, de la conception à la réalisation, en mettant l'accent sur des normes élevées de qualité, de sécurité et de durabilité. Avec une équipe de professionnels qualifiés et une approche intégrée, nous sommes prêts à relever les défis les plus exigeants du secteur, tout en fournissant des solutions innovantes et sur mesure qui dépassent les attentes de nos clients. </p>
               

              </span>
          </div>

        
      </div>}
        </div>


            

    </section>
  );
}

export default Home;
