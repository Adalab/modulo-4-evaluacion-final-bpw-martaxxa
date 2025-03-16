function Header() {
  return (
    <header className="header">
      <div className="header__box1">
        <img
          src="src/images/logo-rf-white.png"
          alt="Logo Rugby en Femenino"
          className="header__logo"
        />
      </div>
      <div className="header__box2">
        <p className="header__inicio">Inicio</p>
        <p className="header__login">Identifícate</p>
      </div>
    </header>
  );
}

export default Header;