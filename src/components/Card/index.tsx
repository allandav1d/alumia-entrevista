import React from 'react';
import { RiLiveLine, GiTeacher, RiTimerFlashLine, GiDiploma } from 'react-icons/all';


import './styles.css';

const Card = () => {
  return (
    <aside className="aside">
      <div id="card">
        <h1>R$999,99</h1>
        <h5>R$9.999,99</h5>
        <p>90% de desconto</p>
        <h4 className="data">01/2020 até 06/2020</h4>
        <a href="#form">EU QUERO!</a>
        <ul>
          <li><h4>Este curso conta com:</h4></li>
          <li><RiLiveLine/>  Aulas ao vivo</li>
          <li><GiTeacher/>  Professor dedicado</li>
          <li><RiTimerFlashLine/>  +800 horas de conteúdo</li>
          <li><GiDiploma/>  Certificado de conclusão</li>
        </ul>
      </div>
      
    </aside>
  );
};

export default Card;
