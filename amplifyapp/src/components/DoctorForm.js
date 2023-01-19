import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';




const Forms = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c6b2p35',
      'template_84v2fxw',
      form.current,
      'e_uV2THf0e3Hl4jlx')
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
      }, (error) => {
        console.log(error.text);
      });
  };





  return (
    <div>
      <form ref={form} onSubmit={sendEmail} >
        <label>Dein Name</label>
        <label className='error'>  </label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <label className='error'>  </label>
        <input type="email" name="user_email" />
        <label>Nachricht</label>
        <label className='error' > </label>
        <input type = "file" name='file'></input>
        <textarea name="message" rows="6" placeholder='Tippe hier deine Nachricht ein' />
        <input type="submit" value="Senden" className='btn' />
      </form>

    </div>
  )




};

export default Forms;