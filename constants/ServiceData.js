
import { Monitor } from 'lucide-react';
export const ServiceData = [
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    // Icon: Monitor,
    shortDescription:
      'Native and cross-platform mobile solutions for iOS and Android with seamless performance and user experience.',
    image: '/service_imgs/mobile/MOBILE.png',
    // gradient: 'from-teal-500 via-cyan-500 to-blue-500',
    features: ['React Native', 'Flutter', 'Swift', 'Kotlin'],

    // 👇 DETAIL PAGE
    overview: {
      heading: 'Enterprise-Grade Mobile App Development Services',
      description: `
We design and develop high-performance mobile applications that empower
businesses to scale, innovate, and engage users across iOS and Android platforms.
Our solutions focus on performance, security, and seamless integrations.
`,
      points: [
        {
          title: 'Mobile-First Architecture',
          text: 'Leveraging agile methodologies to build scalable, responsive solutions that align with mobile-first strategies.'
        },
        {
          title: 'Enterprise Mobility',
          text: 'Developing robust, secure applications to streamline operations and enhance productivity for businesses of all sizes.'
        },
        {
          title: 'Integration Expertise',
          text: 'Seamlessly connecting mobile apps with third-party services, APIs, and backend systems.'
        }
      ]
    },

    solutionCards: [
      {
        title: 'Enterprise Mobility Solutions',
        description:
          'DevXoft empowers your workforce with enterprise mobility solutions that transform how business gets done. We build secure, high performance applications that integrate seamlessly with your ERP, CRM, and legacy systems enabling real time collaboration and decision-making from anywhere. Our solutions are fortified with enterprise grade security, ensuring compliance with GDPR, HIPAA, and ISO 27001 through end-to-end encryption and advanced access controls.',
        image: '/service_imgs/mobile/erp.webp',
        tags: ['ERP/CRM Sync', 'GDPR & HIPAA', 'E2E Encryption', 'Role-based Access']
      },
      {
        title: 'Mobile App Modernization',
        description:
          "Transform outdated mobile applications into high performance, modern solutions with DevXoft's app modernization services. We revitalize legacy apps by upgrading architecture, enhancing user experience, and improving performance ensuring your applications meet today's standards and user expectations.Our team conducts comprehensive audits to identify bottlenecks and security gaps, then executes a tailored strategy that enhances speed, scalability, and compliance with current industry standards.",
        image: '/service_imgs/mobile/mblapp.webp',
        tags: ['Architecture Upgrade', 'Legacy Migration', 'Performance Audit', 'Scalability Fix']
      },
      {
        title: 'Mobile UI/UX Design',
        description:
          "DevXoft creates mobile experiences that captivate users and drive conversions. We combine cutting-edge design principles with deep user psychology to craft interfaces that are intuitive, visually striking, and impossible to ignore. From concept to pixel perfect execution, our designs don't just look beautiful they solve real problems and deliver measurable business results across iOS and Android platforms",
        image: '/service_imgs/mobile/mblui.webp',
        tags: ['User Psychology', 'Pixel-Perfect UI', 'Prototyping', 'Conversion Focus']
      },
      {
        title: 'Cross-Platform App Development',
        description:
          "Build once, deploy everywhere. DevXoft's cross-platform expertise using React Native and Flutter delivers native grade performance at half the cost and time. We create powerful, unified applications that dominate both iOS and Android markets while maintaining a single, efficient codebase giving you competitive advantage without compromise.",
        image: '/service_imgs/mobile/Crossplatform.webp',
        tags: ['React Native', 'Flutter', 'Single Codebase', 'Fast Time-to-Market']
      },
      {
        title: 'Native Mobile App Development',
        description:
          'DevXoft unleashes the raw power of iOS and Android platforms through pure native development. We build lightning fast, feature rich applications that exploit every capability your device offers from advanced AR/VR to biometric security. When performance, platform integration, and flawless user experience are non negotiable, native is the answer.',
        image: '/service_imgs/mobile/native.webp',
        tags: ['Swift & Kotlin', 'Native Performance', 'AR/VR Integration', 'Biometric Security']
      }
    ],

    process: {
      title: 'Agile Mobile App Development Process',
      image: '/service_imgs/mobile/scrum.jpg',
      steps: [
        "Discovery & Strategy: We define the product vision, user personas, and a prioritized backlog.",
    "UI/UX Design & Prototyping: Creating intuitive wireframes and interactive prototypes for seamless UX.",
    "Agile Sprint Development: Breaking the project into 2-week sprints for iterative and rapid progress.",
    "Rigorous QA & Testing: Conducting automated and manual tests to ensure the app is bug-free.",
    "Deployment & CI/CD: Launching to stores with continuous integration for seamless updates."
  ]
    },
    // Mobile App Development ke liye Example
    industries: [
      {
        name: 'FinTech  & Digital Payments',
        icon: '💰',
        description:
          'We build secure mobile banking applications with biometric authentication, real-time transaction processing, and encrypted data storage. Our apps enable features like instant money transfers, bill payments, investment tracking, and digital wallet integration. We ensure compliance with financial regulations while delivering seamless user experiences that keep customers connected to their finances 24/7.'
      },
      {
        name: 'Healthcare',
        icon: '🏥',
        description:
          'We develop HIPAA-compliant mobile health apps for remote consultations, prescription management, and patient monitoring through wearable device integration. Our solutions include appointment booking, electronic health records access, and secure video calling for doctor-patient interactions. These apps empower healthcare providers to deliver care beyond clinic walls while maintaining strict data privacy standards.'
      },
      {
        name: 'E-Commerce',
        icon: '🛍️',
        description:
          'We create feature-rich shopping apps with product catalogs, smart search filters, secure checkout processes, and multiple payment gateway integrations. Our mobile solutions include push notifications for offers, order tracking, wishlist management, and personalized recommendations. These apps transform browsing into buying by providing customers with smooth, engaging shopping experiences on their mobile devices.'
      },
      {
        name: 'Logistics',
        icon: '🚚',
        description:
          'We develop mobile applications for transportation companies to track shipments, manage drivers, and optimize delivery routes in real-time. Our solutions include proof-of-delivery capture, fuel monitoring, vehicle maintenance alerts, and automated dispatch systems. These apps provide complete visibility across operations, reducing costs and improving customer satisfaction through timely deliveries.'
      },
      {
        name: 'Real Estate',
        icon: '🏠',
        description:
          'We design property discovery apps with advanced search filters, virtual tours, mortgage calculators, and direct agent communication for seamless home buying experiences. Our mobile platforms include map-based browsing, saved searches, appointment scheduling, and document sharing capabilities. These solutions put the entire property market in users hands, making real estate transactions faster and more transparent.'
      },
      {
        name: 'Education & Online Learning',
        icon: '🎓',
        description:
          'We create interactive e-learning mobile apps with offline content downloads, video streaming, live classes, and progress assessment tools. Our educational platforms include quiz modules, discussion forums, certificate generation, and parent teacher communication features. These apps make quality education accessible anytime, bringing classrooms directly to students smartphones with engaging, user-friendly interfaces.'
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    // Icon: Monitor,
    // gradient: 'from-cyan-500 via-teal-500 to-blue-600',
    shortDescription:
      'Enterprise-grade web applications with modern frameworks. Full-stack solutions from front-end to back-end infrastructure',
    features: ['React & Next.js', 'Node.js', 'TypeScript', 'REST APIs'],
    image: '/service_imgs/web/website.webp', // Laptop/coding

    overview: {
      heading: 'Scalable & High-Performance Web Development Services',
      description: `
We build modern, scalable, and high-performance web applications that help
businesses grow, automate operations, and deliver exceptional digital
experiences. Our web development solutions are engineered with a strong
focus on performance, security, and long-term scalability.

From enterprise web platforms to customer-facing SaaS products, we leverage
modern frameworks, cloud-native architectures, and industry best practices
to deliver fast-loading, SEO-friendly, and highly secure web applications
that align with your business goals.
`,
      points: [
        {
          title: 'Full-Stack Performance Optimization',
          text: 'Implementing Server-Side Rendering (SSR) and Static Site Generation (SSG) to ensure instant load times and superior SEO rankings.'
        },
        {
          title: 'Microservices & API-First Design',
          text: 'Building modular architectures that allow independent scaling of components, making your system easy to maintain and upgrade.'
        },
        {
          title: 'Bulletproof Web Security',
          text: 'Integrating OAuth 2.0, end-to-end encryption, and protection against SQL injection and XSS to safeguard your enterprise data.'
        }
      ]
    },

    solutionCards: [
    {
      title: 'Custom SaaS Platforms',
      description: 'We build multi-tenant architectures designed for 99.9% uptime. Our solutions include automated subscription billing, role-based access control, and scalable cloud infrastructure that grows as your user base expands.',
      image: '/service_imgs/web/SaaS.webp',
      tags: ["Cloud Native", "Multi-tenancy", "Subscription Engine", "Secure Auth"]
    },
    {
      title: 'Enterprise ERP/CRM Systems',
      description: 'Digitize your entire workflow with custom management systems. We specialize in centralizing fragmented data, automating manual reports, and integrating legacy software into a unified, high-performance web interface.',
      image: '/service_imgs/web/ERP.webp',
      tags: ["Data Migration", "Custom Reporting", "API-First", "Workflow Automation"]
    },
    {
      title: 'Headless E-Commerce Solutions',
      description: 'Experience sub-second load times with headless commerce. By decoupling the frontend from the backend, we deliver ultra-fast shopping experiences that directly increase conversion rates and SEO rankings.',
      image: '/service_imgs/web/ecom.webp',
      tags: ["Omni-channel", "Fast Checkout", "Secure Payments", "Inventory Sync"]
    },
    {
      title: 'Progressive Web Apps (PWAs)',
      description: 'Increase user engagement with web apps that work offline. Our PWAs provide native-app-like experiences, including push notifications and home-screen installation, without the high cost of separate app store development.',
      image: '/service_imgs/web/pwa.webp',
      tags: ['Offline Access', 'Push Notifications', 'App-like UX', 'Low-Cost Dev']
    },
    {
      title: 'Real-Time Web Portals',
      description: 'For businesses that need data "now." We use WebSockets and real-time streaming to build live trading platforms, delivery tracking portals, and collaborative tools with zero-latency updates.',
      image: '/service_imgs/web/real.webp',
      tags: ['WebSockets', 'Zero-Latency', 'Live Streaming', 'Dynamic Dashboards']
    },
    {
      title: 'API & Third-Party Integration',
      description: 'Eliminate data silos by connecting your web ecosystem with 3rd-party services like Stripe, Salesforce, or AWS. We ensure bank-grade security and seamless data flow between all your business tools.',
      image: '/service_imgs/web/api.webp',
      tags: ['Bank-Grade Security', 'API Architecture', 'Cloud Bridges', 'CRM/ERP Sync']
    }
],

    process: {
      title: 'Our Web Development Process',
      image: '/service_imgs/web/webmodel.svg', // Agile / Scrum diagram
      steps: [
        'Discovery & Tech-Stack Strategy',
    'User-Centric UI/UX Design & Wireframing',
    'Agile Development & Sprint Reviews',
    'Rigorous QA, Security & Performance Testing',
    'Cloud Deployment with CI/CD Pipelines',
    'Post-Launch Maintenance & Scalability Support'
      ]
    },

    industries: [
      {
        name: 'FinTech',
        icon: '💰',
        description: `
We develop secure and compliant web platforms for financial institutions,
including dashboards, payment systems, and digital banking portals. Our
solutions follow industry security standards and enable real-time data
processing and reporting.
`
      },
      {
        name: 'Healthcare',
        icon: '🏥',
        description: `
Our healthcare web solutions support patient management systems, appointment
platforms, and data-driven dashboards while ensuring data privacy,
compliance, and system reliability.Our solutions ensure data privacy, electronic health records integration, and secure communication between patients and healthcare professionals.
`
      },
      {
        name: ' Real Estate & Property Management',
        icon: '🏠',
        description: `

We design property listing websites, CRM systems, and tenant management portals with advanced search filters, virtual tours, and automated workflows. Our platforms streamline property operations, lead generation, and client communication for real estate businesses.
`
      },
      {
        name: 'E-Commerce & Retail',
        icon: '🛒',
        description: `

We build responsive e-commerce websites with custom shopping carts, product catalogs, and secure payment gateways. Our web solutions include inventory management systems, customer accounts, and mobile optimized interfaces that drive conversions and enhance user experience.
`
      },
      {
        name: 'Education & E-Learning',
        icon: '🎓',
        description: `
We develop interactive learning management systems, online course platforms, and educational portals with features like video streaming, progress tracking, and assessment tools. Our solutions support both students and educators with engaging, accessible learning experiences.
`
      },
      {
        name: ' SaaS & Technology',
        icon: '☁️',
        description: `
We develop cloud-based web applications and SaaS platforms with subscription management, user authentication, and API integrations. Our solutions include responsive dashboards, multitenant architectures, and scalable web infrastructures that grow with your business needs.
`
      }
    ]
  },
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    //  Icon: Monitor,
    // gradient: 'from-purple-600 via-fuchsia-500 to-pink-600',
    shortDescription:
      'Transform raw data into competitive advantages with custom ML models, neural networks, and cognitive automation designed for enterprise scale.',
    features: [
      'Deep Learning',
      'Generative AI (LLMs)',
      'Predictive Modeling',
      'MloP & AI Strategy'
    ],
    image: '/service_imgs/ai.webp',

    overview: {
      heading: 'Future-Proof Your Business with Cognitive Intelligence',
      description: `
We design and deploy intelligent AI-powered solutions that help businesses
automate processes, gain predictive insights, and make smarter decisions.
Our AI & Machine Learning services focus on building scalable, ethical, and
high-performing models that deliver real-world business impact.

From predictive analytics to natural language processing and computer vision,
we transform raw data into actionable intelligence using cutting edge AI
technologies and industry best practices.
`,
      points: [
        {
          title: 'Actionable Predictive Insights',
          text: 'Moving beyond "what happened" to "what will happen." We use advanced regression and classification models to anticipate market shifts and customer needs.'
        },
        {
          title: 'Enterprise-Grade MLOps',
          text: 'Ensuring your models don’t just stay in the lab. We implement robust CI/CD pipelines for ML to handle model retraining, versioning, and performance monitoring.'
        },
        {
          title: 'Human-Centric AI Design',
          text: 'Focusing on Explainable AI (XAI). We build models where the logic is transparent, ensuring your stakeholders understand and trust every automated decision.'
        },
        {
          title: 'Data-Driven Intelligence',
          text: 'Leveraging advanced ML algorithms to extract actionable insights from complex data sets and enable informed decision-making.'
        },
        {
          title: 'Scalable AI Architecture',
          text: 'Building robust, cloud-native AI systems that scale with your business needs and handle growing data volumes efficiently.'
        },
        {
          title: 'Ethical AI Development',
          text: 'Implementing responsible AI practices with bias mitigation, transparency, and compliance with data privacy regulations.'
        }
      ]
    },

    solutionCards: [
      {
        title: 'Predictive Analytics',
        description:
          'We don’t just analyze data; we predict your future growth. By harnessing historical data, we help you forecast market demand, preemptively identify customer churn, and execute pricing strategies that maximize your bottom line with 95%+ model accuracy.',
        image: '/service_imgs/Ai/pred.webp',
        tags: ['Forecasting Models', 'Churn Reduction', 'Revenue Optimization', 'Big Data Insights']
      },
      {
        title: 'Generative AI & LLMs',
        description:
          'Custom fine-tuning of Large Language Models for automated content creation, internal knowledge bases, and smart enterprise search.',
        image: '/service_imgs/Ai/llms.webp',
        tags: ['Custom Fine-tuning', 'RAG Architecture', 'Private Data LLMs', 'Automated Workflows']
      },
      {
        title: 'Computer Vision',
        description:
          'Real-time object detection, facial recognition, and automated visual inspection systems for security, retail, and manufacturing.',
        image: '/service_imgs/Ai/cv.webp',
        tags:['Object Detection', 'Biometric Security', 'Visual Inspection', 'Edge Computing']
      },
      {
        title: 'Natural Language Processing',
        description:
          'Transform unstructured conversations into competitive advantages. Our NLP solutions handle multilingual sentiment analysis and intent recognition, allowing you to understand exactly what your customers need from thousands of documents or chat logs in seconds..',
        image: '/service_imgs/Ai/nlp.webp',
        tags:['Sentiment Analysis', 'Entity Recognition', 'Multilingual Support',' Text Mining']
      },
      {
        title: 'Recommendation Engines',
        description:
          'Deliver the ultimate personalized shopping experience. We build deep-learning engines that analyze user behavior in real-time to suggest the "exact right product" at the "exact right time," proven to increase conversion rates and average order value.',
        image: '/service_imgs/Ai/engine.webp',
        tags:['Deep Learning', 'User Personalization',' Conversion Lift', 'Real-time Ranking']
      },
      {
        title: 'Anomaly & Fraud Detection',
        description:
          'Protecting your business with real-time AI monitoring that identifies suspicious patterns and prevents financial or data breaches.Our AI-driven monitoring systems identify suspicious patterns and outliers with millisecond latency, protecting your financial transactions and sensitive data from sophisticated breaches and fraud attempts.',
        image: '/service_imgs/Ai/aifraud.webp',
        tags:['Real-time Monitoring',' Pattern Recognition', 'Breach Prevention', 'Financial Security']
      }
    ],

    process: {
      title: 'AI & Machine Learning Development Lifecycle (CRISP-DM + MLOps)',
      image: '/service_imgs/Ai/aimodel.png',
      steps: [
        'Business Problem Discovery & Data Feasibility Audit',
        'Data Cleansing, Labeling & Feature Engineering',
        'Model Selection, Hyperparameter Tuning & Training',
        'Rigorous Validation & Bias Mitigation Testing',
        'Deployment, Monitoring & Continuous Model Improvement'
      ]
    },

    industries: [
      {
        name: 'Retail & E-Commerce',
        icon: '🛍️',
        description:
          'Personalized shopping experiences through AI-driven search, dynamic inventory forecasting, and hyper-targeted customer segmentation.'
      },
      {
        name: 'Finance & Fintech',
        icon: '💳',
        description:
          'Algorithmic trading support, automated credit scoring, and high-speed fraud detection systems compliant with global financial regulations.'
      },
      {
        name: 'Healthcare & Biotech',
        icon: '🏥',
        description:
          'Accelerating drug discovery through molecular modeling and improving patient outcomes with AI-assisted medical imaging and diagnostics.'
      },
      {
        name: 'Manufacturing 4.0',
        icon: '🏭',
        description:
          'Predictive maintenance to prevent costly equipment failure and automated quality control using high-speed computer vision.'
      },
      {
        name: 'Logistics & Supply Chain',
        icon: '🚚',
        description:
          'AI route optimization that slashes fuel costs and intelligent demand sensing that eliminates overstocking and stockouts.'
      },
      {
        name: 'Cybersecurity',
        icon: '🛡️',
        description:
          'Zero-day threat detection and automated incident response using behavioral AI to safeguard enterprise data perimeters.'
      }
    ]
  },
  {
  id: "ui-ux-design",
  title: "UI/UX Design",
  //  Icon: Monitor,
  // gradient: "from-rose-500 via-pink-500 to-orange-500",
  shortDescription: "Crafting digital experiences that blend aesthetic beauty with functional precision to drive user engagement and ROI.",
  features: ["User Research", "Design Systems", "Interactive Prototypes", "Accessibility Audits"],
  image: "/service_imgs/ui/uiux.webp",

  overview: {
    heading: "Design That Connects, Experiences That Convert",
    description: `
At DevXoft, we believe great design is invisible—it just works. We specialize in Human-Centered Design (HCD) that bridges the gap between complex technology and the end-user. 

Our UI/UX team focuses on psychological triggers, accessibility standards (WCAG), and data-driven research to create interfaces that don't just look premium but also reduce user friction and boost business conversions. From startups to enterprise-grade dashboards, we design for the future of interaction.
`,
    points: [
      {
        title: 'Data-Driven Design Research',
        text: 'We don’t guess. We use heatmaps, user interviews, and competitor audits to make informed design decisions.'
      },
      {
        title: 'Scalable Design Systems',
        text: 'Building comprehensive UI kits and component libraries that ensure visual consistency as your product grows.'
      },
      {
        title: 'Conversion-Rate Optimization (CRO)',
        text: 'Strategically placing call-to-actions and simplifying user journeys to turn visitors into loyal customers.'
      }
    ]
  },

 solutionCards: [
    {
      title: 'User Research & Persona Audit',
      description: 'We deep-dive into your market to identify exactly who your users are. By creating detailed personas and empathy-driven journey maps, we ensure every pixel solves a real-world pain point and aligns with your business goals.',
      image: '/service_imgs/ui/user.webp',
      tags: ['Persona Mapping', 'Empathy Maps', 'Competitor Analysis', 'User Surveys']
    },
    {
      title: 'Prototyping & Wireframing',
      description: 'Visualize your idea before investing in development. We create everything from low-fidelity structural wireframes to high-fidelity interactive prototypes that look and feel like the final product.',
      image: '/service_imgs/ui/prototyping.webp',
      tags: ['Interactive Flows', 'Rapid Prototyping', 'Blueprinting', 'Figma/Adobe XD']
    },
    {
      title: 'Enterprise Dashboard Design',
      description: 'Transforming complex data into clarity. We specialize in simplifying massive data sets into intuitive, actionable dashboards that help enterprise users make faster, more informed decisions.',
      image: '/service_imgs/ui/erpdashboard.webp',
      tags: ['Data Visualization', 'Information Architecture', 'SaaS Layouts', 'Dark/Light Mode']
    },
    {
      title: 'Design Systems & Style Guides',
      description: 'Build for scale with a unified source of truth. We develop comprehensive component libraries and scalable style guides that ensure brand consistency and allow developers to code 2x faster.',
      image: '/service_imgs/ui/design.webp',
      tags: ['Component Libraries', 'Atomic Design', 'Brand Consistency', 'Developer Handoff']
    },
    {
      title: 'Mobile-First App Design',
      description: 'Crafting thumb-friendly experiences for the on-the-go user. We focus on ergonomic layouts and delightful micro-interactions specifically for iOS and Android to maximize user retention.',
      image: '/service_imgs/ui/mockup.webp',
      tags: ['Touch-Optimized', 'Micro-interactions', 'Native UI Patterns', 'Adaptive Layouts']
    },
    {
      title: 'Usability Testing & QA',
      description: 'Data-driven design refinement. We identify friction points through real-user testing and heatmaps, refining the UX until the user journey is completely seamless and frustration-free.',
      image: '/service_imgs/ui/ut.webp',
      tags: ['A/B Testing', 'Heatmap Analysis', 'Accessibility (WCAG)', 'Heuristic Evaluation']
    }
],

  process: {
    title: "The Design Thinking Methodology",
    image: "/service_imgs/ui/ui.svg", // Use Storyset image here
    steps: [
      'Empathize: Deep research into user needs and business goals.',
      'Define: Mapping out user journeys and information architecture.',
      'Ideate: Brainstorming creative solutions and rapid wireframing.',
      'Prototype: Creating interactive high-fidelity UI designs.',
      'Test & Iterate: Validating designs with real users for final polish.'
    ]
  },

 industries: [
  {
    name: "SaaS & Fintech",
    icon: "📊",
    description: `
We transform complex financial data into intuitive, high-performance dashboards. 
Our focus is on secure user flows, multi-level authentication interfaces, and 
precise data visualization that builds user trust and drives long-term engagement.
`
  },
  {
    name: "E-Commerce & Retail",
    icon: "🛒",
    description: `
Creating friction-less shopping experiences is our priority. We design 
conversion-focused checkout flows, personalized product discovery layouts, 
and thumb-friendly mobile interfaces that minimize cart abandonment and boost sales.
`
  },
  {
    name: "Healthcare & MedTech",
    icon: "🩺",
    description: `
Clarity and accessibility are critical in medical applications. We design 
clean, HIPAA-compliant interfaces for patients and providers that reduce 
cognitive stress and make critical health information instantly readable.
`
  },
  {
    name: "EdTech & Learning",
    icon: "🎓",
    description: `
We design engaging learning platforms with gamified UI elements and 
interactive navigation. Our goal is to increase student retention by 
simplifying complex educational content through effective visual hierarchy.
`
  },
  {
    name: "Real Estate & PropTech",
    icon: "🏘️",
    description: `
We simplify property browsing through immersive visuals and advanced 
filtering. By strategically placing lead generation forms and virtual 
tour integrations, we create a seamless journey from discovery to closing.
`
  },
  {
    name: "Logistics & Supply Chain",
    icon: "📦",
    description: `
For operational efficiency, we simplify complex tracking maps and inventory 
dashboards. Our designs are driver-friendly, mobile-optimized, and engineered 
for real-time data monitoring to streamline global supply chain workflows.
`
  }
]
},
{
  id: "cloud-devops",
  title: "Cloud & DevOps",
  //  Icon: Monitor,
  // gradient: "from-blue-600 via-teal-500 to-cyan-400",
  shortDescription: "Automating deployments and scaling infrastructure with high-availability cloud solutions for zero-downtime operations.",
  features: ["CI/CD Pipelines", "Infrastructure as Code", "Kubernetes Scaling", "Cloud Security"],
  image: "/service_imgs/cloud/cloudtech.webp",

  overview: {
    heading: "Scalable Infrastructure, Automated Velocity",
    description: `
At DevXoft, we eliminate the friction between development and operations. We don't just host your apps; we build resilient, self-healing infrastructures that scale automatically with your user base.

Our DevOps philosophy focuses on 'Automation First.' By using Infrastructure as Code (IaC) and robust CI/CD pipelines, we reduce manual errors, cut deployment times from hours to minutes, and ensure your services remain online 24/7/365. Whether it's AWS, Azure, or Google Cloud, we optimize for both performance and cost.
`,
    points: [
      {
        title: 'High Availability & Uptime',
        text: 'Designing multi-region, fault-tolerant architectures that ensure your business stays online even during server failures.'
      },
      {
        title: 'Cost Optimization (FinOps)',
        text: 'Analyzing cloud spend to eliminate waste, using spot instances and auto-scaling to keep your infrastructure budget-friendly.'
      },
      {
        title: 'Automated Security (DevSecOps)',
        text: 'Integrating security scans directly into the deployment pipeline to catch vulnerabilities before they reach production.'
      }
    ]
  },

  solutionCards: [
    {
      title: 'Infrastructure as Code (IaC)',
      description: 'We treat infrastructure like software. Using Terraform and Ansible, we blueprint your entire environment, making it reproducible, version-controlled, and immune to human configuration errors.',
      image: '/service_imgs/cloud/iac.webp',
      tags: ['Terraform', 'Ansible', 'CloudFormation', 'Immutable Infra']
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Streamline your release cycle. We build automated pipelines that test, build, and deploy your code seamlessly, allowing your team to ship features faster and with total confidence.',
      image: '/service_imgs/cloud/cicd.webp',
      tags: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Automated Testing']
    },
    {
      title: 'Kubernetes & Orchestration',
      description: 'Manage complex microservices with ease. We implement Kubernetes clusters that handle container scaling, load balancing, and self-healing for enterprise-grade stability.',
      image: '/service_imgs/cloud/kuber.webp',
      tags: ['Docker', 'Kubernetes (K8s)', 'Helm', 'Service Mesh']
    },
    {
      title: 'Cloud Migration & Strategy',
      description: 'Moving from legacy servers to the cloud? We manage the entire transition, ensuring zero data loss and minimal downtime while re-architecting for cloud-native performance.',
      image: '/service_imgs/cloud/cloudmig.webp',
      tags: ['AWS/Azure/GCP', 'Lift & Shift', 'Re-platforming', 'Database Migration']
    },
    {
      title: 'Serverless Architecture',
      description: 'Focus on code, not servers. We implement serverless solutions like AWS Lambda to execute logic only when needed, drastically reducing operational overhead and costs.',
      image: '/service_imgs/cloud/server.webp',
      tags: ['AWS Lambda', 'Azure Functions', 'Event-Driven', 'Cost Efficiency']
    },
    {
      title: 'Site Reliability Engineering (SRE)',
      description: 'Proactive monitoring and incident response. We set up advanced observability tools to track system health in real-time and resolve issues before they affect your users.',
      image: '/service_imgs/cloud/sre.webp',
      tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Incident Response']
    }
  ],

  process: {
    title: "Our DevOps Lifecycle",
    image: "/service_imgs/cloud/ops.png",
    steps: [
      'Assess: Auditing current infrastructure and identifying bottlenecks.',
      'Architect: Designing a scalable, secure, and cost-effective cloud strategy.',
      'Automate: Building CI/CD pipelines and Infrastructure as Code.',
      'Deploy: Seamless migration or launch with zero-downtime protocols.',
      'Optimize: Continuous monitoring and fine-tuning for performance and cost.'
    ]
  },

  industries: [
    {
      name: "FinTech & Banking",
      icon: "🏦",
      description: "Implementing bank-grade security and compliance (PCI-DSS) within automated pipelines to ensure secure, high-frequency financial transactions."
    },
    {
      name: "Streaming & Media",
      icon: "🎬",
      description: "Managing auto-scaling groups that handle massive traffic spikes during live events or viral content releases without lag."
    },
    {
      name: "E-Commerce",
      icon: "🛍️",
      description: "Ensuring 100% uptime during high-traffic sales like Black Friday through proactive load balancing and database sharding."
    },
    {
      name: "SaaS Startups",
      icon: "🚀",
      description: "Setting up lean, cost-efficient cloud environments that allow startups to scale rapidly as their user base grows."
    },
    {
      name: "Healthcare",
      icon: "🏥",
      description: "Building HIPAA-compliant, encrypted cloud storage and processing units for sensitive patient data management."
    },
    {
      name: "Logistics",
      icon: "🚚",
      description: "Real-time data synchronization across global edge locations for fleet tracking and supply chain visibility."
    }
  ]
},
{
  id: "cybersecurity",
  title: "Cybersecurity & Resilience",
  //  Icon: Monitor,
  // gradient: "from-slate-900 via-emerald-900 to-teal-600",
  shortDescription: "Shielding your digital frontier with proactive threat intelligence, ethical hacking, and bank-grade defense-in-depth strategies.",
  features: ["Penetration Testing (VAPT)", "Zero-Trust Architecture", "Incident Response", "Compliance Management"],
  image: "/service_imgs/cyber/cybersecurity.webp",

  overview: {
    heading: "Digital Fortresses Built on Trust and Intelligence",
    description: `
At DevXoft, we believe that security is not a product, but a continuous process of resilience. We don't just patch vulnerabilities; we build ironclad ecosystems. Our approach follows the 'Defense-in-Depth' principle, ensuring multiple layers of security across your applications, networks, and human capital.

We operate as your dedicated White-Hat team, utilizing the same techniques as sophisticated adversaries to find and fix gaps before they can be exploited. From startups protecting user privacy to enterprises securing multi-billion dollar transactions, we ensure your business remains untouchable in an era of evolving digital warfare.
`,
    points: [
      {
        title: 'Offensive Security (Ethical Hacking)',
        text: 'Simulating real-world cyber-attacks to identify critical weaknesses in your infrastructure before malicious actors do.'
      },
      {
        title: 'Zero-Trust Implementation',
        text: "Moving beyond traditional firewalls to a 'never trust, always verify' model that protects data at every touchpoint."
      },
      {
        title: 'Regulatory Compliance Mastery',
        text: 'Ensuring your systems meet global gold standards including GDPR, HIPAA, SOC2, and PCI-DSS to mitigate legal risks.'
      },
      {
        title: 'Continuous Threat Intelligence',
        text: 'Monitoring the dark web and global threat feeds to proactively defend against zero-day exploits and emerging malware.'
      }
    ]
  },

  solutionCards: [
    {
      title: 'Vulnerability Assessment & Pen-Testing (VAPT)',
      description: 'Comprehensive manual and automated testing of web, mobile, and network layers following OWASP and PTES standards to expose hidden flaws.',
      image: '/service_imgs/cyber/vapt.webp',
      tags: ['OWASP Top 10', 'Burp Suite', 'Metasploit', 'Nmap']
    },
    {
      title: 'Identity & Access Management (IAM)',
      description: 'Implementing Multi-Factor Authentication (MFA), Single Sign-On (SSO), and Role-Based Access Control (RBAC) to ensure only authorized eyes see your data.',
      image: '/service_imgs/cyber/iam.webp',
      tags: ['Okta', 'Auth0', 'Biometrics', 'Least Privilege']
    },
    {
      title: 'Cloud Security Posture Management',
      description: 'Securing AWS, Azure, and GCP environments through hardened configurations, VPC isolation, and real-time misconfiguration alerts.',
      image: '/service_imgs/cyber/sec.webp',
      position:'object-top',
      tags: ['WAF', 'DDoS Mitigation', 'CloudTrail', 'GuardDuty']
    },
    {
      title: 'DevSecOps & Secure Coding',
      description: 'Integrating security into your CI/CD pipeline. We perform Static (SAST) and Dynamic (DAST) analysis to catch bugs during the development phase.',
      image: '/service_imgs/cyber/dev.webp',
      tags: ['SonarQube', 'Snyk', 'GitHub Advanced Security', 'Scan-on-Push']
    },
    {
      title: 'Advanced Data Encryption',
      description: 'Protecting data-at-rest and data-in-transit using AES-256 and RSA protocols, ensuring that your sensitive information remains unreadable even if breached.',
      image: '/service_imgs/cyber/encryption.webp',
      tags: ['TLS 1.3', 'HSM', 'Zero-Knowledge Proof', 'PKI']
    },
    {
      title: 'Incident Response & Digital Forensics',
      description: 'A dedicated task force ready to contain breaches, recover lost data, and perform forensic analysis to prevent future recurrence.',
      image: '/service_imgs/cyber/forensics.webp',
      tags: ['SIEM', 'CrowdStrike', 'Log Analysis', 'Disaster Recovery']
    }
  ],

  process: {
    title: "The NIST-Aligned Security Lifecycle",
    image: "/service_imgs/cyber/NIST-CS.webp",
    steps: [
      'Identify: Comprehensive audit of assets, data, and potential risk surfaces.',
      'Protect: Implementing safeguards like firewalls, IAM, and encryption to limit impact.',
      'Detect: Setting up 24/7 monitoring and anomaly detection to identify active threats.',
      'Respond: Executing rapid-action protocols to contain and neutralize detected incidents.',
      'Recover: Restoring systems and analyzing the breach to fortify defenses for the future.'
    ]
  },

  industries: [
    {
      name: "FinTech & Digital Banking",
      icon: "🏦",
      description: "Securing high-frequency transactions and sensitive financial ledgers with PCI-DSS compliance and anti-fraud AI algorithms."
    },
    {
      name: "Healthcare & MedTech",
      icon: "🩺",
      description: "Protecting patient PHI with strict HIPAA-compliant encryption and secure EHR access controls."
    },
    {
      name: "Government & Public Sector",
      icon: "🏛️",
      description: "Implementing mission-critical national security standards to protect public records and critical infrastructure."
    },
    {
      name: "E-Commerce & Retail",
      icon: "🛍️",
      description: "Preventing credit card theft and database breaches during high-traffic sales events with robust WAF and DDoS protection."
    },
    {
      name: "Legal & Professional Services",
      icon: "⚖️",
      description: "Ensuring attorney-client privilege is maintained through zero-knowledge document storage and encrypted communication."
    },
    {
      name: "SaaS & Cloud Platforms",
      icon: "☁️",
      description: "Protecting multi-tenant architectures from cross-tenant data leakage and API-based attacks."
    },
    {
      name: "Industrial IoT & Manufacturing",
      icon: "🏭",
      description: "Securing smart factories and OT networks from ransomware that could halt production lines."
    },
    {
      name: "EdTech & E-Learning",
      icon: "🎓",
      description: "Protecting student privacy and intellectual property with COPPA-compliant security frameworks."
    },
    {
      name: "Real Estate & PropTech",
      icon: "🏡",
      description: "Securing high-value property transactions and sensitive investor documentation against sophisticated phishing attacks."
    }
  ]
},
{
    id: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    //  Icon: Monitor,
    shortDescription:
      'Scalable, high-conversion online stores and marketplaces built with cutting-edge commerce technology and seamless user journeys.',
    image: '/service_imgs/ecom/MAIN.webp',
    // gradient: 'from-orange-500 via-red-500 to-pink-500',
    features: ['Shopify Plus', 'Magento/Adobe Commerce', 'WooCommerce', 'Headless Commerce'],

    // 👇 DETAIL PAGE
    overview: {
      heading: 'Conversion-Focused Digital Commerce Experiences',
      description: `
At DevXoft, we don't just build online stores; we create high-performance commerce ecosystems that turn browsers into loyal customers. From small boutiques to enterprise-level marketplaces, our solutions are engineered for speed, security, and global scalability.

We leverage data-driven design and robust backend architectures to ensure your digital storefront handles peak traffic with ease while providing a frictionless checkout experience that maximizes your ROI.
`,
      points: [
        {
          title: 'Omnichannel Commerce',
          text: 'Unifying your sales across web, mobile, social media, and physical stores for a consistent brand experience.'
        },
        {
          title: 'High-Conversion UX',
          text: 'Implementing psychological triggers, lightning-fast search, and one-click checkouts to reduce cart abandonment.'
        },
        {
          title: 'Secure Payment Ecosystems',
          text: 'Integrating global and local payment gateways with PCI-DSS compliance and advanced fraud protection.'
        }
      ]
    },

    solutionCards: [
      {
        title: 'Custom B2B & B2C Platforms',
        description:
          "DevXoft builds tailored e-commerce platforms that cater to specific business models. Whether it's complex B2B wholesale portals with custom pricing tiers or high-volume B2C retail stores, we ensure your platform supports your unique workflows. Our solutions include advanced inventory management, customer segmentation, and automated tax calculations to simplify your operations.",
        image: '/service_imgs/ecom/b2c.webp',
        tags: ['Multi-vendor Support', 'Inventory Sync', 'B2B Portals', 'API-First']
      },
      {
        title: 'Headless Commerce Architecture',
        description:
          "Future-proof your brand with Headless Commerce. We decouple your frontend from the backend, allowing for total design freedom and extreme performance. Using tools like Shopify Hydrogen or BigCommerce APIs, we deliver content-rich experiences across any device or screen, ensuring your site loads in milliseconds and stays ahead of the competition.",
        image: '/service_imgs/ecom/headless.webp',
        tags: ['Next.js Commerce', 'Fast Performance', 'Flexibility', 'Multi-Storefront']
      },
      {
        title: 'Platform Migration & Upgrades',
        description:
          "Outgrowing your current platform? We manage seamless migrations from legacy systems to modern powerhouses like Shopify Plus or Magento. Our process ensures zero data loss, preserved SEO rankings, and a complete modernization of your tech stack. We handle everything from product database transfer to customer password re-mapping.",
        image: '/service_imgs/ecom/datamig.webp',
        tags: ['Zero Downtime', 'SEO Preservation', 'Data Integrity', 'Tech Modernization']
      },
      {
        title: 'Payment & Logistics Integration',
        description:
          "Connect your store to the world. We integrate global leaders like Stripe, PayPal, and Adyen alongside automated shipping solutions like FedEx or DHL. Our integrations extend to ERPs and CRMs, ensuring that every order is tracked, every shipment is logged, and your financial data is always synchronized in real-time.",
        image: '/service_imgs/ecom/pay.webp',
        tags: ['Stripe/PayPal', 'Logistics API', 'ERP Integration', 'Real-time Tracking']
      },
      {
        title: 'E-commerce App Development',
        description:
          'Take your store to the pockets of your customers. We develop high-performance iOS and Android shopping apps that feature push notifications, biometric payments, and AR "Try-on" features. Our mobile commerce solutions focus on thumb-friendly navigation and lightning-fast checkout to capture the growing mobile-first market.',
        image: '/service_imgs/ecom/m-app.webp',
        tags: ['iOS/Android', 'Push Notifications', 'Mobile UX', 'AR Integration']
      }
    ],

    process: {
      title: 'Our Commerce Excellence Blueprint',
      image: '/service_imgs/ecom/ecommodel.webp',
      steps: [
        'Discovery & Conversion Strategy',
        'UI/UX Design & Prototyping',
        'Scalable Development',
        'Seamless Integrations',
        'QA & Performance Hardening',
        'Deployment & Growth Optimization'
      ]
    },

    industries: [
      {
        name: 'Fashion & Apparel',
        icon: '👗',
        description: 'Creating visually stunning lookbooks, virtual fitting rooms, and intelligent size guides to enhance the fashion shopping experience and reduce returns.'
      },
      {
        name: 'Electronics & Tech',
        icon: '💻',
        description: 'Building complex product comparison engines, technical spec filters, and high-security checkout for high-value electronic goods.'
      },
      {
        name: 'Health & Beauty',
        icon: '💄',
        description: 'Implementing subscription-based models for recurring orders, personalized skincare quizzes, and influencer-driven social commerce integrations.'
      },
      {
        name: 'Food & Grocery',
        icon: '🛒',
        description: 'Optimizing local delivery zones, real-time stock alerts for perishable items, and lightning-fast "Quick-Commerce" checkout flows.'
      },
      {
        name: 'Automotive Parts',
        icon: '🔧',
        description: 'Developing hyper-accurate fitment search engines (Year/Make/Model) to ensure customers always find the right part for their vehicle.'
      },
      {
        name: 'Home & Furniture',
        icon: '🛋️',
        description: 'Utilizing AR for room visualization, bulk shipping cost calculators, and custom delivery scheduling for large-scale furniture items.'
      }
    ]
},
{
    id: 'digital-marketing-growth',
    title: 'Digital Marketing & Growth',
    //  Icon: Monitor,
    shortDescription:
      'Data-driven marketing strategies that amplify brand visibility, drive high-quality traffic, and maximize ROI through multi-channel performance engineering.',
    image: '/service_imgs/digital/digital_marketing.webp',
    // gradient: 'from-blue-600 via-purple-600 to-indigo-600',
    features: ['Search Engine Optimization', 'Performance Marketing', 'Social Media ROI', 'Content Strategy'],

    // 👇 DETAIL PAGE
    overview: {
      heading: 'Engineered Growth Through Data-Driven Marketing',
      description: `
At DevXoft, we move beyond surface-level metrics like "likes" and "follows." We focus on what matters: sustainable growth and bottom-line revenue. Our digital marketing team blends creative storytelling with rigorous data analysis to build authority and dominate search landscapes.

By integrating advanced tracking, AI-driven insights, and psychological triggers, we ensure every marketing dollar is an investment toward market leadership. Whether you are launching a new product or scaling an established brand, our strategies are built to adapt and outperform.
`,
      points: [
        {
          title: 'Precision Targeting',
          text: 'Using granular demographic and behavioral data to put your brand in front of high-intent customers at the perfect moment.'
        },
        {
          title: 'Full-Funnel Optimization',
          text: 'From awareness to conversion and retention, we optimize every touchpoint to minimize friction and maximize lifetime value.'
        },
        {
          title: 'ROI Transparency',
          text: 'Real-time dashboards and attribution modeling that show exactly how your campaigns are performing and driving revenue.'
        }
      ]
    },

    solutionCards: [
      {
        title: 'Technical & Creative SEO',
        description:
          "Dominate search results with our dual-approach SEO. We optimize your technical foundation (Core Web Vitals, Schema) while executing a content strategy that builds topical authority. Our goal is to secure long-term organic traffic that reduces your dependency on paid ads.",
        image: '/service_imgs/digital/SEO.webp',
        tags: ['Keyword Research', 'Backlink Strategy', 'On-Page SEO', 'Technical Audits']
      },
      {
        title: 'Performance Marketing (PPC)',
        description:
          "Scale rapidly with high-intent paid search and display campaigns. We manage Google Ads, Bing, and Programmatic advertising with a focus on Cost Per Acquisition (CPA). Every campaign is continuously A/B tested to ensure your budget is spent on the highest-performing assets.",
        image: '/service_imgs/digital/ppc.webp',
        tags: ['Google Ads', 'Display Remarketing', 'CPA Optimization', 'Ad Copywriting']
      },
      {
        title: 'Social Media Performance',
        description:
          "Turn social platforms into revenue engines. We go beyond posting; we build paid social funnels on Meta, LinkedIn, and TikTok that target users based on interest and intent. Our creative team develops thumb-stopping visuals designed specifically for conversion.",
        image: '/service_imgs/digital/media.webp',
        tags: ['Meta Ads', 'LinkedIn Growth', 'TikTok Marketing', 'Community Mgmt']
      },
      {
        title: 'Content Marketing & Authority',
        description:
          "We create high-value content that educates, inspires, and converts. From deep-dive whitepapers and case studies to viral blog posts, our content is engineered to rank on search engines and establish your brand as a thought leader in your industry.",
        image: '/service_imgs/digital/cm.webp',
        tags: ['Blogging', 'Whitepapers', 'Video Scripts', 'Email Newsletters']
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        description:
          "Traffic is useless if it doesn't convert. We use heatmaps, session recordings, and split testing to identify bottlenecks in your user journey. By optimizing landing pages and UI elements, we help you get more value out of your existing traffic.",
        image: '/service_imgs/digital/cro.webp',
        tags: ['A/B Testing', 'Heatmaps', 'Landing Page Design', 'User Psychology']
      },
      {
        title: 'Email & Marketing Automation',
        description:
          "Nurture leads while you sleep. We design automated email sequences that trigger based on user behavior—abandoned carts, post-purchase follow-ups, and re-engagement campaigns. Our goal is to increase customer lifetime value through personalization.",
        image: '/service_imgs/digital/email.webp',
        tags: ['Klaviyo/Mailchimp', 'Drip Campaigns', 'Segmentation', 'Lifecycle Marketing']
      },
      {
        title: 'Influencer & Affiliate Growth',
        description:
          "Leverage the power of trust. We identify and manage partnerships with influencers and affiliates who align with your brand values. Our performance-based approach ensures you pay for results, not just reach, creating a scalable word-of-mouth engine.",
        image: '/service_imgs/digital/influ.webp',
    
        tags: ['Influencer Sourcing', 'Affiliate Tracking', 'PR Outreach', 'Brand Ambassadorship']
      },
      {
        title: 'Analytics & Data Intelligence',
        description:
          "Stop guessing and start knowing. We implement advanced GA4 tracking, GTM configurations, and custom Looker Studio dashboards. We provide the data clarity needed to make informed business decisions and identify untapped growth opportunities.",
        image: '/service_imgs/digital/analytics.webp',
        tags: ['GA4/GTM', 'Custom Dashboards', 'Attribution Modeling', 'Data Visualization']
      },
      {
        title: 'Video & Motion Marketing',
        description:
          "In the age of short-form content, video is king. We produce high-impact video ads, product explainers, and motion graphics optimized for YouTube, Reels, and TikTok to capture attention in saturated feeds.",
        image: '/service_imgs/digital/motion.webp',
        tags: ['Short-form Video', 'YouTube SEO', 'Motion Graphics', 'Ad Production']
      }
    ],

 process: {
      title: 'The AAARRR Growth Framework',
      image: '/service_imgs/digital/aaarr.webp', // Use your uploaded image path here
      steps: [
        'Awareness: Building brand visibility and top-of-mind recall through strategic outreach.',
        'Acquisition: Driving high-intent traffic to your digital assets via SEO and Paid channels.',
        'Activation: Ensuring a seamless first-user experience that delivers immediate value.',
        'Revenue: Optimizing conversion paths to turn engaged users into paying customers.',
        'Retention: Implementing lifecycle marketing to keep users coming back and reduce churn.',
        'Referral: Turning loyal customers into brand ambassadors to fuel organic viral growth.'
      ]
    },

    industries: [
      {
        name: 'SaaS & Software',
        icon: '🚀',
        description: 'Focusing on Free Trial signups, Demo bookings, and reducing churn through targeted educational content and retargeting.'
      },
      {
        name: 'Real Estate',
        icon: '🏠',
        description: 'Generating high-quality leads through geo-fencing, professional video tours, and automated nurturing for property buyers.'
      },
      {
        name: 'Healthcare & Wellness',
        icon: '🏥',
        description: 'Building patient trust with HIPAA-compliant marketing, educational SEO, and local search dominance for clinics.'
      },
      {
        name: 'FinTech',
        icon: '💳',
        description: 'Navigating complex regulations while driving user acquisition for apps, using data-driven trust signals and high-authority PR.'
      },
      {
        name: 'Education/E-Learning',
        icon: '🎓',
        description: 'Scaling course enrollments through webinar funnels, social proof marketing, and intent-based search campaigns.'
      },
      {
        name: 'Professional Services',
        icon: '💼',
        description: 'Generating B2B leads for law firms and consultancies via LinkedIn thought leadership and high-intent PPC.'
      }
    ]
},
{
    id: 'data-science-business-intelligence',
    title: 'Data Science & Business Intelligence',
    //  Icon: Monitor,
    shortDescription:
      'Transforming raw data into strategic assets through advanced predictive modeling, real-time analytics, and interactive BI dashboards.',
    image: '/service_imgs/data/data_science_.webp',
    // gradient: 'from-green-600 via-teal-500 to-blue-600',
    features: ['Predictive Analytics', 'Big Data Engineering', 'Automated BI Reporting', 'Machine Learning Models'],

    // 👇 DETAIL PAGE
    overview: {
      heading: 'Turn Your Data Into Your Competitive Advantage',
      description: `
At DevXoft, we believe that data is the new oil, but only if it is refined. Our Data Science & BI team helps you navigate the complexity of big data to uncover hidden patterns, predict future market trends, and automate decision-making processes.

From building robust data pipelines to deploying sophisticated AI models, we provide the end-to-end infrastructure needed to transform your organization into a data-driven powerhouse. We don't just show you what happened; we show you what will happen next and how to profit from it.
`,
      points: [
        {
          title: 'Actionable Insights',
          text: 'Moving beyond static reports to provide dynamic insights that lead directly to cost savings and revenue growth.'
        },
        {
          title: 'Scalable Data Architecture',
          text: 'Building secure, high-performance data warehouses and lakes that grow seamlessly with your business volume.'
        },
        {
          title: 'Predictive Forecaster',
          text: 'Utilizing historical data to build models that accurately predict customer churn, demand, and market shifts.'
        }
      ]
    },

    solutionCards: [
      {
        title: 'Custom BI Dashboards',
        description:
          "Consolidate fragmented data into a single source of truth. We build interactive, real-time dashboards using Power BI, Tableau, or Looker that allow your team to monitor KPIs at a glance and drill down into specific metrics instantly.",
        image: '/service_imgs/data/custom.webp',
        tags: ['Real-time Reporting', 'Power BI / Tableau', 'KPI Tracking', 'Data Visualization']
      },
      {
        title: 'Data Warehousing & ETL',
        description:
          "Stop dealing with messy data. We design and implement robust ETL (Extract, Transform, Load) pipelines and modern data warehouses on Snowflake, BigQuery, or AWS, ensuring your data is clean, structured, and ready for analysis.",
        image: '/service_imgs/data/dataware.webp',
        tags: ['Snowflake/BigQuery', 'Pipeline Automation', 'Data Lake', 'ETL Processes']
      },
      {
        title: 'Predictive Modeling & ML',
        description:
          "Stay two steps ahead of the market. Our data scientists build and deploy Machine Learning models for demand forecasting, fraud detection, and customer behavior prediction, integrating them directly into your existing business workflows.",
        image: '/service_imgs/data/pm.webp',
        tags: ['Scikit-learn / TensorFlow', 'Trend Analysis', 'Anomaly Detection', 'Neural Networks']
      },
      {
        title: 'Customer Analytics & Churn',
        description:
          "Understand your customers better than they know themselves. We analyze user lifecycles to identify high-value segments and use predictive churn modeling to tell you which customers are likely to leave, allowing for proactive retention.",
        image: '/service_imgs/data/ca.webp',
        tags: ['Segmentation', 'LTV Prediction', 'Behavioral Mapping', 'Retention Modeling']
      },
      {
        title: 'Big Data Engineering',
        description:
          "Manage massive datasets without breaking a sweat. We utilize technologies like Spark and Hadoop to process petabytes of data, providing the computational power needed for large-scale enterprise analytics and real-time streaming data.",
        image: '/service_imgs/data/big.webp',
        tags: ['Apache Spark', 'Kafka', 'Distributed Systems', 'Real-time Processing']
      },
      {
        title: 'Data Governance & Strategy',
        description:
          "Ensure your data is secure and compliant. We help organizations establish data governance frameworks, ensuring data quality, privacy (GDPR/HIPAA compliance), and a strategic roadmap for long-term data maturity.",
        image: '/service_imgs/data/datasec.webp',
        tags: ['GDPR Compliance', 'Master Data Mgmt', 'Security Audits', 'Data Roadmap']
      }
    ],

    process: {
      title: 'The CRISP-DM Analytics Lifecycle',
      image: '/service_imgs/data/crisp.webp',
      steps: [
        'Business Understanding: Defining objectives and success criteria for the data project.',
        'Data Acquisition: Gathering raw data from internal systems, APIs, and external sources.',
        'Data Preparation: Cleaning, transforming, and structuring data for optimal analysis.',
        'Modeling: Applying statistical techniques and ML algorithms to find patterns.',
        'Evaluation: Validating model accuracy against real-world business outcomes.',
        'Deployment: Integrating the solution into live production environments and dashboards.'
      ]
    },

    industries: [
      {
        name: 'Retail & E-commerce',
        icon: '📊',
        description: 'Optimizing inventory levels through demand forecasting and increasing sales with personalized recommendation engines.'
      },
      {
        name: 'Banking & Finance',
        icon: '🛡️',
        description: 'Implementing real-time fraud detection systems and algorithmic risk assessment for loan approvals.'
      },
      {
        name: 'Healthcare',
        icon: '🧬',
        description: 'Analyzing patient data for predictive diagnostics and optimizing hospital resource allocation.'
      },
      {
        name: 'Manufacturing',
        icon: '⚙️',
        description: 'Predictive maintenance for machinery to reduce downtime and optimizing supply chain logistics.'
      },
      {
        name: 'Logistics',
        icon: '🚚',
        description: 'Route optimization and real-time tracking analytics to reduce fuel costs and improve delivery times.'
      },
      {
        name: 'Telecommunications',
        icon: '📡',
        description: 'Analyzing network traffic patterns to prevent outages and identifying customer segments for targeted upselling.'
      }
    ]
},
{
    id: 'quality-assurance-software-testing',
    title: 'Quality Assurance & Software Testing',
    shortDescription:
      'Ensuring flawless digital experiences through rigorous manual testing, automated frameworks, and end-to-end performance audits.',
    image: '/service_imgs/SQA/SQA.webp',
    features: [
      'Automated Regression Testing', 
      'Performance & Load Testing', 
      'Security Vulnerability Scanning', 
      'API & Integration Testing'
    ],

    overview: {
      heading: 'Deliver Perfection with Every Deployment',
      description: `
At DevXoft, quality isn't just a checkpoint—it's our foundation. Our QA & Testing team integrates seamlessly into your development lifecycle to identify vulnerabilities, eliminate bottlenecks, and ensure your software performs flawlessly under real-world conditions.

From initial smoke tests to comprehensive automated suites, we provide a safety net that empowers your business to innovate faster without compromising on quality. We don't just find bugs; we partner with you to build better, more reliable software from the ground up.

With over 500+ successful project deployments and a 99.8% defect detection rate, DevXoft has become the trusted QA partner for businesses that refuse to compromise on excellence.
`,
      points: [
        {
          title: 'Zero-Defect Culture',
          text: 'Implementing shift-left testing strategies to catch and resolve issues early in the development cycle, reducing costs and accelerating time-to-market.'
        },
        {
          title: 'Optimized Performance',
          text: 'Ensuring your application remains lightning-fast and stable, even during peak traffic surges and high-demand scenarios.'
        },
        {
          title: 'Seamless User Experience',
          text: 'Rigorous UX testing to guarantee that every button, link, form, and transition works exactly as intended across all devices.'
        }
      ]
    },

    solutionCards: [
      {
        title: 'Test Automation',
        description:
          "Accelerate your release cycles with confidence. We build robust, maintainable automation frameworks using industry-leading tools like Selenium, Cypress, and Playwright that execute hundreds of test cases in minutes, ensuring stable and reliable deployments every time.",
        image: '/service_imgs/qa/automation.webp',
        tags: ['Selenium / Cypress', 'CI/CD Integration', 'Regression Suites', 'Script Maintenance']
      },
      {
        title: 'Performance & Load Testing',
        description:
          "Ensure your platform scales seamlessly. We simulate thousands of concurrent users using JMeter and Locust to identify performance bottlenecks, optimize server response times, and guarantee your system handles peak loads without breaking a sweat.",
        image: '/service_imgs/qa/performance.webp',
        tags: ['JMeter', 'Stress Testing', 'Scalability Analysis', 'Latency Optimization']
      },
      {
        title: 'Security & Penetration Testing',
        description:
          "Protect your business and your users. Our certified security experts conduct comprehensive vulnerability assessments and penetration testing to safeguard your platform against SQL injection, XSS attacks, data breaches, and unauthorized access.",
        image: '/service_imgs/qa/security.webp',
        tags: ['OWASP Top 10', 'Pen-Testing', 'Data Encryption', 'Compliance Checks']
      },
      {
        title: 'Mobile App Testing',
        description:
          "Flawless performance on every device, every time. We rigorously test across an extensive range of iOS and Android devices to ensure perfect compatibility, intuitive gesture responsiveness, optimal battery efficiency, and consistent user experience.",
        image: '/service_imgs/qa/mobile.webp',
        tags: ['Appium', 'Device Lab', 'Cross-Platform', 'OS Compatibility']
      },
      {
        title: 'API & Microservices Testing',
        description:
          "Ensure your systems communicate flawlessly. We validate data integrity, security, and performance across all internal and third-party API endpoints using Postman, Rest-Assured, and advanced contract testing methodologies.",
        image: '/service_imgs/qa/api.webp',
        tags: ['Postman', 'Contract Testing', 'Schema Validation', 'Mocking Services']
      },
      {
        title: 'Manual & Exploratory Testing',
        description:
          "The human touch for complex scenarios. Our experienced testers think like real users to uncover edge cases and usability issues that automated scripts might miss, ensuring a polished, production-ready final product.",
        image: '/service_imgs/qa/manual.webp',
        tags: ['UI/UX Audit', 'Edge Case Analysis', 'User Acceptance (UAT)', 'Bug Reporting']
      }
    ],

    process: {
      title: 'Our Quality Excellence Roadmap',
      image: '/service_imgs/qa/process.webp',
      steps: [
        'Requirement Analysis: Deep-dive into your business logic and defining a comprehensive, tailored test plan.',
        'Test Strategy: Designing specific test cases, selecting optimal tools, and establishing success metrics.',
        'Environment Setup: Configuring staging environments, test databases, and CI/CD pipelines for seamless testing.',
        'Execution: Running automated test scripts and conducting thorough manual test cycles across all scenarios.',
        'Defect Tracking: Detailed bug reporting with reproducible steps, priority classification, and verification of fixes.',
        'Final Sign-off: Delivering a comprehensive quality report with metrics, coverage analysis, and go-live confidence.'
      ]
    },

    industries: [
      { 
        name: 'FinTech', 
        icon: '💰', 
        description: 'Ensuring absolute security, regulatory compliance, and transaction accuracy for high-stakes financial platforms.' 
      },
      { 
        name: 'Healthcare', 
        icon: '🏥', 
        description: 'Validating HIPAA compliance, data privacy, and system reliability for critical patient care applications.' 
      },
      { 
        name: 'E-commerce', 
        icon: '🛒', 
        description: 'Testing checkout flows, payment gateways, and inventory systems to prevent revenue loss during peak sales events.' 
      },
      { 
        name: 'SaaS Platforms', 
        icon: '☁️', 
        description: 'Continuous testing and monitoring for rapidly evolving, mission-critical cloud-based software solutions.' 
      }
    ],

    whyChooseUs: {
      heading: 'Why Leading Companies Trust DevXoft',
      points: [
        {
          metric: '99.8%',
          label: 'Defect Detection Rate',
          description: 'Industry-leading accuracy in identifying critical bugs before production'
        },
        {
          metric: '500+',
          label: 'Projects Delivered',
          description: 'Successfully tested and deployed across diverse industries worldwide'
        },
        {
          metric: '40%',
          label: 'Faster Time-to-Market',
          description: 'Our automated testing frameworks accelerate your development cycles'
        },
        {
          metric: '24/7',
          label: 'Support Coverage',
          description: 'Round-the-clock monitoring and rapid response for mission-critical applications'
        }
      ]
    },

    callToAction: {
      heading: 'Ready to Launch with Confidence?',
      description: 'Partner with DevXoft to eliminate bugs, enhance performance, and deliver exceptional user experiences. Let\'s discuss how our QA expertise can transform your software quality.',
      primaryButton: 'Get a Free QA Audit',
      secondaryButton: 'Schedule a Consultation'
    }
},
{
  id: 'saas-product-engineering',
  title: 'SaaS & Product Engineering',
  shortDescription:
    'Designing, building, and scaling secure, multi-tenant SaaS platforms with modern architectures, subscription models, and cloud-native infrastructure.',
  image: '/service_imgs/SAAS/saas.webp',

  features: [
    'Multi-Tenant Architecture',
    'Subscription & Billing Systems',
    'Scalable Cloud Infrastructure',
    'Product Strategy & MVP Development'
  ],

  overview: {
    heading: 'Build Scalable SaaS Products That Grow With Your Business',
    description: `
At DevXoft, we engineer SaaS products that are built for long-term scalability, security, and performance. From early-stage MVPs to enterprise-grade platforms, our team transforms ideas into fully operational, revenue-generating software products.

We specialize in multi-tenant architectures, subscription-based systems, and cloud-native infrastructure that ensures high availability and seamless scalability. Our product engineering approach combines technical excellence with business strategy — helping you reduce time-to-market while maintaining a future-ready foundation.

With deep expertise in modern stacks, DevOps integration, and performance optimization, we create SaaS platforms that support rapid growth, global users, and evolving feature demands — without compromising reliability.
`,
    points: [
      {
        title: 'Product-First Engineering',
        text: 'We align technical architecture with your business model, ensuring your SaaS platform supports subscription logic, monetization, analytics, and future expansion from day one.'
      },
      {
        title: 'Scalable & Secure Architecture',
        text: 'Built using cloud-native principles, containerization, and microservices to ensure performance, high availability, and enterprise-grade security.'
      },
      {
        title: 'Faster MVP to Market',
        text: 'Lean development methodology that allows you to validate ideas quickly, gather user feedback, and iterate without rebuilding your foundation.'
      }
    ]
  },

  solutionCards: [
    {
      title: 'MVP & Product Development',
      description:
        "Launch faster with a strategically built Minimum Viable Product. We define core features, design scalable architecture, and develop high-performance web applications that are investor-ready and market-validated.",
      image: '/service_imgs/saas/mvp.webp',
      tags: ['Product Discovery', 'Wireframing', 'Rapid Development', 'Agile Sprints']
    },
    {
      title: 'Multi-Tenant SaaS Architecture',
      description:
        "We design efficient multi-tenant systems that securely manage multiple customers within a single application instance while ensuring strict data isolation and optimized resource utilization.",
      image: '/service_imgs/saas/multitenant.webp',
      tags: ['Tenant Isolation', 'Role-Based Access', 'Database Optimization', 'Scalable Design']
    },
    {
      title: 'Subscription & Billing Integration',
      description:
        "Seamless subscription management with recurring billing, payment gateway integration, invoicing systems, and usage-based pricing models to support sustainable revenue growth.",
      image: '/service_imgs/saas/billing.webp',
      tags: ['Stripe Integration', 'Recurring Payments', 'Usage Tracking', 'Invoice Automation']
    },
    {
      title: 'Cloud-Native Infrastructure',
      description:
        "We deploy SaaS platforms on scalable cloud environments with automated CI/CD pipelines, container orchestration, and infrastructure-as-code for reliability and cost optimization.",
      image: '/service_imgs/saas/cloud.webp',
      tags: ['AWS / Azure / GCP', 'Docker', 'Kubernetes', 'CI/CD Pipelines']
    },
    {
      title: 'API & Microservices Development',
      description:
        "Modular microservices architecture that allows independent scaling, easier maintenance, and seamless integration with third-party services and enterprise systems.",
      image: '/service_imgs/saas/microservices.webp',
      tags: ['REST / GraphQL', 'Service Communication', 'API Security', 'Scalable Modules']
    },
    {
      title: 'SaaS Performance & Optimization',
      description:
        "Continuous monitoring, load balancing, caching strategies, and database tuning to ensure high-speed performance even under rapid user growth.",
      image: '/service_imgs/saas/performance.webp',
      tags: ['Load Balancing', 'Caching Layers', 'Monitoring Tools', 'Database Indexing']
    }
  ],

  process: {
    title: 'Our SaaS Product Engineering Framework',
    image: '/service_imgs/saas/process.webp',
    steps: [
      'Product Discovery: Market research, feature validation, and defining your SaaS business model.',
      'Architecture Planning: Designing scalable system architecture and selecting the optimal tech stack.',
      'MVP Development: Agile-based development of core features with iterative testing.',
      'Cloud Deployment: Secure deployment using automated CI/CD and containerized environments.',
      'Scaling & Optimization: Performance tuning, infrastructure scaling, and monitoring setup.',
      'Continuous Improvement: Feature expansion, analytics integration, and long-term support.'
    ]
  },

  industries: [
    {
      name: 'Startups',
      icon: '🚀',
      description: 'Helping early-stage founders launch investor-ready SaaS products with scalable architecture and lean MVP strategies.'
    },
    {
      name: 'FinTech',
      icon: '💳',
      description: 'Building secure, compliant SaaS platforms with high-availability infrastructure and strict data protection.'
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Developing HIPAA-ready SaaS solutions with secure patient data handling and audit-ready systems.'
    },
    {
      name: 'Enterprise Solutions',
      icon: '🏢',
      description: 'Engineering internal SaaS platforms, dashboards, and automation systems for operational efficiency.'
    }
  ],

  whyChooseUs: {
    heading: 'Why Businesses Choose DevXoft for SaaS Development',
    points: [
      {
        metric: 'Scalable',
        label: 'Cloud-Native Architecture',
        description: 'Designed to handle growing user bases without system downtime or performance degradation.'
      },
      {
        metric: 'Agile',
        label: 'Rapid MVP Delivery',
        description: 'Structured sprint cycles that accelerate product validation and market entry.'
      },
      {
        metric: 'Secure',
        label: 'Enterprise-Grade Security',
        description: 'Implementation of best practices including encryption, access control, and secure DevOps pipelines.'
      },
      {
        metric: 'Long-Term',
        label: 'Product Partnership',
        description: 'We don’t just build and leave — we support scaling, optimization, and feature evolution.'
      }
    ]
  },

  callToAction: {
    heading: 'Ready to Launch Your SaaS Product?',
    description:
      'Partner with DevXoft to design, develop, and scale a high-performance SaaS platform built for long-term growth. Let’s turn your product vision into a scalable digital reality.',
    primaryButton: 'Start Your SaaS Project',
    secondaryButton: 'Book a Product Consultation'
  }
},
{
  id: "custom-software",
  title: "Custom Software Development",
  shortDescription: "Engineering bespoke digital solutions that transform your vision into scalable, high-performance applications tailored to your unique business needs.",
  features: ["Enterprise Applications", "Legacy Modernization", "Scalable Architecture", "Agile Development"],
  image: "/service_imgs/CS/Custom_software.webp",

  overview: {
    heading: "Your Vision, Our Code—Built to Last",
    description: `
At DevXoft, we don't believe in cookie-cutter solutions. Every business has unique challenges, and off-the-shelf software rarely fits perfectly. That's why we specialize in crafting custom software from the ground up—designed specifically around your workflows, goals, and growth trajectory.

Whether you're a startup disrupting an industry or an enterprise modernizing legacy systems, we build software that scales with you. Our engineering philosophy centers on clean code, modular architecture, and future-proof technology stacks that ensure your investment stands the test of time.

From concept to deployment and beyond, we become an extension of your team, delivering solutions that don't just meet requirements—they exceed expectations and drive measurable business value.
`,
    points: [
      {
        title: 'Tailored to Your DNA',
        text: 'We immerse ourselves in your business model to create software that aligns perfectly with your processes, not the other way around.'
      },
      {
        title: 'Scalability by Design',
        text: 'Built with microservices, cloud-native architecture, and elastic infrastructure to grow seamlessly from 100 to 100 million users.'
      },
      {
        title: 'Technology Agnostic Excellence',
        text: 'We choose the right tools for your needs—whether its  .NET, Java, Python, Node.js, or cutting-edge frameworks—never forcing a one-size-fits-all approach.'
      },
      {
        title: 'Ownership & Transparency',
        text: 'You own 100% of the code, documentation, and intellectual property. We work with complete transparency through Agile sprints and regular demos.'
      }
    ]
  },

  solutionCards: [
    {
      title: 'Enterprise Resource Planning (ERP) Systems',
      description: 'Unified platforms integrating finance, HR, inventory, and operations into one intelligent ecosystem that eliminates data silos and drives efficiency.',
      image: '/service_imgs/software/erp.webp',
      tags: ['SAP Integration', 'Multi-tenant SaaS', 'Real-time Analytics', 'Role-based Access']
    },
    {
      title: 'Customer Relationship Management (CRM)',
      description: 'Powerful CRM solutions that centralize customer interactions, automate sales pipelines, and provide 360° insights to boost conversions.',
      image: '/service_imgs/software/crm.webp',
      tags: ['Lead Scoring', 'Email Automation', 'AI Predictions', 'Mobile-first']
    },
    {
      title: 'Legacy System Modernization',
      description: 'Breathing new life into outdated applications through code refactoring, database migration, and cloud transformation without disrupting operations.',
      image: '/service_imgs/software/legacy.webp',
      position: 'object-top',
      tags: ['COBOL to Java', 'Monolith to Microservices', 'On-prem to Cloud', 'Zero Downtime']
    },
    {
      title: 'Workflow Automation & BPM',
      description: 'Intelligent automation engines that eliminate manual tasks, streamline approvals, and orchestrate complex business processes with precision.',
      image: '/service_imgs/software/automation.webp',
      tags: ['RPA Integration', 'Low-code Platforms', 'API Orchestration', 'Process Mining']
    },
    {
      title: 'Supply Chain & Logistics Software',
      description: 'End-to-end visibility platforms for inventory tracking, route optimization, vendor management, and predictive demand forecasting.',
      image: '/service_imgs/software/supply-chain.webp',
      tags: ['IoT Sensors', 'Blockchain Traceability', 'AI Routing', 'Real-time Tracking']
    },
    {
      title: 'Custom Dashboards & Analytics Portals',
      description: 'Data visualization powerhouses that transform raw data into actionable insights through interactive charts, KPIs, and predictive models.',
      image: '/service_imgs/software/dashboard.webp',
      tags: ['Power BI Embed', 'Tableau Integration', 'Real-time Streaming', 'Drill-down Reports']
    }
  ],

  process: {
    title: "The DevXoft Development Methodology",
    image: "/service_imgs/software/dev-process.webp",
    steps: [
      'Discovery & Requirements Engineering: Deep-dive workshops to understand pain points, stakeholders, and success metrics.',
      'Architecture & Design: Creating technical blueprints, database schemas, and UX wireframes with your approval at every stage.',
      'Agile Development Sprints: Building in 2-week iterations with continuous demos, feedback loops, and course corrections.',
      'Quality Assurance & Testing: Rigorous manual and automated testing including unit, integration, performance, and security audits.',
      'Deployment & DevOps: Seamless rollout with CI/CD pipelines, containerization, and rollback strategies for zero-risk launches.',
      'Post-Launch Support: Ongoing monitoring, bug fixes, feature enhancements, and dedicated support to ensure peak performance.'
    ]
  },

  industries: [
    {
      name: "Healthcare & Hospitals",
      icon: "🏥",
      description: "HIPAA-compliant patient management systems, telemedicine platforms, and AI-driven diagnostic tools."
    },
    {
      name: "Manufacturing & Industry 4.0",
      icon: "🏭",
      description: "Smart factory MES (Manufacturing Execution Systems), predictive maintenance, and quality control automation."
    },
    {
      name: "Logistics & Transportation",
      icon: "🚚",
      description: "Fleet management, route optimization, warehouse automation, and last-mile delivery tracking systems."
    },
    {
      name: "Finance & Banking",
      icon: "💰",
      description: "Core banking platforms, fraud detection engines, loan origination systems, and wealth management portals."
    },
    {
      name: "Education & E-Learning",
      icon: "📚",
      description: "Learning Management Systems (LMS), virtual classrooms, student information systems, and adaptive learning AI."
    },
    {
      name: "Retail & E-Commerce",
      icon: "🛒",
      description: "Omnichannel commerce platforms, inventory optimization, personalization engines, and loyalty programs."
    },
    {
      name: "Real Estate & PropTech",
      icon: "🏢",
      description: "Property management systems, tenant portals, smart building automation, and investment analysis tools."
    },
    {
      name: "Government & Public Sector",
      icon: "🏛️",
      description: "Citizen service portals, permit management, tax collection systems, and transparency dashboards."
    },
    {
      name: "Agriculture & AgriTech",
      icon: "🌾",
      description: "Farm management software, crop monitoring, precision agriculture, and supply chain traceability platforms."
    }
  ]
},

{
  id: "api-integration",
  title: "API Development & Integration",
  shortDescription: "Building the digital connective tissue that enables seamless communication between systems, applications, and third-party services.",
  features: ["RESTful APIs", "GraphQL", "Microservices", "Third-party Integration"],
  image: "/service_imgs/API/api.webp",

  overview: {
    heading: "The Invisible Infrastructure Powering Modern Business",
    description: `
In today's hyper-connected digital landscape, no system operates in isolation. APIs (Application Programming Interfaces) are the bridges that allow your software to talk to payment gateways, CRMs, shipping providers, social platforms, and countless other services that power your operations.

At DevXoft, we architect APIs that are not just functional—they're elegant, secure, and built for performance at scale. Whether you need to expose your data to partners through a public API, connect disparate internal systems, or integrate with third-party platforms like Stripe, Salesforce, or Google Maps, we deliver solutions that just work.

Our approach follows industry best practices including RESTful design, OAuth 2.0 security, comprehensive documentation, and rigorous testing to ensure your integrations are rock-solid and developer-friendly.
`,
    points: [
      {
        title: 'RESTful & GraphQL Mastery',
        text: 'We build APIs using modern standards—REST for simplicity and GraphQL for complex, nested queries—choosing the right tool for your use case.'
      },
      {
        title: 'Enterprise-Grade Integration',
        text: 'Seamlessly connecting ERPs, CRMs, payment processors, shipping carriers, and marketing platforms to create unified digital ecosystems.'
      },
      {
        title: 'Security-First Architecture',
        text: 'Implementing OAuth 2.0, JWT tokens, API keys, rate limiting, and encryption to protect against unauthorized access and DDoS attacks.'
      },
      {
        title: 'Documentation & Developer Experience',
        text: 'Creating OpenAPI (Swagger) specs, interactive sandbox environments, and SDK libraries that make integration effortless for developers.'
      }
    ]
  },

  solutionCards: [
    {
      title: 'Custom RESTful API Development',
      description: 'Building scalable, stateless REST APIs with proper HTTP methods, status codes, pagination, and filtering for optimal performance.',
      image: '/service_imgs/api/rest-api.webp',
      tags: ['JSON/XML', 'Versioning', 'HATEOAS', 'Caching']
    },
    {
      title: 'GraphQL API Design',
      description: 'Flexible, efficient APIs that let clients request exactly what they need—reducing over-fetching and improving mobile app performance.',
      image: '/service_imgs/api/graphql.webp',
      tags: ['Apollo Server', 'Schema Stitching', 'Real-time Subscriptions', 'DataLoader']
    },
    {
      title: 'Microservices Architecture',
      description: 'Breaking monolithic applications into independent, loosely-coupled services that can be developed, deployed, and scaled independently.',
      image: '/service_imgs/api/microservices.webp',
      position: 'object-center',
      tags: ['Docker', 'Kubernetes', 'Service Mesh', 'Event-driven']
    },
    {
      title: 'Payment Gateway Integration',
      description: 'Seamless integration with Stripe, PayPal, Square, and regional processors including PCI-DSS compliant tokenization and fraud prevention.',
      image: '/service_imgs/api/payment.webp',
      tags: ['Stripe Connect', 'Recurring Billing', 'Refund Automation', 'Multi-currency']
    },
    {
      title: 'Third-Party API Integration',
      description: 'Connecting your platform to external services like Google Maps, Twilio, SendGrid, Salesforce, Shopify, and hundreds of SaaS tools.',
      image: '/service_imgs/api/third-party.webp',
      tags: ['OAuth 2.0', 'Webhook Handling', 'Rate Limit Management', 'Error Retry Logic']
    },
    {
      title: 'API Gateway & Management',
      description: 'Centralized control layer for authentication, rate limiting, analytics, and routing across multiple backend services.',
      image: '/service_imgs/api/gateway.webp',
      tags: ['Kong', 'AWS API Gateway', 'Azure APIM', 'Traffic Shaping']
    }
  ],

  process: {
    title: "API Design & Integration Lifecycle",
    image: "/service_imgs/api/api-process.webp",
    steps: [
      'Requirements & Use Case Mapping: Identifying which systems need to talk, what data flows where, and security requirements.',
      'API Design & Contract Definition: Creating OpenAPI specifications, choosing REST vs GraphQL, and defining request/response schemas.',
      'Development & Testing: Building endpoints with proper error handling, implementing authentication, and writing comprehensive unit tests.',
      'Documentation & Sandbox: Generating interactive API docs with Swagger/Postman and providing test environments for developers.',
      'Security Hardening: Adding OAuth flows, rate limiting, input validation, and conducting penetration testing.',
      'Deployment & Monitoring: Setting up CI/CD pipelines, API gateways, logging, and real-time performance monitoring with alerts.'
    ]
  },

  industries: [
    {
      name: "E-Commerce & Marketplaces",
      icon: "🛍️",
      description: "Integrating payment gateways, shipping APIs, inventory sync, and multi-channel selling platforms like Amazon and eBay."
    },
    {
      name: "FinTech & Banking",
      icon: "💳",
      description: "Open banking APIs, payment initiation, account aggregation, and real-time transaction webhooks for financial apps."
    },
    {
      name: "SaaS & Cloud Platforms",
      icon: "☁️",
      description: "Public APIs for customer integrations, webhook systems for event notifications, and SSO authentication endpoints."
    },
    {
      name: "Healthcare & MedTech",
      icon: "⚕️",
      description: "HL7 FHIR APIs for patient data exchange, telemedicine integrations, and pharmacy/insurance claim processing."
    },
    {
      name: "Logistics & Delivery",
      icon: "📦",
      description: "Real-time tracking APIs, route optimization, carrier integrations (FedEx, UPS, DHL), and automated dispatch systems."
    },
    {
      name: "Travel & Hospitality",
      icon: "✈️",
      description: "Flight/hotel booking APIs, GDS integrations, payment processing, and dynamic pricing engines."
    },
    {
      name: "Media & Entertainment",
      icon: "🎬",
      description: "Video streaming APIs, content delivery networks (CDN), social media integrations, and subscription management."
    },
    {
      name: "Automotive & Mobility",
      icon: "🚗",
      description: "Telematics APIs, ride-hailing integrations, EV charging network connections, and fleet management systems."
    },
    {
      name: "PropTech & Smart Buildings",
      icon: "🏗️",
      description: "IoT device APIs for smart locks, HVAC control, energy monitoring, and tenant management portal integrations."
    }
  ]
}

]
