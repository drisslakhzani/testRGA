import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { database } from '../../config/firebase';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

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

  const validatePhone = (phone) => {
    // Basic phone number validation using a regular expression
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const clientsCollectionRef=collection(database,"client")

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Valid Email is required';
    }

    if (!formData.phone || !validatePhone(formData.phone)) {
      newErrors.phone = 'Valid Phone number is required';
    }

    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length === 0) {
       addDoc(clientsCollectionRef,{
        firstName:formData.firstName,
        lastName:formData.lastName,
        email:formData.email,
        phone:formData.phone,
        subject:formData.subject,
        message:formData.message
        })
        .then(()=>{alert("data added");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
          })
        .catch((err)=>{alert(err.message)})
      
    }
     

    

    setErrors(newErrors);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-6">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
        <section className='flex flex-col  sm:justify-start sm:flex-row'>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Nom
            </label>
            <input
              className={`shadow appearance-none border rounded sm:w-[110%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.lastName ? 'border-red-500' : ''
              }`}
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="votre nom"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">{errors.lastName}</p>
            )}
          </div>

          <div className="mb-4 ml-[15%]">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              Prénom
            </label>
            <input
              className={`shadow appearance-none border rounded sm:w-[110%]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.firstName ? 'border-red-500' : ''
              }`}
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="votre prenom "
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">{errors.firstName}</p>
            )}
          </div>
        </section>
        

        <section className=' flex-col sm:flex-row'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`shadow appearance-none border sm:w-[100%] rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                (errors.email || !validateEmail(formData.email)) ? 'border-red-500' : ''
              }`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Telephone
            </label>
            <input
              className={`shadow appearance-none border rounded sm:w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                (errors.phone || !validatePhone(formData.phone)) ? 'border-red-500' : ''
              }`}
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="votre telephone"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">{errors.phone}</p>
            )}
          </div>
        </section>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            Sujet
          </label>
          <input
            className={`shadow appearance-none border rounded sm:w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.subject ? 'border-red-500' : ''
            }`}
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Sujet"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs italic">{errors.subject}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.message ? 'border-red-500' : ''
            }`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="  message "
            rows="4"
          />
          {errors.message && (
            <p className="text-red-500 text-xs italic">{errors.message}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-100"
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
