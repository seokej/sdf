import React from "react";
import styles from "./SdfServiceComponent.module.scss";

const SdfServiceComponent = () => {
  return (
    <section className={styles.serviceWrap}>
      <div className={styles.serviceInner}>
        <h1 className={styles.h1}>주요서비스</h1>
        <ul className={styles.serviceListWrap}>
          <li className={styles.serviceListWrap__list}>
            <a href="#" className={styles.serviceListWrap__listItem}>
              <div className={styles.serviceListWrap_itemText}>기관소개</div>
            </a>
          </li>
          <li className={styles.serviceListWrap__list}>
            <a href="#" className={styles.serviceListWrap__listItem}>
              <div className={styles.serviceListWrap_itemText}>채용공고</div>
            </a>
          </li>
          <li className={styles.serviceListWrap__list}>
            <a href="#" className={styles.serviceListWrap__listItem}>
              <div className={styles.serviceListWrap_itemText}>입찰공고</div>
            </a>
          </li>
          <li className={styles.serviceListWrap__list}>
            <a href="#" className={styles.serviceListWrap__listItem}>
              <div className={styles.serviceListWrap_itemText}>연구보고서</div>
            </a>
          </li>
          <li className={styles.serviceListWrap__list}>
            <a href="#" className={styles.serviceListWrap__listItem}>
              <div className={styles.serviceListWrap_itemText}>언론보도</div>
            </a>
          </li>
          <li className={styles.serviceListWrap__list}>
            <a href="#" className={styles.serviceListWrap__listItem}>
              <div className={styles.serviceListWrap_itemText}>
                서울스마트시티센터
              </div>
            </a>
          </li>
          <li className={styles.serviceListWrap__list}>
            <a href="#" className={styles.serviceListWrap__listItem}>
              <div className={styles.serviceListWrap_itemText}>
                에듀테크캠퍼스
              </div>
            </a>
          </li>
          <li className={styles.serviceListWrap__list}>
            <a href="#" className={styles.serviceListWrap__listItem}>
              <div className={styles.serviceListWrap_itemText}>
                서울 스마트 라이프위크
              </div>
            </a>
          </li>
          <li className={styles.serviceListWrap__list}>
            <a href="#" className={styles.serviceListWrap__listItem}>
              <div className={styles.serviceListWrap_itemText}>오시는길</div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SdfServiceComponent;
