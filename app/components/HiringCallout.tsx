import Link from "next/link";
import styles from "./HiringCallout.module.css";

export default function HiringCallout() {
  return (
    <section aria-label="Cafe Value hiring" className={styles.section}>
      <div className={styles.callout}>
        <div>
          <span className={styles.eyebrow}>
            Budtenders / Managers Wanted
          </span>
          <h2 className={styles.heading}>
            Join Cafe Value
          </h2>
          <p className={styles.copy}>
            Spadina needs friendly, reliable people who can help customers clearly and keep service moving smoothly. Online applications only. Please do not call the store about hiring.
          </p>
        </div>
        <Link href="/careers/budtender" className={styles.apply}>
          Apply Online
        </Link>
      </div>
    </section>
  );
}
