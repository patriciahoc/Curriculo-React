import React from "react";

function Formacao({ obj }) {
  return (
    <div className="sidebar">
      <h3>Educação</h3>
      {obj.map((obj) => (
        <div className="lista-de-formacao">
          <li key={obj.id}>
            <h4>{obj.instituicao}</h4>
            <p>{obj.curso}</p>
          </li>
        </div>
      ))}
    </div>
  );
}

export default Formacao;
