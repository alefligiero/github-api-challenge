import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../../components/Button";
import "./styles.css";
import * as userService from "../../../services/user-service";
import { UserDTO } from "../../../models/user";

type FormData = {
  githubUser: string;
};

export default function Search() {

  const [user, setUser] = useState<UserDTO>();

  const [formData, setFormData] = useState<FormData>({
    githubUser: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, githubUser: event.target.value });
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    userService.findUser(formData.githubUser).then((response) => {
      setUser(response.data)
    }).catch(() => {
      
    });
  }

  return (
    <main>
      <section className="search-section">
        <div className="search-card">
          <h2 className="search-card-title">Encontre um perfil Github</h2>
          <form onSubmit={handleFormSubmit} className="search-form">
            <input
              name="githubUser"
              value={formData.githubUser}
              type="text"
              placeholder="Usuário Github"
              onChange={handleInputChange}
            />
            <Button text="Encontrar" />
          </form>
        </div>
      </section>
      <section className="result-section">
        <h3 className="display-none">Erro ao buscar usuário</h3>
        <div className="result-card ">
          <img src={user?.avatar_url} alt="perfil" />
          <div className="information-card">
            <h3>Informações</h3>
            <div className="information-card-item">Perfil: {user?.html_url}</div>
            <div className="information-card-item">Seguidores: {user?.followers}</div>
            <div className="information-card-item">Localidade: {user?.location}</div>
            <div className="information-card-item">Nome: {user?.name}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
