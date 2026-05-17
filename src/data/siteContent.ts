/**
 * ============================================================
 *  SITE CONTENT — EASY-EDIT CONFIGURATION
 * ============================================================
 *
 *  HOW TO CUSTOMIZE:
 *  1. Find the section you want to change below.
 *  2. Edit the text, URLs, or image paths.
 *  3. Save the file — changes appear immediately on reload.
 *
 *  IMAGE TIPS:
 *  - Replace any image URL with your own image URL.
 *  - For best results, use images at least 1200px wide for hero sections.
 *  - For project cards, use images at least 600px wide.
 *  - Supported formats: .jpg, .png, .webp, .svg
 *
 *  COLOR SCHEME:
 *  - Primary (dark blue): #01215b  → Tailwind class: bg-primary / text-primary
 *  - Accent (gold):       #fcbb24  → Tailwind class: bg-accent / text-accent
 *  - White:               #ffffff  → Tailwind class: bg-white / text-white
 * ============================================================
 */

export const siteConfig = {
  // ---- BUSINESS IDENTITY ----
  businessName: 'Community Tech Solutions',
  logo: 'images/C1.png',
  tagline: 'Tech Solutions With a Local Touch',
  phone: '(509) 416-6444',
  email: 'support@ctechsolution.tech',
  address: 'Grandview, WA 98930',

  // ---- SOCIAL LINKS ----
  // Replace # with your actual profile URLs
  social: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
  },

  // ---- FORMSPREE ----
  // Your Formspree form ID (found in your Formspree dashboard URL, e.g. https://formspree.io/f/xyzabcde)
  formspreeFormId: 'xqenellp',

  // ---- SEO ----
  seoTitle: 'Community Tech Solutions | Web Design & Tech Services',
  seoDescription:
    'Professional web design, IT solutions, and technology consulting. We build fast, modern websites and solve your tech problems.',
  seoKeywords:
    'web design, tech solutions, network troubleshooting, IT consulting, website development, internet troubleshooting',
};

// ---- NAVIGATION ----
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Why Is My Internet Slow?', path: '/internet-slow' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

// ---- HOME PAGE ----
export const homeContent = {
  hero: {
    headline: 'Community Tech Solutions',
    subheadline:
      'We design stunning websites and deliver smart tech solutions so you can focus on growing your small business.',
    ctaText: 'Get Started',
    ctaLink: '/contact',
    secondaryCtaText: 'Our Services',
    secondaryCtaLink: '/services',
    // Replace this URL with your own hero image (recommended: 1600x900px or larger)
    backgroundImage:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  // ---- CREDENTIALS ----
  // Edit the text below to update your credentials section on the home page
  credentials: {
    heading: 'Qualified & Certified',
    description: 'Backed by formal education and industry-recognized certifications so you can trust the quality of every project.',
    items: [
      {
        title: "Bachelor's in Information Technology",
        // Replace with your own icon name from lucide-react
        icon: 'GraduationCap',
      },
      {
        title: 'CompTIA Network+',
        icon: 'Network',
      },
      {
        title: 'CompTIA A+',
        icon: 'Cpu',
      },
      {
        title: 'CompTIA IT Operations Specialist',
        icon: 'Award',
      },
    ],
  },
  featuredServices: [
    {
      title: 'Web Design',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      // Replace with your own icon name from lucide-react or your own image
      icon: 'Monitor',
      demoLinks: [
         { label: 'Small Business Demo', url: 'https://cts-gv.github.io/local-bakery-demo/' },
         { label: 'Local Political Campaign Demo', url: 'https://cts-gv.github.io/candidate-demo' },         
      ],
    },
    {
      title: 'IT Solutions',
      description: 'Reliable tech support and infrastructure management for your small business.',
      icon: 'Settings',
    },
    {
      title: 'Internet Troubleshooting',
      description: 'Diagnose and fix slow internet issues to keep you connected.',
      icon: 'Wifi',
    },
    {
      title: 'Web Announcements',
      description: 'Custom announcement websites for weddings, Quinceaneras, pregnancies, and other special milestones. Share your news with a beautiful, personalized page.',
      icon: 'PartyPopper',
      // Add demo site links here. Each entry needs a label and a URL.
      demoLinks: [
         { label: 'Wedding Demo 1', url: 'https://cts-gv.github.io/wedding-announcement/' },
         { label: 'Wedding Demo 2', url: 'https://cts-gv.github.io/wedding-2/' },
         { label: 'Quinceanera Demo 1', url: 'https://ice-queen-dream-launch.lovable.app' },
         { label: 'Quinceanera Demo 2', url: 'https://elegant-quinceanera-xp81.bolt.host' },
         { label: 'Pregnancy Announcement Demo', url: 'https://cts-gv.github.io/baby-sample' },
      ],
    },
  ],
  testimonials: [
    {
      quote:
        'When our consulting business required reliable technology support, we turned to Community Tech Solutions—and it was an excellent decision. As a local provider, they responded quickly and resolved our technical challenges with efficiency and expertise. Their team is knowledgeable, responsive, and offers great value for the cost. I highly recommend Community Tech Support to any business looking for dependable and professional IT support.',
      author: 'Robert O.',
      role: 'Chairman of the Board, RGI Corporation',
    },
    {
      quote:
        'I hired Community Tech Solutions to get my business online, and the experience was seamless. Not only did they build a professional, functional WordPress site with all the features I needed, but they also took the time to help design a professional logo and to ensure my communication lines were open. From configuring contact forms to making sure my professional email worked perfectly on my phone, Community Tech Solutions handled the technical heavy lifting so I could focus on my customers. Highly recommended for anyone needing an all-in-one tech expert.',
      author: 'K.M.',
      role: 'Owner, Valley Refrigeration LLC',
    },
    {
      quote:
        'Community Tech Solutions has been an invaluable partner to our small business over the past two years. Jose has supported us in ordering and setting up new computers, troubleshooting a wide range of IT issues, implementing secure external file backups, and guiding our transition to fiber internet services. Jose is always prompt, friendly, and professional, and consistently explains technical issues in a way that’s easy to understand. We truly appreciate his reliable support and highly recommend his services to any business looking for trusted IT expertise.',
      author: 'Theresa Marmolejo, MPA',
      role: 'VP Operations/ Senior Evaluator, RGI Corporation',
    },
    {
      quote:
        'I didn`t realize how vulnerable an outdated router could make my home office until Community tech Solutions stepped in.  After my hardware reached its end -of-life, they guided me through the selection of a new high performance router that fits my home perfectly.  Professional, knowledgeable, and saved me hours of researcgh!',
      author: 'Andrea M.',
      role: 'Private Residence',
    },
  ],
};

// ---- WHY IS MY INTERNET SLOW PAGE ----
export const internetSlowContent = {
  hero: {
    headline: 'Why Is My Internet Slow?',
    subheadline:
      'Slow internet is frustrating. Here are the most common causes and what you can do about them.',
    // Replace with your own image (recommended: 1200x600px or larger)
    backgroundImage:
      'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  causes: [
    {
      title: 'Outdated Router or Modem',
      description:
        'If your equipment is more than 3-5 years old, it may not support current speed standards. Upgrading to a modern DOCSIS 3.1 modem or Wi-Fi 6 router can dramatically improve performance.',
      icon: 'Router',
    },
    {
      title: 'Too Many Connected Devices',
      description:
        'Every device on your network shares the same bandwidth. Smart TVs, phones, tablets, and IoT devices all compete for speed. Disconnect unused devices or upgrade your plan.',
      icon: 'Smartphone',
    },
    {
      title: 'Wi-Fi Interference',
      description:
        'Walls, appliances, and neighboring networks can interfere with your Wi-Fi signal. Try moving your router to a central, elevated location away from metal objects.',
      icon: 'Radio',
    },
    {
      title: 'ISP Throttling',
      description:
        'Some internet providers slow down your connection during peak hours or after you hit a data cap. Check your contract terms and consider switching providers if throttling is persistent.',
      icon: 'Gauge',
    },
    {
      title: 'Background Apps & Updates',
      description:
        'Automatic updates, cloud syncing, and background downloads can quietly consume bandwidth. Schedule large downloads for off-peak hours and pause auto-updates when you need speed.',
      icon: 'RefreshCw',
    },
    {
      title: 'Outdated Wiring or Connections',
      description:
        'Old coaxial cables, damaged Ethernet cables, or loose connections can degrade your signal. Inspect your cables and replace any that are frayed or older than five years.',
      icon: 'Cable',
    },
  ],
  cta: {
    headline: 'Still Having Internet Issues?',
    description:
      'Our tech experts can diagnose and fix your internet problems — often in a single visit. Get back to full speed.',
    buttonText: 'Schedule a Diagnosis',
    buttonLink: '/contact',
  },
};

// ---- ABOUT / MISSION PAGE ----
export const aboutContent = {
  hero: {
    headline: 'Our Mission',
    subheadline:
      'Empowering small businesses with technology that drives growth, efficiency, and peace of mind.',
    // Replace with your own image (recommended: 1200x600px or larger)
    backgroundImage:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  story: {
    title: 'Our Story',
    paragraphs: [
      'Community Tech Solutions began in a home office with a simple goal: to provide small businesses and residents with quality technology they deserve. My approach is entirely personal-I listen to your challenges first, then build custom solutions that actually fit your workflow.',
      'Operating from the same dedicated home office today, I serve as a focused technology partner for small businesses and residents in my community.',
      'I am passionate about making technlogy work for people, ensuring you get design and IT support with a direct line to the person doing the work.',
    ],
    // Replace with your own team/office image (recommended: 800x600px or larger)
    image:
      '/images/CommunityTechSolutions-Grandview-Prosser-Sunnyside-sm.png',
  },
  values: [
    {
      title: 'Client-First Approach',
      description: 'Your goals drive every decision we make. We measure success by your results, not our convenience.',
      icon: 'Heart',
    },
    {
      title: 'Transparent Communication',
      description: 'No jargon, no surprises. We explain what we do, why we do it, and what it costs — upfront.',
      icon: 'MessageSquare',
    },
    {
      title: 'Continuous Learning',
      description: 'Technology evolves fast. We invest in ongoing training so our solutions always reflect the latest best practices.',
      icon: 'BookOpen',
    },
    {
      title: 'Reliability',
      description: 'When we commit to a deadline or a deliverable, we deliver. You can count on us, every time.',
      icon: 'Shield',
    },
  ],
   team: [
    {
      name: 'Alex Morgan',
      role: 'Founder & Lead Developer',
      // Replace with team member photo (recommended: 400x400px square)
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Jordan Lee',
      role: 'UI/UX Designer',
      image:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sam Rivera',
      role: 'IT Solutions Architect',
      image:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ],
 };

// ---- SERVICES PAGE ----
export const servicesContent = {
  hero: {
    headline: 'Our Services',
    subheadline:
      'From stunning websites to reliable IT support, we offer everything your business needs to thrive in the digital world.',
    // Replace with your own image (recommended: 1200x600px or larger)
    backgroundImage:
      '/images/custom-web-design.png',
  },
  services: [
    {
      title: 'Custom Website Design',
      description:
        'Websites built from scratch to match your brand, goals, and audience. Every site is mobile-responsive, fast-loading, and SEO-optimized.',
      features: [
        'Mobile-first responsive design',
        'SEO-optimized structure',
        'Budget friendly websites',
        'Custom branding and UI',
      ],
      icon: 'Layout',
      // ============================================================
      // CHANGE THIS IMAGE: Replace the path below with your own photo
      // for the Custom Website Design service card.
      // - Use a local path like 'images/your-photo.jpg' (place the
      //   file in the /images folder)
      // - Or use a full URL like 'https://example.com/photo.jpg'
      // - Recommended size: 800x600px or larger
      // - Set to '' (empty string) to show the default icon instead
      // ============================================================
      image: '/images/custom-web-design.png',
    },
    {
      title: 'Announcement Websites',
      description:
        'Beautiful, personalized websites for weddings, Quinceaneras, pregnancies, and other special milestones. Share your news your way.',
      features: [
        'Custom design for your event',
        'RSVP and guest management',
        'Photo galleries and timelines',
        'Easy sharing via link or QR code',
      ],
      icon: 'PartyPopper',
      // ============================================================
      // CHANGE THIS IMAGE: Replace the path below with your own photo
      // for the Announcement Websites service card.
      // - Use a local path like 'images/your-photo.jpg' (place the
      //   file in the /images folder)
      // - Or use a full URL like 'https://example.com/photo.jpg'
      // - Recommended size: 800x600px or larger
      // - Set to '' (empty string) to show the default icon instead
      // ============================================================
      image: '/images/announcement-web-design.png',
    },
    {
      title: 'IT Consulting & Support',
      description:
        'Strategic technology guidance and hands-on support. We help you choose the right tools and keep them running smoothly.',
      features: [
        'Technology audits',
        'Infrastructure planning',
        'Digital growth support',
        'Emergency troubleshooting',
      ],
      icon: 'Settings',
      // ============================================================
      // CHANGE THIS IMAGE: Replace the path below with your own photo
      // for the IT Consulting & Support service card.
      // - Use a local path like 'images/your-photo.jpg' (place the
      //   file in the /images folder)
      // - Or use a full URL like 'https://example.com/photo.jpg'
      // - Recommended size: 800x600px or larger
      // - Set to '' (empty string) to show the default icon instead
      // ============================================================
      image: '/images/it-consulting-support.png',
    },
    {
      title: 'Internet & Network Solutions',
      description:
        'Diagnose and resolve slow internet, Wi-Fi dead zones, and network reliability issues for your home or office.',
      features: [
        'Speed diagnostics',
        'Network optimization',
        'Wi-Fi coverage mapping',
        'Router & modem setup',
      ],
      icon: 'Wifi',
      // ============================================================
      // CHANGE THIS IMAGE: Replace the path below with your own photo
      // for the Internet & Network Solutions service card.
      // - Use a local path like 'images/your-photo.jpg' (place the
      //   file in the /images folder)
      // - Or use a full URL like 'https://example.com/photo.jpg'
      // - Recommended size: 800x600px or larger
      // - Set to '' (empty string) to show the default icon instead
      // ============================================================
      image: '/images/network-solutions.png',
    },
  ],
  cta: {
    headline: 'Ready to Get Started?',
    description: 'Tell us about your project and we will provide a free consultation and quote.',
    buttonText: 'Request a Free Quote',
    buttonLink: '/contact',
  },
};

// ---- CONTACT PAGE ----
export const contactContent = {
  hero: {
    headline: 'Get In Touch',
    subheadline:
      'Have a project in mind or a tech problem to solve? We would love to hear from you. Reach out and we will respond within 24 hours.',
  },
  formLabels: {
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    service: 'Service Interested In',
    message: 'Your Message',
    submit: 'Send Message',
  },
  serviceOptions: [
    'Custom Website Design',
    'Announcement Website',
    'IT Consulting & Support',
    'Internet & Network Solutions',
    'Other',
  ],
};

// ---- LEGAL PAGES ----
// These pages are text-only and lightly themed.
// Edit the content below to update each legal page.
// Use \\n\\n for paragraph breaks (they render as separate <p> tags).

export const legalPages = {
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'April 30, 2026',
    sections: [
      {
        heading: 'Service Overview: What You Need to Know',
        body: 'At Community Tech Solutions, we want to get your technology back on track as safely and quickly as possible. To ensure a smooth experience, please keep these three key points in mind:\n\nData is Your Responsibility: You must back up your files (photos, documents, etc.) before we begin work. While we take every precaution, we are not liable for data loss or hardware failure during Service.\n\nOptional Backup Service: If you don\'t have a backup or aren\'t sure how to make one, we can do it for you for a small fee. Just let us know before we start!\n\nLimited Liability: Our total liability for any service is limited to the amount you paid for that specific project. We are not responsible for "consequential" losses like lost business time or profits.',
      },
      {
        heading: '1. SERVICES & ACCESS',
        body: 'Scope: Provider agrees to perform technical support, consultation, and network services as described in the mutually agreed-upon Scope of Work (Exhibit A) provided at the time of service.\n\nAccess: Client shall provide safe, clear access to all devices and work areas. For on-site services, the Client or a designated representative must be present at all times.\n\nSoftware: Client is responsible for providing all necessary software licenses and product keys. Provider will not install unlicensed or pirated software.',
      },
      {
        heading: '2. DATA BACKUP RESPONSIBILITY (MANDATORY)',
        body: 'Client Responsibility: The Client is solely responsible for ensuring all data, software, and systems are adequately backed up before work begins.\n\nDisclaimer: Provider is not responsible for any data loss, corruption, or hardware failure occurring before, during, or after services.\n\nOptional Backup Service: If requested, Provider can perform a backup for an additional fee. This involves transferring data to an external storage device provided by the Client.\n\nHardware Procurement: If the Client requests that the Provider supply the backup storage device, the client agrees to pay the cost of the hardware plus a 20% procurement fee.\n\nNo Hardware Warranty: All hardware provided by the Provider is sold "as-is." Provider expressly disclaims all warranties, express or implied. Any hardware failure is subject only to the original manufacturer\'s warranty, and the Provider is not responsible for facilitating warranty claims.\n\nLiability Shield for Media Failure: Provider shall not be held liable for the failure of any storage media (e.g., external hard drives, thumb drives, or SSDs), regardless of whether the device was provided by the Client or procured by the Provider.\n\nVerification: If a backup is performed by Provider, the Client must verify the data is successful before further work proceeds. Client\'s verification constitutes final acceptance of responsibility for that data.',
      },
      {
        heading: '3. LIMITATION OF LIABILITY (THE "CAP")',
        body: '"As-Is" Service: While Provider uses commercially reasonable efforts, there is no guarantee that all issues will be resolved or that services will be error-free.\n\nNo Consequential Damages: Provider shall not be liable for any indirect or incidental damages, including but not limited to lost data, lost profits, or business interruption.\n\nDirect Damages Cap: Provider\'s total cumulative liability for any claim arising out of this Agreement—including any physical damage to Client\'s hardware or property—shall not exceed the total fees actually paid by the Client to the Provider for the specific project or service giving rise to the claim.\n\nHardware: Provider is not liable for pre-existing hardware failures that manifest during service (e.g., a failing drive that ceases to function during a diagnostic scan).',
      },
      {
        heading: '4. PAYMENT & CANCELLATION',
        body: 'Billing: Services are billed at the rate specified in the Fee Schedule (Exhibit B), provided at the time of service.\n\nCancellation: Client must provide at least 24 hours\' notice for cancellations or may be subject to a cancellation fee.\n\nGoverning Law: This agreement is governed by the laws of the State of Washington.',
      },
      {
        heading: 'LEGAL COMPLIANCE & REPORTING ADDENDUM',
        body: 'Mandatory Federal Reporting (CSAM):\n\nPursuant to federal law (18 U.S.C. § 2258A), Community Tech Solutions is a mandatory reporter of Child Sexual Abuse Material (CSAM). If such material is encountered during the course of technical service, we are legally required to stop all work and report the findings to the National Center for Missing & Exploited Children (NCMEC) and/or appropriate law enforcement. Vulnerable Adults & Children (Washington State):\n\nIn accordance with Washington State Law (RCW 74.34.035 and RCW 26.44.030), Community Tech Solutions operates as a permissive reporter.  We reserve the right to report any suspected abandonment, abuse, financial exploitation, or neglect of a child or vulnerable adult encountered during service to the Washington Department of Social Health Services (DSHS) or law enforcement.  Work Stoppage & Termination:\n\nThe discovery of illegal material or evidence of crimanl activity will result in teh immediate termination of services.  In such an event, Client remains liable for all work performed up to the point of termination, and any prepaid fees for uncompleted work shall be non-refundable',
      },
    ],
  },
  privacy: {
    title: 'Privacy Notice',
    lastUpdated: 'April 30, 2026',
    sections: [
      {
        heading: '1. Information We Collect',
        body: 'We collect information you provide directly, such as your name, email, phone number, and project details when you contact us or request a quote. We also collect standard technical information when you visit our website, including IP address, browser type, and pages visited.',
      },
      {
        heading: '2. How We Use Your Information',
        body: 'We use the information we collect to provide and improve our services, communicate with you about projects, send relevant updates, and comply with legal obligations. We do not sell your personal information to third parties. We collect only the minimum amount of data necessary to provide technical support and manage your account.',
      },
      {
        heading: '3. Information Sharing',
        body: 'We may share your information only as necessary to provide our services (e.g., with hosting providers or subcontractors working on your project), or when required by law. All third parties are bound by confidentiality obligations.',
      },
      {
        heading: '4. Data Security',
        body: 'We implement reasonable technical and organizational measures to protect your information. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.',
      },
      {
        heading: '5. Your Rights',
        body: 'You may request access to, correction of, or deletion of your personal information at any time by contacting us. We will respond to such requests within 30 days.',
      },
      {
        heading: '6. Cookies',
        body: 'Our website may use cookies and similar technologies to improve your browsing experience. You can control cookie settings through your browser preferences.',
      },
      {
        heading: '7. Changes to This Notice',
        body: 'We may update this Privacy Notice periodically. The updated version will be posted on our website with a revised "last updated" date. We encourage you to review this page periodically.',
      },
      {
        heading: '8. Contact',
        body: 'For privacy-related questions, contact us at hr@ctechsolution.tech.',
      },
      {
        heading: '9. Washington State Supplemental Notice',
        body: 'For information regarding "Consumer Health Data" (including biometric data like FaceID setup), please see our standalone Consumer Health Data Privacy Policy.',
      },
    ],
  },
  consumerHealthData: {
    title: 'Consumer Health Data Privacy',
    lastUpdated: 'April 30, 2026',
    sections: [
      {
        heading: '1. Overview',
        body: 'This Consumer Health Data Privacy policy describes how Community Tech Solutions handles consumer health data in compliance with applicable state laws, including the Washington My Health My Data Act and similar legislation.',
      },
      {
        heading: '2. What Is Consumer Health Data',
        body: 'Consumer health data includes information that identifies a consumer and relates to their physical or mental health, the provision of health care, or payment for health care. This includes data linked or linkable to a consumer that is collected in the course of a consumer interacting with a health-related service.',
      },
      {
        heading: '3. Our Collection and Use',
        body: 'Community Tech Solutions is a technology services company. We do not collect, process, or store consumer health data as part of our standard business operations. Our services (web design, IT support, network troubleshooting) do not involve health-related data collection.',
      },
      {
        heading: '4. If Health Data Is Incidentally Collected',
        body: 'In the unlikely event that any information you provide to us could be classified as consumer health data, we will: (a) collect only what is strictly necessary, (b) use it only for the purpose you provided it, (c) not sell or share it without your explicit consent, and (d) delete it upon your request.',
      },
      {
        heading: '5. Your Rights',
        body: 'You have the right to: access any consumer health data we hold about you, request deletion of that data, withdraw consent for its use, and opt out of any processing. To exercise these rights, contact us using the information below.',
      },
      {
        heading: '6. Data Retention',
        body: 'We do not retain consumer health data beyond what is necessary for the purpose it was provided. Upon request, we will delete any such data within 45 days.',
      },
      {
        heading: '7. Contact',
        body: 'For questions about consumer health data privacy, contact us at hr@ctechsolution.tech.',
      },
    ],
  },
};
