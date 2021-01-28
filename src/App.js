import React, { useState } from "react";
import Avatar from "./componentes/Avatar/";
import Bio from "./componentes/Biografia";
import Contatos from "./componentes/Contatos";
import Formacao from "./componentes/Formacao";
import Experiencia from "./componentes/Experiencia";
import "./App.css";

function App() {
  const fakeAPI = {
    nome: "Patricia Hedra de Oliveira Costa",
    ocupacao: "Developer | Front-End | Javascript | ReactJS",
    resumo:
      "Em trasição de carreia onde busco me tornar uma pessoa desenvolvedora, com objetivo de me inserir na área de Front-end.",
    perfilProfissional:
      "Tenho 4 anos de experiência operacional, e 2 anos em suporte na área de marketing, em restaurante de Fast-Food tendo desenvolvido um olhar crítico para a importância das estratégias de inovações, buscando formas de garantir experiências positivas para as pessoas.",
    contatos: [
      {
        id: 1,
        telefone: "19 99114-9390",
      },
      {
        id: 2,
        email: "patriciahedra@gmail.com",
      },
      {
        id: 3,
        linkedin: "https://www.linkedin.com/in/patriciahedra/",
      },
      {
        id: 4,
        guthub: "https://github.com/patriciahoc",
      },
    ],
    educacao: [
      {
        id: 1,
        instituicao: "PUC Campinas",
        curso: "Serviço Social",
        situacao: "Concluído",
      },
      {
        id: 2,
        instituicao: "ETEC Centro Paula Souza",
        curso: "Técnico em Desenvolvimento de sistema",
        situacao: "Cursando",
      },
    ],
    experiencia: [
      {
        id: 1,
        cargo: "SPTech Desenvolvimento Front-end",
        periodo: "Abril 2020 - Dezembro 2019",
        empresa: "Digital Innovation One Inc.",
        local: "",
        conteudo:
          "Conceitos de desenvolvimento front-end atuação em projetos e no desenvolvimento web, por meio de componentes da interface de usuários.",
      },
      {
        id: 2,
        cargo: "Trilha ReactJs",
        periodo: "Janeiro 2021 - Março 2021",
        empresa: "Campinas Tech Talents",
        local: "",
        conteudo:
          "Programa de formação e qualificação profissional de novos desenvolvedores nas principais linguagens de programação demandadas pelo mercado.",
      },
    ],
  };
  const [resposta] = useState(fakeAPI);
  const [mostrarContato, setMostratContato] = useState(false);

  function exibirContato() {
    setMostratContato(!mostrarContato);
  }
  return (
    <main>
      <Avatar />
      <Bio resposta={resposta} />

      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <button onClick={exibirContato}>Mostrar Contatos</button>

          {mostrarContato && <Contatos />}
        </div>

        <Formacao obj={resposta.educacao} />
      </aside>
     
        <Experiencia info={resposta.experiencia} />
      
     
    </main>
  );
}

export default App;
