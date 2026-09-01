import Link from "next/link";
import PreferredSourceButton from "./PreferredSourceButton";
import styles from "./WeedOwnerPage.module.css";

const faqs = [
  ["Where is Cafe Value Cannabis?", "Cafe Value Cannabis is located at 654 Spadina Ave., Toronto, ON M5S 2H7."],
  ["What are Cafe Value Cannabis's hours?", "Cafe Value Cannabis is open daily from 10:00 AM to midnight."],
  ["Is Cafe Value Cannabis for adults 19+?", "Yes. Cafe Value Cannabis is for adults 19+."],
  ["What is the difference between weed and cannabis?", "Weed is common conversational terminology for cannabis. Cannabis is the broader term and can include several different product formats."],
  ["What are bud and flower?", "Flower is dried cannabis flower. Bud is a common informal word used for flower."],
  ["Where can I begin if value matters to me?", "The Budget section provides a value-oriented flower starting point without implying any current price, deal or promotion."],
  ["How can I ask about a specific product?", "Call Cafe Value Cannabis at +1 289-807-4161 before making a special trip for one particular item."],
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
    openingHours: "Mo-Su 10:00-00:00",
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Cafe Value Cannabis · Adults 19+</p>
        <h1>Cafe Value Cannabis — Weed Dispensary in Toronto</h1>
        <p>Weed, Cannabis and flower information for shoppers visiting 654 Spadina Ave.</p>
        <div className={styles.actions}>
          <Link href="/budget/" className={styles.primary}>Explore Budget Flower</Link>
          <a href="tel:+12898074161" className={styles.secondary}>Call +1 289-807-4161</a>
        </div>
      </header>

      <section className={styles.section}>
        <h2>Weed and Cannabis at Cafe Value Cannabis</h2>
        <p>Cafe Value Cannabis is located at 654 Spadina Ave. in Toronto and is open daily from 10:00 AM to midnight.</p>
        <p>Adults 19+ can begin with flower or narrow their choices by the type of cannabis they are interested in. The most useful next step is deciding whether flower, value-focused options or another cannabis format is the priority.</p>
        <p>For one specific item, call <a href="tel:+12898074161">+1 289-807-4161</a> before making a special trip.</p>
      </section>

      <section className={styles.section}>
        <h2>Find Your Weed at Cafe Value</h2>
        <div className={styles.cards}>
          <Link href="/budget/" className={styles.card}>
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
