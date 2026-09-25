import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./contact.module.css";
import { STORE, mapsEmbedUrl, mapsDirectionsUrl } from "../lib/storeIdentity";

export const metadata: Metadata = {
  title: "Contact Cafe Value Cannabis | 654 Spadina Ave, The Annex",
  description:
    "Visit Cafe Value Cannabis at 654 Spadina Ave, Toronto, ON M5S 2H7, in The Annex near Harbord Street. This location has closed and moved to Green Sundae in Mississauga. Adults 19+.",
  openGraph: {
    title: "Contact Cafe Value Cannabis | Annex Spadina",
    description:
      "654 Spadina Ave, The Annex. This location has closed and moved to Green Sundae in Mississauga. Call +1 (289) 807-4161.",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Visit <span className={styles.heroAccent}>Cafe Value</span>
          </h1>
          <p className={styles.heroSub}>
            654 Spadina Ave · The Annex · Toronto, ON M5S 2H7
          </p>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>
                654 Spadina Ave
                <br />
                Toronto, ON M5S 2H7
                <br />
                <span className={styles.infoMuted}>Spadina &amp; Harbord, The Annex</span>
              </p>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕒</div>
              <h2 className={styles.infoTitle}>{STORE.hoursNote}</h2>
            </div>

            {/* Walk-in */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🔥</div>
              <h2 className={styles.infoTitle}>Walk In</h2>
              <p className={styles.infoText}>
                No appointment needed.
                <br />
                Just walk in and our staff will
                <br />
                help you browse the menu categories.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Flower tiers and cannabis categories
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Adult 19+ store information
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Knowledgeable budtenders
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Debit &amp; cash accepted
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
            <iframe
              title="Map of Cafe Value Cannabis at 654 Spadina Ave"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              style={{ display: "block", width: "100%", height: 360, border: 0 }}
            />
            <p style={{ padding: "16px 20px", margin: 0 }}>
              <a href={STORE.phoneTel}>{STORE.phoneDisplay}</a>
              {" · "}
              <a href={mapsDirectionsUrl} rel="noopener noreferrer" target="_blank">Directions</a>
              {" · "}
              <Link href="/visit">How to reach The Annex</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
