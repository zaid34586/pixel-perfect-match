import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, SiteLayout } from "@/components/trustloop-site";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms of Service — Trustloop" },
    { name: "description", content: "Review the Trustloop draft terms of service. Legal template placeholders require completion and review." },
    { property: "og:title", content: "Terms of Service — Trustloop" },
    { property: "og:description", content: "Draft Trustloop terms of service for review before publication." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SiteLayout><LegalPage kind="terms" /></SiteLayout>,
});