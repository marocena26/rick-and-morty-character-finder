import logo from "../images/Rick_and_Morty_title_card.png";

function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src={logo}
        alt="Rick and Morty"
        title="Rick and Morty"
      ></img>
    </header>
  );
}

export default Header;
