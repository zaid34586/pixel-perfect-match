import { createFileRoute } from "@tanstack/react-router";
import { ContactPage, SiteLayout } from "@/components/trustloop-site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Trustloop" },
    { name: "description", content: "Contact the Trustloop team about early access, support, and product questions." },
    { property: "og:title", content: "Contact Trustloop" },
    { property: "og:description", content: "Get in touch with the Trustloop team." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SiteLayout><ContactPage /></SiteLayout>,
});