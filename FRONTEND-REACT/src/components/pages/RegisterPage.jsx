import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="coverreg">
        <form className="form">
          <h2 className="form__title">Regístrate</h2>
          <p className="form__subtitle">Crea tu cuenta para continuar</p>

          <div className="form__group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              required
            />
          </div>

          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
            />
          </div>

          <div className="form__group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              required
            />
          </div>

          <button type="submit" className="form__btn">
            Registrarse
          </button>

          <p className="form__text">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
