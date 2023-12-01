import React from "react";
import {Link} from 'react-router-dom'
function Sobre() {
  return (
    <div>
      <br />
      <h1>Essa é a nossa pagina Sobre</h1> <br />
      <Link to="/home">Home</Link> <br /> <br />
      <Link to='/contato'>Contato</Link>
    </div>
  );
}

export default Sobre;
