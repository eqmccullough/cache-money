import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './home/Home';
import SignInTemplate from "./components/SignIn-Template.js"
import SignUpTemplate from "./components/SignUp-Template.js";




function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<SignInTemplate />} />
        <Route path="/signUp" element={<SignUpTemplate />} />
      </Routes>
    </Router>

    <>
      
    </>
    


  );
}

export default App;