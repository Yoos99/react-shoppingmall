import { Link } from 'react-router-dom';
import style from '../css/Header.module.css';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // 햄버그 메뉴가 열렸을 때 body에 overflow: hidden 스타일 적용
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isMobile, isMenuOpen]);

  const handleResize = () => {
    const newIsMobile = window.innerWidth < 768;
    setIsMobile(newIsMobile);
    if (!newIsMobile) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // module.css 사용법
    <header className={`${style.header} mw`}>
      <h1>
        <Link to="/">
          {/*a태그 대신 Link 사용 */}
          <img className={style.logoImg} src="./img/logo.svg" alt="로고" />
        </Link>
      </h1>
      {/* on을 사용하여 햄버그 메뉴를 클릭했을 때 나타나게 함 */}
      <nav className={`${isMenuOpen ? style.on : ''}`}>
        <div className={style.gnb}>
          <Link to="/shop">SHOP</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/our">OUR STORY</Link>
        </div>
        <div className={style.person}>
          <Link to="/search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link to="/mypage">
            <i className="fa-solid fa-user"></i>
          </Link>
        </div>
      </nav>
      <button className={style.btn} onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
}
