import style from '../css/ListCard.module.css';

export default function ListCard() {
  return (
    <li className={style.ListCard}>
      <div>
        <div className={style.cardImg}>
          {/* 절대경로로 이미지를 불러옵니다.  */}
          <img src="/img/image1.jpg" alt="" />
        </div>
        <div className={style.cardInfo}>
          <p>상품명</p>
          <p>30,000원</p>
        </div>
        <span className={style.discount}>5%</span>
      </div>
    </li>
  );
}
