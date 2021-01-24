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
        tipo: "telefone",
        contato: "19 99114-9390",
      },
      {
        id: 2,
        tipo: "email",
        contato: "patriciahedra@gmail.com",
      },
    ],
    educacao: [
      {
        id: 1,
        instituicao: "PUC Campinas",
        curso: "Serviço Social",
      },
      {
        id: 2,
        instituicao: "ETEC",
        curso: "Técnico em Desenvolvimento de sistema",
      },
    ],
    experiencia: [
      {
        id: 1,
        cargo: "Front",
        periodo: "Abril 2020 - atual",
        empresa: "home office",
        local: "Hortolândia-SP",
        conteudo: "aprendi tudo que sei",
      },
      {
        id: 2,
        cargo: "Back",
        periodo: "Agosto 2018 - Agosto 2019",
        empresa: "CIA",
        local: "Boston",
        conteudo: "Fazia nada e ganhava mal",
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

          {mostrarContato && <Contatos itens={resposta.contatos} />}
        </div>

        <Formacao obj={resposta.educacao} />
      </aside>
      <Experiencia info={resposta.experiencia} />
    </main>
  );
}

export default App;
