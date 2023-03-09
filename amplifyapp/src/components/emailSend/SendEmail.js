import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';
import './SendEmailStyles.css'

export const ContactUs = () => {
    const form = useRef();
    const user = useSelector((state) => state.user.user)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lw1imp8', 'template_lcdegyy', form.current, 'BTYpjUKAi0ewDltjO')
            .then((result) => {
                console.log(result.text);
                console.log('Nachricht erfolgreich gesendet')
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name='from_user' value={user.payload.name} />
            <label>Email</label>
            <input type="email" name="user_email" value={user.payload.email} />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};