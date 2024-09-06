import style from '../css/ShopPage.module.css';
import ListCard from '../components/ListCard';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SORT_OPTIONS = {
  latest: '-id',
  lowPrice: 'price',
  highPrice: '-price',
  discount: '-discount',
};
const SORT_LABELS = {
  latest: '최신순',
  lowPrice: '낮은가격순',
  highPrice: '높은가격순',
  discount: '높은할인율',
};

export default function ShopPage({ products, getproducts }) {
  const [searchParams, setSearchParams] = useSearchParams(); //useSearchParams를 사용하면 쿼리스트링을 가져올 수 있음
  const [currentPage, setCurrentPage] = useState(() =>
    parseInt(searchParams.get('page') || '1', 10)
  );
  const [sortType, setSortType] = useState(
    () => searchParams.get('sort') || 'id'
  );

  console.log('sortType--', sortType);

  const loadProducts = useCallback(() => {
    getproducts(1, currentPage * 8, SORT_OPTIONS[sortType]);
    setSearchParams({ page: currentPage.toString(), sort: sortType });
  }, [currentPage, setSearchParams, sortType]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const handleSort = (sort) => {
    setSortType(sort);
    setCurrentPage(1);
  };

  return (
    <main className={`${style.ShopPage} mw `}>
      <h2>Shop Page</h2>
      <nav>
        {Object.keys(SORT_OPTIONS).map((key) => (
          <button
            key={key}
            onClick={() => {
              handleSort(key);
            }}
            className={sortType === key ? style.active : ''}
          >
            {SORT_LABELS[key]}
          </button>
        ))}
      </nav>
      <ul className={style.listCon}>
        {products.map((product) => (
          <ListCard key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
}
