import './App.css';
import {BrowserRouter as Router , Routes ,Route,Navigate} from "react-router-dom";
import { useAuthContext } from './Hooks/UseAuthContext/useAuthContext';
import Hero from "./Components/HeroSection/Hero";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginPage/Login";
import Register from './Pages/RegisterPage/Register';
import ReturnPage from './Pages/ReturnPage/ReturnPage';
import BookForm from './Components/BookForm/BookForm';



function App() {
  const { student } = useAuthContext() 
  return (
    <div className="App">
     
     <Router>
        
        <Routes>
        <Route path="/" element={<Hero/>}/>
          <Route path="/register" element={!student ? <Register/> : <Navigate to="/login"/>}/>
          <Route path="/login" element={!student ? <Login/> : <Navigate to="/home"/>}/>
          <Route path="/home" element={student ? <Home/> : <Navigate to="/login"/>}/>
        <Route path="/book" element={student ? <BookForm/> :<Navigate to="/login"/>}/>
        <Route path="/return" element={student ? <ReturnPage/>:<Navigate to="/login"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;