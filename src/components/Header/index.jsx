import React from "react";
import { Link } from "react-router-dom";
import './style.css'

function Header() {
  return (
    <header>
      <h2>Programador Gustavo</h2>

      <div className="menu">
        <Link to="/home">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contatos</Link>
      </div>
    </header>
  );
}

export default Header;
