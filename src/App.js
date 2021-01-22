import React from "react";
import "./App.css"


function App() {

  const fakeAPI =  
    {
      nome: 'Lisa Simpson',
      ocupacao: 'Developer',
      resumo: '8 anos e já sei React',
      perfilProfissional: 'Faço miojo bom',
      contatos: [
        {
          id: 1,
          tipo: 'telefone',
          contato: '19 0000-0000'
        },
        {
          id: 2,
          tipo: 'email',
          contato: 'nome@dev.com'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'EMEF',
          curso: 'Ensino basico'
        },
        {
          id: 2,
          instituicao: 'ETEC',
          curso: 'Como ser dev'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Front',
          periodo: 'Agosto 2019 - Atualmente',
          empresa: 'NASA',
          local: 'Nova York',
          conteudo: 'Fazia nada e ganhava bem'
        },
        {
          id: 2,
          cargo: 'Back',
          periodo: 'Agosto 2018 - Agosto 2019',
          empresa: 'CIA',
          local: 'Boston',
          conteudo: 'Fazia nada e ganhava mal'
        }
      ]
  }
  return (
    <main>
      <div className="perfil">
        <img src="https://i.pravatar.cc/400" alt="Perfil" />
      </div>
      <div className="biografia">
        <h1>
          Nome Sobrenome
        </h1>
        <div className="ocupacao">Developer</div>
        <p>109 anos e pronta pra ser dev</p>
      </div>

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>
          Faço nada da vida
        </p>
      </div>
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <button>Mostrar Contatos</button>

          <div className="lista-de-contatos">
            <li>
              <div className="item-contato">
                <h4>TELEFONE</h4>
                <p>(19) 0000-0000</p>
              </div>
            </li>
            <li>
              <div className="item-contato">
                <h4>TELEFONE</h4>
                <p>(19) 0000-0000</p>
              </div>
            </li>
          </div>
        </div>

        <div className="sidebar">
          <h3>Educação</h3>
          <div className="lista-de-formacao">
            <li>
              <h4>Faculdade da vida</h4>
              <p>Uniesquina 2019 - 2022</p>
            </li>
            <li>
              <h4>EMEF</h4>
              <p>Qualquer lugar 2010 - 2013</p>
            </li>
          </div>
        </div>
      </aside>
      <div className="experience">
        <h2>Experiência Profissional</h2>

        <div className="experience-item">
          <div>
            <h4>Developer</h4>
            <span>Novembro 2019 - Atualmente</span>

            <strong>Empresa da hora</strong>
            <span>Campinas - São Paulo</span>
          </div>
          <p>
            Fazia nada
        </p>
        </div>
        <div className="experience-item">

          <div>
            <h4>Developer</h4>
            <span>Agosto 2019 - Novembro 2019</span>

            <strong>Empresa estranha</strong>
            <span>Sumaré - São Paulo</span>
          </div>
          <p>
            Fazia menos
        </p>
        </div>
      </div>
    </main>
  );
}

export default App;