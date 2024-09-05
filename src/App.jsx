import { useState, useEffect } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import MainPage from './pages/MainPage';

function App() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      let url = 'http://localhost:8000/products';
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      //setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="wrap">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
