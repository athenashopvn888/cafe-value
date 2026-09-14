import Link from "next/link";
import PreferredSourceButton from "./PreferredSourceButton";
import styles from "./WeedOwnerPage.module.css";

const faqs = [
  ["Where is Cafe Value Cannabis?", "Cafe Value Cannabis is located at 654 Spadina Ave., Toronto, ON M5S 2H7."],
  ["Which Weed tiers are covered on the website?", "The site has dedicated pages for Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed."],
  ["Where can I find Spadina and The Annex store information?", "Follow the dedicated Spadina and The Annex local-information page linked from this guide."],
  ["Who is the website for?", "The website is intended for adults 19+."],
] as const;

export function WeedOwnerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Cafe Value Cannabis",
    url: "https://www.cafevaluecannabisdispensary.com/weed-dispensary-toronto/",
    telephone: "+12898074161",
    address: {
      "@type": "PostalAddress",
      streetAddress: "654 Spadina Ave.",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M5S 2H7",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6633088,
      longitude: -79.4025299,
    },
    openingHours: "Mo-Su 10:00-00:00",
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Cafe Value Cannabis · Adults 19+</p>
        <h1>Weed Dispensary on Spadina Avenue in Toronto</h1>
        <p>Cafe Value Cannabis is located at 654 Spadina Ave in Toronto. This is the site&apos;s main local page for adults 19+ looking for accurate store information and clear paths to the Weed categories and educational pages already available on the website.</p>
        <div className={styles.actions}>
          <Link href="/budget-weed" className={styles.primary}>Explore Budget Weed</Link>
          <a href="tel:+12898074161" className={styles.secondary}>Call +1 289-807-4161</a>
        </div>
      </header>

      <section className={styles.section}>
        <h2>Confirm the store information before visiting</h2>
        <p>The business name, Spadina Avenue address, phone number and current hours should remain consistent across the website and verified business records. Check the current information displayed on this page before travelling.</p>
      </section>

      <section className={styles.section}>
        <h2>Explore the established Weed tiers</h2>
        <div className={styles.cards}>
          <Link href="/exotic-weed" className={styles.card}><h3>Exotic Weed</h3><p>Visit the established Exotic Weed category page.</p></Link>
          <Link href="/premium-weed" className={styles.card}><h3>Premium Weed</h3><p>Visit the established Premium Weed category page.</p></Link>
          <Link href="/aaa-weed" className={styles.card}><h3>AAA+ Weed</h3><p>Visit the established AAA+ Weed category page.</p></Link>
          <Link href="/aa-weed" className={styles.card}><h3>AA Weed</h3><p>Visit the established AA Weed category page.</p></Link>
          <Link href="/budget-weed" className={styles.card}><h3>Budget Weed</h3><p>Visit the established Budget Weed category page.</p></Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Spadina Avenue and The Annex context</h2>
        <p>The store&apos;s immediate location context includes Spadina Avenue and The Annex. This page uses those terms to help identify the real store location. It does not promise a particular travel time, nearest-store result, parking option or transit route.</p>
      </section>

      <section className={styles.section}>
        <h2>Continue with local and educational information</h2>
        <p>Visitors can continue to the dedicated <Link href="/info/weed-store-near-the-annex-spadina">Spadina and The Annex store-information page</Link> for a focused local overview, then return to the main category pages when they are ready to compare the site&apos;s established Weed tiers.</p>
        <address className={styles.address}>
          <strong>Cafe Value Cannabis</strong><br />
          654 Spadina Ave.<br />Toronto, ON M5S 2H7<br />
          <a href="tel:+12898074161">+1 289-807-4161</a><br />
          10:00 AM–12:00 AM daily
        </address>
        <p>Adults 19+. If your visit depends on one particular item, call ahead first.</p>
      </section>

      <section className={styles.section} id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqs}>
          {faqs.map(([question, answer]) => (
            <article key={question}><h3>{question}</h3><p>{answer}</p></article>
          ))}
        </div>
      </section>
      <PreferredSourceButton />
    </main>
  );
}
