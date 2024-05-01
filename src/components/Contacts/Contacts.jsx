import React, {useRef, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from '@emailjs/browser';
import './Contacts.css';


export default function Contacts() {
    const[success, setSuccess] = useState(false)
    const form = useRef();

    function sendEmail(event) {
        event.preventDefault();
        emailjs
            .sendForm('service_skkigkw', 'template_ea60d4b', form.current, {
                publicKey: "F3W_16FrTW3U1-8TO",
            })
            .then(()=>{
                console.log("SUCCESS!");
                    setSuccess(true);
            },
                (error)=>{
                console.log("FAILED...", error.text)
            })
    }

    return (
        <div className="contacts">
            <h1 className="Contacts__title">Contacts me</h1>
            <form ref={form} onSubmit={sendEmail} action="#">
                <div className="email">
                    <label className="text" htmlFor="">Введите вашу почту: </label>
                    <input name="email" className="email__inp form-control" type="email" required/>
                </div>
                <div className="message">
                    <label className="messahe__text" htmlFor="">Введите ваше сообщение: </label>
                    <textarea name="message" className="message__inp form-control" required></textarea>
                </div>
                <button className="submit__btn btn btn-secondary" type="submit">Отправить</button>
            </form>
            {success &&  (<p>Сообщение успешно отправлено</p>)}
        </div>
    );
}

