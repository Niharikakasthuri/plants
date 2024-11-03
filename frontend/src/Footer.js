import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Footer = () => {
  const [input,setInput] = useState('')
  const [error,setError] = useState('')
  const [subscribe,setSubscribe] = useState(false)

  const handleInput = (event) => {
    setInput(event.target.value)
    if(event.target.value !== ''){
       setError('')
    }
  }

  const handleBlur = () => {
    if (input === ''){
      setError("*required")
    }
  }
 
  const handleSubmit = (event) => {
    event.preventDefault()
    if(input === ''){
      setError('*required')
    }else{
      setSubscribe(true)
      setInput('')
      setError('')
    }
  }

  return (
    <div className='footer-bg'>
        <form className='footer-align' onSubmit={handleSubmit}>
            <ul className='footer-list'>
                <li><h3>SUBSCRIBE TO OUR NEWSLETTER</h3></li>
                <li><p>Subscribe to our newsletter for the latest gardening tips, exclusive offers, and inspiring ideas to help you
                   create your green paradise. Whether you're a seasoned gardener or just starting out, we have something special for you!</p></li>
                <li><input type = 'text' onBlur={handleBlur} value={input} onChange={handleInput} placeholder='Enter Your Email Address'/></li>
                {error && <li><p style={{color:'red'}}>{error}</p></li>}
                <li>
                  {subscribe ? (
                    <button className='footer-button mt-3 mb-3'>Suscribed <TiTick/></button>
                  ) : (
                    <button className='plant-addbutton mt-3 mb-3'>Suscribe</button>
                  )}
                </li>
        </ul>
        </form>
        <h3>Chaperone</h3>
        <p>At Chaperone, we believe that every home deserves a touch of greenery. Our curated collection features
           a stunning array of plants and stylish pots designed to elevate your living space. From vibrant houseplants
            that purify your air to chic pots that complement any decor, we have everything you need to cultivate your
             indoor garden.</p>
        <h3>FOLLOW US</h3>
        <ul className='footer-iconsalign footer-list'>
            <li className='mr-3'><FaInstagram size={25} />
            </li>
            <li className='mr-3'><FaFacebook size={25}/></li>
            <li className='mr-3'><FaYoutube size={25}/></li>
            <li className='mr-3'><FaLinkedin size={25}/></li>
        </ul>
    </div>
  )
}

export default Footer