import { createFileRoute } from "@tanstack/react-router";
import { PricingPage, SiteLayout } from "@/components/trustloop-site";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Pricing — Trustloop" },
    { name: "description", content: "Compare Trustloop Starter, Growth, and Business plans for faster security questionnaire reviews." },
    { property: "og:title", content: "Pricing — Trustloop" },
    { property: "og:description", content: "Simple monthly and yearly pricing for Trustloop security questionnaire workflows." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SiteLayout><PricingPage /></SiteLayout>,
});