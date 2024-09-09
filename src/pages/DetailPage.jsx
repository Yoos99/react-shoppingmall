import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../css/DetailPage.module.css';
import TabStyle from '../layout/TabStyle';
import Similar from '../layout/Similar';

export default function DetailPage() {
  const { id } = useParams();

  const [products, setProducts] = useState(null);
  const [count, setCount] = useState(1);

  const getproductsDetail = async () => {
    try {
      let url = `http://localhost:8000/products/${id}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getproductsDetail();
  }, [id]);

  const increment = () => {
    count < 10
      ? setCount((prev) => prev + 1)
      : alert('최대 수량은 10개 입니다.');
  };
  const decrement = () => {
    count > 1 ? setCount((prev) => prev - 1) : alert('최소 수량은 1개 입니다.');
  };
  return (
    <section className={`${style.DetailPage} mw`}>
      <h2 hidden>Detail Page</h2>
      <div className={style.productCon}>
        <div className={style.imgCon}>
          <img src={`/img/${products?.img}`} alt={products?.title} />
        </div>
        <div className={style.pInfo}>
          <p>
            상품명 : {products?.title} / {products?.category}
          </p>
          <p>가격 : {Number(products?.price).toLocaleString()}원</p>
          <p>할인률 : {products?.discount} %</p>
          <div className={style.count}>
            {count === 1 ? (
              <button disabled>-</button>
            ) : (
              <button onClick={decrement}>-</button>
            )}

            <span>{count}</span>
            {count === 10 ? (
              <button disabled>+</button>
            ) : (
              <button onClick={increment}>+</button>
            )}
          </div>
          <button>장바구니</button>
        </div>
      </div>
      <TabStyle />
      <Similar info={products?.category} />
    </section>
  );
}
