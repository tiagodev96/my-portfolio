import React from 'react'
import './portfolio.css'
import PORTFOLIO from '../../assets/portfolio.png'
import DRAWCRIATIVA from '../../assets/drawcriativa.png'
import METODOHAYAT from '../../assets/metodo-hayat.png'
import VOCEVIRTUALBLOG from '../../assets/voce-virtual-blog.png'
import VILLACLOSET from '../../assets/villa-closet.png'
import CONSTRUFORMAS from '../../assets/construformas.png'
import { i18n } from '../../translate/i18n'

const data = [
  {
    id: 1,
    image: CONSTRUFORMAS,
    title: `Construformas Engenharia`,
    github: 'https://github.com/tiagodev96/construformas-theme',
    demo: 'https://construformasengenharia.com'
  },
  {
    id: 2,
    image: VOCEVIRTUALBLOG,
    title: `Blog Você Virtual`,
    github: 'https://github.com/tiagodev96/voce-virtual-blog',
    demo: 'https://vocevirtualblog.com/'
  },
  {
    id: 3,
    image: VILLACLOSET,
    title: `Villa Closet`,
    github: 'https://github.com/tiagodev96/villa-closet-theme',
    demo: 'https://villacloset.com.br'
  },
  {
    id: 4,
    image: DRAWCRIATIVA,
    title: `Draw Criativa`,
    github: 'https://github.com/tiagodev96/draw-criativa-portfolio',
    demo: 'https://www.drawcriativa.com.br/'
  },
  {
    id: 5,
    image: METODOHAYAT,
    title: `Método Hayat`,
    github: 'https://github.com/tiagodev96/metodo-hayat-website',
    demo: 'https://metodohayat.com/'
  },
  {
    id: 6,
    image: PORTFOLIO,
    title: `Portfolio Website`,
    github: 'https://github.com/tiagodev96/my-portfolio',
    demo: 'https://tfrontdev.vercel.app'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>{i18n.t('portfolio.sectionPreTitle')}</h5>
      <h2>{i18n.t('portfolio.sectionTitle')}</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target="__blank" rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
