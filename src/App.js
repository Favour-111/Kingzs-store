import logo from "./logo.svg";
import "./App.css";
import Home from "./COMPONENTS/Home";
import { Routes, Route } from "react-router-dom";
import Nav from "./COMPONENTS/Nav";
import About from "./COMPONENTS/About";
import Form from "./COMPONENTS/Form";
import Forgotpass from "./COMPONENTS/Forgotpass";
import Signup from "./COMPONENTS/Signup";
import Products from "./COMPONENTS/Products";
import Read from "./COMPONENTS/Read";
import Unread from "./COMPONENTS/Unread";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="forgot" element={<Forgotpass />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />}>
          <Route path="read" element={<Read />}></Route>
          <Route path="unread" element={<Unread />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
