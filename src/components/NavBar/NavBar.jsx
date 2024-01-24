import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="brand">
        <img src="/img/logo.png" alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/categoria/Esculturas">Esculturas</Link>
        </li>
        <li>
          <Link to="/categoria/Ropa">Ropa</Link>
        </li>
        <li>
          <Link to="/categoria/Comics">Comics & Mangas</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;