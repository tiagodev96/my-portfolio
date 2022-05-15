import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md'
import { IoLogoInstagram } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import { i18n } from '../../translate/i18n'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_35asaoj', 'template_b235oad', form.current, 'hySuKPY0ZMKpgDlSM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>{i18n.t('contact.sectionPreTitle')}</h5>
      <h2>{i18n.t('contact.sectionTitle')}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tiago.dev96@gmail.com</h5>
            <a href="mailo:tiago.dev96@gmail.com" target="_blank" rel="noreferrer">{i18n.t('contact.links.email')}</a>
          </article>
          <article className="contact__option">
            <IoLogoInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>@tiagocbatista</h5>
            <a href="https://instagram.com/tiagocbatista" target="_blank" rel="noreferrer">{i18n.t('contact.links.direct')}</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 71 9 9355-3196</h5>
            <a href="https://api.whatsapp.com/send?phone=5571993553196" target="_blank" rel="noreferrer">{i18n.t('contact.links.whatsapp')}</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={i18n.t('contact.placeholders.name')} required />
          <input type="email" name="email" placeholder={i18n.t('contact.placeholders.email')} required />
          <textarea name="message" rows="7" placeholder={i18n.t('contact.placeholders.message')} required></textarea>
          <button type="submit" class='btn btn-primary'>{i18n.t('contact.button')}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
