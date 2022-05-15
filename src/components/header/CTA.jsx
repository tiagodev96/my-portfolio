import React from 'react'
import CV from '../../assets/TiagoBatistaCV.pdf'
import { i18n } from '../../translate/i18n'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">{i18n.t('buttons.letsTalk')}</a>
    </div>
  )
}

export default CTA
