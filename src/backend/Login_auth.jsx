import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import { auth } from '../config/firebase';




function Login() {
    const [login, setLogin] = useState(false);
    const history=useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

      const [errors, setErrors] = useState({});

      const [isHover,setIsHover]=useState(false);

      const MouseIn=()=>{
       
        setIsHover(true)
      }
      const MouseOut=()=>{
        setIsHover(false)
      }
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const validateEmail = (email) => {
        // Basic email validation using a regular expression
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
      };

      // const handleSend=()=>{
          
      //       navigate.push('/dashboard');
         
      //    .catch((error) =>{
      //     console.error('Error logging in:', error);
      //   }
      // )
      // }
      const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        try{
        await signInWithEmailAndPassword( auth ,formData.email, formData.password)
          .then((data)=>{
            console.log(data,"authdata")
            history("/dashboard")
          })}
          catch(err)  {
            alert(err.code);
          };
        

      if (!formData.email || !validateEmail(formData.email)) {
        newErrors.email = 'Valid Email is required';
      }
      if (!formData.password ){
        newErrors.password = 'Valid Password is required';
      }
// checking if this works 
      if (Object.keys(newErrors).length === 0) {
        // Form is valid, you can submit the data here
        console.log(formData);
      }
      setErrors(newErrors);
    }
  
  return (

    <form onSubmit={handleSubmit} className={` h-screen w-screen bg3 flex flex-col items-center justify-center`}>
        <div className=' bg-white flex flex-col items-center mt-5 justify-center shadow-xl rounded px-8 pt-6 pb-8 mb-4'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`shadow appearance-none border  rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                (errors.email || !validateEmail(formData.email)) ? 'border-red-500' : ''
              }`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pass">
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                (errors.password ) ? 'border-red-500' : ''
              }`}
              type="password"
              id="pass"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-100"
            type="submit"
          >
            Submit
          </button>
        </div>



            </div>
        
        
    </form>
  )
}



export default Login