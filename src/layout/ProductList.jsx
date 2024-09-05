import style from '../css/ProductList.module.css';
import ListCard from '../components/ListCard';

export default function ProductList({ products }) {
  return (
    <section className={style.ProductList}>
      <h2>신상품 리스트</h2>
      <a href="#">전체보기</a>
      <ul className={style.listCon}>
        {products.map((product) => (
          <ListCard key={product.id} product={product} />
          // products를 map으로 순회하며 ListCard 컴포넌트에 전달하여 렌더링
          //listcard 컴포넌트에 product라는 이름으로 값 전달
        ))}
      </ul>
    </section>
  );
}
