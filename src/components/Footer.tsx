// import React from 'react'
// import { NavLink } from 'react-router'
import SubscribeForm from './SubscribeForm'

const Footer = () => {
  return (
    <div className="py-12 container">
      {/* <p className="text-center mx-auto max-w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, repudiandae.</p> */}
      <h3 className="font-orbitron font-medium text-2xl text-center tracking-[0.05rem] mb-6">Subscribe to us</h3>
      <SubscribeForm />
    </div>
  )
}

export default Footer