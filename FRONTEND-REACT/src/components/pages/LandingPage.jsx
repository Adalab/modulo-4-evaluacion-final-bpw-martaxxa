import PropTypes from "prop-types";

function LandingPage({ handleNavigate }) {
  return (
    <section>
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
      <div className="cover">
        <h1 className="cover__title">Rugby en Femenino</h1>
        <h3 className="cover__subtitle">
          Todo el rugby femenino español en un solo sitio
        </h3>
        <button className="cover__btn" onClick={handleNavigate}>Comienza ahora</button>
      </div>
    </section>
  );
}

LandingPage.propTypes = {
  handleNavigate: PropTypes.func.isRequired,
};

export default LandingPage;
