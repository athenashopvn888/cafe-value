import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";

/** Supporting URL /weed-dispensary-toronto/ — noindex; homepage remains the NAP hub. */
export const metadata: Metadata = {
  title: { absolute: "Weed Dispensary in The Annex | Cafe Value Cannabis" },
  description:
    "Cafe Value Cannabis is the Annex walk-in at 654 Spadina Ave. Open daily 10:00 AM to midnight — not 24 hours. Use the homepage for NAP, hours, map, and directions.",
  alternates: {
    canonical: "https://www.cafevaluecannabisdispensary.com/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <WeedOwnerPage />;
}
