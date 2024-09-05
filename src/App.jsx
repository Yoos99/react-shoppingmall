import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import MainPage from './pages/MainPage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import OurPage from './pages/OurPage';

function App() {
  const [products, setProducts] = useState([]); //상태 정의
  const getProducts = async () => {
    try {
      // let url = 'http://localhost:8000/products';
      let url =
        'http://localhost:8000/products?_page=1&_per_page=6&category=new'; //쿼리 스트링으로 1페이지 6개만 가져오기 + 신상품만
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      // setProducts(data); //기본 url 버전 상태 업데이트
      setProducts(data.data); //쿼리 스트링 바꿨을때 데이터 형식 바꿔주기
    } catch (error) {
      console.log(error);
    }
  };

  //한 번만 실행하여 데이터 가져오기
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage products={products} />} />
        <Route path="/shop" element={<ShopPage products={products} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/our" element={<OurPage />}>
          <Route path="ceo" element={'CEO 페이지'} />
          <Route path="history" element={'History 페이지'} />
          <Route path="org" element={'Organization 페이지'} />
        </Route>
        <Route path="/search" element={'검색'} />
        <Route path="/cart" element={'장바구니'} />
        <Route path="/myPage" element={'마이페이지'} />
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
