import React from 'react'
import './footer.css';
import { IoLogoInstagram } from 'react-icons/io'
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">&lt;TFrontDev/&gt;</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/tiagocbatista" target="_blank" rel="noreferrer"><IoLogoInstagram /></a>
        <a href="https://api.whatsapp.com/send?phone=5571993553196" target='_blank' rel="noreferrer"><BsWhatsapp /></a>
        <a href="https://www.linkedin.com/in/tiagocb96/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; TFrontDev - Tiago Batista. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
