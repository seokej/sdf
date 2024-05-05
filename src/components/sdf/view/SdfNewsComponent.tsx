import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import axios from "axios";
import useSWR from "swr";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Controller, A11y } from "swiper/modules";
import styles from "./SdfNewsComponent.module.scss";
import SdfBadgeComponent from "./badge/SdfBadgeComponent";

interface SlideNewsItemType {
  type: number;
  title: string;
  date?: string;
  img?: string;
}

/**
 * News Data를 반환하는 함수
 */
export const getSdfNews = async () => {
  const res = await axios.get("/api/getSdfNews");

  const NewsData: SlideNewsItemType[] = [];

  /**
   * 그냥 res.data를 반환해도 되지만
   * Object.keys ~ forEach문을 통해
   * NewsData의 빈배열에 push,
   * type을 통해 한번 더 data 확인
   * type에 맞는 data가 안들어갈 경우 오류 검출
   */
  Object.keys(res.data).forEach((key) => {
    NewsData.push({
      type: res.data[key].type,
      title: res.data[key].title,
      date: res.data[key].date,
      img: res.data[key].img,
    });
  });

  return NewsData;
};

const SdfInfoComponent = () => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  /**
   * SWR을 통한 API 통신
   */
  const { data, error } = useSWR("news", getSdfNews);
  const [list, setList] = useState<SlideNewsItemType[] | undefined>(data);
  const [typeN, setTypeN] = useState<number>(0);
  const [isActive, setIsActive] = useState<number>(0);

  const menuItems = ["전체", "행사교육", "사업공고", "보도자료"];

  /**
   * btn에 따른 list 필터링 함수
   */
  const filterList = (data: SlideNewsItemType[], btnTypeN: number) => {
    let list: SlideNewsItemType[] = [];

    if (btnTypeN === 0) {
      setTypeN(0);
      setList(data);
    } else {
      setTypeN(btnTypeN);
      list = data.filter((data) => data.type === btnTypeN);
      setList(list);
      return;
    }
  };

  /**
   * 첫 진입시 data 불러오기 위한 hook
   */
  useEffect(() => {
    if (data && typeN === 0) {
      filterList(data, 0);
    }
  }, [data, typeN]);

  if (error) return <p>Failed to load.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <section className={styles.infoWrap}>
      <div className={styles.infoInner}>
        <h1 className={styles.h1}>서울디지털재단 소식</h1>

        <ul className={styles.infoListWrap}>
          {menuItems.map((days, idx) => {
            return (
              <li key={days} className={styles.infoListWrap__list}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    filterList(data, idx);
                    setIsActive(idx);
                  }}
                  className={styles.infoListWrap__listBtn}
                  style={{ color: idx === isActive ? "#134796" : "#888888" }}
                >
                  {days}
                </button>
              </li>
            );
          })}
        </ul>

        <div className={styles.swiperWrap}>
          <button id="newsSwiperArrowPrev" className={styles.prevBtn} />
          <Swiper
            modules={[Navigation, Controller, A11y]}
            loop={true}
            a11y={{ enabled: true }}
            navigation={{
              prevEl: "#newsSwiperArrowPrev",
              nextEl: "#newsSwiperArrowNext",
            }}
            slidesPerView={1}
            spaceBetween={40}
            breakpoints={{
              1300: {
                slidesPerView: 4, //브라우저가 768보다 클 때
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3, //브라우저가 1024보다 클 때
                spaceBetween: 20,
              },
            }}
            onSwiper={(e) => {
              setSwiper(e);
            }}
          >
            {list &&
              list.map((item: SlideNewsItemType, index: number) => {
                return (
                  <SwiperSlide
                    className={styles.slideWrap}
                    key={`item` + index}
                  >
                    <a className={styles.infoSlideWrap}>
                      <div className={styles.infoSlideWrap__itemInner}>
                        <div className={styles.infoSlideWrap__itemType}>
                          <SdfBadgeComponent type={item.type} />
                        </div>
                        <div
                          className={`${styles.infoSlideWrap__itemTitle} lineClamp4`}
                        >
                          {item.title}
                        </div>
                      </div>

                      {item.type === 1 ? (
                        <div className={styles.infoSlideWrap__itemImg}>
                          <img src={item.img} alt={item.title} />
                        </div>
                      ) : (
                        <div className={styles.infoSlideWrap__itemDate}>
                          {item.date}
                        </div>
                      )}
                    </a>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <button id="newsSwiperArrowNext" className={styles.nextBtn} />
        </div>
      </div>
    </section>
  );
};

export default SdfInfoComponent;
