import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md'
import { IoLogoInstagram } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'

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
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tiago.dev96@gmail.com</h5>
            <a href="mailo:tiago.dev96@gmail.com" target="_blank" rel="noreferrer">Send an email</a>
          </article>
          <article className="contact__option">
            <IoLogoInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>@tiagocbatista</h5>
            <a href="https://instagram.com/tiagocbatista" target="_blank" rel="noreferrer">Send a Direct Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 71 9 9355-3196</h5>
            <a href="https://api.whatsapp.com/send?phone=5571993553196" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your best email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" class='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
