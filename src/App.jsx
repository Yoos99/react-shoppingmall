import { useCallback, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import MainPage from './pages/MainPage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import OurPage from './pages/OurPage';
import CartPage from './pages/CartPage';
import DetailPage from './pages/DetailPage';

function App() {
  const [products, setProducts] = useState([]); //상태 정의
  const [moreInfo, setMoreInfo] = useState({}); //상태 정의

  const location = useLocation();
  const BASE_URL = 'http://localhost:8000/products'; //기본 url 버전

  const getProducts = useCallback(
    async (page = 1, perPage = 6, sort = '', category = '') => {
      try {
        // let url = 'http://localhost:8000/products'; //기본 url 버전
        let url = `${BASE_URL}?_page=${page}&_per_page=${perPage}&_sort=${sort}`;
        // Get요청 쿼리 스트링으로 1페이지당 6개만 가져오기 + 신상품만 가져오기 / cartegory=new대신에 _sort=-discount하면 할인율 높은 순으로 정렬
        if (category) {
          url += `&category=${category}`;
        }
        let res = await fetch(url);
        let data = await res.json();
        setMoreInfo({
          first: data.first,
          prev: data.prev,
          next: data.next,
          last: data.last,
          page: data.page,
          total: data.items,
        });
        // setProducts(data); //기본 url 버전 상태 업데이트
        setProducts(data.data); //쿼리 스트링 바꿨을때 데이터 형식 확인하고 바꿔주기
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  //한 번만 실행하여 데이터 가져오기
  useEffect(() => {
    if (location.pathname === '/shop') {
      getProducts(1, 8, 'latest');
    } else if (location.pathname === '/') {
      getProducts(1, 6);
    }
    getProducts();
  }, [location.pathname, getProducts]);

  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage products={products} />} />
        <Route
          path="/shop"
          element={
            <ShopPage
              products={products}
              getProducts={getProducts}
              moreInfo={moreInfo}
            />
          }
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/our" element={<OurPage />}>
          <Route path="ceo" element={'CEO 페이지'} />
          <Route path="history" element={'History 페이지'} />
          <Route path="org" element={'Organization 페이지'} />
        </Route>
        <Route path="/search" element={'검색페이지'} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/mypage" element={'마이페이지'} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route
          path="*"
          element={
            <section
              style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f1f1f1',
              }}
            >
              올바른 주소가 아니에요
            </section>
          }
        />
      </Routes>
      {/* <MainPage products={products} />  */
      /* props 전달 */}
      <Footer />
    </div>
  );
}

export default App;
