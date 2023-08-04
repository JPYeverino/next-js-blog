import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import { useTranslations } from "next-intl";
import { MESSAGES } from "./messages";

export default function Home() {
  const t = useTranslations();
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>{t(MESSAGES.TITLE)}</h1>
        <p className={styles.desc}>
          Turning your idea into Reality. We bring together the teams from the
          global tech industry
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
