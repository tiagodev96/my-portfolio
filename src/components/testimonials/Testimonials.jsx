import React from 'react'
import './testimonials.css'

/* SWIPER */
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: 'https://i.pravatar.cc/500',
    name: 'Derick Rose',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus minus esse maiores ex, dignissimos libero. Ipsa eveniet nesciunt, modi saepe laboriosam illum inventore veritatis itaque, placeat, odit perferendis facilis!'
  },
  {
    avatar: 'https://i.pravatar.cc/500',
    name: 'Lebron James',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus minus esse maiores ex, dignissimos libero. Ipsa eveniet nesciunt, modi saepe laboriosam illum inventore veritatis itaque, placeat, odit perferendis facilis!'
  },
  {
    avatar: 'https://i.pravatar.cc/500',
    name: 'Kobe Bryant',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus minus esse maiores ex, dignissimos libero. Ipsa eveniet nesciunt, modi saepe laboriosam illum inventore veritatis itaque, placeat, odit perferendis facilis!'
  },
  {
    avatar: 'https://i.pravatar.cc/500',
    name: 'Paul Gasol',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus minus esse maiores ex, dignissimos libero. Ipsa eveniet nesciunt, modi saepe laboriosam illum inventore veritatis itaque, placeat, odit perferendis facilis!'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" modules={[Pagination]} spaceBeween={40} slidesPerView={1} pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
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
