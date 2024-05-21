import React from "react";
import "./Home.css";

import { useAuthentication } from "../../hooks/useAuthentication";

const Home = () => {
  const { logout } = useAuthentication();

  return (
    <div className="home">
      <header>
        <h1>Code_net</h1>
        <div className="search_perf">
          <input type="text" name="search" placeholder="Search ..." />
          <ion-icon onClick={logout} name="person-outline"></ion-icon>
        </div>
      </header>
    </div>
  );
};

export default Home;
