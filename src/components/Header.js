//react libraries
import { NavLink } from "react-router-dom";
//components
import logo from "../images/Rick_and_Morty_title_card.png";
//styles
import "../styles/components/Header.scss";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="Logo Rick and Morty" className="header__logo" />
      </NavLink>
      <h1 className="header__title">Rick & Morty character finder!</h1>
    </header>
  );
}

export default Header;
