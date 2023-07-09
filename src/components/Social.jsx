import React from 'react'
import { BsGithub, BsLinkedin, BsWhatsapp} from 'react-icons/bs'

const Social = () => {
  return (
    <div className="lg:hidden  gap-x-5 flex justify-center items-center">
    <a href="/" target="_blank">
      <BsGithub className="hover:text-terciary text-nav" />
    </a>
    <a href="/" target="_blank">
      <BsLinkedin className="hover:text-terciary text-nav" />
    </a>
    <a href="/" target="_blank">
      <BsWhatsapp className="hover:text-terciary text-nav" />
    </a>
  </div>
  )
}

export default Social