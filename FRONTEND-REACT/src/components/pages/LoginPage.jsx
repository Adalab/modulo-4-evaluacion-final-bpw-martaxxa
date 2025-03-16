import Header from "../Header";
import { Link } from 'react-router';

function LoginPage() {
  return (
    <>
      <Header />
      <div className="coverlogin">
        <form className="form">
          <h2 className="form__title">Identifícate</h2>
          <p className="form__subtitle">Introduce tus credenciales</p>
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form__input"
            />
          </div>
          <div className="form__group">
            <label htmlFor="password" className="form__label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form__input"
            />
          </div>
          <button type="submit" className="form__button">
            Iniciar sesión
          </button>
          <p className="form__text">¿No tiene cuenta? <Link to="/register">Regístrese</Link></p>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
