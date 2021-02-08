import React from "react";

function Informacao({ comp }) {
  return (
    
    <div className="information">
      <h2>informações Adicionais</h2>
      {comp.map((comp) => (
        <div key={comp.id} className="information-item">        
        <h3>{comp.programa}</h3>
        <h4>{comp.ocupacao}</h4>
        <p>{comp.local} - {comp.ano}</p>
          
        </div>
      ))}
    </div>
  );
}

export default Informacao;
