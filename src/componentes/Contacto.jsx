import React from 'react'

const handleSendWhatsApp = () => {
  const name = document.getElementById('name').value;
  const subject = document.getElementById('subject').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const fullMessage = `Hola, soy ${name}.
Asunto: ${subject}
Celular: ${phone}
Correo: ${email}
Mensaje: ${message}`;

  const encodedMessage = encodeURIComponent(fullMessage);
  const phoneNumber = '51990081302'; // <-- reemplaza con tu número de WhatsApp (sin signos)
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, '_blank');
};

const Contacto = () => {

  return (
    <form className="contact-form">
      <div className="input-group">
        <label htmlFor="name">Nombres o Razón Social</label>
        <div className="input-icon">
          <span className="material-icons">person</span>
          <input type="text" id="name" placeholder="" required />
        </div>
      </div>

     
        <div className="input-group">
          <label htmlFor="subject">Asunto</label>
          <div className="input-icon">
            <span className="material-icons">edit</span>
            <input type="text" id="subject" placeholder="" />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="phone">Celular</label>
          <div className="input-icon">
            <span className="material-icons">smartphone</span>
            <input type="tel" id="phone" placeholder="" />
          </div>
        
      </div>

      <div className="input-group">
        <label htmlFor="email">Correo Electrónico *</label>
        <div className="input-icon">
          <span className="material-icons">alternate_email</span>
          <input type="email" id="email" placeholder="" required />
        </div>
      </div>

      <div className="input-group">
        
        <textarea id="message" placeholder="mensaje..." rows="5"></textarea>
      </div>

      <div className="div-rounded-contact" onClick={handleSendWhatsApp}><a href='#' >Enviar &nbsp;{" >"}</a></div>
   
    </form>
  );
}

export default Contacto