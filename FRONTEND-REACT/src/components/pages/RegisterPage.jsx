import {useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import Header from "../Header";

function RegisterPage() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  console.log(data);

  const [errors, setErrors] = useState({});

  const handleInput = (ev) => {
    setData({
        ...data,
        [ev.target.name]: ev.target.value
      });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let newErrors = {};

    if (!data.name) newErrors.name = "El nombre es obligatorio";
    if (!data.surname) newErrors.surname = "El apellido es obligatorio";
    if (!data.email) newErrors.email = "El email es obligatorio";
    if (!data.password) newErrors.password = "La contraseña es obligatoria";
    if (!data.confirmPassword)
      newErrors.confirmPassword = "Debes confirmar la contraseña";

    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const userData = { ...data };
    delete userData.confirmPassword; 

    try {
      const res = await fetch('http://localhost:3000/api/register',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userData)
        });
        
      if (!res.ok) throw new Error("Error en el servidor");
      const dataJson = await res.json();
      if( !dataJson.success){
        setErrors({server: dataJson.error});
      }
      else {
        navigate('/login');}
      } catch (error) {
        setErrors({ server: "Error de conexión con el servidor" });
      }
    };

  return (
    <>
      <Header />
      <div className="coverreg">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="form__title">Regístrate</h2>
          <p className="form__subtitle">Crea tu cuenta para continuar</p>

          <div className="form__group">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" onInput={handleInput} value={data.name} required />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form__group">
            <label htmlFor="name">Apellido</label>
            <input type="text" name="surname" id="surname" onInput={handleInput} value={data.surname} required />
            {errors.surname && <p className="error">{errors.surname}</p>}
          </div>

          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onInput={handleInput} value={data.email} required />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form__group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" onInput={handleInput} value={data.password} required />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="form__group">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input type="password" name="confirmPassword" id="confirmPassword" onInput={handleInput} value={data.confirmPassword} required />
            {errors.confirmPassword && (<p className="error">{errors.confirmPassword}</p>)}
          </div>


          <p className="form__text">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </p>{errors.server && <p className="error">{errors.server}</p>}
          <div><button type="submit" className="form__btn">Registrarse</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
