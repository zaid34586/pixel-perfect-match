import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, SiteLayout } from "@/components/trustloop-site";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({ meta: [
    { title: "Refund Policy — Trustloop" },
    { name: "description", content: "Review the Trustloop draft refund policy and billing terms." },
    { property: "og:title", content: "Refund Policy — Trustloop" },
    { property: "og:description", content: "Draft Trustloop refund policy for review before publication." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SiteLayout><LegalPage kind="refund" /></SiteLayout>,
});