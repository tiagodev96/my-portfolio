import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { i18n } from '../../translate/i18n'

const Services = () => {
  return (
    <section id="services">
      <h5>{i18n.t('services.sectionPreTitle')}</h5>
      <h2>{i18n.t('services.sectionTitle')}</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>{i18n.t('services.uiux.title')}</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>{i18n.t('services.uiux.serviceOne')}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{i18n.t('services.uiux.serviceTwo')}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{i18n.t('services.uiux.serviceThree')}</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>{i18n.t('services.webDevelopment.title')}</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>{i18n.t('services.webDevelopment.serviceOne')}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{i18n.t('services.webDevelopment.serviceTwo')}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{i18n.t('services.webDevelopment.serviceThree')}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{i18n.t('services.webDevelopment.serviceFour')}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{i18n.t('services.webDevelopment.serviceFive')}</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>{i18n.t('services.contentCreation.title')}</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>{i18n.t('services.contentCreation.serviceOne')}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{i18n.t('services.contentCreation.serviceTwo')}</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
