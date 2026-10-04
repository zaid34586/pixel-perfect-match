import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, SiteLayout } from "@/components/trustloop-site";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — Trustloop" },
    { name: "description", content: "Review the Trustloop draft privacy policy, including disclosure of third-party AI document processing." },
    { property: "og:title", content: "Privacy Policy — Trustloop" },
    { property: "og:description", content: "Draft Trustloop privacy policy for review before publication." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SiteLayout><LegalPage kind="privacy" /></SiteLayout>,
});