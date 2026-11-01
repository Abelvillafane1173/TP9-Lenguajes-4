import { useState } from 'react';
import './Booking.css';

const habitaciones = [
  { id: 1, nombre: 'Habitación Individual', capacidad: '1 persona', precio: 35000, imagen: '/Habitacion-individual.jpg' },
  { id: 2, nombre: 'Habitación Doble', capacidad: '2 personas', precio: 50000, imagen: '/Habitacion-doble.jpg' },
  { id: 3, nombre: 'Habitación Triple', capacidad: '3 personas', precio: 65000, imagen: '/Habitacion-triple.jpg' },
  { id: 4, nombre: 'Suite Familiar', capacidad: '4 personas', precio: 90000, imagen: '/Habitacion-familiar.jpg' },
];

const hoy = () => {
  const d = new Date();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mes}-${dia}`;
};

const formatearFecha = (fecha) => {
  const [anio, mes, dia] = fecha.split('-');
  return `${dia}/${mes}/${anio}`;
};

const calcularNoches = (desde, hasta) => {
  return (new Date(hasta) - new Date(desde)) / (1000 * 60 * 60 * 24);
};

const Booking = () => {
  const [habitacion, setHabitacion] = useState(null);
  const [desde, setDesde] = useState('');
  const [hasta, setHasta] = useState('');
  const [error, setError] = useState('');
  const [reservas, setReservas] = useState([]);

  const abrirCalendario = (hab) => {
    setHabitacion(hab);
    setDesde('');
    setHasta('');
    setError('');
  };

  const cerrarCalendario = () => {
    setHabitacion(null);
  };

  const aceptar = () => {
    if (!desde || !hasta) {
      setError('Elegí la fecha de llegada y la de salida.');
      return;
    }
    if (hasta <= desde) {
      setError('La salida tiene que ser posterior a la llegada.');
      return;
    }

    const noches = calcularNoches(desde, hasta);
    const nuevaReserva = {
      id: Date.now(),
      nombre: habitacion.nombre,
      desde,
      hasta,
      noches,
      total: noches * habitacion.precio,
    };

    setReservas([...reservas, nuevaReserva]);
    cerrarCalendario();
  };

  return (
    <section className="booking">
      <h2>Habitaciones</h2>

      <div className="habitaciones">
        {habitaciones.map((hab) => (
          <div className="habitacion" key={hab.id}>
            <img src={hab.imagen} alt={hab.nombre} className="foto" />
            <h3>{hab.nombre}</h3>
            <p>{hab.capacidad}</p>
            <p className="precio">${hab.precio.toLocaleString('es-AR')} por noche</p>
            <button onClick={() => abrirCalendario(hab)}>Reservar</button>
          </div>
        ))}
      </div>

      {reservas.length > 0 && (
        <div className="reservas">
          <h3>Reservas confirmadas</h3>
          <ul>
            {reservas.map((r) => (
              <li key={r.id}>
                {r.nombre}: del {formatearFecha(r.desde)} al {formatearFecha(r.hasta)} (
                {r.noches} {r.noches === 1 ? 'noche' : 'noches'}) - Total $
                {r.total.toLocaleString('es-AR')}
              </li>
            ))}
          </ul>
        </div>
      )}

      {habitacion && (
        <div className="modal-fondo" onClick={cerrarCalendario}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Reservar {habitacion.nombre}</h3>

            <label htmlFor="desde">Llegada</label>
            <input
              type="date"
              id="desde"
              value={desde}
              min={hoy()}
              onChange={(e) => setDesde(e.target.value)}
            />

            <label htmlFor="hasta">Salida</label>
            <input
              type="date"
              id="hasta"
              value={hasta}
              min={desde || hoy()}
              onChange={(e) => setHasta(e.target.value)}
            />

            {error && <p className="error">{error}</p>}

            <div className="modal-botones">
              <button className="cancelar" onClick={cerrarCalendario}>Cancelar</button>
              <button onClick={aceptar}>Aceptar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Booking;