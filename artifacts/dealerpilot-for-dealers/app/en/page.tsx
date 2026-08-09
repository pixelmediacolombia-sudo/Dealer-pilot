import type { Metadata } from "next";
import GuiaDelDealer from "../GuiaDelDealer";

export const metadata: Metadata = {
  title: "DealerPilot | It posts itself on Facebook Marketplace",
  description:
    "You enter the car once. DealerPilot builds the listing, posts it to your Facebook Marketplace, answers messages from your real inventory, and pulls it down when the car sells. Built for independent dealers in Virginia and Maryland.",
  alternates: { canonical: "/en", languages: { "es-US": "/", "en-US": "/en" } },
};

export default function Home() {
  return <GuiaDelDealer lang="en" />;
}
