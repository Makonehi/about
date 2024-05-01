
import './App.css';
import Header from "./components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
function App() {
  return (
    <>
      <Header/>
       <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/about" element={<About/>}></Route>
           <Route path="/contact" element={<Contacts/>}></Route>
       </Routes>
`

    </>
  );
}

export default App;
