import React, { useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Controller, A11y, Autoplay } from "swiper/modules";
import styles from "./SdfBannerComponent.module.scss";

export const bannerSlideData = [
  {
    imgSrc: "/images/sdf/banner/img_banner01.jpg",
    alt: "부패공인신고 바로가기",
  },
  {
    imgSrc: "/images/sdf/banner/img_banner02.jpg",
    alt: "에듀테크캠퍼스 사이트 바로가기",
  },
  {
    imgSrc: "/images/sdf/banner/img_banner03.jpg",
    alt: "서울시 재난안전정보를 한눈에 보는 서울안전 누리 사이트 바로가기",
  },
];

export interface BannerSlideDataType {
  imgSrc: string;
  alt: string;
}

const SdfBannerComponent = () => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [play, setPlay] = useState(true);

  /**
   * banner slide active index check 함수
   * (활성화중인 slide의 index number 확인)
   */
  const handleIndex = (activeIndex: number) => {
    setActiveIndex(activeIndex);
  };

  /**
   * banner slide play 버튼 핸들링 함수
   */
  const handlePlayChange = () => {
    if (play) {
      setPlay(false);
      swiper?.autoplay.pause();
      return;
    } else {
      setPlay(true);
      swiper?.autoplay.resume();
    }
  };

  return (
    <div className={styles.bannerWrap}>
      <div className={styles.bannerInner}>
        <div className={styles.banner__sns}>
          <div className={styles.banner__snsImg}>
            <img
              src="/images/sdf/banner/img_title01.png"
              alt="서울디지털재단SNS"
            />
          </div>

          <ul className={styles.banner__snsListWrap}>
            <li className={styles.banner__snsList}>
              <a href="#" className={styles.banner__snsListItem}>
                <div>
                  <img src="/images/sdf/ico/ico_blog.png" alt="블로그" />
                </div>
                <div>블로그</div>
              </a>
            </li>
            <li className={styles.banner__snsList}>
              <a href="#" className={styles.banner__snsListItem}>
                <div>
                  <img src="/images/sdf/ico/ico_fb.png" alt="페이스북" />
                </div>
                <div>페이스북</div>
              </a>
            </li>
            <li className={styles.banner__snsList}>
              <a href="#" className={styles.banner__snsListItem}>
                <div>
                  <img src="/images/sdf/ico/ico_yt.png" alt="유튜브" />
                </div>
                <div>유튜브</div>
              </a>
            </li>
            <li className={styles.banner__snsList}>
              <a href="#" className={styles.banner__snsListItem}>
                <div>
                  <img
                    src="/images/sdf/ico/ico_instagram.png"
                    alt="인스타그램"
                  />
                </div>
                <div>인스타그램</div>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.banner__slideContainer}>
          <Swiper
            modules={[Navigation, Autoplay, Controller, A11y]}
            loop={true}
            a11y={{ enabled: true }}
            navigation={{
              prevEl: "#bannerSwiperArrowPrev",
              nextEl: "#bannerSwiperArrowNext",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            onActiveIndexChange={(swiper: any) => {
              handleIndex(swiper.realIndex);
            }}
            onSwiper={(e) => {
              setSwiper(e);
            }}
          >
            {bannerSlideData.map((item: BannerSlideDataType, index: number) => {
              return (
                <SwiperSlide
                  className={styles.banner__slideWrap}
                  key={`banner` + index}
                >
                  <div className={styles.banner__slideInner}>
                    <a href="#">
                      <img
                        className={styles.banner__slideImg}
                        src={item.imgSrc}
                        alt={item.alt}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}

            <div className={styles.banner__controlWrap}>
              <div className={styles.banner__controlInner}>
                <button
                  id="bannerSwiperArrowPrev"
                  className={styles.banner__prevBtn}
                />
                <span className={styles.banner__activeIndex}>
                  {activeIndex + 1}
                </span>{" "}
                / {bannerSlideData.length}
                <button
                  id="bannerSwiperArrowNext"
                  className={styles.banner__nextBtn}
                />
              </div>

              <button
                className={
                  play ? styles.banner__stopBtn : styles.banner__playBtn
                }
                onClick={handlePlayChange}
              >
                <span className="blind">
                  {play ? "슬라이드 일시정지 버튼" : "슬라이드 재생 버튼"}
                </span>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SdfBannerComponent;
