import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  Fingerprint,
  LockKeyhole,
  Menu,
  Minus,
  PanelLeft,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const earlyAccess = "mailto:[SUPPORT EMAIL]?subject=Trustloop%20early%20access";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const pricingPlans = [
  {
    name: "Starter",
    description: "For small teams getting started.",
    monthly: 149,
    annualMonthly: 119,
    annual: 1428,
    features: [
      "3 team members",
      "5 questionnaires per month",
      "20 documents",
      "AI answers with sources",
      "Review and approval",
      "Excel export",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For teams moving deals forward.",
    monthly: 349,
    annualMonthly: 279,
    annual: 3348,
    popular: true,
    features: [
      "10 team members",
      "25 questionnaires per month",
      "100 documents",
      "Everything in Starter",
      "Priority support",
    ],
  },
  {
    name: "Business",
    description: "For growing security programs.",
    monthly: 799,
    annualMonthly: 639,
    annual: 7668,
    features: [
      "Unlimited team members",
      "Unlimited questionnaires",
      "500 documents",
      "Everything in Growth",
      "Onboarding call",
      "Dedicated support",
    ],
  },
];

export const faqItems = [
  {
    question: "What is Trustloop?",
    answer:
      "Trustloop helps software teams draft answers to customer security questionnaires from their own company documents, then review and approve each answer before it is sent.",
  },
  {
    question: "Which files can I upload?",
    answer:
      "Trustloop is designed for your security and compliance documents and for Excel questionnaires. Ask the Trustloop team to confirm the currently supported document formats before uploading.",
  },
  {
    question: "Does the AI make up answers?",
    answer:
      "Trustloop drafts answers using your uploaded documents. When it cannot find supporting information, it marks the question as not found instead of presenting an invented answer.",
  },
  {
    question: "Who reviews the answers?",
    answer:
      "A person on your team reviews and approves each answer. Trustloop does not send answers to your customer on its own.",
  },
  {
    question: "How is my data handled?",
    answer:
      "Documents are stored privately per account and customer data is kept separate. Excerpts of documents are sent to third-party AI model providers to generate draft answers.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "The listed subscriptions can be cancelled at any time.",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-shell nav-inner">
        <Link to="/" className="brand" aria-label="Trustloop home">
          <span className="brand-mark"><Fingerprint size={21} strokeWidth={2.1} /></span>
          <span>trustloop<span className="brand-period">.</span></span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          <div className="nav-pill">
            {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
          </div>
        </nav>
        <div className="nav-actions">
          <a className="login-link" href={earlyAccess}>Log in</a>
          <Button asChild className="button-dark nav-cta"><a href={earlyAccess}>Get early access <ArrowUpRight /></a></Button>
          <Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}<ChevronRight /></a>)}
        <a href={earlyAccess} className="mobile-login">Log in <ArrowUpRight /></a>
      </nav>}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-top">
          <div className="footer-brand-block">
            <Link to="/" className="brand footer-brand"><span className="brand-mark"><Fingerprint size={21} /></span><span>trustloop<span className="brand-period">.</span></span></Link>
            <p>Security questionnaires, answered with confidence.</p>
            <p className="powered-by">Powered by <a href="https://rivoxcloud.com" target="_blank" rel="noreferrer">Rivox <ArrowUpRight /></a></p>
          </div>
          <FooterColumn title="Product" links={[["Features", "/#features"], ["How it works", "/#how-it-works"], ["Pricing", "/pricing"], ["FAQ", "/#faq"], ["Log in", earlyAccess]]} />
          <FooterColumn title="Company" links={[["About", "/about"], ["Contact", "/contact"], ["Security", "/security"]]} />
          <FooterColumn title="Legal" links={[["Terms of Service", "/terms"], ["Privacy Policy", "/privacy"], ["Refund Policy", "/refund-policy"]]} />
        </div>
        <div className="footer-bottom"><span>© 2026 [COMPANY LEGAL NAME]. All rights reserved.</span><span>[CITY, COUNTRY] <span className="footer-dot">·</span> <a href="mailto:[SUPPORT EMAIL]">[SUPPORT EMAIL]</a></span></div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return <div className="footer-column"><h3>{title}</h3>{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>;
}

function SectionHeading({ eyebrow, title, body, centered = false }: { eyebrow: string; title: string; body?: string; centered?: boolean }) {
  return <div className={`section-heading${centered ? " section-heading-centered" : ""}`}><div className="eyebrow"><span />{eyebrow}</div><h2>{title}</h2>{body && <p>{body}</p>}</div>;
}

export function ProductMockup() {
  const rows = [
    { question: "How do you manage access to production systems?", answer: "Access is restricted to authorized personnel and reviewed regularly.", confidence: "High", status: "Approved" },
    { question: "Do you encrypt customer data at rest?", answer: "Customer data is encrypted at rest using managed storage controls.", confidence: "Medium", status: "Drafted" },
    { question: "How often do you conduct penetration testing?", answer: "I could not find this in your documents.", confidence: "None", status: "Not found" },
    { question: "What is your incident response process?", answer: "Incidents are triaged, documented, and escalated to the response team.", confidence: "High", status: "Approved" },
  ];
  const sidebarLinks = [
    { icon: PanelLeft, label: "Dashboard" },
    { icon: FileText, label: "Documents" },
    { icon: Sparkles, label: "Ask" },
    { icon: FileCheck2, label: "Questionnaires" },
    { icon: LockKeyhole, label: "Settings" },
  ];
  return (
    <div className="mockup-wrap" aria-label="Sample questionnaire review screen">
      <div className="mockup-window">
        <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><div className="window-address"><LockKeyhole /> app.trustloop.com / questionnaires / review</div><div className="window-avatar">JD</div></div>
        <div className="product-layout">
          <aside className="product-sidebar"><div className="sidebar-logo"><span><Fingerprint size={17} /></span>trustloop</div><div className="workspace-label">WORKSPACE</div>
            {sidebarLinks.map(({ icon: Icon, label }) => <div className={`sidebar-item${label === "Questionnaires" ? " active" : ""}`} key={label}><Icon size={15} />{label}</div>)}
            <div className="sidebar-account"><div className="sidebar-account-avatar">AC</div><div>Acme Cloud<small>Team workspace</small></div><ChevronRight size={13} /></div>
          </aside>
          <div className="product-main"><div className="mock-breadcrumb">Questionnaires <ChevronRight /> <span>Vendor security review</span></div>
            <div className="mock-title-line"><div><div className="mock-title">Vendor security review</div><div className="mock-subtitle">Acme Cloud · Updated just now</div></div><Button size="sm" className="mock-export"><FileSpreadsheet /> Export Excel</Button></div>
            <div className="review-progress"><div className="progress-label"><span>Review progress</span><b>2 of 4 approved</b></div><div className="progress-track"><span /></div></div>
            <div className="table-scroll"><table className="review-table"><thead><tr><th>QUESTION</th><th>AI DRAFT ANSWER</th><th>CONFIDENCE</th><th>STATUS</th></tr></thead><tbody>{rows.map((row) => <tr key={row.question}><td className="question-cell">{row.question}</td><td className={row.confidence === "None" ? "not-found-answer" : "answer-cell"}>{row.answer}<a href="#sources">Sources <ArrowUpRight /></a></td><td><span className={`confidence confidence-${row.confidence.toLowerCase()}`}><i />{row.confidence}</span></td><td><span className={`status status-${row.status.toLowerCase().replace(" ", "-")}`}>{row.status === "Approved" && <Check size={11} />}{row.status}</span></td></tr>)}</tbody></table></div>
          </div>
        </div>
      </div>
      <p className="mockup-caption">Sample data for illustration</p>
    </div>
  );
}

function Hero() {
  return <section className="hero-stage"><div className="hero-glow" /><div className="site-shell hero-content"><div className="hero-badge"><Sparkles />AI answers grounded in your own documents</div>
    <h1>Answer security questionnaires in <span>minutes,</span> not weeks.</h1>
    <p className="hero-copy">Spend less time searching through old spreadsheets. Trustloop drafts clear, sourced answers so your team can focus on the work that moves deals forward.</p>
    <div className="hero-actions"><Button asChild size="lg" className="button-dark"><a href={earlyAccess}>Get early access <ArrowRight /></a></Button><a className="text-link" href="#how-it-works">See how it works <ArrowDown /></a></div>
    <div className="hero-checks">{["Answers from your own documents", "Human review before anything is sent", "Works with Excel questionnaires", "Source shown for every answer"].map((text) => <div key={text}><CheckCircle2 />{text}</div>)}</div>
    <ProductMockup />
  </div></section>;
}

const problemItems = [
  { icon: FileText, title: "Weeks of manual work", body: "The same questions, researched and rewritten with every new customer review." },
  { icon: CircleHelp, title: "Deals stuck waiting", body: "Security reviews slow down sales while everyone waits for complete answers." },
  { icon: Search, title: "Answers scattered across documents", body: "The right policy is somewhere in a shared drive, spreadsheet, or old response." },
];

const featureItems = [
  { icon: FileText, title: "Answers from your documents", body: "Draft responses grounded in the security and compliance files you provide." },
  { icon: Search, title: "A source for every answer", body: "Trace each draft back to the material that informed it." },
  { icon: CheckCircle2, title: "Human review and approval", body: "Your team reviews and approves answers before they leave your hands." },
  { icon: FileSpreadsheet, title: "Works with Excel", body: "Work through customer questionnaires in their familiar spreadsheet format." },
  { icon: CircleHelp, title: "Honest when it cannot find an answer", body: "Questions without supporting documents are flagged instead of guessed at." },
  { icon: ArrowUpRight, title: "Export to your original file", body: "Download reviewed answers back to the questionnaire for your customer." },
];

function Problems() {
  return <section className="section-band problem-band"><div className="site-shell"><SectionHeading eyebrow="THE SLOWDOWN" title="Security reviews shouldn't stall good work." body="The process is familiar: a new deal, a long spreadsheet, and the same scattered answers." centered /><div className="problem-grid">{problemItems.map(({ icon: Icon, title, body }, i) => <article className="problem-item" key={title}><div className="problem-number">0{i + 1}</div><Icon /><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>;
}

function Features() {
  return <section id="features" className="section-band feature-band"><div className="site-shell"><SectionHeading eyebrow="MADE FOR THE REAL WORK" title="Every answer, in context." body="A practical workflow that keeps your source material and your judgment in the loop." centered /><div className="feature-grid">{featureItems.map(({ icon: Icon, title, body }, index) => <article className="feature-item" key={title}><div className="feature-icon"><Icon /></div><span className="feature-index">0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>;
}

function HowItWorks() {
  const steps = ["Upload your security documents", "Upload the customer's questionnaire", "Review, approve and download"];
  return <section id="how-it-works" className="section-band how-band"><div className="site-shell how-layout"><SectionHeading eyebrow="A CLEARER WORKFLOW" title="From questionnaire to reviewed answer." body="Keep each step visible, with your team making the final call." /><div className="steps-list">{steps.map((step, index) => <div className="step-row" key={step}><div className="step-number">0{index + 1}</div><div><h3>{step}</h3><p>{["Bring your policies and security materials into one place.", "Start a review from the customer's Excel questionnaire.", "Check sources, approve the drafts, and export your answers."][index]}</p></div><ArrowRight /></div>)}</div></div></section>;
}

function TrustSection() {
  return <section className="trust-band"><div className="site-shell trust-layout"><div className="trust-copy"><div className="eyebrow"><span />BUILT SO YOU STAY IN CONTROL</div><h2>Helpful drafts.<br />Your decision.</h2><p>Trustloop assists with the busywork. Your team stays responsible for what gets shared.</p></div><div className="trust-points">{[
    "AI drafts only from the documents you upload.",
    "Every answer is reviewed and approved by a person.",
    "Each account's data is kept separate and private.",
    "If an answer isn't in your documents, Trustloop says so.",
  ].map((item) => <div key={item}><ShieldCheck />{item}</div>)}</div></div></section>;
}

function PricingToggle({ yearly, setYearly }: { yearly: boolean; setYearly: (value: boolean) => void }) {
  return <div className="billing-control" role="group" aria-label="Billing frequency"><button className={!yearly ? "selected" : ""} onClick={() => setYearly(false)}>Monthly</button><button className={yearly ? "selected" : ""} onClick={() => setYearly(true)}>Yearly <span>Save 20%</span></button></div>;
}

function PricingCards({ yearly }: { yearly: boolean }) {
  return <div className="pricing-grid">{pricingPlans.map((plan) => <article className={`price-plan${plan.popular ? " price-plan-popular" : ""}`} key={plan.name}>{plan.popular && <div className="popular-label">MOST POPULAR</div>}<div className="plan-name">{plan.name}</div><p className="plan-description">{plan.description}</p><div className="plan-price"><span className="currency">$</span>{yearly ? plan.annualMonthly : plan.monthly}<span className="per-month">/ month</span></div><p className="billing-note">{yearly ? `Billed yearly · $${plan.annual.toLocaleString()} per year` : "Billed monthly"}</p><Button asChild className={plan.popular ? "button-dark plan-cta" : "plan-cta plan-cta-light"}><a href={earlyAccess}>Get early access <ArrowRight /></a></Button><div className="plan-features-title">INCLUDED</div><ul>{plan.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul></article>)}</div>;
}

function ComparisonTable() {
  const comparison = [
    ["Team members", "3", "10", "Unlimited"],
    ["Questionnaires / month", "5", "25", "Unlimited"],
    ["Documents", "20", "100", "500"],
    ["AI answers with sources", "Included", "Included", "Included"],
    ["Review, approval & Excel export", "Included", "Included", "Included"],
    ["Support", "Email", "Priority", "Dedicated"],
  ];
  return <div className="comparison-wrap"><h3>Compare plans</h3><div className="comparison-scroll"><table className="comparison-table"><thead><tr><th>Plan details</th><th>Starter</th><th>Growth</th><th>Business</th></tr></thead><tbody>{comparison.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell}>{cell}</th> : <td key={cell + index}>{cell}</td>)}</tr>)}</tbody></table></div><p className="pricing-note">Prices in USD. Cancel anytime.</p></div>;
}

function PricingSection({ fullPage = false }: { fullPage?: boolean }) {
  const [yearly, setYearly] = useState(false);
  return <section id="pricing" className={`section-band pricing-band${fullPage ? " pricing-page-band" : ""}`}><div className="site-shell"><SectionHeading eyebrow="SIMPLE, TRANSPARENT PRICING" title={fullPage ? "Plans that scale with your team." : "Less time answering. More time moving forward."} body="Choose the plan that fits the way your team works." centered /><PricingToggle yearly={yearly} setYearly={setYearly} /><PricingCards yearly={yearly} /><ComparisonTable /></div></section>;
}

function FAQ() {
  return <section id="faq" className="section-band faq-band"><div className="site-shell faq-layout"><SectionHeading eyebrow="GOOD QUESTIONS" title="A little more clarity." body="Have another question? Get in touch with the team." /><Accordion type="single" collapsible className="faq-list">{faqItems.map((item, index) => <AccordionItem value={`item-${index}`} key={item.question}><AccordionTrigger>{item.question}</AccordionTrigger><AccordionContent>{item.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

function FinalCTA() {
  return <section className="cta-band"><div className="site-shell cta-inner"><div><div className="eyebrow"><span />MAKE SPACE FOR THE WORK AHEAD</div><h2>Stop losing deals to security questionnaires.</h2></div><Button asChild size="lg" className="button-light"><a href={earlyAccess}>Get early access <ArrowRight /></a></Button></div></section>;
}

export function HomePage() {
  return <><Hero /><Problems /><Features /><HowItWorks /><TrustSection /><PricingSection /><FAQ /><FinalCTA /></>;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <><Navbar />{children}<Footer /></>;
}

export function PricingPage() {
  return <main className="inner-page"><div className="site-shell"><header className="inner-intro"><div className="eyebrow"><span />PRICING</div><h1>Plans that scale with your team.</h1><p>Clear monthly pricing for a better way to work through customer security reviews.</p></header></div><PricingSection fullPage /><section className="inner-faq"><div className="site-shell faq-layout"><SectionHeading eyebrow="PLAN DETAILS" title="Pricing questions." /><Accordion type="single" collapsible className="faq-list">{[faqItems[0], faqItems[2], faqItems[5]].map((item, i) => <AccordionItem value={`pricing-${i}`} key={item.question}><AccordionTrigger>{item.question}</AccordionTrigger><AccordionContent>{item.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section><FinalCTA /></main>;
}

function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <header className="inner-intro"><div className="eyebrow"><span />{eyebrow}</div><h1>{title}</h1><p>{description}</p></header>;
}

export function AboutPage() {
  return <main className="inner-page"><div className="site-shell"><PageIntro eyebrow="ABOUT TRUSTLOOP" title="A clearer way to answer security reviews." description="Trustloop is built to help software teams spend less time reworking questionnaire answers and more time focused on their customers." /><article className="editorial-content"><h2>Why Trustloop</h2><p>Security questionnaires are an important part of earning customer trust, but answering them repeatedly can take time away from the work of building software. Trustloop brings your source documents and questionnaire review into one focused workflow.</p><h2>Our mission</h2><p>Make security reviews more manageable for the teams doing the work—without taking people out of the decision-making process.</p><p className="about-rivox">Trustloop is a Rivox product. <a href="https://rivoxcloud.com" target="_blank" rel="noreferrer">Visit Rivox <ArrowUpRight /></a></p><p className="last-updated">Last updated: [DATE]</p></article></div></main>;
}

export function ContactPage() {
  return <main className="inner-page"><div className="site-shell"><PageIntro eyebrow="CONTACT" title="Talk to the Trustloop team." description="For questions about early access, product details, or support, reach out by email." /><div className="contact-layout"><div className="contact-details"><div className="contact-icon"><FileText /></div><h2>Email the team</h2><a href="mailto:[SUPPORT EMAIL]">[SUPPORT EMAIL] <ArrowUpRight /></a><p>We have not connected this sample contact form to a mailbox.</p></div><form className="contact-form" onSubmit={(event) => event.preventDefault()}><label htmlFor="contact-name">Name</label><Input id="contact-name" name="name" placeholder="Your name" /><label htmlFor="contact-email">Email</label><Input id="contact-email" name="email" type="email" placeholder="you@company.com" /><label htmlFor="contact-message">Message</label><Textarea id="contact-message" name="message" placeholder="How can we help?" rows={5} /><Button type="button" className="button-dark form-send">Send message <ArrowRight /></Button><p>This demo form does not send or store messages.</p></form></div><p className="last-updated">Last updated: [DATE]</p></div></main>;
}

export function SecurityPage() {
  const points = ["Documents are stored privately per account.", "Each customer's data is kept separate from others.", "HTTPS is used for data in transit.", "AI answers are drafted only from your own uploaded documents and always reviewed by a human.", "Excerpts of documents are sent to third-party AI model providers to generate draft answers."];
  return <main className="inner-page"><div className="site-shell"><PageIntro eyebrow="SECURITY" title="A clear view of how Trustloop handles data." description="An honest outline of the security practices described for the product." /><article className="editorial-content security-content"><h2>How your information is handled</h2><ul className="security-list">{points.map((point) => <li key={point}><ShieldCheck />{point}</li>)}</ul><aside className="honesty-note"><h2>What we do not claim yet</h2><p>Trustloop does not currently hold a SOC 2 or ISO 27001 certification.</p></aside><p className="last-updated">Last updated: [DATE]</p></article></div></main>;
}

const legalContent: Record<string, { intro: string; sections: [string, string][] }> = {
  terms: { intro: "These draft terms describe a framework for using Trustloop. Complete the placeholders and have this document reviewed before publication.", sections: [["1. About these terms", "These terms are between [COMPANY LEGAL NAME], located in [CITY, COUNTRY] (\"Company\"), and the person or organization using Trustloop (\"Customer\"). The service is provided subject to these terms."], ["2. Using the service", "Customer is responsible for its account, the documents it provides, and reviewing and approving questionnaire answers before sharing them. Customer must have the rights and permissions needed to upload and process its content."], ["3. Customer content and AI", "Trustloop uses documents provided by Customer to draft questionnaire responses. Excerpts of documents may be processed by third-party AI model providers. AI-generated drafts may be incomplete or inaccurate and must be reviewed by a person."], ["4. Fees and cancellation", "Subscription prices, billing frequency, and cancellation terms are shown on the pricing page. Prices are in USD. Customer may cancel anytime."], ["5. Availability and changes", "The Company may update or modify the service. No specific uptime or uninterrupted availability is promised by this draft template."], ["6. Contact", "Questions about these terms may be directed to [SUPPORT EMAIL]." ]] },
  privacy: { intro: "This draft privacy notice explains the types of information that may be handled when you use Trustloop. Have it reviewed and completed before publication.", sections: [["1. Information we handle", "Trustloop may handle account details, the documents and questionnaires you upload, and information you provide when contacting the Company. Replace this draft with a complete inventory before publishing."], ["2. How information is used", "Information is used to provide and support Trustloop, draft questionnaire responses, and communicate about the service."], ["3. Third-party AI processing", "Excerpts of document text may be sent to third-party AI providers to generate draft answers. A person should review each answer before sharing it."], ["4. Storage and security", "Documents are stored privately per account, customer data is kept separate, and HTTPS is used in transit. Do not interpret this summary as a security certification."], ["5. Retention and your choices", "The Company should complete this section with its actual retention, deletion, and data access practices before publishing."], ["6. Contact", "For privacy questions, contact [SUPPORT EMAIL]."]] },
  refund: { intro: "This draft refund policy is a starting point only. Complete the details and have it reviewed before publication.", sections: [["1. Subscription fees", "Subscription fees and billing periods are displayed on the Trustloop pricing page. Prices are shown in USD."], ["2. Cancellation", "Subscriptions may be cancelled at any time. Cancellation stops future renewals; access continues according to the applicable billing period."], ["3. Refund requests", "Contact [SUPPORT EMAIL] with your account and billing details to discuss a refund request. Any applicable refund will be assessed under the final published policy and applicable law."], ["4. Contact", "Questions about billing may be sent to [SUPPORT EMAIL]."]] },
};

const legalTitles: Record<string, string> = { terms: "Terms of Service", privacy: "Privacy Policy", refund: "Refund Policy" };

export function LegalPage({ kind }: { kind: "terms" | "privacy" | "refund" }) {
  const content = legalContent[kind];
  return <main className="inner-page"><div className="site-shell"><div className="draft-notice">Draft template. Have it reviewed by a legal professional before publishing.</div><PageIntro eyebrow="LEGAL" title={legalTitles[kind]} description={content.intro} /><article className="editorial-content legal-content">{content.sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<p className="last-updated">Last updated: [DATE]</p></article></div></main>;
}

export { FileText, Minus };