import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

export function Footer() {
  return (
    <div className={styles.container}>
      <div>Dummie App. All rights reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="Logo"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt="Logo"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt="Logo"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/4.png"
          alt="Logo"
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </div>
  );
}
