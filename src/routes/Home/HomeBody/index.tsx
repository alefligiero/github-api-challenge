import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./styles.css";

export default function HomeBody() {
  return (
    <main>
      <section className="home-section">
        <div className="home-container">
          <h2>Desafio Github API</h2>
          <h4>DevSuperior - Escola de programação</h4>
        </div>
        <Link to={"/search"}>
          <Button text="Começar" />
        </Link>
      </section>
    </main>
  );
}
