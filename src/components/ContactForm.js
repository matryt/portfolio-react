import React, { useState, useRef } from "react";
import Header from "./Header";
import Nav from "./Nav";
import "../styles/ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({name: "", firstName: "", email: "", message: "", phone: ""});
  const textAreaRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let dictEmail = {
        "name": formData.name,
        "firstName": formData.firstName,
        "email": formData.email,
        "phone": formData.phone,
        "message": formData.message,
    };
    emailjs.send("service_umlaw7n","template_4pvfl0s",dictEmail, "9UeZjUDG9tAnLTukO")
      .then((result) => {
        console.log(result.text);
        setFormData({name: "", firstName: "", email: "", message: "", phone: ""});
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div class="root">
    <Nav />
    <Header subtitle={"Contact"} />
    <form onSubmit={handleSubmit}>
      <div className="contact-line">
      <label htmlFor="name">Nom (*) : </label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <br/>
      <div className="contact-line">
      <label htmlFor="first-name">Prénom (*) :</label>
      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <br/>
      
      <div className="contact-line">
      <label htmlFor="email">Email (*) :</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      
      </div><br/>

      <div className="contact-line">
      <label htmlFor="phone">Téléphone: </label>
      <input type="phone" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
      
      </div><br/>
      
      <div className="contact-line"><label htmlFor="message">Message (*) :</label>
      <textarea id="message" ref={textAreaRef} name="message" style={{overflow:"auto"}} value={formData.message} onChange={handleChange} required />
      <br/>
      </div>
      
      <button type="submit">Envoyer</button>
    </form>
    </div>
  );
};

export default ContactForm;