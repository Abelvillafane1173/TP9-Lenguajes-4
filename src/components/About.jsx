import './About.css';

const servicios = [
  'Wi-Fi gratis',
  'Desayuno incluido',
  'Pileta climatizada',
  'Estacionamiento',
  'Atención las 24 horas',
  'Aire acondicionado',
];

const About = () => {
  return (
    <section className="about">
      <h2>Inicio</h2>
      <img src="/alvear-palace-hotel.jpg" alt="Hotel Mirador" className="portada" />
      <p>
        Hotel Mirador es un hotel familiar ubicado en el centro de la ciudad de Salta,
        a pocas cuadras del paseo de los poetas. Desde 1998 recibimos a viajeros que
        buscan descanso, buena atención y comodidad a un precio justo.
      </p>
      <p>
        Contamos con 3 tipos de habitaciones, todas con baño privado, televisor y
        calefacción, pensadas para quienes viajan solos, en pareja o en familia.
      </p>

      <h3>Servicios</h3>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio}>{servicio}</li>
        ))}
      </ul>
    </section>
  );
};

export default About;
