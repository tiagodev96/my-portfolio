import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram, BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/tiagocb96/" target="__blank"><BsLinkedin/></a>
        <a href="https://github.com/tiagodev96" target="__blank"><BsGithub/></a>
        <a href="https://instagram.com/tfrontdev" target="__blank"><BsInstagram/></a>
        <a href="https://wa.me/5571993553196" target="__blank"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials
