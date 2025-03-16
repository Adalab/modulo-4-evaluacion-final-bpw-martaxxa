import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import "../styles/App.scss";

function App() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login');
  };

  return (
    <>
      <Routes>
        <Route path='*' element={ <LandingPage handleNavigate={handleNavigate}/>}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
