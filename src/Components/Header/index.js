import React from 'react';
import iconSearch from '../../Assets/iconSearch.svg';
import './styles.css';

export default function Header() {
  return (
    <section>
      <header>
        <div className="containerTitles">
          <h1>Cedrolândia</h1>
          <h1>Blog</h1>
        </div>

        <div className="inputSearch">
          <div className="icon">
            <img src={iconSearch} alt="" />
          </div>
          <input type="text" placeholder="Pesquisar no blog" />
        </div>
      </header>
    </section>
  );
}
