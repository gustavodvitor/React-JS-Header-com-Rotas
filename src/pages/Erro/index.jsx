import { Link } from "react-router-dom";
function Erro() {
  return (
    <div>
      <h2>Ops... Parece que essa pagina não existe! </h2> <br />

      <span>Encontramos essas paginas: </span> <br /> <br />
      <Link to="/home">Home</Link> <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Erro;
