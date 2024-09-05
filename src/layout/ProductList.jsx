import style from '../css/ProductList.module.css';
import ListCard from '../components/ListCard';

export default function ProductList() {
  return (
    <section className={style.ProductList}>
      <h2>신상품 리스트</h2>
      <a href="#">전체보기</a>
      <ul className={style.listCon}>
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </ul>
    </section>
  );
}
