import { createFileRoute } from "@tanstack/react-router";
import { HomePage, SiteLayout } from "@/components/trustloop-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trustloop — Security questionnaires, answered in minutes" },
      { name: "description", content: "Draft sourced security questionnaire answers from your own documents. Review every response before sharing." },
      { property: "og:title", content: "Trustloop — Security questionnaires, answered in minutes" },
      { property: "og:description", content: "Draft sourced security questionnaire answers from your own documents. Review every response before sharing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <SiteLayout><HomePage /></SiteLayout>;
}