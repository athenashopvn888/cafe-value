import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 — Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>
              CAFE<span className={styles.fire}>🔥</span>VALUE
            </div>
            <p className={styles.desc}>
              Your Local Cannabis Dispensary At 654 Spadina Ave, Toronto. Visit
              Cafe Value For Premium Flower, Edibles, Vapes &amp; More.
              Open daily 10:00 AM - 12:00 AM.
            </p>
            <div className={styles.buttons}>
              <a
                href="tel:+12898074161"
                className={styles.btnPrimary}
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Column 2 — Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>654 Spadina Ave</span>
              <span>Toronto, ON M5S 2H7</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span><a href="tel:+12898074161" style={{color: "inherit"}}>+1 (289) 807-4161</a></span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Daily 10:00 AM - 12:00 AM</span>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic-weed">Exotic Weed</Link>
              <Link href="/premium-weed">Premium Weed</Link>
              <Link href="/aaa-weed">AAA+ Weed</Link>
              <Link href="/aa-weed">AA Weed</Link>
              <Link href="/budget-weed">Budget Weed</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Nicotine Vape</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery Menu</Link>
              <Link href="/info/toronto-weed-dispensary">Toronto Dispensary</Link>
              <Link href="/info/cheap-weed-toronto">Cheap Weed Toronto</Link>
              <Link href="/info/native-cigarettes-toronto">Native Cigarettes</Link>
              <Link href="/info/nicotine-vapes-toronto">Nicotine Vapes Toronto</Link>
              <Link href="/info/weed-store-near-the-annex-spadina">Weed Store Near Spadina</Link>
              <Link href="/weed-dispensary-toronto/">Cafe Value Weed Dispensary in Toronto</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Cafe Value. Must be 19+ to
            enter. Adults 19+ only.
          </p>
        </div>
      </div>
    </footer>
  );
}
