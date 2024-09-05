import BannerList from '../layout/BannerList';
import ProductList from '../layout/ProductList';

export default function MainPage({ products }) {
  return (
    <main className="mw">
      <h2>메인 페이지</h2>
      <BannerList />
      <ProductList products={products} /> {/* props 전달 */}
    </main>
  );
}
