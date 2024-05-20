import "./App.css";

// importações para fazer rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importações para fazer Autenticação do Firebase
import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";

import { useAuthentication } from "./hooks/useAuthentication";

import { AuthProvider } from "./context/AuthContxt";
// pages
import Login_Register from "./pages/Login_Register/Login_Register";
import Home from "./pages/Home/Home";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login_Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
