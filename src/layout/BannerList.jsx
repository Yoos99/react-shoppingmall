import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import './styles.css';
import style from '../css/BannerList.module.css';
import { Navigation, Pagination } from 'swiper/modules';

export default function BannerList() {
  useRef;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={style.BannerList}>
      <h2>배너 리스트</h2>
      <p>리스트</p>
      <Swiper
        slidesPerView={1} // 한번에 보여줄 슬라이드 갯수
        navigation={{
          // 네비게이션 버튼 사용
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // 슬라이드 초기화 전에 네비게이션 버튼 설정
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        spaceBetween={0} // 슬라이드 사이 여백
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className={style.bannerList}
      >
        <SwiperSlide>
          <div className={style.list}>
            <p>배너 제목1</p>
            <img src="/img/Img_bg1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.list}>
            <p>배너 제목2</p>
            <img src="/img/Img_bg2.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.list}>
            <p>배너 제목3</p>
            <img src="/img/Img_bg3.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <button ref={prevRef} className={style.btnPrev}>
        이전
      </button>
      <button ref={nextRef} className={style.btnNext}>
        이후
      </button>
    </section>
  );
}
