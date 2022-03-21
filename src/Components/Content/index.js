import React from 'react';
import Scroll from '../Scroll/Scroll';
import Content from './content';
import heartIcon from '../../Assets/heartIcon.svg';
import './styles.css';

export default function Conteudo() {
  return (
    <>
      <section className="containerContent">
        {Content.map((item, index) => {
          return (
            <div className="cardBlogConteud" key={index}>
              <div className="date">
                <p>{item.date}</p>
                <img src={heartIcon} alt="" />
              </div>
              <h2>{item.title}</h2>
              <p>{item.paragraf}</p>
            </div>
          );
        })}
      </section>
      <Scroll showBelow={250} />
    </>
  );
}
