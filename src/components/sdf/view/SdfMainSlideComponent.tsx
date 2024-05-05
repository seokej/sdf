import React, { useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Controller, A11y, Autoplay } from "swiper/modules";
import styles from "./SdfMainSlideComponent.module.scss";

export const mainSlideData = [
  {
    title: "선도적 인공지능",
    subTitle: "A·B·C를 통한 지능 정보화 선도",
    desc: "인공지능, 빅데이터, 클라우드 등 디지털 기술을 통해\n 첨단 공공서비스 개발 및 과학행정을 촉진하여\n 시민복리 증진 및 시정발전 지원",
  },
  {
    title: "혁신적 사업추진",
    subTitle: "스마트시티 글로벌 경쟁력 강화",
    desc: "민관 협력 기반의 경쟁력 있는 스마트시티 생태계 조성을 통해\n 서울시의 우수한 스마트시티정책을 국내외에 공유하고,\n 스마트시티 기업의 해외진출 촉진",
  },
  {
    title: "디지털 시정구현",
    subTitle: "디지털 포용으로 동행서울 구현",
    desc: " 어르신, 장애인 등 디지털약자의 역량강화 및 포용적 디지털 \n 이용 환경 조성으로 시정 철학인 약자와의 동행 실현",
  },
  {
    title: "고도의 윤리경영",
    subTitle: "지속가능 스마트창의 경영 추진",
    desc: "ESG 경영실현을 통한 지속가능 경영기반을 마련하고,\n 창의역량 중심 조직문화 조성",
  },
];

export interface MainSlideDataType {
  title: string;
  subTitle: string;
  desc: string;
}

const SdfMainSlideComponent = () => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [play, setPlay] = useState(true);

  /**
   * main slide active index check 함수
   * (활성화중인 slide의 index number 확인)
   */
  const handleIndex = (activeIndex: number) => {
    setActiveIndex(activeIndex);
  };

  /**
   * main slide play 버튼 핸들링 함수
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
    <main id="mainMenu">
      <Swiper
        modules={[Navigation, Autoplay, Controller, A11y]}
        navigation={{
          prevEl: "#mainSwiperArrowPrev",
          nextEl: "#mainSwiperArrowNext",
        }}
        a11y={{ enabled: true }}
        loop={true}
        autoplay={{ delay: 4000 }}
        onActiveIndexChange={(swiper: any) => {
          handleIndex(swiper.realIndex);
        }}
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        {mainSlideData.map((item: MainSlideDataType, index: number) => {
          return (
            <SwiperSlide className={styles.slideWrap} key={`main` + index}>
              <div className={styles.slideInner}>
                <a href="#">
                  <div className={styles.slideDescWrap}>
                    <div className={styles.slideTitle}>{item.title}</div>
                    <div className={styles.slideSubTitle}>{item.subTitle}</div>
                    <div className={styles.slideDesc}>
                      {item.desc.split("\n").map((desc) => {
                        return (
                          <>
                            {desc}
                            <br />
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.slideImg} />
                </a>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={styles.controlWrap}>
          <div className={styles.controlInner}>
            <button id="mainSwiperArrowPrev" className={styles.prevBtn}>
              <span className="blind">슬라이드 이전 버튼</span>
            </button>
            {activeIndex + 1} / {mainSlideData.length}
            <button id="mainSwiperArrowNext" className={styles.nextBtn}>
              <span className="blind">슬라이드 다음 버튼</span>
            </button>
          </div>

          <button
            className={play ? styles.stopBtn : styles.playBtn}
            onClick={handlePlayChange}
          >
            <span className="blind">
              {play ? "슬라이드 일시정지 버튼" : "슬라이드 재생 버튼"}
            </span>
          </button>
        </div>
      </Swiper>
    </main>
  );
};

export default SdfMainSlideComponent;
