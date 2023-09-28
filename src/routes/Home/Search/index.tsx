import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../../components/Button";
import "./styles.css";

type FormData = {
  githubUser: string;
};

export default function Search() {

  const [formData, setFormData] = useState<FormData>({
    githubUser: ''
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData({...formData, githubUser: event.target.value})
  }

  function handleFormSubmit(event : FormEvent<HTMLFormElement>) {
    event?.preventDefault();
  }

  return (
    <main>
      <section className="search-section">
        <div className="search-card">
          <h2 className="search-card-title">Encontre um perfil Github</h2>
          <form onSubmit={handleFormSubmit} className="search-form">
            <input name="githubUser" value={formData.githubUser} type="text" placeholder="Usuário Github" onChange={handleInputChange} />
            <Button text="Encontrar" />
          </form>
        </div>
      </section>
      <section className="result-section">
        <div className="result-card">
          <img src="" alt="perfil" />
          <div className="information-card">
            <h3>Informações</h3>
            <div className="information-card-item">Perfil:</div>
            <div className="information-card-item">Seguidores:</div>
            <div className="information-card-item">Localidade: </div>
            <div className="information-card-item">Nome: </div>
          </div>
        </div>
      </section>
    </main>
  );
}
