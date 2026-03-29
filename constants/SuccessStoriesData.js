export const SuccessCategories = [
  "All", 
  "Web Development", 
  "Mobile App Development", 
  "AI & Machine Learning", 
  "UI/UX Design", 
  "Cloud & DevOps", 
  "E-Commerce", 
  "Cybersecurity",
  "SaaS & Product Engineering",
  "Data Science & Business Intelligence",
];

export const SuccessStoriesData = [
 {
    id: "scalable-ecommerce-global-retail",
    cat: "E-Commerce",
    title: "Scalable E-Commerce for Global Retail",
   img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",

    // ── Card fields (home section) ──
    col: 1,
   
    challenge: "Legacy Magento store crashed on Black Friday, losing $180K in 6 hours.",
    result: "400% revenue growth & 80K concurrent users handled without a single incident.",

    // ── Detail page fields ──
    overview:
      "UrbanThread Co. — a fast-growing fashion brand operating across 12 countries — came to us with a broken storefront hemorrhaging revenue every single day. Their legacy Magento 1 setup had not been meaningfully updated in over four years, their mobile checkout was a disaster, and their Black Friday 2023 server crash wiped out an estimated $180,000 in sales in just six hours. Over eight months, we designed and deployed a fully headless commerce architecture built on Next.js 14 and Shopify Plus. We migrated 14,000 SKUs with zero downtime, integrated six regional payment gateways, and built a real-time inventory sync system covering three warehouses on two continents. The outcome was transformational — a 400% increase in monthly revenue, mobile conversion rates tripling, and a platform that now comfortably handles 80,000 concurrent users during peak sales events without a single incident.",

    businessImpact: [
      { value: "400%", label: "Revenue Growth (8 Months)"  },
      { value: "3×",   label: "Mobile Conversion Rate"     },
      { value: "0.9s", label: "Avg. Global Page Load"      },
      { value: "80K+", label: "Concurrent Users Handled"   },
    ],

    problemStatement: {
      title: "A Legacy Storefront Bleeding Sales Every Single Day",
      description:
        "UrbanThread had been operating on a Magento 1 instance patched together by three different development agencies over five years. The codebase was fragile, undocumented, and terrifying to touch. Their mobile checkout required seven separate steps with no saved address support and no modern payment options — resulting in a 74% cart abandonment rate on mobile, which by that point accounted for 61% of their total traffic. Inventory was managed in a shared Google Sheet that the operations team manually updated every morning, causing over 300 overselling incidents per month. Customer service was spending 40% of their time processing refunds from those oversold items. During the Black Friday 2023 event, the server buckled under just 4,000 concurrent users and went completely offline for six hours. The engineering team had no on-call system and no runbook. It was a watershed moment that forced leadership to finally commit to a complete rebuild.",
      painPoints: [
        "Server crashed at only 4,000 concurrent users during Black Friday — completely offline for 6 hours",
        "74% mobile cart abandonment — no Apple Pay, Google Pay, or any 1-click checkout option",
        "300+ overselling incidents per month caused by manual Google Sheet inventory management",
        "3–7 second product page load times destroying both SEO rankings and user experience",
        "No real-time sales reporting — finance team working off data that was 24 hours stale",
        "12-country multi-currency managed manually by finance with frequent conversion errors",
        "Customer service spending 40% of time on refunds caused entirely by inventory sync failures",
        "Codebase last updated 2019 with zero documentation — new developers took 3+ weeks to onboard",
      ],
    },

    solutionArch: {
      title: "Headless Commerce Architecture with Real-Time Global Inventory Sync",
      description:
        "We architected a fully decoupled headless commerce solution where the customer-facing frontend and the commerce backend operate as completely independent systems. The storefront was built in Next.js 14 using Incremental Static Regeneration, deployed to Vercel's Edge Network across 35 global regions, ensuring sub-second load times worldwide. Shopify Plus handled all order management, fraud detection, and payments. A custom Node.js middleware layer connected Shopify to their three warehouse management systems via webhooks, syncing inventory every 90 seconds. We also built a real-time analytics dashboard giving leadership live sales and stock data for the first time.",
      steps: [
        "Weeks 1–3: Deep technical audit of existing Magento codebase, traffic analytics review, customer journey mapping, and stakeholder interviews across engineering, operations, and customer service to fully document all pain points and integration dependencies",
        "Weeks 4–6: Designed the new headless architecture, selected the technology stack, set up staging environments, and created a detailed 32-week migration roadmap with clearly defined rollback plans at every phase",
        "Weeks 7–14: Migrated the full product catalog — 14,000 SKUs with variant data, imagery, SEO metadata, and pricing rules — to Shopify Plus using a custom Python migration script with validation; zero customer-facing downtime throughout",
        "Weeks 15–22: Built the Next.js 14 storefront — custom component library, mobile-first design system, optimized image pipeline, and full Shopify Storefront API integration with real-time cart and checkout flows",
        "Weeks 23–28: Integrated Stripe plus six regional gateways (Klarna, Tabby, M-Pesa, iDEAL, Afterpay, WeChat Pay) covering all 12 markets; added Apple Pay and Google Pay for 1-click mobile checkout",
        "Weeks 29–32: Built the custom inventory webhook middleware syncing all three warehouses in real-time, developed the Metabase + BigQuery analytics dashboard, and conducted three load-testing rounds simulating 120,000 concurrent users before go-live",
        "Go-Live: Blue-green deployment switching production traffic in under 4 minutes; full engineering team on-call for 72 hours post-launch with a documented runbook; zero issues reported",
      ],
    },

    techStack: [
      "Next.js 14", "Shopify Plus", "Node.js", "PostgreSQL",
      "Redis", "Stripe", "BigQuery", "Vercel Edge Network",
      "Metabase", "Docker", "Python", "Shopify Storefront API",
    ],
  },


   
    
   
  // {
  //   id: "fintech-ai",
  //   col: 2,
  //   cat: "AI & Machine Learning",
  //   title: "AI-Driven Financial Modeling",
  //   challenge: "Manual errors in financial predictions.",
  //   result: "95% accuracy in real-time modeling.",
  //   fullChallenge: "Financial firm struggled with manual data analysis that took 48 hours to generate risk reports.",
  //   fullSolution: "Developed an AI engine using Python and TensorFlow that processes real-time market data.",
  //   fullResult: "Risk reports generated in under 15 minutes with 95% accuracy.",
  //   img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
  //   height: "h-[250px]",
  //   techStack: ["Python", "TensorFlow", "FastAPI"]
  // },
   // ══════════════════════════════════════════════════════════════
  // 2. AI & MACHINE LEARNING  — col 2 (medium)
  // ══════════════════════════════════════════════════════════════
  {
    id: "ai-driven-predictive-financial-modeling",
    cat: "AI & Machine Learning",
    title: "AI-Driven Predictive Financial Modeling",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",

    col: 2,
   
    challenge: "18 analysts spending 60% of their time manually pulling stale data from Bloomberg & Excel.",
    result: "Report generation cut from 11 hours to 4 minutes — analyst productivity up 3.2×.",

    overview:
      "ClearLedger Capital, a mid-tier investment advisory firm based in London, was watching institutional clients walk out the door because their competitors were offering AI-powered insights while their analysts were still building reports manually in Excel. Their 18-person analyst team spent over 60% of working hours gathering and formatting data — not analyzing it. Reports were 48 hours stale by the time they reached clients. We built a custom ML pipeline ingesting live feeds from 14 financial data sources, applying a multi-factor predictive model trained on 11 years of historical market data, and generating fully formatted client-specific risk reports in under four minutes. Analyst productivity increased by 3.2×, the firm onboarded six new institutional clients in the first six months, and client retention improved by 41% year-over-year.",

    businessImpact: [
      { value: "41%",   label: "Client Retention Increase" },
      { value: "3.2×",  label: "Analyst Productivity Gain" },
      { value: "4 min", label: "Report Generation Time"    },
      { value: "$2.1M", label: "Annual Revenue Impact"     },
    ],

    problemStatement: {
      title: "Analysts Buried in Manual Work, Clients Receiving Yesterday's Insights",
      description:
        "ClearLedger's intelligence process had not evolved since the firm was founded in 2011. Analysts manually pulled data from Bloomberg terminals, Reuters DataStream, and four internal Excel models, then spent hours formatting PDFs using PowerPoint templates. This took an average of 11 hours per report. By the time a report reached a client, market conditions had already shifted. Three of their top five institutional clients — collectively representing 38% of annual recurring revenue — had quietly started evaluating competitors. Exit interviews revealed one consistent theme: 'We need real-time insight, not a weekly summary.'",
      painPoints: [
        "11 hours average to produce a single client report — entirely manual, zero automation",
        "Data delivered to clients consistently 48 hours stale due to manual compilation",
        "Three top institutional clients (38% of ARR) began evaluating competitors",
        "Analysts spending 60%+ of their time gathering data, not analyzing or serving clients",
        "Zero internal ML capability — entire team was finance professionals, not technologists",
        "Bloomberg and Reuters data in completely separate silos with no integration layer",
        "Four separate Excel models with no version control — analysts regularly worked from wrong files",
        "Risk scoring entirely subjective with no quantitative, reproducible methodology",
      ],
    },

    solutionArch: {
      title: "Custom ML Pipeline with Multi-Source Ingestion and Automated Report Generation",
      description:
        "We built a fully custom machine learning system tailored to ClearLedger's specific asset classes, client profiles, and risk frameworks. The pipeline ingests real-time data from 14 sources — Bloomberg, Reuters, SEC EDGAR, macroeconomic feeds, and proprietary news sentiment APIs — normalized into a unified data warehouse. A multi-factor predictive model trained on 11 years of historical data generates forward-looking risk scores and opportunity signals. A natural language generation layer then converts those signals into client-specific report narratives, formatted as branded PDFs or pushed to the client portal automatically.",
      steps: [
        "Phase 1 – Discovery (3 Weeks): Embedded a data engineer within the analyst team to shadow the full reporting workflow, map all 14 data sources, and identify the highest-value automation opportunities",
        "Phase 2 – Data Infrastructure (4 Weeks): Built a unified data warehouse on AWS Redshift ingesting real-time feeds; implemented data validation and anomaly detection to flag feed interruptions immediately",
        "Phase 3 – Model Development (6 Weeks): Trained a multi-factor regression model on 11 years of historical data; built a separate NLP sentiment model fine-tuned on financial news; achieved 78.4% directional accuracy in backtesting across 5 asset classes",
        "Phase 4 – Report Automation Engine (4 Weeks): Built the NLG layer converting model outputs into professional client-specific narratives; integrated with their branded PDF template system and client portal API",
        "Phase 5 – Analyst Dashboard (3 Weeks): Developed an internal dashboard where analysts review AI reports, override specific signals, add commentary, and approve for delivery with one click",
        "Phase 6 – Parallel Testing (6 Weeks): Ran the system in parallel with the manual process — every AI report reviewed against the manually produced version; model recalibrated twice based on structured feedback",
        "Phase 7 – Go-Live: Three days of hands-on training; deployed with a 30-day hypercare period including daily check-ins with our ML engineers",
      ],
    },

    techStack: [
      "Python", "TensorFlow", "AWS Redshift", "AWS SageMaker",
      "Apache Kafka", "Bloomberg API", "Reuters DataStream",
      "FastAPI", "React", "PostgreSQL", "Apache Airflow", "Docker",
    ],
  },
  // {
  //   id: "cloud-migration",
  //   col: 2,
  //   cat: "Cloud & DevOps",
  //   title: "Seamless Enterprise Cloud Migration",
  //   challenge: "High on-premise server costs.",
  //   result: "30% cost reduction & zero data loss.",
  //   fullChallenge: "Enterprise client was spending $20k monthly on legacy servers with frequent sync issues.",
  //   fullSolution: "Migrated entire infrastructure to AWS using Docker and Kubernetes.",
  //   fullResult: "Reduced costs by 30% and improved deployment speed by 80%.",
  //   img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
  //   height: "h-[250px]",
  //   techStack: ["AWS", "Kubernetes", "Terraform"]
  // },

// ══════════════════════════════════════════════════════════════
  // 4. CLOUD & DEVOPS  — col 2 (tall)
  // ══════════════════════════════════════════════════════════════
  {
    id: "seamless-enterprise-cloud-migration",
    cat: "Cloud & DevOps",
    title: "Seamless Enterprise Cloud Migration",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",

    col: 2,
   
    challenge: "Single on-premises server caused a 19-hour outage costing $320K in one incident.",
    result: "99.97% uptime achieved, 34% cost reduction, zero downtime during the full migration.",

    overview:
      "NorthAxis Logistics — a supply chain company operating across Southeast Asia with 400+ employees — ran their entire operation on a single on-premises server rack in Singapore with no redundancy and no automated backups. A January 2024 cooling failure caused 19 hours of complete downtime costing an estimated $320,000 in delayed shipments and severe reputational damage with two anchor clients. We designed and executed a full AWS cloud migration over 22 weeks with zero production downtime. Post-migration, system availability improved from 97.1% to 99.97%, infrastructure costs decreased by 34%, and their IT team transitioned from reactive firefighting to managing a stable, self-healing environment.",

    businessImpact: [
      { value: "99.97%", label: "System Uptime (from 97.1%)"     },
      { value: "34%",    label: "Infrastructure Cost Reduction"   },
      { value: "0 hrs",  label: "Downtime During Migration"       },
      { value: "22 wks", label: "Full Migration Timeline"         },
    ],

    problemStatement: {
      title: "A Single Point of Failure Running a $40M Business",
      description:
        "NorthAxis had grown rapidly through acquisition over four years, inheriting a patchwork of on-premises systems that had never been properly integrated. Their Singapore server room housed hardware from 2016 to 2022, maintained by two IT generalists with no cloud training. There was no disaster recovery plan, no automated backup verification, and no monitoring beyond basic ping alerts. Post-incident analysis found their last verified backup was 11 days old. Beyond the crisis, their on-premises setup caused daily friction — the customer portal was inaccessible to Malaysia and Vietnam offices due to latency, and IT was spending 70% of their time on reactive maintenance.",
      painPoints: [
        "19-hour complete outage — $320,000 in direct losses and two anchor clients at immediate risk",
        "Last verified backup was 11 days old at the time of the cooling failure",
        "Single on-premises server room with zero geographic redundancy or failover",
        "97.1% uptime — over 250 hours of unplanned downtime per year",
        "Customer portal unusable for Malaysia and Vietnam offices due to Singapore latency",
        "IT team spending 70% of time on reactive break-fix with zero capacity for strategic work",
        "No monitoring beyond basic ping checks — incidents discovered by users, not IT team",
        "Hardware across 6 procurement cycles with no unified management or patching policy",
      ],
    },

    solutionArch: {
      title: "Lift-Shift-Optimize AWS Migration with Full Multi-Region Disaster Recovery",
      description:
        "We structured the migration in three phases: lift-and-shift to establish cloud parity quickly, systematic optimization re-architecting workloads for managed cloud services, and hardening with full disaster recovery across two AWS regions. Throughout, we ran parallel environments so on-premises systems remained fully operational until each workload was validated in AWS. Every cutover used maintenance windows with immediate rollback capability. We also embedded a two-week knowledge transfer upskilling their IT staff on AWS operations and incident response.",
      steps: [
        "Weeks 1–3: Infrastructure discovery — full inventory of all 14 systems, applications, databases, and dependencies; network traffic analysis; risk assessment and migration priority matrix with NorthAxis leadership",
        "Weeks 4–7: AWS environment setup — multi-account AWS organization with separate production, staging, and development accounts; VPC with private and public subnets across two availability zones; CloudTrail audit logging from day one",
        "Weeks 8–13: Phase 1 Lift & Shift — migrated all 14 workloads to EC2 and Amazon RDS using AWS Migration Service; each workload run in parallel for minimum 2 weeks before cutover; cross-region backup replication to Tokyo region configured immediately",
        "Weeks 14–18: Phase 2 Optimization — re-architected 3 highest-traffic workloads to AWS ECS (containerized); migrated static assets to S3 + CloudFront improving Malaysia and Vietnam response times by 74%; implemented Auto Scaling for ERP and customer portal",
        "Weeks 19–21: Phase 3 Disaster Recovery — configured Route 53 health checks with automatic DNS failover to Tokyo; RTO of 15 minutes and RPO of 1 hour via AWS Pilot Light architecture; full DR drill executed and signed off",
        "Week 22: Final cutover + 2-week knowledge transfer — 40 hours hands-on AWS training for internal IT team covering CloudWatch monitoring, incident runbooks, cost optimization, and security best practices",
      ],
    },

    techStack: [
      "AWS EC2", "Amazon RDS", "AWS ECS", "Amazon S3",
      "CloudFront", "Route 53", "AWS CloudWatch", "AWS Migration Service",
      "Terraform", "Docker", "AWS IAM", "Amazon VPC",
    ],
  },
  // {
  //   id: "shopify-optimization",
  //   col: 3,
  //   cat: "Web Development",
  //   title: "Shopify Speed Optimization",
  //   challenge: "Slow page load affecting sales.",
  //   result: "Page speed improved by 2.5 seconds.",
  //   fullChallenge: "Online store load time was 6 seconds, leading to a bounce rate of over 70%.",
  //   fullSolution: "Optimized image delivery and implemented advanced lazy loading.",
  //   fullResult: "Load time reduced to 1.8 seconds, 55% growth in organic sales.",
  //   img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200",
  //   height: "h-[180px]",
  //   techStack: ["Liquid", "JavaScript", "Cloudflare"]
  // },

   // ══════════════════════════════════════════════════════════════
  // 3. WEB DEVELOPMENT  — col 3 (short)
  // ══════════════════════════════════════════════════════════════
  {
    id: "shopify-speed-optimization",
    cat: "Web Development",
    title: "Shopify Speed Optimization & Conversion Overhaul",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200",

    col: 3,
    challenge: "Lighthouse score of 31/100 and 6.4s mobile load time killing a $45K/month ad spend.",
    result: "Score hit 94, load time dropped to 1.2s, conversion rate tripled from 0.9% to 3.4%.",

    overview:
      "LivingCo — a premium home décor brand based in Sydney — had a beautiful Shopify store that was almost unusable in practice. Their Lighthouse score sat at 31/100. Product pages took 6.4 seconds to load on mobile. Despite spending $45,000 per month on paid advertising, their conversion rate was stuck at 0.9% — less than half the industry benchmark. Two previous agencies had made promises with no measurable improvement. We conducted a 360-degree technical audit, identified 23 specific performance issues, and executed a systematic 14-week optimization programme. Lighthouse score rose to 94, mobile load time dropped to 1.2 seconds, and conversion rate climbed to 3.4%.",

    businessImpact: [
      { value: "94",   label: "Lighthouse Score (from 31)"      },
      { value: "1.2s", label: "Mobile Load Time (from 6.4s)"    },
      { value: "3.4%", label: "Conversion Rate (from 0.9%)"     },
      { value: "278%", label: "Return on Ad Spend Improvement"  },
    ],

    problemStatement: {
      title: "A Beautiful Store That Nobody Could Actually Use",
      description:
        "LivingCo's store looked stunning on a fast desktop connection in their Sydney office. For their actual customers — 68% on mobile, many in regional areas — it was a different story. The homepage loaded 14 separate third-party scripts simultaneously, including five analytics tags and a loyalty plugin adding 2.3 seconds alone to Time to Interactive. Product images were raw 4K files served directly to browsers. Four years of unused CSS and JavaScript from uninstalled apps weighed down every page. Their Google Ads team kept increasing spend to compensate, making the problem progressively more expensive.",
      painPoints: [
        "Lighthouse Performance Score of 31/100 — bottom 15% of Shopify stores globally",
        "6.4 second average Time to Interactive on mobile — above 3s causes 53% of users to leave",
        "14 third-party scripts loading simultaneously including 5 redundant analytics tags",
        "Product images served as unoptimized 4K files — single images exceeding 8MB",
        "Conversion rate of 0.9% against a 2.1% category benchmark — burning $40K+/month in ads",
        "4 years of dead CSS and JS from uninstalled apps weighing down every page",
        "Core Web Vitals failing on all three metrics — directly hurting Google organic rankings",
        "Two previous agencies attempted optimization work with zero measurable improvement delivered",
      ],
    },

    solutionArch: {
      title: "Systematic Performance Engineering Across All Four Layers of the Store",
      description:
        "Before writing a single line of code, we ran a complete 360-degree audit — examining the network waterfall, JavaScript execution timeline, render-blocking resources, image delivery, third-party script behavior, and checkout funnel analytics. We documented 23 distinct issues ranked by projected impact and built a 14-week execution plan addressing each one. The work covered four layers: server and CDN configuration, asset optimization, JavaScript and CSS architecture, and conversion rate improvements on checkout and product pages.",
      steps: [
        "Weeks 1–2: Comprehensive technical audit — network waterfall analysis, Lighthouse CI across 5 device profiles, heatmap and session recording review across 2,400 user sessions, full third-party script inventory with blocking impact per script",
        "Weeks 3–4: Image optimization — automated pipeline converting all 3,200 product images to WebP and AVIF; implemented responsive srcset; integrated Cloudflare Image Resizing for dynamic on-the-fly optimization",
        "Weeks 5–6: JavaScript cleanup — removed 6 unused app scripts totaling 340KB; replaced two heavyweight widgets with lightweight alternatives; implemented code splitting and lazy loading for all non-critical scripts",
        "Weeks 7–8: CSS cleanup — removed 28,000 lines of dead CSS; implemented Critical CSS inlining for above-the-fold content; deferred all non-critical stylesheets",
        "Weeks 9–10: Third-party script management — consolidated 5 analytics tags into one GTM container; implemented script loading sequencing to prevent render-blocking",
        "Weeks 11–12: Checkout funnel optimization — redesigned mobile add-to-cart flow, added sticky CTA bar, placed trust signals above the fold on all product pages based on heatmap data",
        "Weeks 13–14: Core Web Vitals fine-tuning — fixed Cumulative Layout Shift issues, optimized Largest Contentful Paint, final performance benchmarking and full documentation handover",
      ],
    },

    techStack: [
      "Shopify", "Liquid", "Vanilla JavaScript", "Cloudflare CDN",
      "Google Tag Manager", "WebP / AVIF", "Lighthouse CI",
      "Critical Path CSS", "Webpack", "Google Analytics 4",
    ],
  },


  // {
  //   id: "modern-tech-stack",
  //   col: 3,
  //   cat: "UI/UX Design",
  //   title: "Modern Tech Stack Implementation",
  //   challenge: "Poor user engagement due to UI.",
  //   result: "Engagement rate boosted by 65%.",
  //   fullChallenge: "SaaS platform had a cluttered UI that confused users, leading to high churn rates.",
  //   fullSolution: "Redesigned the entire flow with a focus on minimalism and micro-interactions.",
  //   fullResult: "Customer retention increased by 65%.",
  //   img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
  //   height: "h-[180px]",
  //   techStack: ["Figma", "React", "Framer Motion"]
  // },

  
  // ══════════════════════════════════════════════════════════════
  // 5. UI/UX DESIGN  — col 3 (tall)
  // ══════════════════════════════════════════════════════════════
  {
    id: "modern-tech-stack-implementation",
    cat: "UI/UX Design",
    title: "Modern Design System for a Fragmented SaaS Platform",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",

    col: 3,
  
    challenge: "6 years of inconsistent UI across 5 teams — NPS of 18 and 8.4% trial conversion.",
    result: "214-component design system shipped; NPS hit 47 and trial conversion reached 19.7%.",

    overview:
      "Meridian SaaS — a B2B project management platform — had a feature-rich product that was increasingly exhausting to use. Built by five different engineering teams over six years, the interface was deeply inconsistent: similar actions worked differently depending on which section you were in. NPS sat at 18. Trial-to-paid conversion was only 8.4%. We embedded with their product and engineering teams for 24 weeks to design and implement a comprehensive design system — 214 reusable components — and then led the redesign of their five highest-traffic user flows. Post-launch: trial conversion improved to 19.7%, NPS rose to 47, and weekly active users increased by 63%.",

    businessImpact: [
      { value: "19.7%", label: "Trial Conversion (from 8.4%)" },
      { value: "47",    label: "NPS Score (from 18)"          },
      { value: "63%",   label: "Weekly Active Users ↑"        },
      { value: "214",   label: "Design System Components"     },
    ],

    problemStatement: {
      title: "Six Years of Inconsistency Had Created a Fragmented, Exhausting Product",
      description:
        "Meridian's product had been built iteratively by different teams at different times. There were four different button styles with no consistent logic. Date pickers worked differently across six sections of the app. Usability testing showed new users spent 3–4 minutes just trying to find their active projects on first login. Churned customer interviews included phrases like 'powerful but exhausting' and 'I need a guide every time I come back.' Without a component library, developers rebuilt identical UI elements for every new feature — adding weeks to every release cycle.",
      painPoints: [
        "Four different button styles in production — users confused by basic affordances throughout the app",
        "Date pickers, dropdowns, and form inputs behaved differently across 6 separate app sections",
        "New users spent 3–4 minutes on first login just trying to locate their active projects",
        "Trial-to-paid conversion of 8.4% vs 14–18% benchmark for B2B project management SaaS",
        "NPS of 18 — churned interviews consistently cited confusing navigation and inconsistent UI",
        "Engineers rebuilding common UI components from scratch for every feature — weeks added per sprint",
        "No design system, no component library, no shared Figma tokens — design and dev in isolation",
        "Accessibility compliance at 41% against WCAG 2.1 AA — a growing risk for enterprise contracts",
      ],
    },

    solutionArch: {
      title: "Token-Based Design System + Evidence-Driven Redesign of 5 Core User Flows",
      description:
        "We worked in two parallel tracks: building a comprehensive token-based component library in Figma with a corresponding React implementation, and an evidence-based redesign of the five highest-friction user flows. The redesigned flows were the first production implementations of the new design system — ensuring the library was battle-tested in real conditions from the start. We worked in two-week sprints embedded directly with Meridian's product and engineering teams.",
      steps: [
        "Weeks 1–4: Research and discovery — 22 user interviews, analysis of 1,400 session recordings, full funnel analytics review, accessibility audit against WCAG 2.1 AA, and an 18-page UX audit report with severity ratings",
        "Weeks 5–10: Design system foundations — comprehensive design token architecture (color, typography, spacing, motion, elevation) in Figma; 214 components across 8 categories; all built accessibility-first achieving 97% WCAG 2.1 AA compliance",
        "Weeks 11–16: Core flow redesign — redesigned 5 highest-priority flows: onboarding, project creation, task management, reporting dashboard, and account management; each went through 3 rounds of prototype testing with real users",
        "Weeks 17–22: Engineering implementation — worked alongside Meridian's engineers to implement the React component library with Storybook documentation; built a Figma-to-code token sync pipeline to keep design and implementation automatically in sync",
        "Weeks 23–24: Staged rollout — deployed with feature flags at 10%, 30%, 60%, then 100% of users; configured analytics events for precise measurement; delivered full design system documentation and maintenance guidelines",
      ],
    },

    techStack: [
      "Figma", "React", "TypeScript", "Storybook",
      "Tailwind CSS", "Radix UI", "Framer Motion",
      "Mixpanel", "Hotjar", "Chromatic", "CSS Design Tokens",
    ],
  },

  // {
  //   id: "healthcare-app",
  //   col: 3,
  //   cat: "Mobile App Development",
  //   title: "Next-Gen UX for Healthcare Apps",
  //   challenge: "Difficult appointment booking.",
  //   result: "70% increase in bookings.",
  //   fullChallenge: "Patients found it difficult to book appointments on the existing mobile app.",
  //   fullSolution: "Rebuilt the app with React Native and integrated a seamless booking system.",
  //   fullResult: "App-based bookings increased by 70% in 3 months.",
  //   img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
  //   height: "h-[180px]",
  //   techStack: ["React Native", "Firebase", "Node.js"]
  // },
  // ══════════════════════════════════════════════════════════════
  // 6. MOBILE APP DEVELOPMENT  — col 1 (medium)
  // ══════════════════════════════════════════════════════════════
  {
    id: "next-gen-ux-healthcare-apps",
    cat: "Mobile App Development",
    title: "Next-Gen UX for Healthcare Apps",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",

    col: 3,
   
    challenge: "12% 30-day retention and a 2.1-star rating  patients downloaded the app and never came back.",
    result: "Retention jumped to 71%, App Store rating hit 4.8★, and the app helped close a $6.2M Series A.",

    overview:
      "PulsePoint Health — a digital health startup backed by a UAE-based venture fund — launched their chronic disease management app to dismal results: 12% 30-day retention, a 2.1-star App Store rating, and almost no word-of-mouth. Patients were downloading, trying it once, and leaving. Their clinical team's advice was medically correct, but the app had been designed for an idealized patient who did not exist in reality. We were brought in to lead a full ground-up redesign and rebuild. Fourteen months later, 30-day retention stood at 71%, App Store rating had climbed to 4.8 stars, and PulsePoint used the engagement metrics as a key asset in closing a $6.2M Series A round.",

    businessImpact: [
      { value: "71%",   label: "30-Day Retention (from 12%)"  },
      { value: "4.8★",  label: "App Store Rating (from 2.1★)" },
      { value: "$6.2M", label: "Series A Raised Post-Launch"  },
      { value: "3.4×",  label: "Daily Active User Growth"     },
    ],

    problemStatement: {
      title: "A Clinically Correct App That Real Patients Simply Would Not Use",
      description:
        "The original PulsePoint app was medically accurate and had features clinicians valued — but it was designed for an idealized patient with high health literacy, strong daily motivation, and 15–20 minutes a day to spare. Their actual users — adults aged 45–70 managing chronic conditions — found it overwhelming from the first open. Onboarding required 18 steps before accessing any features (31% completion rate). The daily logging screen presented 14 data inputs simultaneously. In our usability testing, 6 out of 8 participants could not successfully complete the core task of logging a morning blood glucose reading without making an error.",
      painPoints: [
        "12% 30-day retention — 88% of patients abandoned the app within one month of downloading",
        "2.1-star App Store rating with reviews citing 'too complicated' and 'I don't know what to do'",
        "18-step onboarding before accessing any features — average completion rate was just 31%",
        "Daily logging screen presented 14 data entry fields simultaneously — severe cognitive overload",
        "Push notification open rate of 4.2% — clinical language was unintelligible to most users",
        "6 out of 8 patients in usability testing could not complete the core blood glucose logging task",
        "No Arabic or Urdu support despite 60% of the user base speaking these as their first language",
        "Zero offline functionality — app completely non-functional without active internet connection",
      ],
    },

    solutionArch: {
      title: "Patient-Centered Redesign Grounded in Behavioral Science and Accessibility",
      description:
        "Our redesign was anchored in two disciplines the original build had bypassed entirely: behavioral science and accessibility design for older adults. We began with six weeks of qualitative field research — not with clinicians, but with actual patients in their real home environments. 34 in-home user research sessions across Dubai, Karachi, and Riyadh. The redesign prioritized three principles: reduce daily cognitive load to the minimum required for clinical value, make every interaction feel like encouragement not obligation, and ensure the app works as fluently for a 60-year-old with low digital literacy as for a 35-year-old professional.",
      steps: [
        "Weeks 1–6: Field research — 34 in-home sessions across Dubai, Karachi, and Riyadh; participants aged 40–72 managing Type 2 diabetes or hypertension; sessions in Arabic, Urdu, and English; findings in a 64-page insight report shared with PulsePoint leadership and clinical team",
        "Weeks 7–10: Information architecture — rebuilt from scratch based on research; reduced daily required interactions from 14 to 3 (medication log, glucose reading, wellbeing check-in); designed a progressive disclosure system introducing optional features gradually",
        "Weeks 11–16: Design and prototyping — high-fidelity Figma prototypes; large touch targets (48×48dp minimum), high contrast ratios (7:1 or above), system font sizing respecting device accessibility settings; onboarding redesigned to deliver first value within 90 seconds",
        "Weeks 17–20: Behavioral science integration — habit formation system using variable reward mechanics and implementation intention prompts; empathetic notification content written by a health psychologist, tested for comprehension with non-health-literate users",
        "Weeks 21–26: Engineering — React Native for simultaneous iOS and Android release; offline-first architecture using SQLite with background sync; native Arabic and Urdu RTL layout support; integrated with Apple Health, Google Fit, and 4 glucometer Bluetooth devices",
        "Weeks 27–28: Soft launch — 500 beta users across all three markets; 2 weeks of intensive analytics review; 23 targeted UX adjustments before full public launch; complete Arabic and English App Store listings submitted",
      ],
    },

    techStack: [
      "React Native", "Expo", "TypeScript", "SQLite (Offline-First)",
      "Node.js", "Firebase", "Apple Health API", "Google Fit API",
      "Bluetooth LE", "Figma", "Mixpanel", "AWS Lambda",
    ],
  },

  // {
  //   id: "cyber-defense",
  
  //   cat: "Cybersecurity",
  //   title: "Zero-Trust Security Implementation",
  //   challenge: "Increased data breach attempts.",
  //   result: "Zero successful breaches.",
  //   fullChallenge: "A fintech firm was vulnerable to data breaches due to outdated security protocols.",
  //   fullSolution: "Implemented Zero-Trust Architecture and advanced VAPT (Penetration Testing).",
  //   fullResult: "100% security against external threats since launch.",
  //   img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
  //   height: "h-[250px]",
  //   techStack: ["VAPT", "Zero-Trust", "AWS Security"]
  // },

  // ══════════════════════════════════════════════════════════════
  // 7. CYBERSECURITY
  // ══════════════════════════════════════════════════════════════
  {
    id: "cyber-defense",
    cat: "Cybersecurity",
    title: "Zero-Trust Security Implementation",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",

    // ── Card fields (home section) ──
    challenge: "A fintech firm was hit with 2,300+ breach attempts in 90 days outdated perimeter security offered almost no protection.",
    result: "Zero successful breaches since go live. Full Zero Trust architecture deployed across 6 offices in 14 weeks.",

    // ── Detail page fields ──
    overview:
      "VaultEdge Financial  a rapidly growing fintech lending platform operating across Pakistan, UAE, and Saudi Arabia  came to us after their internal security audit revealed a nightmare scenario: over 2,300 unauthorized access attempts in a single 90-day period, a flat network architecture with zero internal segmentation, and employee credentials being the only barrier between attackers and customer financial data. Their legacy perimeter-based security model had been designed for a world where all employees worked in one office  not for a distributed team of 180 people accessing core systems from four countries. We designed and implemented a full Zero-Trust security architecture over 14 weeks. Since go live, VaultEdge has recorded zero successful breaches, achieved ISO 27001 readiness, and passed their first formal third-party penetration test with no critical findings  a milestone that directly unlocked two enterprise partnership agreements worth $1.4M in combined annual contract value.",

    businessImpact: [
      { value: "0",     label: "Successful Breaches Post Go-Live"     },
      { value: "2300+", label: "Threats Blocked in First 90 Days"     },
      { value: "100%",  label: "ISO 27001 Readiness Achieved"         },
      { value: "$1.4M", label: "Enterprise Contracts Unlocked"        },
    ],

    problemStatement: {
      title: "A Flat, Perimeter-Only Network Protecting $40M in Customer Financial Data",
      description:
        "VaultEdge had grown from a 12-person startup to a 180-person operation across four countries in under three years. Their security infrastructure had not kept pace. They were running a flat network where every employee — regardless of role — could theoretically access every internal system once past the VPN login. There were no internal access controls, no privileged access management, and no monitoring for lateral movement. Their security team consisted of one IT generalist managing everything from printer configurations to firewall rules. The 90-day audit that brought them to us revealed that 14 employee credentials had already been compromised in phishing attacks — and three of those credentials had accessed sensitive customer loan data in the weeks prior without any alert being triggered. A regulatory compliance review was scheduled for the following quarter. Leadership understood they were operating on borrowed time.",
      painPoints: [
        "2,300+ unauthorized access attempts recorded in 90 days — none detected in real time by internal team",
        "Flat network with zero internal segmentation — any compromised credential could reach all systems",
        "14 employee credentials confirmed compromised in phishing attacks prior to our engagement",
        "3 of those compromised credentials had accessed customer financial data with no alert triggered",
        "Single IT generalist responsible for all security across 180 employees in 4 countries",
        "No privileged access management — all admin credentials shared in a plain-text spreadsheet",
        "VPN as the sole authentication layer — no MFA enforced for internal system access",
        "Upcoming regulatory compliance review with potential for significant fines and license risk",
      ],
    },

    solutionArch: {
      title: "Full Zero-Trust Architecture with Continuous Verification and Real-Time Threat Detection",
      description:
        "Zero-Trust operates on one principle: never trust, always verify. Every user, device, and connection is treated as potentially hostile regardless of whether it originates inside or outside the corporate network. We implemented this across four layers: identity verification (who are you?), device health (is your device secure?), network segmentation (what are you allowed to reach?), and continuous monitoring (is this behavior normal?). Every access decision is made dynamically based on real-time signals — not a static credential check at login.",
      steps: [
        "Weeks 1–2: Full security audit — mapped all 47 internal systems, documented every user role and access pattern, identified all external attack surfaces, ran automated vulnerability scans across the entire network, and produced a prioritized risk register with 89 findings across four severity levels",
        "Weeks 3–4: Identity and Access Management foundation — deployed Okta as the central identity provider; enforced MFA across all 180 user accounts; implemented role-based access control (RBAC) with least-privilege principles; removed all shared admin credentials and issued individual privileged accounts with session recording",
        "Weeks 5–7: Network micro-segmentation — divided the flat network into 11 isolated segments aligned to business function (finance, engineering, customer support, etc.); implemented strict firewall rules permitting only explicitly approved inter-segment traffic; deployed network access control to verify device health before granting any access",
        "Weeks 8–10: Endpoint security and device trust — deployed CrowdStrike Falcon across all 180 endpoints; implemented device compliance policies (mandatory disk encryption, OS patch level, screen lock); configured conditional access policies to block non-compliant devices from accessing any internal system",
        "Weeks 11–12: Security Operations Center setup — deployed Microsoft Sentinel as the SIEM; configured 34 custom detection rules based on VaultEdge's specific threat profile; set up 24/7 automated alerting with tiered escalation; integrated threat intelligence feeds for real-time IOC matching",
        "Weeks 13–14: Penetration testing and staff training — conducted a formal VAPT engagement with a third-party red team; remediated all 3 medium findings identified (zero critical or high); delivered mandatory security awareness training to all 180 staff including simulated phishing exercises; produced full security runbook and handed over to their expanded 3-person internal security team",
      ],
    },

    techStack: [
      "Okta (IAM)", "CrowdStrike Falcon", "Microsoft Sentinel",
      "Zero-Trust Architecture", "VAPT", "AWS Security Hub",
      "Network Micro-Segmentation", "MFA / Conditional Access",
      "RBAC", "SIEM", "ISO 27001 Framework", "Cloudflare WAF",
    ],
  },

  // {
  //   id: "saas-platform",
    
  //   cat: "SaaS & Product Engineering",
  //   title: "Multi-Tenant SaaS for HR Management",
  //   challenge: "Difficulty in scaling subscriptions.",
  //   result: "Scales to 10k+ tenants effortlessly.",
  //   fullChallenge: "The original app couldn't handle multi-tenant data isolation.",
  //   fullSolution: "Architected a new multi-tenant system with automated billing.",
  //   fullResult: "100% data isolation and 50% faster onboarding.",
  //   img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
  //   height: "h-[250px]",
  //   techStack: ["React", "Go", "PostgreSQL"]
  // },


  // ══════════════════════════════════════════════════════════════
  // 8. SAAS & PRODUCT ENGINEERING
  // ══════════════════════════════════════════════════════════════
  {
    id: "saas-platform",
    cat: "SaaS & Product Engineering",
    title: "Multi-Tenant SaaS for HR Management",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",

    // ── Card fields (home section) ──
    challenge: "A single-tenant HR app ground to a halt beyond 50 clients  billing was manual, data was leaking across accounts.",
    result: "Rebuilt as true multi-tenant SaaS. Now scales to 10K+ tenants, onboarding cut from 3 days to 4 hours.",

    // ── Detail page fields ──
    overview:
      "PeopleStack  a B2B HR management software company based in Karachi  had built a product that worked beautifully for their first 40 clients. Then growth happened faster than their architecture could handle. By the time they reached 80 clients, their single tenant setup required a dedicated database and server instance per customer  a model that was bleeding infrastructure costs, taking 3 days to onboard a new client, and had already caused two data isolation incidents where one tenant briefly accessed another's employee records. Their billing system was a patchwork of manual Stripe calls managed by their finance team in a spreadsheet. We spent 26 weeks rebuilding PeopleStack as a true multi-tenant SaaS platform from the ground up. Post-launch: the platform scales to 10,000+ tenants on the same infrastructure, new client onboarding takes 4 hours instead of 3 days, billing is fully automated, and monthly infrastructure costs are down 61% per tenant.",

    businessImpact: [
      { value: "10K+", label: "Tenants on Single Infrastructure"     },
      { value: "4 hrs", label: "Client Onboarding (from 3 days)"    },
      { value: "61%",  label: "Infrastructure Cost/Tenant Reduction" },
      { value: "0",    label: "Data Isolation Incidents Post-Launch" },
    ],

    problemStatement: {
      title: "A Single-Tenant Architecture That Was Bankrupting Growth",
      description:
        "PeopleStack's original architecture had been built by a two-person engineering team who made the pragmatic decision to give each client their own PostgreSQL database and server. At 20 clients, this was fine. At 80 clients, it meant 80 separate databases, 80 separate server instances, and a DevOps overhead that was consuming 40% of their engineering team's time just keeping everything running. The two data isolation incidents  where a misconfigured connection pool routed one tenant's queries to another tenant's database  had put them in serious legal jeopardy with two enterprise clients who had GDPR obligations. Their CTO had estimated that reaching their 12-month growth target of 300 clients would require hiring four additional DevOps engineers and tripling their AWS spend  projections that made the unit economics of the business completely unviable.",
      painPoints: [
        "80 separate database instances for 80 clients  40% of engineering time on pure maintenance",
        "2 data isolation incidents exposing one tenant's employee records to another  GDPR exposure",
        "3-day manual onboarding process requiring DevOps intervention to provision each new client",
        "Billing managed in a spreadsheet with manual Stripe calls  3-4 billing errors per month",
        "Infrastructure costs projected to triple to reach 300-client growth target  unit economics broken",
        "No self-service trial or signup  every new client required a sales call and manual provisioning",
        "Zero feature flagging system  new features deployed to all clients simultaneously with no rollback",
        "No usage analytics  product team had no visibility into how features were actually being used",
      ],
    },

    solutionArch: {
      title: "Ground-Up Multi-Tenant Architecture with Automated Provisioning and Billing",
      description:
        "True multi-tenant SaaS means all customers share the same application and database infrastructure, with tenant isolation enforced at the application layer through row-level security and scoped authentication rather than physical separation. This approach delivers massive economies of scale while maintaining complete data isolation between tenants  when implemented correctly. We rebuilt PeopleStack's entire backend and infrastructure over 26 weeks, running the old and new systems in parallel to ensure zero disruption to existing clients during the migration.",
      steps: [
        "Weeks 1–3: Architecture design and planning — designed the full multi-tenant data model with PostgreSQL Row-Level Security (RLS) as the isolation mechanism; mapped all 94 API endpoints and their data access patterns; planned the migration strategy for all 80 existing clients; defined the new tenant provisioning workflow from signup to first login",
        "Weeks 4–8: Database and API layer rebuild — migrated from 80 separate databases to a single PostgreSQL cluster with RLS policies enforcing tenant isolation at query level; rebuilt all 94 API endpoints with tenant-scoped authentication using JWT claims; implemented comprehensive automated testing with 340 test cases covering cross-tenant isolation scenarios",
        "Weeks 9–13: Automated tenant provisioning engine — built a self service signup and onboarding flow; developed an automated provisioning system that sets up a new tenant (domain, admin account, default configuration, trial data) in under 8 minutes with zero human intervention; integrated with Stripe for subscription management and automated billing",
        "Weeks 14–18: Feature flagging and release infrastructure — implemented LaunchDarkly for feature flag management enabling per-tenant feature rollouts; built a canary deployment pipeline allowing new features to be tested with 5% of tenants before full rollout; developed an admin dashboard for the PeopleStack team to manage tenant configurations, billing, and support escalations",
        "Weeks 19–22: Usage analytics and product intelligence — integrated Mixpanel for in-app behavioral analytics; built a custom internal dashboard showing per-tenant feature adoption, engagement scores, and churn risk signals; implemented automated health scoring to flag at-risk accounts for the customer success team",
        "Weeks 23–26: Data migration and parallel running — migrated all 80 existing clients from the old single tenant architecture to the new multi-tenant platform with a scripted migration tool; ran both systems in parallel for 4 weeks with automated data consistency checks; executed final cutover during a scheduled maintenance window with zero data loss confirmed",
      ],
    },

    techStack: [
      "React", "Next.js", "Go", "PostgreSQL (Row-Level Security)",
      "Redis", "Stripe Billing API", "LaunchDarkly",
      "Mixpanel", "AWS ECS", "Terraform", "Docker", "GitHub Actions",
    ],
  },
  // {
  //   id: "data-science-bi",
 
  //   cat: "Data Science & Business Intelligence",
  //   title: "Predictive Analytics for Logistics",
  //   challenge: "Inefficient route planning.",
  //   result: "15% reduction in fuel costs.",
  //   fullChallenge: "Logistics firm had no visibility into delivery delays.",
  //   fullSolution: "Built a BI dashboard with predictive analytics for route optimization.",
  //   fullResult: "Saved 15% on fuel and improved delivery times by 20%.",
  //   img: "https://images.unsplash.com/photo-1504868584819-f8e905263543?q=80&w=800",
  //   height: "h-[250px]",
  //   techStack: ["Big Data", "Python", "Tableau"]
  // },

  // ══════════════════════════════════════════════════════════════
  // 9. DATA SCIENCE & BUSINESS INTELLIGENCE
  // ══════════════════════════════════════════════════════════════
  {
    id: "data-science-bi",
    cat: "Data Science & Business Intelligence",
    title: "Predictive Analytics for Logistics",
    img: "/stories/data.jpg",

    // ── Card fields (home section) ──
    
    challenge: "A logistics firm was flying blind  no visibility into delays, no data on route efficiency, decisions made purely on gut instinct.",
    result: "15% fuel cost reduction, 20% faster delivery times, and a live BI dashboard used daily by 60+ operations staff.",

    // ── Detail page fields ──
    overview:
      "SwiftRoute Logistics  a mid-sized freight and last-mile delivery company operating across five cities in Pakistan  was running a $28M annual operation almost entirely on intuition and WhatsApp messages. Their dispatch team made routing decisions based on driver experience, not data. Their operations managers had no real-time visibility into where vehicles were, which deliveries were delayed, or why. Monthly performance reports were compiled manually in Excel by a single analyst who spent four days per month doing nothing else. When fuel prices surged 34% in 2023, leadership realized they had no tools to respond intelligently  they could not identify which routes were inefficient, which drivers were underperforming, or where the biggest cost savings were hiding. We built a comprehensive data and analytics platform over 20 weeks: a real-time operational dashboard, a predictive route optimization engine, and an automated reporting system. The results in the first six months  15% reduction in fuel costs, 20% improvement in on-time delivery rate, and the monthly Excel report replaced by a live dashboard updated every 15 minutes.",

    businessImpact: [
      { value: "15%",  label: "Fuel Cost Reduction"           },
      { value: "20%",  label: "On-Time Delivery Improvement"  },
      { value: "4 days", label: "Reporting Cut to 15 Minutes" },
      { value: "60+",  label: "Staff Using Dashboard Daily"   },
    ],

    problemStatement: {
      title: "A $28M Operation Making Decisions with No Data",
      description:
        "SwiftRoute's operations had scaled faster than their infrastructure. Their dispatch team  eight people managing 140 vehicles across five cities  was coordinating entirely through phone calls and WhatsApp groups. There was no centralized system for tracking vehicle locations, delivery statuses, or driver performance. When a delivery was late, the dispatcher found out when the customer called to complain. Route planning was done each morning based on each driver's local knowledge and the dispatcher's intuition  with no analysis of historical traffic patterns, delivery time windows, or vehicle load optimization. The four-day monthly reporting process meant that by the time leadership saw performance data, it was already three to four weeks stale. Two of their largest corporate clients had issued formal warnings citing missed SLA targets in the prior quarter, putting contracts worth PKR 42 million at risk.",
      painPoints: [
        "Zero real-time visibility dispatch team tracking 140 vehicles via WhatsApp with no central system",
        "Route planning done on gut instinct with no historical traffic, load, or time-window data",
        "Monthly performance reports took 4 days to compile manually  data was 3–4 weeks stale by delivery",
        "No driver performance tracking  underperforming drivers identified only through customer complaints",
        "Two corporate clients issued formal SLA breach warnings PKR 42M in contracts at risk",
        "34% fuel price surge with no analytical tools to identify and respond to inefficient routes",
        "No predictive capability  unable to forecast delays, demand peaks, or resource requirements",
        "Operations managers spending 3 hours daily on status calls instead of strategic decisions",
      ],
    },

    solutionArch: {
      title: "Real-Time BI Platform with Predictive Route Optimization Engine",
      description:
        "We built the solution in three integrated layers. First, a data foundation: a centralized data warehouse ingesting real-time GPS telemetry, delivery scan events, traffic APIs, and historical performance data. Second, an operational intelligence layer: a live dashboard giving dispatchers and operations managers real-time visibility into every vehicle, every delivery, and every exception — updated every 60 seconds. Third, a predictive analytics layer: a route optimization engine using historical traffic and delivery data to generate optimal daily routes, and a delay prediction model flagging at-risk deliveries up to 90 minutes before they breach their time window.",
      steps: [
        "Weeks 1–3: Data discovery and architecture design — audited all existing data sources (GPS units on 140 vehicles, delivery management system, fuel cards, customer SLA contracts); assessed data quality and completeness; designed the unified data warehouse schema; selected and sized the technology stack based on data volume and real-time requirements",
        "Weeks 4–7: Data pipeline and warehouse build — built real-time ingestion pipelines using Apache Kafka consuming GPS events at 30-second intervals from all 140 vehicles; developed ETL processes integrating the delivery management system, Google Maps Traffic API, and fuel card transaction data into a central AWS Redshift warehouse; implemented data quality monitoring with automated alerts for pipeline failures or data anomalies",
        "Weeks 8–12: Operational dashboard development — built the live operations dashboard in React with a custom map visualization showing real-time vehicle locations, delivery status heat maps, and exception alerts; developed driver performance scorecards tracking on-time rate, fuel efficiency, and delivery volume per driver; built automated SLA monitoring with real-time alerts when deliveries approach their time window deadline",
        "Weeks 13–16: Predictive route optimization engine — trained a route optimization model using 18 months of historical delivery data, traffic patterns, and vehicle performance data; implemented a constraint-based optimization algorithm accounting for delivery time windows, vehicle capacity, driver shift hours, and real-time traffic; integrated with the dispatch workflow to generate and present optimized daily route plans each morning",
        "Weeks 17–18: Delay prediction model — built a gradient boosting model predicting delivery delay probability using real-time traffic, current vehicle location, historical route performance, and weather data; model flags at-risk deliveries with 85% accuracy at the 90-minute horizon, giving dispatchers time to proactively contact customers and reroute if needed",
        "Weeks 19–20: Automated reporting and staff training — replaced the 4-day manual Excel report with a fully automated reporting suite generating daily, weekly, and monthly performance reports on schedule; conducted 3 days of hands-on training with 60+ operations staff including dispatchers, managers, and executives; delivered full data dictionary and dashboard documentation",
      ],
    },

    techStack: [
      "Python", "Apache Kafka", "AWS Redshift", "React",
      "Tableau", "scikit-learn", "Google Maps API",
      "Apache Airflow", "PostgreSQL", "Docker",
      "Gradient Boosting (XGBoost)", "AWS Lambda",
    ],
  },
];




