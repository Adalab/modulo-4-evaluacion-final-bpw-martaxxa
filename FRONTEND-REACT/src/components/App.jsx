import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import "../styles/App.scss";

function App() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/page');
  };

  return (
    <>
      <Routes>
        <Route path='*' element={ <LandingPage handleNavigate={handleNavigate}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
