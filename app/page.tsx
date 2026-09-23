import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 aria-label="Salcantay Global" className={styles.logo}>
            <span className={styles.logoMark}>SALCANTAY</span>
            <span className={styles.logoDivider} />
            <span className={styles.logoWord}>GLOBAL</span>
          </h1>

          <div className={styles.copy}>
            {[
              "Salcantay Global is a private investment company founded in 2017.",
              "We invest proprietary capital in private equity and real estate.",
              "Driven by enduring partnerships and an entrepreneurial spirit.",
            ].map((line) => (
              <p key={line} className={styles.copyLine}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.coords}>-13.332867, -72.546171</div>
        <div className={styles.legal}>© 2026 Salcantay Global Ltd.</div>
      </div>
    </div>
  );
}
