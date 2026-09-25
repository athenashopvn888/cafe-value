import Link from "next/link";
import PreferredSourceButton from "./PreferredSourceButton";
import styles from "./WeedOwnerPage.module.css";
import { STORE } from "../lib/storeIdentity";

const faqs = [
  ["Where is Cafe Value Cannabis?", "Cafe Value Cannabis is the walk-in at 654 Spadina Ave, Toronto, ON M5S 2H7, in The Annex near Harbord Street."],
  ["What are Cafe Value Cannabis's hours?", "This location has closed and moved to Green Sundae in Mississauga."],
  ["Is Cafe Value Cannabis for adults 19+?", "Yes. Cafe Value Cannabis is for adults 19+ with valid government photo ID."],
  ["How do I reach the Spadina counter?", "Use the homepage for address, map, and directions. The /visit page covers the 510 Spadina streetcar, Spadina station, and parking. This location has closed and moved to Green Sundae in Mississauga."],
  ["What is the difference between weed and cannabis?", "Weed is common conversational terminology for cannabis. Cannabis is the broader term and can include several different product formats."],
  ["Where can I begin if value matters to me?", "The Budget section provides a value-oriented flower starting point without implying any current price, deal or promotion."],
  ["How can I ask about a specific product?", "Call Cafe Value Cannabis at +1 289-807-4161 before making a special trip for one particular item."],
] as const;

export function WeedOwnerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CannabisStore",
    name: STORE.name,
    url: STORE.homepageUrl,
    telephone: STORE.phoneIntl,
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE.streetAddress,
      addressLocality: STORE.addressLocality,
      addressRegion: STORE.addressRegion,
      postalCode: STORE.postalCode,
      addressCountry: STORE.addressCountry,
    },
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Cafe Value Cannabis · The Annex · Adults 19+</p>
        <h1>Cafe Value Cannabis — Annex walk-in on Spadina</h1>
        <p>Supporting notes for 654 Spadina Ave. The homepage stays the visit hub for NAP, map, and directions. This location has closed and moved to Green Sundae in Mississauga.</p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>Homepage visit hub</Link>
          <Link href="/visit" className={styles.secondary}>How to reach Spadina</Link>
        </div>
      </header>

      <section className={styles.section}>
        <h2>Weed and Cannabis at Cafe Value Cannabis</h2>
        <p>Cafe Value Cannabis is located at 654 Spadina Ave in The Annex. This location has closed and moved to Green Sundae in Mississauga.</p>
        <p>Adults 19+ can begin with flower or narrow their choices by the type of cannabis they are interested in. The most useful next step is deciding whether flower, value-focused options or another cannabis format is the priority.</p>
        <p>For one specific item, call <a href={STORE.phoneTel}>+1 289-807-4161</a> before making a special trip.</p>
      </section>

      <section className={styles.section}>
        <h2>Find Your Weed at Cafe Value</h2>
        <div className={styles.cards}>
          <Link href="/budget-weed" className={styles.card}>
            <h3>Start With Value-Oriented Flower</h3>
            <p>Explore the Budget section when value is your starting point.</p>
            <span>Budget Flower →</span>
          </Link>
          <Link href="/resources" className={styles.card}>
            <h3>Learn More Before You Visit</h3>
            <p>Explore additional store and cannabis information.</p>
            <span>Cafe Value Cannabis Resources →</span>
          </Link>
        </div>
        <p className={styles.note}>The Budget link identifies a browsing section only. It does not claim that any particular product, price, deal or promotion is currently available.</p>
      </section>

      <section className={styles.section}>
        <h2>Weed, Cannabis, Flower and Bud — From Broad to Specific</h2>
        <div className={styles.terms}>
          <div><h3>Weed</h3><p>Common everyday language for cannabis and broad cannabis shopping.</p></div>
          <div><h3>Cannabis</h3><p>The broader term, which can include flower and other cannabis formats.</p></div>
          <div><h3>Flower</h3><p>Dried cannabis flower.</p></div>
          <div><h3>Bud</h3><p>A common informal term for cannabis flower.</p></div>
        </div>
        <p>For Cafe Value shoppers, the useful distinction is usually whether they want flower or another cannabis format—not whether they started with the word Weed or Cannabis.</p>
      </section>

      <section className={styles.section}>
        <h2>Visit Cafe Value Cannabis on Spadina Avenue</h2>
        <address className={styles.address}>
          <strong>Cafe Value Cannabis</strong><br />
          654 Spadina Ave<br />Toronto, ON M5S 2H7<br />
          <a href={STORE.phoneTel}>+1 289-807-4161</a><br />
          This location has closed and moved to Green Sundae in Mississauga
        </address>
        <p>Adults 19+. If your visit depends on one particular item, call ahead first. Streetcar and parking notes are on <Link href="/visit">how to reach The Annex</Link>.</p>
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
