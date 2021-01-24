import React from "react";

function Experiencia({ info }) {
  console.log({ info });
  return (
    <div className="experience">
      <h2>Experiência Profissional</h2>
      {info.map((info) => (
        <div key={info.id} className="experience-item">
          <div>
            <h4>{info.cargo}</h4>
            <span>{info.periodo}</span>

            <strong>{info.empresa}</strong>
            <span>{info.local}</span>
          </div>
          <p>{info.conteudo}</p>
        </div>
      ))}
    </div>
  );
}
export default Experiencia;
