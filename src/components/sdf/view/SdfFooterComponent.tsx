import React from "react";
import styles from "./SdfFooterComponent.module.scss";

const SdfFooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerInner__top}>
          <img
            src="/images/sdf/footer/logo_footer.png"
            alt="서울디지털재단로고"
          />

          <div className={styles.footerInner__topRight}>
            <div className={styles.footerInner__topRightList}>
              <div>
                <a href="#">
                  <img
                    className={styles.footerInner__topRightImg}
                    src="/images/sdf/footer/ico_report.jpg"
                    alt="부패공익신고"
                  />
                </a>
              </div>

              <div className={styles.footerInner__topRightDropWrap}>
                <label htmlFor="drop-link" className={styles.drop__link}>
                  유관기관 바로가기
                </label>
                <select
                  name="drop-link"
                  id="drop-link"
                  className={styles.footerInner__topRightDrop}
                >
                  <option className={styles.footerInner__topRightDropList}>
                    유관기관
                  </option>
                  <option className={styles.footerInner__topRightDropList}>
                    서울시청
                  </option>
                  <option className={styles.footerInner__topRightDropList}>
                    스마트서울 포털
                  </option>
                </select>
                <button
                  className={styles.footerInner__topRightDropBtn}
                  onClick={() => {}}
                >
                  GO
                </button>
              </div>
            </div>

            <div>
              <ul className={styles.footerInner__topList}>
                <li>
                  <a href="#" className={styles.footerInner__topListPersonal}>
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="#">오시는 길</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerInner__bottom}>
          <div>
            <div>
              우)03909 서울특별시 마포구 매봉산로31 에스플렉스센터 스마티움 16층
            </div>
            <div className={styles.footerInner__bottomTel}>
              <span> TEL : 02-570-4600 </span>
              <span> FAX : 02-570-4605 </span>
            </div>
          </div>
          <div className={styles.footerInner__bottomImg}>
            <img src="/images/sdf/footer/logo_web.png" alt="웹접근성획득마크" />
            <img
              src="/images/sdf/footer/footer_card.png"
              alt="예비 양육자도 ok 탄생응원 서울 프로젝트"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SdfFooterComponent;
