import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs'
import { i18n } from '../../translate/i18n'

const Experience = () => {
  return (
    <section id="experience">
      <h5>{i18n.t('experience.sectionPreTitle')}</h5>
      <h2>{i18n.t('experience.sectionTitle')}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">{i18n.t('experience.frontend.html')}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">{i18n.t('experience.frontend.css')}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">{i18n.t('experience.frontend.javascript')}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">{i18n.t('experience.frontend.bootstrap')}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TailWind</h4>
                <small className="text-light">{i18n.t('experience.frontend.tailwind')}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">{i18n.t('experience.frontend.react')}</small>
              </div>
            </article>
          </div>
        </div>
        {/* ENF OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">{i18n.t('experience.backend.nodejs')}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">{i18n.t('experience.backend.mongodb')}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP for Wordpress</h4>
                <small className="text-light">{i18n.t('experience.backend.phpwordpress')}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">{i18n.t('experience.backend.mysql')}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
