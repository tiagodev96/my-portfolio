import React from 'react'
import './testimonials.css'
import { i18n } from '../../translate/i18n'

/* SWIPER */
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'


const data = [
  {
    name: 'Laine P.',
    review: i18n.t('testimonials.laineTestimony'),
  },
  {
    name: 'Fernanda S.',
    review: i18n.t('testimonials.fernandaTestimony')
  },
  {
    name: 'Vinícius K.',
    review: i18n.t('testimonials.viniciusTestimony')
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>{i18n.t('testimonials.sectionPreTitle')}</h5>
      <h2>{i18n.t('testimonials.sectionTitle')}</h2>

      <Swiper className="container testimonials__container" modules={[Pagination]} spaceBeween={40} slidesPerView={1} pagination={{ clickable: true }}>
        {
          data.map(({ name, review }, index) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
