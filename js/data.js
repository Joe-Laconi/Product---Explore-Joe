/* ============================================================
   PRODUCT ME — CONTENT DATA MODEL
   Single source of truth. Every section on the site reads from
   here. Role profiles change ORDER and EMPHASIS — never invent
   new copy per role; they all point back to this same evidence.

   Fields marked [CONTENT NEEDED] or [PHOTO NEEDED] are explicit
   placeholders — fill in real material before treating this as
   done. Nothing in those fields is fabricated.
   ============================================================ */

export const PERSON = {
  name: "Joe Laconi",
  role: "Product + Growth operator who builds.",
  email: "[CONTENT NEEDED: contact email]",
  linkedin: "[CONTENT NEEDED: LinkedIn URL]",
  resumePdf: "[CONTENT NEEDED: resume.pdf path]",
};

/* ------------------------------------------------------------
   PROOF POINTS — shown near the hero, 3–4 rotate depending on
   role focus but all draw from this pool.
   ------------------------------------------------------------ */
export const PROOF_POINTS = [
  {
    id: "c2c",
    text: "Built and operate an independent commerce-intelligence product tracking cultural signals into documented Amazon purchase behavior.",
    roles: ["growth", "product", "0to1", "consumer"],
  },
  {
    id: "circana-enterprise",
    text: "Manages the primary enterprise relationship for P&G and led technical client service for Target, one of Circana's largest retail accounts.",
    roles: ["product", "b2b", "growth"],
  },
  {
    id: "allfor",
    text: "Co-founded and built a physical product from concept through formulation, retail placement, and paid acquisition.",
    roles: ["0to1", "consumer", "growth"],
  },
  {
    id: "acc",
    text: "Designed, built, and shipped a live data product visualizing U.S. consumer spending — alone, end to end.",
    roles: ["product", "0to1", "b2b"],
  },
];

/* ------------------------------------------------------------
   ROLE PROFILES
   Drives ordering + emphasis across the whole site.
   order arrays reference case study / project ids.
   ------------------------------------------------------------ */
export const ROLE_PROFILES = {
  growth: {
    id: "growth",
    label: "Growth Product",
    headline: "Growth Product operator who's already run the loop.",
    summary:
      "I've spent my career close to acquisition, conversion, and retention — first selling into it, then measuring it at Circana, now building and growing a product of my own. I think in loops: signal → hypothesis → test → measure → iterate.",
    projectOrder: ["cultureToCart", "allFor", "circana", "americanConsumerClock"],
    emphasis: [
      "acquisition", "activation", "conversion", "retention", "monetization",
      "CAC", "LTV", "ROAS", "customer discovery", "positioning",
      "experimentation", "GTM", "data", "consumer behavior",
    ],
  },
  product: {
    id: "product",
    label: "Product Management",
    headline: "Product judgment built across sales, delivery, and building.",
    summary:
      "I've translated ambiguous customer problems into requirements and shipped product from three different seats — enterprise client service, an independent commerce-intelligence product, and a physical product built from zero. Same muscle, three angles.",
    projectOrder: ["cultureToCart", "circana", "allFor", "americanConsumerClock"],
    emphasis: [
      "product strategy", "customer discovery", "requirements", "prioritization",
      "cross-functional collaboration", "product development",
      "stakeholder management", "shipping", "ambiguity",
    ],
  },
  "0to1": {
    id: "0to1",
    label: "0→1 Product",
    headline: "I've started from nothing more than once.",
    summary:
      "All For went from a concept to a commercialized, retail-ready product. Culture To Cart went from a hypothesis about cultural signal to a live product with paying attention and a public track record. I'm comfortable building without a playbook or a team.",
    projectOrder: ["allFor", "cultureToCart", "americanConsumerClock", "circana"],
    emphasis: [
      "starting from nothing", "opportunity identification", "product development",
      "iteration", "launch", "commercialization", "GTM",
      "operating independently", "ambiguity", "building without a large team",
    ],
  },
  b2b: {
    id: "b2b",
    label: "B2B SaaS",
    headline: "I've sold, delivered, and now build B2B data products.",
    summary:
      "Years of enterprise client service at Circana taught me how technical requirements actually get gathered from B2B customers who don't articulate them cleanly. I've since applied that to building my own data product.",
    projectOrder: ["circana", "cultureToCart", "syndigo", "allFor"],
    emphasis: [
      "enterprise customers", "SaaS", "data products", "customer discovery",
      "technical requirements", "stakeholder management", "B2B GTM",
      "complex products", "customer-to-product translation",
    ],
  },
  consumer: {
    id: "consumer",
    label: "Consumer Growth",
    headline: "Consumer behavior is the thread through everything I've built.",
    summary:
      "All For taught me consumer acquisition and conversion with real ad spend on the line. Culture To Cart is built entirely on reading consumer behavior before it shows up in sales data. I like the messy, human side of growth.",
    projectOrder: ["allFor", "cultureToCart", "americanConsumerClock"],
    emphasis: [
      "consumer behavior", "acquisition", "paid media", "conversion",
      "ecommerce", "content", "positioning", "audience",
      "monetization", "experimentation",
    ],
  },
};

export const DEFAULT_ROLE = "growth";

/* ------------------------------------------------------------
   WHY PRODUCT — career progression
   ------------------------------------------------------------ */
export const CAREER_PROGRESSION = [
  "Sales",
  "Customer Problems",
  "Data Products",
  "Product Development",
  "Independent Products",
  "Growth Product",
];

export const WHY_PRODUCT_COPY = {
  headline: "I've spent my career moving closer to the product.",
  body:
    "The common thread across my career has been understanding customers, identifying problems, translating those problems into solutions, and increasingly building those solutions myself. I didn't start as a PM. I sold, then supported, then delivered, then built — each step closer to the actual product.",
};

/* ------------------------------------------------------------
   CASE STUDIES — the three primary things Joe has built
   ------------------------------------------------------------ */
export const CASE_STUDIES = {
  cultureToCart: {
    id: "cultureToCart",
    kicker: "Founder, Editor & Product Manager · 2024–Present",
    title: "Culture To Cart",
    subtitle:
      "Commerce intelligence product tracking where cultural signals convert into documented Amazon purchase behavior.",
    logo: "assets/culture_to_cart_final_wordmark.svg",
    description:
      "Built and operate an independent commerce intelligence product tracking where cultural signals from TikTok, Reddit, Google Trends, X, and Amazon behavior can identify emerging purchase behavior before it becomes obvious.",
    problem: {
      label: "Problem",
      body: "[CONTENT NEEDED: final problem statement — working framing: CPG brands and agencies spend against trends after they've already peaked because nothing connects social signal to confirmed Amazon purchase behavior before it shows up in sales data.]",
    },
    product: {
      label: "Product",
      body: "Multi-source signal pipeline combining Amazon/Keepa purchase data with TikTok, Reddit, Google Trends, and X signal.",
      sources: ["Amazon / Keepa", "TikTok", "Reddit", "Google Trends", "X"],
    },
    methodology: {
      label: "Product methodology",
      items: [
        "Custom BSR-to-units power law calibrations",
        "7 CPG categories tracked",
        "Category-level purchase conviction scores",
        "Public Prediction Scorecard",
        "Timestamped pre-trend calls",
      ],
    },
    validation: {
      label: "Validation",
      body: "One documented prediction: five independent brands subsequently showed roughly 254–292% WoW BSR lift during March 16–23, after being identified beforehand.",
      caveat: "Documented, not causal — the calls were timestamped before the lift; this shows signal quality, not proof that Culture To Cart caused the outcome.",
    },
    strategy: {
      label: "Product strategy",
      items: ["JTBD", "FTUE", "North Star metric", "Retention loops", "Product positioning", "Monetization"],
    },
    discovery: {
      label: "Customer discovery",
      body: "Ongoing discovery with CPG brand operators, boutique Amazon agencies, and TikTok Shop agencies — validating pain around emerging-trend identification and SKU-level purchase confirmation.",
    },
    competitive: {
      label: "Competitive analysis",
      body: "Identified Jungle Scout Cobalt as the primary incumbent. Positioned Culture To Cart in the gap below enterprise pricing — serving emerging brands and smaller agencies that enterprise tools price out.",
    },
    artifacts: [
      { label: "Prediction Scorecard", type: "image", src: null },
      { label: "Data pipeline", type: "image", src: null },
      { label: "Methodology", type: "image", src: null },
      { label: "Landing page", type: "image", src: null },
      { label: "Newsletter issue", type: "image", src: null },
      { label: "Product strategy", type: "image", src: null },
      { label: "Customer discovery notes", type: "image", src: null },
      { label: "Competitive analysis", type: "image", src: null },
    ],
    takeaway:
      "I didn't just research a product opportunity. I built the product, designed the methodology, validated the signal, talked to potential customers, and developed the positioning.",
  },

  allFor: {
    id: "allFor",
    kicker: "Co-Founder & Product Manager · Jan 2019–Dec 2023",
    title: "All For",
    subtitle: "Nutrient-infused nut butter brand built from concept through commercial launch.",
    logo: null,
    description:
      "A physical consumer product built from concept through formulation, packaging, commercialization, retail, ecommerce, and growth.",
    productDevelopment: {
      label: "Product development",
      items: [
        "Product concept and requirements",
        "Formulation work with Purdue University Food Science",
        "Formulation iteration with an Executive Chef",
        "Packaging and label design",
        "Retail-ready product",
      ],
    },
    growth: {
      label: "Growth",
      items: ["Ecommerce", "Retail", "Paid media (Facebook / Instagram, Google)", "CAC", "LTV", "ROAS", "Conversion rate"],
    },
    commercialization: {
      label: "Commercialization",
      items: ["Sporting Kansas City partnership", "FFC", "Distribution partnerships", "B2B relationships", "VaynerMedia", "Wechter Media"],
    },
    companyBuilding: {
      label: "Company building",
      items: ["Recruited the founding team", "Closed a financing round", "Managed product development", "Managed commercial execution"],
    },
    artifacts: [
      { label: "Product / packaging", type: "image", src: null },
      { label: "Retail placement", type: "image", src: null },
      { label: "Campaign creative", type: "image", src: null },
    ],
    takeaway: "I have already taken a product from an idea to something real, commercial, and sold.",
  },

  americanConsumerClock: {
    id: "americanConsumerClock",
    kicker: "Creator · 2025",
    title: "American Consumer Clock",
    subtitle: "A live data product visualizing U.S. consumer spending, household debt, population, and retail market share.",
    logo: null,
    liveUrl: "https://consumerspendingclock.com/",
    description:
      "Live dashboard visualizing $7.52T in annualized U.S. consumer spending — with per-second, per-minute, and per-hour counters, ecommerce vs. brick-and-mortar splits, top spending categories, and retailer-level revenue tracking.",
    data: {
      label: "Data",
      items: ["BEA", "BLS", "Census Bureau", "NY Fed", "Retailer SEC filings"],
    },
    product: {
      label: "Product",
      items: [
        "Live consumer spending counters (per-second / per-minute / per-hour)",
        "Ecommerce vs. brick-and-mortar split",
        "Top spending categories",
        "Retailer revenue tracking: Amazon, Walmart, Costco, Home Depot, Kroger, Target",
      ],
    },
    role: {
      label: "Joe's role",
      body: "Built and shipped independently — data sourcing, front-end design, product structure, and deployment.",
    },
    artifacts: [{ label: "Live product", type: "link", src: null }],
    takeaway: "I like turning raw data into products people can actually interact with.",
  },
};

/* ------------------------------------------------------------
   HOW I THINK — product decision case studies
   ------------------------------------------------------------ */
export const PRODUCT_DECISIONS = [
  {
    id: "decision-c2c-positioning",
    source: "Culture To Cart",
    title: "Positioning below the enterprise tier",
    problem: "Where should Culture To Cart sit against an incumbent like Jungle Scout Cobalt, which already owns the enterprise commerce-intelligence category?",
    evidence: "Cobalt and comparable enterprise tools price and package for large brands and agencies with dedicated intelligence budgets. Conversations with smaller CPG operators and boutique agencies surfaced the same problem — real pain around emerging-trend identification — without the budget to buy an enterprise seat.",
    hypothesis: "The underserved segment isn't people who don't believe in the problem — it's people priced out of the existing solution.",
    options: [
      "Compete head-on with Cobalt on breadth of coverage",
      "Position as a cheaper, narrower alternative for emerging brands and smaller agencies",
      "Abandon commerce intelligence positioning and reframe as a media/newsletter product",
    ],
    decision: "Positioned Culture To Cart in the gap below enterprise pricing, for the emerging brands and smaller agencies enterprise tools underserve.",
    result: "[CONTENT NEEDED: outcome / adoption evidence since positioning decision]",
    learning: "Positioning against a category leader doesn't require out-building them everywhere — it requires being honest about who they're pricing out.",
  },
  {
    id: "decision-c2c-methodology",
    source: "Culture To Cart",
    title: "Building a public track record instead of just claiming accuracy",
    problem: "Any commerce-intelligence product can claim it 'spots trends early.' Nothing about that claim is verifiable to a skeptical buyer.",
    evidence: "Prospective customers (CPG operators, agency strategists) have seen trend newsletters before and are skeptical by default of unverified calls.",
    hypothesis: "A timestamped, public record of calls — right or wrong — would build more trust than a private accuracy claim ever could.",
    options: [
      "Keep calls private and only surface wins in marketing",
      "Publish a public Prediction Scorecard with timestamped calls, including misses",
      "Skip the scorecard and lead entirely with the newsletter's voice",
    ],
    decision: "Built and published the Prediction Scorecard — timestamped, public, including calls that didn't pan out.",
    result: "One documented case: five independent brands showed ~254–292% WoW BSR lift during March 16–23 after being identified beforehand.",
    learning: "Specificity is the product. A verifiable, timestamped miss is worth more credibility than an unverifiable win.",
  },
  {
    id: "decision-circana-target",
    source: "Circana",
    title: "Turning a RED account GREEN without a written playbook",
    problem: "Target's enterprise retail account was flagged RED on client satisfaction, with ambiguous, high-stakes deliverables and no existing SOP for the model customization Target needed.",
    evidence: "No standardized process existed for the specific POS / OmniChannel / Panel customization Target required — every prior fix had been ad hoc.",
    hypothesis: "The satisfaction problem was as much about clarity and communication of requirements as it was about the underlying data product.",
    options: [
      "Escalate and wait for product/delivery teams to rebuild the workflow",
      "Build internal SOPs from scratch while partnering directly with product/delivery on Target's specific requirements",
    ],
    decision: "Built the SOPs from scratch, working directly with product and delivery to drive customization of the models and data instances Target needed.",
    result: "Client satisfaction moved from RED to GREEN within six months.",
    learning: "When there's no playbook, writing the first one is faster than waiting for someone else to.",
  },
  {
    id: "decision-allfor-channel",
    source: "All For",
    title: "[CONTENT NEEDED: specific channel or formulation decision]",
    problem: "[CONTENT NEEDED]",
    evidence: "[CONTENT NEEDED]",
    hypothesis: "[CONTENT NEEDED]",
    options: ["[CONTENT NEEDED]"],
    decision: "[CONTENT NEEDED]",
    result: "[CONTENT NEEDED]",
    learning: "[CONTENT NEEDED]",
  },
];

/* ------------------------------------------------------------
   TOOLKIT — product lifecycle capability map, each with evidence
   ------------------------------------------------------------ */
export const TOOLKIT = {
  discover: {
    label: "Discover",
    items: [
      { skill: "Customer discovery", evidence: "Repeated discovery with CPG operators and agencies to validate Culture To Cart's emerging-trend problem." },
      { skill: "Jobs to be done", evidence: "JTBD framing built into Culture To Cart's product strategy from the outset." },
      { skill: "Market research", evidence: "Formulation and category research with Purdue University Food Science ahead of All For's launch." },
      { skill: "Competitive analysis", evidence: "Mapped Jungle Scout Cobalt as the incumbent and identified the pricing gap Culture To Cart fills." },
      { skill: "Customer interviews", evidence: "Structured weekly discovery across 4–6 enterprise CPG accounts at Circana." },
    ],
  },
  define: {
    label: "Define",
    items: [
      { skill: "Product strategy", evidence: "Defined JTBD, FTUE, North Star metric, and retention loops for Culture To Cart." },
      { skill: "Positioning", evidence: "Positioned Culture To Cart below enterprise pricing, for brands and agencies Cobalt prices out." },
      { skill: "Prioritization", evidence: "Managed 10 simultaneous CPG workstreams at Circana with $2.7M+ ARR on the line." },
      { skill: "Requirements", evidence: "Translated Target's OmniChannel and Panel needs into technical requirements and delivery SOPs." },
      { skill: "Product narrative", evidence: "Wrote Culture To Cart's Newsletter Production Guide and public-facing methodology." },
    ],
  },
  build: {
    label: "Build",
    items: [
      { skill: "Data pipelines", evidence: "Built Culture To Cart's multi-source signal pipeline across Keepa, TikTok, Reddit, Google Trends, and X." },
      { skill: "AI-assisted development", evidence: "Used AI-assisted tooling to build and ship American Consumer Clock independently." },
      { skill: "Google Apps Script", evidence: "[CONTENT NEEDED: specific project/use]" },
      { skill: "Python basics", evidence: "Applied to Culture To Cart's BSR-to-units power law calibrations." },
      { skill: "Technical collaboration", evidence: "Partnered directly with product/delivery teams on Target's model customization at Circana." },
    ],
  },
  launch: {
    label: "Launch",
    items: [
      { skill: "GTM", evidence: "Took All For from concept through retail-ready commercial launch." },
      { skill: "Messaging", evidence: "Built Culture To Cart's public positioning against an enterprise incumbent." },
      { skill: "Distribution", evidence: "Secured Sporting Kansas City and FFC distribution partnerships for All For." },
      { skill: "Sales", evidence: "Sold SaaS and sales-enablement products at Showpad and Syndigo before moving toward product." },
      { skill: "Launch coordination", evidence: "Shipped American Consumer Clock independently, end to end." },
    ],
  },
  grow: {
    label: "Grow",
    items: [
      { skill: "Acquisition", evidence: "Ran paid acquisition (Facebook/Instagram, Google) for All For, owning CAC and ROAS." },
      { skill: "Activation", evidence: "Designed Culture To Cart's FTUE and North Star metric to drive activation." },
      { skill: "Conversion", evidence: "Owned conversion rate as part of All For's ecommerce growth." },
      { skill: "Retention", evidence: "Built retention loops into Culture To Cart's product strategy." },
      { skill: "Experimentation", evidence: "Published timestamped, testable calls via Culture To Cart's Prediction Scorecard." },
    ],
  },
};

/* ------------------------------------------------------------
   CAREER
   ------------------------------------------------------------ */
export const CAREER = [
  {
    id: "circana-media",
    company: "Circana",
    title: "Client Lead / Account Manager — Media Solutions",
    dates: "May 2025–Present",
    bullets: [
      "Primary relationship and growth owner for P&G",
      "End-to-end discovery through solution sell-in",
      "Translates client needs into requirements for product/delivery",
      "Manages lifecycle from scoping through onboarding",
      "Coordinates stakeholders and aligns client outcomes to business goals",
    ],
    taught: "How to run discovery and requirements gathering for a customer with enormous internal complexity — and how to be the translation layer between what a client says and what a product team can build.",
  },
  {
    id: "circana-sr-manager",
    company: "Circana / IRi",
    title: "Technical Client Service — Sr. Manager, Enterprise Retail",
    dates: "Nov 2023–May 2025",
    bullets: [
      "Technical client service lead for Target — POS, OmniChannel, Panel",
      "Elevated client satisfaction from RED to GREEN within 6 months",
      "Built internal SOPs from scratch for complex model delivery",
      "Partnered with product/delivery teams to drive customization of models and data instances",
      "Managed ambiguous, high-stakes deliverables with no existing playbook",
    ],
    taught: "How to build process where none exists, and how to hold a high-stakes enterprise relationship together while the underlying product is still being customized in real time.",
  },
  {
    id: "circana-analyst",
    company: "Circana / IRi",
    title: "Technical Client Service — Analyst II",
    dates: "Mar 2020–Oct 2023",
    bullets: [
      "Technical client service lead for 4–6 CPG manufacturer accounts, including KIND Snacks, 1440 Foods, and SoCo Brands",
      "$2.7M+ ARR managed, plus ~$500K in ad hoc project revenue",
      "Structured weekly discovery and scoped project requirements",
      "Managed 10 simultaneous workstreams",
      "Make-It-Happen Award; KIND Snacks requested Joe by name; Circana LEAD leadership program",
    ],
    taught: "How to translate business needs into technical requirements at volume, across multiple accounts, without losing accuracy or trust.",
  },
  {
    id: "allfor-career",
    company: "All For",
    title: "Co-Founder & Product Manager",
    dates: "Jan 2019–Dec 2023",
    bullets: ["Took a physical product from concept through commercial launch", "See case study for full detail"],
    taught: "What it actually takes to build and commercialize a product with no large team behind you.",
  },
  {
    id: "syndigo",
    company: "Syndigo",
    title: "Account Executive",
    dates: "Apr 2019–Apr 2020",
    bullets: ["CPG client relationships", "B2B SaaS", "CPG-to-digital-shelf ecosystem"],
    taught: "How B2B SaaS gets sold into CPG organizations, and how the digital shelf ecosystem fits together.",
  },
  {
    id: "showpad",
    company: "Showpad",
    title: "Sr. BDR / BDR",
    dates: "2017–Apr 2019",
    bullets: ["SaaS sales enablement", "Pipeline", "Discovery", "GTM"],
    taught: "The fundamentals of SaaS GTM and discovery — the base layer everything since has built on.",
  },
  {
    id: "seven-star",
    company: "Seven Star Liquor",
    title: "Sales & Marketing Strategy Consultant",
    dates: "Aug 2015–Dec 2016",
    bullets: [
      "Ideated and executed a new sales/marketing initiative",
      "14 new $50K+ ARR accounts; 35%+ top-line revenue growth; $1.3M revenue growth",
      "Grew the store to the #1 beer seller in southern Indiana",
      "Attracted acquisition interest from Big Red Liquors",
    ],
    taught: "That growth is often about ideating and executing on strategy nobody else was willing to try first.",
  },
];

/* ------------------------------------------------------------
   HIRE ME IF
   ------------------------------------------------------------ */
export const HIRE_ME_IF = [
  "understands customers because I've spent years sitting across from them",
  "understands data because I've worked deeply with consumer and retail datasets",
  "understands GTM because I've sold",
  "understands product because I've built",
  "understands entrepreneurship because I've had to make products work without a large team",
  "is comfortable operating without a perfect playbook",
  "can move between strategy and execution",
];

/* ------------------------------------------------------------
   WHAT I'M LOOKING FOR
   ------------------------------------------------------------ */
export const LOOKING_FOR = {
  headline: "What I'm looking for.",
  body: "I'm looking for a Growth Product or Product role where I can get closer to the full product lifecycle — from customer discovery and product development through launch, experimentation, activation, conversion, and growth.",
  interests: "I'm especially interested in B2B SaaS, commerce, data, consumer products, growth, and 0→1 products.",
};

/* ------------------------------------------------------------
   STILL LEARNING
   ------------------------------------------------------------ */
export const STILL_LEARNING = [
  "Deeper software product execution",
  "High-volume experimentation",
  "Product analytics at scale",
  "Consumer growth",
  "Working directly with engineering and design inside a formal product organization",
  "Scaling product processes",
];

/* ------------------------------------------------------------
   GIVE ME A PROBLEM — scenarios
   ------------------------------------------------------------ */
export const PROBLEM_SCENARIOS = [
  {
    id: "activation",
    prompt: "Signup is healthy, but only 20% of users reach the product's core value moment. What would you do?",
    steps: [
      { label: "What I'd want to know", body: "Where exactly the drop-off happens between signup and the value moment — one big cliff or a slow leak across several steps." },
      { label: "Questions I'd ask", body: "What does the product consider the 'value moment,' and was that definition validated with users or just assumed internally? Has anything about onboarding changed recently?" },
      { label: "Evidence I'd seek", body: "A funnel broken out by step, session recordings or drop-off cohorts at the worst step, and qualitative feedback from users who signed up and didn't activate." },
      { label: "Hypotheses I'd form", body: "Likely candidates: the value moment takes too long to reach, it requires a setup step users don't understand the point of, or the product is attracting signups that were never a fit." },
      { label: "How I'd prioritize", body: "Fix the single largest drop-off step first — a 10-point step fix usually beats five 2-point fixes, and it's faster to validate whether the hypothesis was right." },
      { label: "What I'd test first", body: "The cheapest, most reversible change that addresses the biggest drop-off — often copy, step order, or removing a step, before touching the underlying product." },
      { label: "What I'd measure", body: "Step-to-step conversion on the funnel, time-to-value, and whether users who activate under the new flow retain at the same rate as before." },
      { label: "What would change my mind", body: "If fixing the top funnel step doesn't move activation, that tells me the problem isn't onboarding — it's that the product's core value doesn't match what people signed up expecting." },
    ],
  },
  {
    id: "paid-conversion",
    prompt: "A new product has strong traffic but weak paid conversion. Where would you start?",
    steps: [
      { label: "What I'd want to know", body: "Whether the weak conversion is a traffic-quality problem or a landing/product-experience problem — those require completely different fixes." },
      { label: "Questions I'd ask", body: "Which channels are driving the traffic, what's the cost per click by channel, and does conversion rate vary meaningfully by channel or creative?" },
      { label: "Evidence I'd seek", body: "Conversion rate segmented by channel and campaign, landing page bounce/scroll data, and a side-by-side of ad promise vs. landing page message." },
      { label: "Hypotheses I'd form", body: "Either the paid creative is attracting the wrong audience, or the landing experience doesn't deliver on what the ad promised — a message-match problem." },
      { label: "How I'd prioritize", body: "Check message match first — it's the cheapest thing to verify and the most common cause of this exact symptom." },
      { label: "What I'd test first", body: "Align landing page headline and offer directly to the highest-spend ad's promise, before touching budget or targeting." },
      { label: "What I'd measure", body: "Conversion rate by channel post-fix, and whether CAC moves in the direction expected once message match improves." },
      { label: "What would change my mind", body: "If conversion stays flat even with tight message match, the issue is traffic quality, not the landing experience — and I'd push upstream into targeting." },
    ],
  },
  {
    id: "first-100-b2b",
    prompt: "You're launching a new B2B product with no existing customer base. How would you approach the first 100 customers?",
    steps: [
      { label: "What I'd want to know", body: "Who has the problem most acutely right now, and where they already go to solve it today — even with a bad workaround." },
      { label: "Questions I'd ask", body: "What does this segment currently do instead of buying a product like this? Who has budget and authority to say yes without a long procurement cycle?" },
      { label: "Evidence I'd seek", body: "Direct conversations with 15–20 prospective buyers before writing any GTM plan — the kind of discovery I ran weekly at Circana, just applied to a new product instead of an existing account." },
      { label: "Hypotheses I'd form", body: "The first 100 customers won't come from broad marketing — they'll come from a narrow segment with the sharpest version of the problem, reachable through direct outreach or a founder's existing network." },
      { label: "How I'd prioritize", body: "Depth over breadth — a smaller number of committed early customers who'll give real feedback beats a larger number who churn quietly." },
      { label: "What I'd test first", body: "A manual, even unscalable version of onboarding for the first 10–15 customers, so I'm learning from real usage before I automate anything." },
      { label: "What I'd measure", body: "Whether early customers get to their value moment, and whether they'd be upset if the product went away — the surest read on real fit." },
      { label: "What would change my mind", body: "If the segment I picked has the problem but won't pay for it, that's a signal to look for a different buyer, not to discount harder." },
    ],
  },
  {
    id: "retention-drop",
    prompt: "Retention is falling after the first month. How would you investigate?",
    steps: [
      { label: "What I'd want to know", body: "Whether this is a cohort-wide decline or specific to recently acquired users — that tells me if it's a product problem or an acquisition-quality problem." },
      { label: "Questions I'd ask", body: "Did anything change around acquisition channels, pricing, or the product itself in the period before the drop started?" },
      { label: "Evidence I'd seek", body: "Cohort retention curves split by acquisition source and signup date, plus usage patterns for users who churned versus users who stayed." },
      { label: "Hypotheses I'd form", body: "Either newer cohorts are lower-intent than earlier ones (an acquisition issue), or something in the product experience past month one stopped delivering value it used to." },
      { label: "How I'd prioritize", body: "Segment by acquisition source first, since that's the fastest way to rule in or out half the possible causes." },
      { label: "What I'd test first", body: "If it's acquisition-driven, I'd tighten targeting on the channel introducing lower-intent users before touching the product." },
      { label: "What I'd measure", body: "Retention curves for the affected cohort against a control cohort, tracked over the following month." },
      { label: "What would change my mind", body: "If retention is falling evenly across every acquisition source, that rules out an acquisition-quality story and points squarely at the product experience." },
    ],
  },
  {
    id: "market-validation",
    prompt: "A company wants to launch a new product but doesn't know whether the market actually wants it. What would you do?",
    steps: [
      { label: "What I'd want to know", body: "What evidence, if any, already exists — has anyone talked to a prospective customer yet, or is this still an internal hypothesis?" },
      { label: "Questions I'd ask", body: "Who specifically is this for, what do they do today instead, and what would it cost them not to solve this problem?" },
      { label: "Evidence I'd seek", body: "Direct discovery conversations before any build — the same instinct I used building Culture To Cart, where I validated the emerging-trend problem with CPG operators and agencies before formalizing methodology." },
      { label: "Hypotheses I'd form", body: "The market wants the outcome the product promises, but might already be getting a worse version of it somewhere else — meaning the real question is displacement, not invention." },
      { label: "How I'd prioritize", body: "Talk to real prospective customers before writing a single line of product spec — cheap to do, and it's the only way to avoid building for a hypothetical." },
      { label: "What I'd test first", body: "A narrow, manual version of the offer — even a landing page or a scrappy pilot — to see if anyone will commit real time or money before full build." },
      { label: "What I'd measure", body: "Whether prospective customers self-select in with real commitment (money, time, a warm intro to someone else), not just polite interest." },
      { label: "What would change my mind", body: "If nobody will commit anything — time, money, or a real workflow change — that's the market telling you no, regardless of how good the idea sounds internally." },
    ],
  },
];

/* ------------------------------------------------------------
   BEYOND THE RESUME — personal section (placeholders per brief
   rule: never invent personal details)
   ------------------------------------------------------------ */
export const PERSONAL = {
  headline: "Okay, but who is Joe?",
  intro: "The professional case is above. This is the rest of it.",
  family: "[CONTENT NEEDED: family]",
  outsideOfWork: "[CONTENT NEEDED: hobbies / interests]",
  currentlyInterestedIn: "[CONTENT NEEDED: books / writing / ideas]",
  rabbitHole: "[CONTENT NEEDED: current rabbit hole]",
  forFun: "[CONTENT NEEDED: for fun]",
  photo: "[PHOTO NEEDED]",
};

/* ------------------------------------------------------------
   RESUME MODES
   ------------------------------------------------------------ */
export const RESUME_MODES = {
  onepage: { label: "One-page", emphasis: ["fastest overview"] },
  growth: { label: "Growth", emphasis: ["growth", "acquisition", "conversion", "GTM", "commercialization", "product"] },
  product: { label: "Product", emphasis: ["product strategy", "discovery", "requirements", "product development", "stakeholder management"] },
  "0to1": { label: "0→1", emphasis: ["independent building", "launches", "entrepreneurship", "product development", "commercialization"] },
};

/* ------------------------------------------------------------
   COMPANY PROFILES — the company-specific overlay layer.
   Keep this the ONLY place that knows about a given company.
   Everything else (sections, rendering, rail, role focus) stays
   generic so a new company is a new key here, not a rebuild.
   Selected via ?company=<slug>; falls back to DEFAULT_COMPANY.
   Opportunities are structural placeholders — do not fill with
   invented analysis until the real teardown is developed.
   ------------------------------------------------------------ */
export const COMPANY_PROFILES = {
  pacvue: {
    id: "pacvue",
    name: "Pacvue",
    roleContext: "Growth / Product Growth",
    tailorNote: "This version is tailored for Pacvue — Growth / Product Growth.",
    opportunities: [
      {
        id: 1,
        observation: "[CONTENT NEEDED: observation]",
        hypothesis: "[CONTENT NEEDED: hypothesis]",
        experiment: "[CONTENT NEEDED: experiment]",
        metric: "[CONTENT NEEDED: metric]",
      },
      {
        id: 2,
        observation: "[CONTENT NEEDED: observation]",
        hypothesis: "[CONTENT NEEDED: hypothesis]",
        experiment: "[CONTENT NEEDED: experiment]",
        metric: "[CONTENT NEEDED: metric]",
      },
      {
        id: 3,
        observation: "[CONTENT NEEDED: observation]",
        hypothesis: "[CONTENT NEEDED: hypothesis]",
        experiment: "[CONTENT NEEDED: experiment]",
        metric: "[CONTENT NEEDED: metric]",
      },
    ],
  },
};

export const DEFAULT_COMPANY = "pacvue";

/* ------------------------------------------------------------
   SHOW YOUR WORK — reusable evidence gallery. Mixes real,
   already-documented evidence (status: "available") with named
   gaps still to be developed (status: "placeholder"). Never
   invent a result to fill a gap — add the placeholder instead.
   ------------------------------------------------------------ */
export const EVIDENCE_ITEMS = [
  {
    type: "decision",
    label: "Building a public track record instead of just claiming accuracy",
    source: "Culture To Cart",
    status: "available",
    anchor: "#how-i-think",
  },
  {
    type: "result",
    label: "Prediction Scorecard: ~254–292% WoW BSR lift on 5 brands identified beforehand",
    source: "Culture To Cart",
    status: "available",
    anchor: "#work",
  },
  {
    type: "decision",
    label: "Turning a RED account GREEN without a written playbook",
    source: "Circana",
    status: "available",
    anchor: "#how-i-think",
  },
  { type: "screenshot", label: "Product screenshots", source: "Culture To Cart", status: "placeholder" },
  { type: "prototype", label: "Early landing page iterations", source: "Culture To Cart", status: "placeholder" },
  { type: "experiment", label: "Weekly call / no-call decisions, tracked against outcomes", source: "Culture To Cart", status: "placeholder" },
  { type: "failure", label: "A call that didn't pan out", source: "Culture To Cart", status: "placeholder" },
  { type: "iteration", label: "This site's information architecture, v1 → v2", source: "Product Me", status: "placeholder" },
];

/* ------------------------------------------------------------
   WHY I BUILT THIS — the site treated as its own product case
   study. Structural placeholder only per instruction: do not
   invent case-study results or conclusions before they're real.
   ------------------------------------------------------------ */
export const WHY_I_BUILT_THIS = {
  headline: "How I built this.",
  intro: "This site is itself a product. Here's the case study behind it, held to the same User → JTBD → Hypothesis → Decision → Tradeoff → Result structure as everything else on this page — decisions listed now, reasoning filled in as it's written up.",
  user: "A Growth PM hiring manager deciding whether to interview Joe.",
  jtbd: "In 3–5 minutes, determine whether Joe can think like a Growth PM — and whether they want to talk to him.",
  decisions: [
    {
      id: "guided-journey",
      title: "Why the site is structured around a guided journey",
      hypothesis: "[CONTENT NEEDED]",
      decision: "[CONTENT NEEDED]",
      tradeoff: "[CONTENT NEEDED]",
      result: "[CONTENT NEEDED]",
    },
    {
      id: "start-here-prominent",
      title: "Why \"Start Here\" is prominent",
      hypothesis: "[CONTENT NEEDED]",
      decision: "[CONTENT NEEDED]",
      tradeoff: "[CONTENT NEEDED]",
      result: "[CONTENT NEEDED]",
    },
    {
      id: "evidence-over-claims",
      title: "Why we prioritize evidence over claims",
      hypothesis: "[CONTENT NEEDED]",
      decision: "[CONTENT NEEDED]",
      tradeoff: "[CONTENT NEEDED]",
      result: "[CONTENT NEEDED]",
    },
    {
      id: "show-work",
      title: "Why we show work/process rather than only polished outcomes",
      hypothesis: "[CONTENT NEEDED]",
      decision: "[CONTENT NEEDED]",
      tradeoff: "[CONTENT NEEDED]",
      result: "[CONTENT NEEDED]",
    },
    {
      id: "3-5-minutes",
      title: "Why the site is designed to be useful within 3–5 minutes",
      hypothesis: "[CONTENT NEEDED]",
      decision: "[CONTENT NEEDED]",
      tradeoff: "[CONTENT NEEDED]",
      result: "[CONTENT NEEDED]",
    },
    {
      id: "alternatives-rejected",
      title: "What alternatives we considered and rejected",
      hypothesis: "[CONTENT NEEDED]",
      decision: "[CONTENT NEEDED]",
      tradeoff: "[CONTENT NEEDED]",
      result: "[CONTENT NEEDED]",
    },
  ],
};

/* ------------------------------------------------------------
   WHY ANNOTATIONS — small, optional "Why I built it this way →"
   panels dropped at a handful of meaningful decision points.
   Not tooltips: click-to-expand, off by default, easy to skip.
   Keep this list short — see the site brief's design principle:
   "Do not put these everywhere."
   ------------------------------------------------------------ */
export const WHY_ANNOTATIONS = {
  startHere: {
    body: "I initially considered letting hiring managers choose their own path through the site. I rejected it because their job isn't to explore me — it's to quickly determine whether I'm worth interviewing. So I designed a guided path instead.",
  },
  howIThink: {
    body: "[CONTENT NEEDED: why real decisions instead of a skills list]",
  },
  showWork: {
    body: "[CONTENT NEEDED: why show process and failures, not just polished outcomes]",
  },
};
