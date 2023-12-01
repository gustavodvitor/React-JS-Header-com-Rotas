import React from "react";
import { Link } from "react-router-dom";
function Contato(){
    return (
      <div>
        <br />
        <h1>Essa é nossa pagina de contatos</h1> <br />
        <Link to="/home">Home</Link> <br /> <br />
        <Link to="/sobre">Sobre</Link>
      </div>
    );
}

export default Contato;