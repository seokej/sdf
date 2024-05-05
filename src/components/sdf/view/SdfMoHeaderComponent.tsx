import React, { useState } from "react";
import styles from "./SdfMoHeaderComponent.module.scss";
import { moMenuList } from "../dummy/moMenuDummy";

interface SdfMoHeaderProps {}

const SdfMoHeaderComponent = (props: SdfMoHeaderProps) => {
  const [isOpenIdx, setIsOpenIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  /**
   *  Mo용 Gnb
   */
  const onClickMoGnb = () => {
    const items = document.querySelectorAll(`.${styles.m__gnbMenuList}`);

    items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((e) => {
          e.classList.remove(`${styles.m__Active}`);
        });
        item.classList.toggle(`${styles.m__Active}`);
      });
    });
  };

  return (
    <div className={styles.m__gnbMenuBottom}>
      <ul>
        {moMenuList.map((item, idx) => {
          const isActive = isOpen && idx === isOpenIdx;
          const subTitleArray = item.subTitle;
          const desc = item.desc;
          const isDescArray = desc && desc.length > 0;

          return (
            <li
              key={"item" + idx}
              className={
                isActive
                  ? `${styles.m__gnbMenuList} ${styles.m__Active}`
                  : `${styles.m__gnbMenuList}`
              }
              onClick={(e) => {
                e.preventDefault();
                setIsOpenIdx(idx);
                setIsOpen((prev) => !prev);
                onClickMoGnb();
              }}
            >
              <a
                className={
                  isActive
                    ? `${styles.m__gnbMenuListLink} ${styles.m__Active}`
                    : `${styles.m__gnbMenuListLink}`
                }
                href="#"
              >
                {item.title}
              </a>

              <ul className={styles.m__gnbMenuDropWrap}>
                {subTitleArray.map((item, idx) => {
                  return (
                    <li key={idx + `item`}>
                      <a href="#" className={styles.m__gnbMenuDropLink}>
                        {item}
                      </a>

                      {isDescArray && (
                        <ul className={styles.m__gnbMenuDropLink__descWrap}>
                          {desc[idx].map((desc, index) => {
                            return (
                              <li key={`item` + index}>
                                <a
                                  href="#"
                                  className={styles.m__gnbMenuDropLink__desc}
                                >
                                  {desc}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SdfMoHeaderComponent;
