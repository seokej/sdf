import React from "react";
import styles from "./SdfComponent.module.scss";
import SdfHeaderComponent from "./view/SdfHeaderComponent";
import SdfServiceComponent from "./view/SdfServiceComponent";
import SdfNewsComponent from "./view/SdfNewsComponent";
import SdfWorkComponent from "./view/SdfWorkComponent";
import SdfFooterComponent from "./view/SdfFooterComponent";
import SdfMainSlideComponent from "./view/SdfMainSlideComponent";
import { Noto_Sans_KR } from "next/font/google";

const noto_Sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "800",
});

const SdfComponent = () => {
  return (
    <div className={`${styles.wrapper} ${noto_Sans.className}`}>
      <SdfHeaderComponent />
      <SdfMainSlideComponent />
      <SdfServiceComponent />
      <SdfNewsComponent />
      <SdfWorkComponent />
      <SdfFooterComponent />
    </div>
  );
};

export default SdfComponent;
