import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <br />
      <h1>Essa é a nossa Home</h1> <br />
      <Link to="/sobre">Sobre</Link> <br /> <br />
      <Link to="/contato">Contato</Link> 

      <hr />
      <br />
      <Link to='/produto/123'>Acessar produto 123</Link>
    </div>
  );
}

export default Home;
