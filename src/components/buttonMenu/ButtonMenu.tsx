import gsap from "gsap";
import { FC, useEffect, useRef } from "react";

import { ButtonMenuProps } from "./types";

import styles from "./ButtonMenu.module.scss";

export const ButtonMenu: FC<ButtonMenuProps> = ({
  toggleActiveBtn,
  isBtnActive,
}) => {
  gsap.defaults({ duration: 0.05 });
  const tlRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    if (isBtnActive) {
      tlRef.current = gsap
        .timeline()
        .fromTo("#line3", { scaleX: "100%" }, { scaleX: 0 })
        .fromTo("#line2", { scaleX: "100%" }, { scaleX: 0 })
        .fromTo("#line1", { scaleX: "100%" }, { scaleX: 0 })
        .fromTo("#line4", { scaleX: 0 }, { scaleX: "100%" })
        .fromTo("#line5", { scaleX: 0 }, { scaleX: "100%" });
    } else if (isBtnActive === false) {
      tlRef.current?.reverse();
    } else {
      gsap
        .timeline()
        .set(["#line4", "#line5"], { scaleX: 0 })
        .fromTo("#line1", { scaleX: 0 }, { scaleX: "100%" })
        .fromTo("#line2", { scaleX: 0 }, { scaleX: "100%" })
        .fromTo("#line3", { scaleX: 0 }, { scaleX: "100%" });
    }
  }, [isBtnActive]);

  return (
    <button type="button" className={styles.btn} onClick={toggleActiveBtn}>
      <span id="line1" className={styles.btn_line}></span>
      <span id="line2" className={styles.btn_line}></span>
      <span id="line3" className={styles.btn_line}></span>
      <span id="line4" className={styles.btn_line}></span>
      <span id="line5" className={styles.btn_line}></span>
    </button>
  );
};
