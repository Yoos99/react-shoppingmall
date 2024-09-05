import { useState, useEffect } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import MainPage from './pages/MainPage';

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
      <MainPage products={products} /> {/* props 전달 */}
      <Footer />
    </div>
  );
}

export default App;
