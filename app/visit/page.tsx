import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  STORE,
  VISIT_FAQS,
  faqPageGraphNode,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  serializeJsonLd,
} from "../lib/storeIdentity";
import styles from "./visit.module.css";

const canonical = `${STORE.baseUrl}${STORE.visitPath}`;

export const metadata: Metadata = {
  title: { absolute: "How to Reach Cafe Value Cannabis | Annex Spadina" },
  description:
    "How to reach Cafe Value Cannabis at 654 Spadina Ave in The Annex: 510 Spadina streetcar, Spadina station, Harbord Street, metered parking. This location has closed and moved to Green Sundae in Mississauga. Call +1 (289) 807-4161. Adults 19+.",
  alternates: { canonical },
  robots: { index: true, follow: true },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": canonical,
      url: canonical,
      name: "How to Reach Cafe Value Cannabis on Spadina in The Annex",
      description:
        "Transit, parking, and corridor directions to the Cafe Value Cannabis walk-in at 654 Spadina Ave, The Annex. This location has closed and moved to Green Sundae in Mississauga.",
      isPartOf: { "@id": `${STORE.baseUrl}/#website` },
      about: { "@id": `${STORE.baseUrl}/#store` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".nap"],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: STORE.homepageUrl },
        { "@type": "ListItem", position: 2, name: "How to reach The Annex", item: canonical },
      ],
    },
    faqPageGraphNode(VISIT_FAQS),
  ],
};

export default function VisitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(pageSchema) }}
      />
      <Navbar />
      <main className={styles.main}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>How to reach · The Annex / Spadina / U of T · Adults 19+</p>
          <h1>How to Reach Cafe Value Cannabis on Spadina in The Annex</h1>
          <p className={styles.lede}>
            This is the supporting reach page. The homepage stays the visit hub for NAP, map, and directions.
            Cafe Value Cannabis is the walk-in at 654 Spadina Ave — not a downtown King West pin. This location has
            closed and moved to Green Sundae in Mississauga.
          </p>
        </header>

        <section className={styles.nap} aria-label="Store details">
          <h2>Store details</h2>
          <p>
            <strong>{STORE.name}</strong>
          </p>
          <p>{STORE.addressLine}</p>
          <p>
            <a href={STORE.phoneTel}>{STORE.phoneDisplay}</a>
          </p>
          <p>{STORE.hoursNote}</p>
          <div className={styles.actions}>
            <a href={STORE.phoneTel}>Call the Spadina counter</a>
            <a href={mapsDirectionsUrl} rel="noopener noreferrer" target="_blank">
              Google Maps directions
            </a>
            <Link href="/">Homepage NAP hub</Link>
          </div>
        </section>

        <section>
          <h2>Nearest intersection</h2>
          <p>
            654 Spadina Ave sits {STORE.intersection}, on the east-west seam between campus and the residential Annex.
            Count south from Bloor / Spadina station or north from Harbord along the streetcar tracks. A Spadina Avenue
            listing near King Street West is a different basin — that is not this store.
          </p>
        </section>

        <section>
          <h2>TTC: 510 Spadina and Spadina station</h2>
          <p>
            The 510 Spadina streetcar is the corridor ride. Stay on Spadina until the Harbord / Sussex stretch and walk
            to 654. If you are already on Line 1 or Line 2, get off at Spadina station at Bloor and walk south along
            Spadina toward Harbord. Evening headways stretch, so check live TTC times. This location has closed and
            moved to Green Sundae in Mississauga.
          </p>
        </section>

        <section>
          <h2>Parking on Spadina Avenue</h2>
          <p>
            Metered street parking is the default along Spadina Avenue and the Annex side streets. Read the signs on the
            pole in front of you; this is not a plaza garage. If you are only stopping for a listed item, call{" "}
            {STORE.phoneDisplay} first so the trip stays short.
          </p>
        </section>

        <section>
          <h2>From campus and Harbord Village</h2>
          <p>
            University of Toronto St. George sits across Spadina from The Annex. Cross at Harbord or walk the avenue
            from Bloor. Harbord Village shoppers should treat Spadina Avenue as the destination, then look for 654 — not
            a second Cafe Value Cannabis address on a parallel street.
          </p>
        </section>

        <section>
          <h2>Hours honesty</h2>
          <p>
            This location has closed and moved to Green Sundae in Mississauga. Bring valid
            government photo ID. Adults 19+ only. Posted menu names and prices move, so use the live menu when one exact
            pack is the reason for the trip.
          </p>
        </section>

        <section>
          <h2>Map</h2>
          <div className={styles.map}>
            <iframe
              title="Map of Cafe Value Cannabis at 654 Spadina Ave"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <section>
          <h2>More Annex / Spadina context</h2>
          <p>
            Neighbourhood notes also live on the{" "}
            <Link href={STORE.annexInfoPath}>weed store near The Annex / Spadina</Link> page. Neither that page nor this
            reach guide replaces the homepage as the NAP hub.
          </p>
        </section>

        <section aria-labelledby="visit-faq-heading">
          <h2 id="visit-faq-heading">Visit questions</h2>
          <div className={styles.faqList}>
            {VISIT_FAQS.map((faq) => (
              <article className={styles.faqItem} key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
