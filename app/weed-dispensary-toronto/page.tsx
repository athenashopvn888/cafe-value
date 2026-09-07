import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";

export const metadata: Metadata = {
  title: { absolute: "Weed Dispensary on Spadina Avenue | Cafe Value Cannabis" },
  description:
    "Visit Cafe Value Cannabis at 654 Spadina Ave in Toronto. Find local store information and explore established Weed flower tiers for adults 19+.",
  alternates: {
    canonical: "https://www.cafevaluecannabisdispensary.com/weed-dispensary-toronto/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <WeedOwnerPage />;
}
