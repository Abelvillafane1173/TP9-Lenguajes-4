import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [enviado, setEnviado] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
  };

  return (
    <section className="contact">
      <h2>Contacto</h2>

      <div className="contacto-datos">
        <p>Dirección: Alvarado 1286, Salta Capital</p>
        <p>Teléfono: 3876371585</p>
        <p>Email: laprida_1173@outlook.es</p>
      </div>
        <form onSubmit={enviarFormulario}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>

      {enviado && <p className="mensaje">¡Gracias por escribirnos! Te responderemos a la brevedad.</p>}
    </section>
  );
};

export default Contact;
