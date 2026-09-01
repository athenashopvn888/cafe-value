import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";

export const metadata: Metadata = {
  title: { absolute: "Weed Dispensary in Toronto | Cafe Value Cannabis" },
  description:
    "Cafe Value Cannabis is open daily from 10 AM to midnight at 654 Spadina Ave in Toronto. Adults 19+ can explore Weed, Cannabis and flower information.",
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
