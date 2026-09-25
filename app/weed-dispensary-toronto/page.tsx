import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";

/** City landing /weed-dispensary-toronto/ — restored indexable (FLEET-CITY-RESTORE-0924). */
export const metadata: Metadata = {
  title: { absolute: "Weed Dispensary in The Annex | Cafe Value Cannabis" },
  description:
    "Cafe Value Cannabis is the Annex walk-in at 654 Spadina Ave. This location has closed and moved to Green Sundae in Mississauga. Use the homepage for NAP, map, and directions.",
  alternates: {
    canonical: "https://www.cafevaluecannabisdispensary.com/weed-dispensary-toronto",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <WeedOwnerPage />;
}
