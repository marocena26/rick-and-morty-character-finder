import { NavLink } from "react-router-dom";
import logo from "../images/Rick_and_Morty_title_card.png";
import "../styles/components/Header.scss";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <header className="header">
          <img src={logo} alt="Logo Rick and Morty" className="header__logo" />
        </header>
      </NavLink>
    </header>
  );
}

export default Header;
