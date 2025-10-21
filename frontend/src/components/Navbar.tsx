import React, { useState } from 'react'
import '../Styles/component.styles/Navbar.scss'
import { SiGooglecampaignmanager360 } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import {useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen]=useState<boolean>(false)
  const navigate= useNavigate()

  const togglehumberger =()=>{
    setIsOpen((prev)=> !prev)
  }

  return (
    <div className='container-nav'>
      <div className="logo">
       <span><SiGooglecampaignmanager360 className='logo-icon' /><p>lighty</p></span>
      </div>
      <div className={`menu-container  ${isOpen?'open':''}`}>
        <ul className="list-container">
          <li>Feature</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="btn-nav">
        <SignedOut>
             <button onClick={()=>navigate('/sign-in')}>Sign in</button>
        </SignedOut>

        <SignedIn>
        <UserButton afterSignOutUrl='/'  />
        </SignedIn>
     
        {isOpen? (<IoMdClose className='responsive-bt' onClick={togglehumberger} />):(<FaBars className='responsive-bt' onClick={togglehumberger}/>)}
      </div>
    </div>
  )
}

export default Navbar  


