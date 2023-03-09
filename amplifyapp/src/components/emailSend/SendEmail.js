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
            <label>
                <div className="label-text">Name</div>
                <input type="text" name="from_user" value={user.payload.name} style={{ width: '100%' }} />
            </label>
            <label>
                <div className="label-text">Email</div>
                <input type="text" name="user_email" value={user.payload.email} style={{ width: '100%' }} />
            </label>
            <label>
                <div className="label-text">Message</div>
                <textarea name="message" style={{ width: '100%', height: '200px' }} />
            </label>
            <input type="submit" value="Send" />
        </form>
    );
};
