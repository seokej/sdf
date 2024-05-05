import React from "react";
import styles from "./SdfWorkComponent.module.scss";
import SdfBannerComponent from "./SdfBannerComponent";

const SdfWorkComponent = () => {
  return (
    <section className={styles.workWrap}>
      <div className={styles.workInner}>
        <div className={styles.workInner__title}>
          <h1 className={styles.h1}>주요사업</h1>
          <h3 className={styles.h3}>
            디지털 심화기, 스마트시티 서울의 글로벌 경쟁력 강화를 위한
            서울디지털재단의 사업을 소개합니다.
          </h3>
        </div>

        <div className={styles.workInner__desc}>
          <div
            className={`${styles.workInner__descImg} ${styles.descImg__first}`}
          />
          <div
            className={`${styles.workInner__descWrap} ${styles.descWrap__first}`}
          >
            <a href="#">
              <div className={styles.workInner__descSubTit}>BUSINESS 01</div>
              <div className={styles.workInner__descTit}>
                A · B · C를 통한 지능 정보화 선도
              </div>
              <ul className={styles.workInner__descList}>
                <li>· 도시데이터 활용 컨설팅</li>
                <li>· AI 행정서비스 연구개발</li>
                <li>· 공공데이터 활용 분석 지원</li>
                <li>· 디지털정책연구</li>
              </ul>

              <div className={styles.workInner__descLink}>
                <div>자세히 보기</div>
                <img
                  className={styles.workInner__descLinkImg}
                  src="/images/sdf/ico/ico_arrow.png"
                  alt="자세히보기"
                />
              </div>
            </a>
          </div>
          <div
            className={`${styles.workInner__descImg} ${styles.descImg__second}`}
          />
          <div
            className={`${styles.workInner__descWrap} ${styles.descWrap__second}`}
          >
            <a href="#">
              <div className={styles.workInner__descSubTit}>BUSINESS 02</div>
              <div className={styles.workInner__descTit}>
                스마트시티 글로벌 경쟁력 강화
              </div>
              <ul className={styles.workInner__descList}>
                <li>· 서울스마트시티센터 운영</li>
                <li>· 스마트도시 솔루션 해외진출</li>
                <li>· 서울 스마트라이프 위크 운영</li>
              </ul>

              <div className={styles.workInner__descLink}>
                {" "}
                <div>자세히 보기</div>
                <img src="/images/sdf/ico/ico_arrow.png" alt="자세히보기" />
              </div>
            </a>
          </div>
          <div
            className={`${styles.workInner__descImg} ${styles.descImg__third}`}
          />
          <div
            className={`${styles.workInner__descWrap} ${styles.descWrap__third}`}
          >
            <a href="#">
              <div className={styles.workInner__descSubTit}>BUSINESS 03</div>
              <div className={styles.workInner__descTit}>
                디지털 포용으로 동행서울 구현
              </div>
              <ul className={styles.workInner__descList}>
                <li>· 어르신 디지털 나들이 지원단</li>
                <li>· 디지털 포용 콘텐츠 개발 및 플랫폼 운영</li>
                <li>· 디지털 돌봄 체험버스 운영</li>
                <li>· 스마트도시 서비스 개발</li>
              </ul>

              <div className={styles.workInner__descLink}>
                {" "}
                <div>자세히 보기</div>
                <img src="/images/sdf/ico/ico_arrow.png" alt="자세히보기" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <SdfBannerComponent />
    </section>
  );
};

export default SdfWorkComponent;
