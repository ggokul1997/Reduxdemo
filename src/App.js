import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <div className="header"><Header /></div>
        <Routes>
          <Route index element={<Dashboard/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path=""/>
          <Route path="*" element={<Error/>}/>
          
        </Routes>
       <div className="footer"> <Footer /></div> 
     
    </div>
    </BrowserRouter>
  );
}

export default App;
