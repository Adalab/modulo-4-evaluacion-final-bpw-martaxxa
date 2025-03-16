import PropTypes from "prop-types";
import Header from "../Header";

function LandingPage({ handleNavigate }) {
  return (
    <section>
      <Header/>
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
