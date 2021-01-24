import React from "react";

function Contatos({ itens }) {
  return (
    <div className="lista-de-contatos">
      {itens.map((item) => (
        <li key={item.id}>
          <div className="item-contato">
            <h4>{item.tipo}</h4>
            <p>{item.contato}</p>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Contatos;
