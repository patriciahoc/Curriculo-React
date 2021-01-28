import React from "react";

function Formacao({ obj }) {
  return (
    <div className="sidebar">
      <h3>Educação</h3>
      {obj.map((obj) => (
        <div key={obj.id} className="lista-de-formacao">
          <li >
            <h4>{obj.instituicao}</h4>            
            <p>{obj.curso}</p>
            <p>{obj.situacao}</p>
          </li>
        </div>
      ))}
    </div>
  );
}

export default Formacao;
