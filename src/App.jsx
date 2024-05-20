import "./App.css";

// importações para fazer rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

// pages
import Login_Register from "./pages/Login_Register/Login_Register";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login_Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
