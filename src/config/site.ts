/**
 * Achyuta Matrimony — single place to edit all content, links and prices.
 * Every text string exists in Telugu (te) and English (en).
 */

export type Lang = "te" | "en";

export const site = {
  brand: {
    te: "అచ్యుత",
    en: "MATRIMONY",
    fullEn: "Achyuta Matrimony",
  },

  // Google Form URL for profile registration
  registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScN03ftbUtwwR6c2k-uEQWysSBkVn5cEKnXoWtuZHX5RAJ8GA/viewform",


  // TODO: replace with your WhatsApp Business number (country code, no + or spaces)
  whatsappNumber: "918121052040",
  whatsappMessage: "Hello Achyuta Matrimony, I would like to know more about your matrimony services.",

  phone: "+91 81210 52040",
  email: "hello@achyutamatrimony.com",
  instagramUrl: "https://instagram.com/",
  facebookUrl: "https://facebook.com/",
} as const;

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

const te = {
  langLabel: "English",
  nav: [
    { label: "హోమ్", href: "#home" },
    { label: "మా గురించి", href: "#about" },
    { label: "ఎలా పనిచేస్తుంది", href: "#how" },
    { label: "మెంబర్‌షిప్", href: "#membership" },
    { label: "FAQ", href: "#faq" },
    { label: "సంప్రదించండి", href: "#contact" },
  ],
  cta: {
    register: "ప్రొఫైల్ నమోదు చేసుకోండి",
    registerShort: "ప్రొఫైల్ నమోదు",
    whatsapp: "WhatsApp లో మాట్లాడండి",
    whatsappAlt: "WhatsApp ద్వారా సంప్రదించండి",
    choosePlan: "ఈ ప్లాన్ ఎంచుకోండి",
    menu: "మెనూ",
  },
  hero: {
    eyebrow: "Telugu Matrimony Service",
    srTitle: "అచ్యుత మ్యాట్రిమోనీ — తెలుగు కుటుంబాల కోసం వివాహ పరిచయ వేదిక",
    line1: "తెలుగు కుటుంబాల కోసం నమ్మకమైన",
    line2: "వివాహ పరిచయ వేదిక",
    sub: "మీ జీవిత భాగస్వామి కోసం సరైన పరిచయం — మీ కుటుంబంతో కలిసి వెతుకుతాం.",
    region: "ఆంధ్రప్రదేశ్, తెలంగాణ మరియు ప్రవాస తెలుగు కుటుంబాల కోసం.",
  },
  about: {
    eyebrow: "Our approach",
    title: "వివాహం ఒక కుటుంబ నిర్ణయం. సరైన పరిచయం ఒక మంచి ప్రారంభం.",
    p1: "అచ్యుత మ్యాట్రిమోనీ కుటుంబ ప్రమేయాన్ని గౌరవిస్తుంది. మీరు నమోదు చేసిన తర్వాత మా బృందం మీతో ఫోన్‌లో మాట్లాడి, మీ కుటుంబ నేపథ్యం, అభిరుచులు మరియు ఆశయాలను తెలుసుకుంటుంది.",
    p2: "తర్వాత ప్రతి సంబంధాన్ని మేము స్వయంగా పరిశీలించి, అనుకూలంగా అనిపించినప్పుడు మాత్రమే మీ దృష్టికి తీసుకువస్తాం. తొందర లేదు, ఒత్తిడి లేదు.",
    imgAlt: "ఇంట్లో కలిసి కూర్చుని సంబంధం గురించి మాట్లాడుకుంటున్న తెలుగు కుటుంబం",
  },
  who: {
    eyebrow: "Who can register",
    title: "ఎవరు ప్రొఫైల్ నమోదు చేయవచ్చు?",
    items: [
      "మీ కోసం",
      "మీ కుమారుడు / కుమార్తె కోసం",
      "మీ సోదరుడు / సోదరి కోసం",
      "మీ కుటుంబ సభ్యుల కోసం",
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "ఎలా పనిచేస్తుంది",
    steps: [
      { no: "01", title: "ప్రొఫైల్ నమోదు", body: "మీ వివరాలను సులభంగా నమోదు చేయండి." },
      {
        no: "02",
        title: "వివరాల పరిశీలన",
        body: "మా బృందం మీతో మాట్లాడి వివరాలను తెలుసుకుంటుంది.",
      },
      {
        no: "03",
        title: "సరైన పరిచయాలు",
        body: "మీ అవసరాలు మరియు కుటుంబ అభిరుచులకు సరిపోయే సంబంధాలను పరిశీలిస్తాం.",
      },
      {
        no: "04",
        title: "కుటుంబాల పరిచయం",
        body: "అనుకూలమైన పరిచయం ఉన్నప్పుడు కుటుంబాలతో సంప్రదింపులు ఏర్పరుస్తాం.",
      },
    ],
  },
  why: {
    eyebrow: "Why Achyuta",
    title: "ఎందుకు అచ్యుత?",
    points: [
      {
        title: "తెలుగు కుటుంబాలపై దృష్టి",
        body: "ఆంధ్రప్రదేశ్, తెలంగాణ మరియు ప్రవాస తెలుగు కుటుంబాల కోసం మాత్రమే మా సేవ.",
      },
      {
        title: "వ్యక్తిగత శ్రద్ధతో మ్యాచింగ్",
        body: "ప్రతి సంబంధాన్ని మా బృందం స్వయంగా పరిశీలించి సూచిస్తుంది.",
      },
      {
        title: "కుటుంబ అభిరుచులకు ప్రాధాన్యం",
        body: "కులం, గోత్రం, ప్రాంతం, విద్య, ఉద్యోగం — మీ ప్రాధాన్యతలను గౌరవిస్తాం.",
      },
      {
        title: "సరళమైన మరియు వ్యక్తిగత సేవ",
        body: "యాప్‌లు, గందరగోళం లేదు. ఫోన్ మరియు వాట్సాప్ ద్వారా నేరుగా మాట్లాడతాం.",
      },
      {
        title: "గోప్యతకు ప్రాధాన్యం",
        body: "మీ వివరాలను మీ అనుమతి లేకుండా బహిర్గతం చేయము.",
      },
    ],
  },
  membership: {
    eyebrow: "Membership",
    title: "మెంబర్‌షిప్",
    sub: "ప్రస్తుతం 6 నెలల మెంబర్‌షిప్ అందుబాటులో ఉంది. పూర్తి నిబంధనలను చెల్లింపుకు ముందు మేము వివరిస్తాం.",
    note: "మీరు ఎంచుకున్న తర్వాత మేము ఫోన్‌లో మాట్లాడి మెంబర్‌షిప్ వివరాలు తెలియజేస్తాం.",
    plans: [
      {
        name: "బేసిక్",
        tag: "Basic",
        duration: "6 నెలల మెంబర్‌షిప్",
        price: "₹999",
        highlight: false,
        benefits: [
          "ప్రొఫైల్ నమోదు మరియు వివరాల పరిశీలన",
          "మా బృందం ద్వారా సంబంధాల సూచనలు",
          "వాట్సాప్ ద్వారా సంప్రదింపులు",
        ],
      },
      {
        name: "ప్రీమియం",
        tag: "Premium",
        duration: "6 నెలల మెంబర్‌షిప్",
        price: "₹1,999",
        highlight: true,
        benefits: [
          "బేసిక్‌లోని అన్ని సేవలు",
          "ప్రాధాన్యతతో వ్యక్తిగత మ్యాచింగ్ శ్రద్ధ",
          "కుటుంబాల మధ్య పరిచయం ఏర్పాటు",
        ],
      },
    ],
  },
  register: {
    title: "మీ కుటుంబం కోసం ప్రొఫైల్ నమోదు చేసుకోండి",
    sub: "మీ ప్రాథమిక వివరాలను నమోదు చేయండి. మా బృందం మిమ్మల్ని సంప్రదిస్తుంది.",
    privacy: "మీ వివరాలను బాధ్యతతో నిర్వహించేందుకు మేము కట్టుబడి ఉన్నాము.",
  },
  stories: {
    eyebrow: "Success stories",
    title: "త్వరలో అచ్యుత కుటుంబాల విజయ కథలు",
    sub: "నిజమైన కుటుంబాల అనుభవాలను వారి అనుమతితో మాత్రమే ఇక్కడ పంచుకుంటాం.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "తరచుగా అడిగే ప్రశ్నలు",
    items: [
      {
        q: "అచ్యుత మ్యాట్రిమోనీ అంటే ఏమిటి?",
        a: "అచ్యుత మ్యాట్రిమోనీ తెలుగు కుటుంబాల కోసం ఏర్పాటైన వివాహ పరిచయ సేవ. మా బృందం మీతో నేరుగా మాట్లాడి, మీ అవసరాలకు సరిపోయే సంబంధాలను పరిశీలించి సూచిస్తుంది.",
      },
      {
        q: "ఎవరు ప్రొఫైల్ నమోదు చేయవచ్చు?",
        a: "వధూవరులు స్వయంగా, లేదా వారి తల్లిదండ్రులు, సోదరులు, సోదరీమణులు మరియు కుటుంబ సభ్యులు నమోదు చేయవచ్చు.",
      },
      {
        q: "నా కుమారుడు / కుమార్తె కోసం నేను నమోదు చేయవచ్చా?",
        a: "అవును. చాలా మంది తల్లిదండ్రులే నమోదు చేస్తారు. మేము మీతోనే మాట్లాడతాం.",
      },
      {
        q: "ప్రొఫైల్ ఎలా నమోదు చేయాలి?",
        a: "ఈ పేజీలోని “ప్రొఫైల్ నమోదు చేసుకోండి” బటన్ ద్వారా ప్రాథమిక వివరాలు ఇవ్వండి. లేదా వాట్సాప్‌లో సందేశం పంపండి — మేము మిమ్మల్ని సంప్రదిస్తాం.",
      },
      {
        q: "మ్యాచింగ్ ఎలా జరుగుతుంది?",
        a: "మీ వివరాలు, కుటుంబ నేపథ్యం మరియు ప్రాధాన్యతలను తెలుసుకున్న తర్వాత, మా వద్ద ఉన్న సంబంధాలలో అనుకూలమైన వాటిని పరిశీలించి మీకు తెలియజేస్తాం.",
      },
      {
        q: "మ్యాచింగ్ వ్యక్తిగతంగా చేస్తారా?",
        a: "అవును. ఆటోమేటిక్ సూచనలు కాకుండా, మా బృందం స్వయంగా పరిశీలించి సూచిస్తుంది.",
      },
      {
        q: "మెంబర్‌షిప్ ఎంతకాలం ఉంటుంది?",
        a: "ప్రస్తుతం మెంబర్‌షిప్ 6 నెలల కాలానికి అందుబాటులో ఉంది. పూర్తి నిబంధనలను చెల్లింపుకు ముందు వివరిస్తాం.",
      },
      {
        q: "చెల్లింపు ఎలా చేయాలి?",
        a: "మీరు నమోదు చేసిన తర్వాత మేము ఫోన్‌లో మాట్లాడి, మెంబర్‌షిప్ వివరాలు తెలిపి, చెల్లింపు విధానాన్ని తెలియజేస్తాం.",
      },
      {
        q: "నా వివరాలు గోప్యంగా ఉంటాయా?",
        a: "మీ వివరాలను బాధ్యతతో నిర్వహిస్తాం. మీ అనుమతి లేకుండా ఇతర కుటుంబాలతో పంచుకోము.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "సంప్రదించండి",
    sub: "ఏ సందేహమైనా నేరుగా మాట్లాడండి. మేము తెలుగులోనే మాట్లాడతాం.",
    phone: "ఫోన్",
    email: "ఇమెయిల్",
    social: "సోషల్ మీడియా",
  },
  footer: {
    tagline: "తెలుగు కుటుంబాల కోసం వివాహ పరిచయ సేవ. హైదరాబాద్, తెలంగాణ.",
    links: [
      { label: "గోప్యతా విధానం", href: "/privacy" },
      { label: "నిబంధనలు", href: "/terms" },
      { label: "రీఫండ్ విధానం", href: "/refund" },
      { label: "సంప్రదించండి", href: "#contact" },
    ],
  },
};

const en: typeof te = {
  langLabel: "తెలుగు",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "How it works", href: "#how" },
    { label: "Membership", href: "#membership" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  cta: {
    register: "Register a profile",
    registerShort: "Register",
    whatsapp: "Talk on WhatsApp",
    whatsappAlt: "Contact us on WhatsApp",
    choosePlan: "Choose this plan",
    menu: "Menu",
  },
  hero: {
    eyebrow: "Telugu Matrimony Service",
    srTitle: "Achyuta Matrimony — a matrimonial service for Telugu families",
    line1: "A trusted matrimonial service",
    line2: "for Telugu families",
    sub: "The right introduction for your life partner — we look together with your family.",
    region: "For families in Andhra Pradesh, Telangana and Telugu families abroad.",
  },
  about: {
    eyebrow: "Our approach",
    title: "Marriage is a family decision. The right introduction is a good beginning.",
    p1: "Achyuta Matrimony respects the family's role. After you register, our team speaks with you on the phone to understand your family background, preferences and expectations.",
    p2: "We then review every proposal ourselves and bring it to you only when it genuinely suits you. No rush, no pressure.",
    imgAlt: "A Telugu family sitting together at home, looking at a proposal",
  },
  who: {
    eyebrow: "Who can register",
    title: "Who can register a profile?",
    items: ["For yourself", "For your son or daughter", "For your brother or sister", "For a family member"],
  },
  how: {
    eyebrow: "How it works",
    title: "How it works",
    steps: [
      { no: "01", title: "Register a profile", body: "Share your details in a few simple steps." },
      { no: "02", title: "We speak with you", body: "Our team calls you and understands your details." },
      {
        no: "03",
        title: "Suitable introductions",
        body: "We look for proposals that match your needs and your family's preferences.",
      },
      {
        no: "04",
        title: "Families connect",
        body: "When a proposal suits you, we arrange the conversation between the families.",
      },
    ],
  },
  why: {
    eyebrow: "Why Achyuta",
    title: "Why Achyuta?",
    points: [
      {
        title: "Focused on Telugu families",
        body: "Our service is only for families from Andhra Pradesh, Telangana and Telugu families living elsewhere.",
      },
      {
        title: "Matching with personal attention",
        body: "Every proposal is reviewed by our team before we suggest it.",
      },
      {
        title: "Family preferences respected",
        body: "Caste, gotra, region, education, profession — your preferences guide our search.",
      },
      {
        title: "Simple and personal service",
        body: "No apps, no confusion. We speak with you directly by phone and WhatsApp.",
      },
      {
        title: "Privacy first",
        body: "We do not share your details with anyone without your permission.",
      },
    ],
  },
  membership: {
    eyebrow: "Membership",
    title: "Membership",
    sub: "A 6-month membership is currently available. We explain the full terms before any payment.",
    note: "Once you choose a plan, we call you and explain the membership details.",
    plans: [
      {
        name: "Basic",
        tag: "Basic",
        duration: "6-month membership",
        price: "₹999",
        highlight: false,
        benefits: [
          "Profile registration and detail review",
          "Proposal suggestions from our team",
          "Communication over WhatsApp",
        ],
      },
      {
        name: "Premium",
        tag: "Premium",
        duration: "6-month membership",
        price: "₹1,999",
        highlight: true,
        benefits: [
          "Everything in Basic",
          "Priority personal attention on matching",
          "We arrange introductions between families",
        ],
      },
    ],
  },
  register: {
    title: "Register a profile for your family",
    sub: "Share your basic details. Our team will contact you.",
    privacy: "We are committed to handling your details responsibly.",
  },
  stories: {
    eyebrow: "Success stories",
    title: "Stories from Achyuta families, coming soon",
    sub: "We will share real family experiences here only with their permission.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "What is Achyuta Matrimony?",
        a: "Achyuta Matrimony is a matrimonial introduction service for Telugu families. Our team speaks with you directly and suggests proposals that suit your requirements.",
      },
      {
        q: "Who can register a profile?",
        a: "The bride or groom can register themselves, or parents, brothers, sisters and other family members can register on their behalf.",
      },
      {
        q: "Can I register for my son or daughter?",
        a: "Yes. Most registrations come from parents, and we speak with you directly.",
      },
      {
        q: "How do I register a profile?",
        a: "Use the “Register a profile” button on this page to share your basic details, or message us on WhatsApp and we will contact you.",
      },
      {
        q: "How does matching work?",
        a: "Once we understand your details, family background and preferences, we review the proposals we have and share the suitable ones with you.",
      },
      {
        q: "Is matching done personally?",
        a: "Yes. Instead of automatic suggestions, our team reviews each proposal themselves.",
      },
      {
        q: "How long does the membership last?",
        a: "The membership is currently offered for a 6-month period. Full terms are explained before payment.",
      },
      {
        q: "How do I make the payment?",
        a: "After you register, we call you, explain the membership details and share the payment method.",
      },
      {
        q: "Will my details stay private?",
        a: "We handle your details responsibly and do not share them with other families without your permission.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact us",
    sub: "Speak with us directly about any question. We are happy to talk in Telugu or English.",
    phone: "Phone",
    email: "Email",
    social: "Social",
  },
  footer: {
    tagline: "A matrimonial introduction service for Telugu families. Hyderabad, Telangana.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Contact", href: "#contact" },
    ],
  },
};

export const copy: Record<Lang, typeof te> = { te, en };
