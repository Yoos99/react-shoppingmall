import style from '../css/Header.module.css';

export default function Header() {
  return (
    // module.css 사용법
    <header className={`${style.header} mw`}>
      <h1>
        <a href="/">
          <img className={style.logoImg} src="./img/logo.svg" alt="로고" />
        </a>
      </h1>
      <nav className={style.on}>
        <div className={style.gnb}>
          <a href="#">SHOP</a>
          <a href="#">BLOG</a>
          <a href="#">OUR STORY</a>
        </div>
        <div className={style.person}>
          <a href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-user"></i>
          </a>
        </div>
      </nav>
      <button className={style.btn}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
}
