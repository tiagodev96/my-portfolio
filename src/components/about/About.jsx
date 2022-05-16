import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { i18n } from '../../translate/i18n'

const About = () => {
  return (
    <section id="about">
      <h5>{i18n.t('about.sectionPreTitle')}</h5>
      <h2>{i18n.t('about.sectionTitle')}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me with a smoking" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{i18n.t('about.experienceTitle')}</h5>
              <small>{i18n.t('about.experienceMessage')}</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>{i18n.t('about.clientsTitle')}</h5>
              <small>{i18n.t('about.clientsMessage')}</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{i18n.t('about.projectsTitle')}</h5>
              <small>{i18n.t('about.projectsMessage')}</small>
            </article>
          </div>

          <p>{i18n.t('about.aboutMessage')}</p>

          <a href="#contact" className="btn btn-primary">{i18n.t('buttons.letsTalk')}</a>
        </div>
      </div>
    </section>
  )
}

export default About
