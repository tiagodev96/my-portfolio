import React from 'react'
import './footer.css';
import { IoLogoInstagram } from 'react-icons/io'
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { i18n } from '../../translate/i18n'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">&lt;TFrontDev/&gt;</a>

      <ul className="permalinks">
        <li><a href="#header">{i18n.t('footer.home')}</a></li>
        <li><a href="#about">{i18n.t('footer.about')}</a></li>
        <li><a href="#experience">{i18n.t('footer.experience')}</a></li>
        <li><a href="#services">{i18n.t('footer.services')}</a></li>
        <li><a href="#portfolio">{i18n.t('footer.portfolio')}</a></li>
        <li><a href="#testimonials">{i18n.t('footer.testimonials')}</a></li>
        <li><a href="#contact">{i18n.t('footer.contact')}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/tiagocbatista" target="_blank" rel="noreferrer"><IoLogoInstagram /></a>
        <a href="https://api.whatsapp.com/send?phone=5571993553196" target='_blank' rel="noreferrer"><BsWhatsapp /></a>
        <a href="https://www.linkedin.com/in/tiagocb96/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {`TFrontDev - Tiago Batista. ${i18n.t('footer.copyright')}`}</small>
      </div>
    </footer>
  )
}

export default Footer
