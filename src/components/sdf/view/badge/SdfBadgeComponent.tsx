import React from "react";
import styles from "./SdfBadgeComponent.module.scss";

type Props = {
  type: number;
};

const SdfBadgeComponent = (props: Props) => {
  const { type } = props;

  switch (type) {
    case 1: {
      return (
        <div className={`${styles.typeBadge} ${styles.typeBadge__edu}`}>
          행사/교육
        </div>
      );
    }
    case 2: {
      return (
        <div className={`${styles.typeBadge} ${styles.typeBadge__work}`}>
          사업공고
        </div>
      );
    }
    case 3: {
      return (
        <div className={`${styles.typeBadge} ${styles.typeBadge__news}`}>
          보도자료
        </div>
      );
    }
    default: {
      return <></>;
    }
  }
};

export default SdfBadgeComponent;
