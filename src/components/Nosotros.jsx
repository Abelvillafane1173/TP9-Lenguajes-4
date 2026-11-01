import './Nosotros.css';

const valores = ['Atención personalizada', 'Limpieza y comodidad', 'Compromiso con cada huésped'];

const Nosotros = () => {
  return (
    <section className="nosotros">
      <h2>Acerca de nosotros</h2>
      <p>
        Hotel Mirador nació en 1998 como un emprendimiento familiar. Lo que empezó con
        pocas habitaciones hoy es un lugar conocido por su calidez y su buen trato.
      </p>
      <p>
        Nuestra misión es que cada huésped se sienta como en casa, ya sea que viaje por
        trabajo, por descanso o en familia.
      </p>

      <h3>Nuestros valores</h3>
      <ul>
        {valores.map((valor) => (
          <li key={valor}>{valor}</li>
        ))}
      </ul>
    </section>
  );
};

export default Nosotros;
