import style from '../css/ListCard.module.css';

export default function ListCard({ product }) {
  return (
    <li className={style.ListCard}>
      <div>
        <div className={style.cardImg}>
          {/* 절대경로로 이미지 폴더를 받아오고 product의 이미지 가져옴  */}
          <img src={`/img/${product.img}`} alt={`${product.title} `} />{' '}
          {/*alt는 이미지의 대체 텍스트를 나타냅니다.*/}
        </div>
        <div className={style.cardInfo}>
          <p>{product.title}</p>
          <p>{product.price}원</p>
        </div>
        <span className={style.discount}>{product.discount}%</span>
      </div>
    </li>
  );
}
