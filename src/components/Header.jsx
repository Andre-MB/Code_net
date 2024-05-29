import React from "react";
import logo from "../assets/sinais-de-codigo.png";

import "./styles/Header.css";

// Hooks
import { useAuthentication } from "../hooks/useAuthentication";

// Context
import { useAuthValue } from "../context/AuthContxt";

const Header = () => {
  const { user } = useAuthValue();

  const { logout } = useAuthentication();

  return (
    <header>
      <div className="logo_codenet">
        <img src={logo} alt="sd" width={"30px"} height={"30px"} />
        <h1>Code_net</h1>
      </div>

      <div className="search_perf">
        <input type="text" name="search" placeholder="Search by tags ..." />

        {user && (
          <ion-icon
            id="logout"
            onClick={logout}
            name="log-out-outline"
          ></ion-icon>
        )}

        {!user && (
          <ion-icon
            id="person"
            onClick={logout}
            name="person-outline"
          ></ion-icon>
        )}
      </div>
    </header>
  );
};

export default Header;
