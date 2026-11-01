import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Hotel Mirador</h1>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/nosotros">Acerca de nosotros</NavLink>
        <NavLink to="/reservacion">Reservación</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
};

export default Header;
