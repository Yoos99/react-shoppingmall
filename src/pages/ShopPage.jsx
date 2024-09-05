import React from 'react';
import style from '../css/ShopPage.module.css';
import ListCard from '../components/ListCard';
export default function ShopPage({ products }) {
  return (
    <main className={`${style.ShopPage} mw `}>
      <h2>Shop Page</h2>
      <nav>
        <button>등록순</button>
        <button>낮은 가격</button>
        <button>높은 가격</button>
        <button>높은 할인률</button>
      </nav>
      <ul className={style.listCon}>
        {products.map((product) => (
          <ListCard key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
}
