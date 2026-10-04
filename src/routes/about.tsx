import { createFileRoute } from "@tanstack/react-router";
import { AboutPage, SiteLayout } from "@/components/trustloop-site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Trustloop — A Rivox product" },
    { name: "description", content: "Learn about Trustloop's mission to make customer security reviews more manageable for software teams." },
    { property: "og:title", content: "About Trustloop — A Rivox product" },
    { property: "og:description", content: "A clearer, human-reviewed workflow for customer security questionnaires." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SiteLayout><AboutPage /></SiteLayout>,
});