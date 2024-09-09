import { useNavigate } from 'react-router-dom';
import style from '../css/ListCard.module.css';

{
  /*props 이름은 일치해야함 <ListCard item={someProductData} /> 이라면 item이 props여서 item으로 받아야하는 것  */
}
export default function ListCard({ product }) {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${product.id}`);
  };

  return (
    <li className={style.ListCard} onClick={goDetail}>
      <div>
        <div className={style.cardImg}>
          {/* 절대경로로 이미지 폴더를 받아오고 product의 이미지 가져옴 alt는 이미지의 대체 텍스트를 나타냅니다. */}
          <img src={`/img/${product.img}`} alt={product.title} />

          {}
        </div>
        <div className={style.cardInfo}>
          <p>{product.title}</p>
          <p>{product.price}원</p>
        </div>
        <span className={style.discount}>{product.discount}%</span>
      </div>
      {/* <Link to="/detail">자세히 보기</Link> */}
    </li>
  );
}
