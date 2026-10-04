import { createFileRoute } from "@tanstack/react-router";
import { SecurityPage, SiteLayout } from "@/components/trustloop-site";

export const Route = createFileRoute("/security")({
  head: () => ({ meta: [
    { title: "Security and data handling — Trustloop" },
    { name: "description", content: "A straightforward overview of Trustloop's stated data handling and security practices." },
    { property: "og:title", content: "Security and data handling — Trustloop" },
    { property: "og:description", content: "Understand how customer documents are handled when drafting security questionnaire answers." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SiteLayout><SecurityPage /></SiteLayout>,
});