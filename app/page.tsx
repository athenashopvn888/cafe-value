import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
import HiringCallout from "./components/HiringCallout";
import Footer from "./components/Footer";
import { allFlowers } from "./lib/products";

/* ── Tier data (will come from Supabase later) ── */
const TIERS = [
  {
    name: "EXOTIC WEED",
    slug: "exotic-weed",
    tagline: "Explore Cafe Value's exotic flower tier",
    thc: "35-39%",
    unitPrice: 20,
    deal3g: "3g bundle for $40",
    deal6g: "6g bundle for $60",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.2)",
    icon: "🔥",
    count: 42,
    banner: "/banners/cafe-value-exotics-banner.webp",
  },
  {
    name: "PREMIUM WEED",
    slug: "premium-weed",
    tagline: "Hand-picked connoisseur grade",
    thc: "32-34%",
    unitPrice: 15,
    deal3g: "3g bundle for $30",
    deal6g: "6g bundle for $45",
    color: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.2)",
    icon: "💎",
    count: 38,
    banner: "/banners/CafeValue_Premium.webp",
  },
  {
    name: "AAA+ WEED",
    slug: "aaa-weed",
    tagline: "Heavy hitters, proven strains",
    thc: "30-32%",
    unitPrice: 10,
    deal3g: "3g bundle for $20",
    deal6g: "6g bundle for $30",
    color: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.2)",
    icon: "⚡",
    count: 55,
    banner: "/banners/CafeValue_AAAplus.webp",
  },
  {
    name: "AA WEED",
    slug: "aa-weed",
    tagline: "Quality daily drivers",
    thc: "27-29%",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.2)",
    icon: "✦",
    count: 35,
    banner: "/banners/cafe-value-aa-banner.webp",
  },
  {
    name: "BUDGET WEED",
    slug: "budget-weed",
    tagline: "Shreds & value OZs",
    thc: "24-27%",
    unitPrice: 3,
    deal3g: "3g bundle for $10",
    deal6g: null,
    color: "#94a3b8",
    glow: "rgba(148, 163, 184, 0.15)",
    icon: "💰",
    count: 18,
    banner: "/banners/cafe-value-budget-banner.webp",
  },
  {
    name: "EDIBLES & MORE",
    slug: "items/edibles",
    tagline: "Gummies, vapes, pre-rolls, hash",
    thc: "Up to 98%",
    unitPrice: null,
    deal3g: null,
    deal6g: null,
    color: "#fb923c",
    glow: "rgba(251, 146, 60, 0.2)",
    icon: "🍬",
    count: 80,
    banner: "/banners/cafe-value-edibles-prerolls-more-banner.webp",
  },
];

/* ── Build featured strains dynamically from real inventory ── */
function buildFeatured() {
  const pool = [...allFlowers].filter(f => f.image);
  
  // Shuffle pool securely
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  
  const picked: typeof pool = [];
  const tierCounts: Record<string, number> = {};
  
  for (const f of pool) {
    if (picked.length >= 8) break;
    const tc = tierCounts[f.tier] || 0;
    if (tc >= 2) continue; // max 2 per tier
    // Prevent duplicate strains with the same name
    if (picked.some(p => p.name === f.name)) continue;
    picked.push(f);
    tierCounts[f.tier] = tc + 1;
  }
  
  return picked.map((f) => ({
    name: f.name,
    sku: f.sku,
    tier: f.tier.toUpperCase(),
    thc: f.thc,
    type: f.type === "indica" ? "IH" : f.type === "sativa" ? "SH" : "H",
    price3g: f.price3g ? `$${f.price3g.sale ?? f.price3g.regular}` : "—",
    image: f.image,
  }));
}

const FEATURED_STRAINS = buildFeatured();

function getTypeLabel(type: string) {
  if (type.startsWith("IH")) return "Indica";
  if (type.startsWith("SH")) return "Sativa";
  return "Hybrid";
}

function getTypeClass(type: string) {
  if (type.startsWith("IH")) return styles.badgeIndica;
  if (type.startsWith("SH")) return styles.badgeSativa;
  return styles.badgeHybrid;
}

function getTierColor(tier: string) {
  const t = TIERS.find((t) => t.name === tier);
  return t?.color || "#94a3b8";
}

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* ── NAVBAR ── */}
      <Navbar />
      <HiringCallout />

      {/* ── HERO BANNER ── */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBanner}>
          <img
            src="/banners/cafe-value-dispensary.png"
            alt="Cafe Value — Premium Toronto Cannabis Dispensary"
            className={styles.heroBannerImg}
          />
          <div className={styles.heroBannerOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            TORONTO&apos;S FORTRESS OF CANNABIS
          </div>
          <h1 className={styles.heroTitle}>
            Premium Cannabis.
            <br />
            <span className={styles.heroFire}>Ascend to New Heights.</span>{" "}
            <span className={styles.heroLit}>Cafe Value.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Flower tiers, pre-rolls, edibles, THC vapes, concentrates, accessories, and current menu details</p>
          <div className={styles.heroButtons}>
            <a href="#menu" className={styles.heroBtn}>
              Browse Menu
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          {/* Stats bar */}
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>Menu</span>
              <span className={styles.heroStatLabel}>Categories</span>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>19+</span>
              <span className={styles.heroStatLabel}>Adults</span>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>$3</span>
              <span className={styles.heroStatLabel}>From /g</span>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>24h</span>
              <span className={styles.heroStatLabel}>Open</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOP BY TIER BANNER ── */}
      <section className={styles.tierSection} id="menu">
        <div className={styles.container}>
          <div className={styles.sectionBanner}>
            <img
              src="/banners/cafe-value-welcome-banner.webp"
              alt="Shop by Tier — From exotic craft flower to value budget OZs"
              className={styles.sectionBannerImg}
            />
          </div>

          <div className={styles.tierGrid}>
            {TIERS.map((tier, i) => (
              <a
                key={tier.slug}
                href={`/${tier.slug}`}
                className={styles.tierCard}
                style={
                  {
                    "--tier-color": tier.color,
                    "--tier-glow": tier.glow,
                    animationDelay: `${i * 0.1}s`,
                  } as React.CSSProperties
                }
              >
                <div className={styles.tierCardBanner}>
                  <img
                    src={tier.banner}
                    alt={`${tier.name} cannabis flower`}
                    className={styles.tierCardBannerImg}
                  />
                </div>
                <div className={styles.tierCardBody}>
                  <h3
                    className={styles.tierCardName}
                    style={{ color: tier.color }}
                  >
                    {tier.icon} {tier.name}
                  </h3>
                  <div className={styles.tierCardMeta}>
                    <span className={styles.tierCardThc}>
                      Details on menu
                    </span>
                    <span className={styles.tierCardCount}>
                      Browse tier
                    </span>
                  </div>
                  <div className={styles.tierCardPrice}>
                    {tier.unitPrice !== null && (
                      <span className={styles.tierCardUnitPrice}>
                        ${tier.unitPrice}/g
                      </span>
                    )}
                  </div>
                  {tier.deal3g && (
                    <div className={styles.tierCardDeals}>
                      <span className={styles.tierCardDeal}>🎁 {tier.deal3g}</span>
                      {tier.deal6g && <span className={styles.tierCardDeal}>🎁 {tier.deal6g}</span>}
                    </div>
                  )}
                </div>
                <div className={styles.tierCardArrow}>→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOT RIGHT NOW ── */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionBanner}>
            <img
              src="/banners/cafe-value-hot-right-now.png"
              alt="Hot Right Now — Current menu picks"
              className={styles.sectionBannerImg}
            />
          </div>

          <div className={styles.featuredGrid}>
            {FEATURED_STRAINS.map((strain, i) => (
              <a
                key={`${strain.sku}-${i}`}
                href={`/flower/${strain.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={styles.productCard}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={styles.productMedia}>
                  <img
                    src={strain.image}
                    alt={strain.name}
                    loading="lazy"
                    className={styles.productImg}
                  />
                  <div className={styles.productBadges}>
                    <span className={styles.productBadgeThc}>
                      THC {strain.thc}
                    </span>
                    <span
                      className={`${styles.productBadgeTier}`}
                      style={{
                        background: `linear-gradient(135deg, ${getTierColor(strain.tier)}, ${getTierColor(strain.tier)}dd)`,
                        color: strain.tier === "BUDGET" ? "#1e293b" : "white",
                      }}
                    >
                      {strain.tier}
                    </span>
                  </div>
                </div>
                <div className={styles.productBody}>
                  <span
                    className={`${styles.productType} ${getTypeClass(strain.type)}`}
                  >
                    {getTypeLabel(strain.type)}
                  </span>
                  <h3 className={styles.productName}>{strain.name}</h3>
                  <div className={styles.productPricing}>
                    <span className={styles.productPrice}>
                      {strain.price3g}
                    </span>
                    <span className={styles.productPriceUnit}>/ 3g</span>
                  </div>
                  <div className={styles.productCta}>View Strain →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEALS & PROMOS BANNER ── */}
      <section className={styles.promoSection}>
        <Link href="/items/edibles" className={styles.promoBannerLink}>
          <img
            src="/banners/cafe-value-edibles-prerolls-more-banner.webp"
            alt="High THC Gummies & Edibles — Cafe Value"
            className={styles.promoBannerImg}
          />
        </Link>
      </section>

      {/* ── VAPES & PREROLL DEALS BANNER ── */}
      <section className={styles.promoSection}>
        <Link href="/items/vapes" className={styles.promoBannerLink}>
          <img
            src="/banners/cafe-value-deals.png"
            alt="Cafe Value Cannabis Deals — Vapes, Pre-Rolls & More"
            className={styles.promoBannerImg}
          />
        </Link>
        <p className={styles.guideLinkRow}>
          Adults 19+: <Link href="/info/nicotine-vapes-toronto">read the Cafe Value nicotine vape guide</Link>.
        </p>
      </section>

      <section className={styles.weedModule} aria-labelledby="weed-cannabis-heading">
        <div className={styles.container}>
          <h2 id="weed-cannabis-heading">Weed &amp; Cannabis at Cafe Value</h2>
          <p>Cafe Value Cannabis is located at 654 Spadina Ave. Adults 19+ can explore the dedicated Toronto Weed and Cannabis section for store information and a clearer flower starting point.</p>
          <div className={styles.weedModuleLinks}>
            <Link href="/weed-dispensary-toronto/">Explore Cafe Value Weed &amp; Cannabis</Link>
            <Link href="/budget/">Explore Budget Flower</Link>
          </div>
        </div>
      </section>

      {/* ── STORE INFO ── */}
      <section className={styles.storeSection} id="contact">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Visit <span className="text-gradient-neon">Cafe Value</span>
            </h2>
          </div>
          <div className={styles.storeGrid}>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>📍</div>
              <h3 className={styles.storeCardTitle}>Location</h3>
              <p className={styles.storeCardText}>
                654 Spadina Ave
                <br />
                Toronto, ON M5S 2H7
                <br />
              </p>
            </div>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>🕒</div>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week
                <br />
                <span className={styles.storeHighlight}>Open 10:00 AM - 12:00 AM</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>🔥</div>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                No appointment needed
                <br />
                <span className={styles.storeHighlight}>
                  Center St, Toronto
                </span>
              </p>
            </div>
          </div>

          {/* Embedded map */}
          <div className={styles.mapWrap}>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
