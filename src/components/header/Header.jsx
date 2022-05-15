import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { i18n } from '../../translate/i18n'

const I18N_STORAGE_KEY = 'i18nextLng';

const Header = () => {

  function handleLanguageChangeEnglish() {
    localStorage.setItem(I18N_STORAGE_KEY, 'en-US');
    window.location = '/';
  }

  function handleLanguageChangePortuguese() {
    localStorage.setItem(I18N_STORAGE_KEY, 'pt-BR');
    window.location = '/';
  }

  return (
    <header>
      <div className="container header__container" id="header">
        <h5>{i18n.t('greetings.hiMessage')}</h5>
        <h1>Tiago Batista</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="Me" />
        </div>

        <div className="rightside__bar">
          <div className="languages">
            <p onClick={handleLanguageChangeEnglish}>EN</p>
            <p onClick={handleLanguageChangePortuguese}>PT</p>
          </div>
          <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
      </div>
    </header >
  )
}

export default Header
