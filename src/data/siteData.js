// All text content for the portfolio, taken from www.supplybase.co.in.
// Edit copy here; components only read from this file.

export const company = {
  name: 'Supplybase',
  tagline: 'One Partner. Complete Project.',
  subTagline: 'Labour + Material + Management — everything under one roof.',
  description:
    'Supplybase does painting, waterproofing, plumbing, electrical, AC servicing, POP ceiling and interior design work for homes. We handle labour, material and supervision so our clients deal with one partner from the first visit to the final handover.',
  area: 'Thane & Mumbai',
  gstin: '27LPZPK7707M1ZL',
  website: 'https://www.supplybase.co.in',
}

export const contact = {
  phones: [
    { label: '+91 91373 06446', href: 'tel:+919137306446' },
    { label: '+91 83569 28520', href: 'tel:+918356928520' },
  ],
  whatsappNumber: '918356928520',
  whatsapp:
    'https://wa.me/918356928520?text=Hello%20Supplybase%2C%20I%20would%20like%20to%20discuss%20a%20project.',
  email: 'info.supplybase@gmail.com',
  address: 'Kalyan, Thane, Maharashtra 421306, India',
  hours: 'Every day, 9 AM – 9 PM',
  instagram: 'https://www.instagram.com/supplybase_official/',
  quoteUrl: 'https://www.supplybase.co.in/quote',
  servicesUrl: 'https://www.supplybase.co.in/services',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'catalogue', label: 'Catalogue' },
  { id: 'designs', label: 'Designs' },
  { id: 'projects', label: 'Projects' },
  { id: 'videos', label: 'Videos' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  eyebrow: 'Painting · Waterproofing · POP Ceiling · Interiors',
  titleLines: ['Beautiful Walls.', 'Fresh Beginnings.'],
  text: 'Home painting, waterproofing, POP ceiling and interior design services in Thane and Mumbai — handled by one accountable team.',
}

export const about = {
  eyebrow: 'Who We Are',
  title: 'Design. Build. Deliver.',
  paragraphs: [
    'Most home projects go wrong in the gaps — between design, people, and execution. Supplybase exists to close those gaps.',
    'Supplybase brings the entire project together under one team. We handle the site visit, labour, materials, and supervision. You get one contract, one point of contact, and clear accountability. From the first visit to handover, we manage it all.',
  ],
  stages: [
    {
      key: 'design',
      title: 'Design',
      text: 'Interior designs, ready-made room looks and POP ceiling layouts, planned with you at a home visit.',
    },
    {
      key: 'repair',
      title: 'Repair',
      text: 'Waterproofing, plumbing, electrical and AC servicing by trained, verified professionals.',
    },
    {
      key: 'finish',
      title: 'Finish',
      text: 'Painting, ceilings and final touch-ups for a clean handover.',
    },
  ],
}

export const services = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    text: 'Complete interior design for your home, with room designs and 3D views so you see the finished space before work begins.',
  },
  {
    id: 'interior-by-choice',
    title: 'Interior by Choice',
    text: 'Pick from ready-made room looks and finishes, and we deliver them with our own labour, materials and supervision.',
  },
  {
    id: 'painting',
    title: 'Painting',
    text: 'Professional interior and exterior painting that gives your home a fresh look, finished with clean final touch-ups.',
  },
  {
    id: 'waterproofing',
    title: 'Waterproofing',
    text: 'Waterproofing by trained, verified professionals to protect walls, terraces and bathrooms from leaks and damp.',
  },
  {
    id: 'pop-ceiling',
    title: 'POP Ceiling & Design',
    text: 'False ceiling and POP design layouts planned with you at a home visit and finished to a clean handover.',
  },
]

export const comingSoon = ['Plumber', 'Electrician', 'AC Services']

export const whyChoose = [
  {
    title: 'One Partner for Everything',
    text: 'Painting, repairs, interiors, and finishing — all managed by one accountable team.',
  },
  {
    title: 'Labour + Material Supplied',
    text: 'Skilled labour and quality materials, bundled into one clear rate — saving you time, hassle, and supplier chasing.',
  },
  {
    title: 'Design Before You Build',
    text: 'Room designs and 3D views help you see the finished space before work begins.',
  },
  {
    title: 'Quality You Can Trust',
    text: 'Supervised workmanship, standard materials and stage-wise checks on every project we take on.',
  },
  {
    title: 'On-Time Delivery',
    text: 'Clear timelines agreed at the start and a schedule that our site team sticks to.',
  },
  {
    title: 'Transparent Pricing',
    text: 'Itemised quotations with no hidden charges, so you always know what you are paying for.',
  },
]

export const process = [
  {
    step: '01',
    title: 'Consultation',
    text: 'Tell us about your home, needs and budget.',
  },
  {
    step: '02',
    title: 'Site Visit',
    text: 'We measure and study the space.',
  },
  {
    step: '03',
    title: 'Design Board',
    text: 'You approve layouts, materials and colours on a material board.',
  },
  {
    step: '04',
    title: 'Execution',
    text: 'Our team builds and installs, with supervised quality.',
  },
  {
    step: '05',
    title: 'Handover',
    text: 'A finished home, ready to live in.',
  },
]

export const faqs = [
  {
    q: 'How do I book a service?',
    a: 'Choose a service, complete its booking steps, select an available visit time and enter your contact details. Review your details before confirming.',
  },
  {
    q: 'When is the final price confirmed?',
    a: 'Starting prices and estimates depend on your selections. For work that needs an inspection, our team confirms the scope and final price during the site visit.',
  },
  {
    q: 'Is there a visit or consultation fee?',
    a: 'Any applicable visit or consultation fee is shown in the booking flow. Review it before you confirm your booking.',
  },
  {
    q: 'Can I choose materials and finishes?',
    a: 'Share your preferred materials, colours and finishes with our team. They can discuss suitable options and include the agreed choices in the estimate.',
  },
  {
    q: 'How can I request a different visit time?',
    a: 'Contact our team with your booking number and preferred time. They will help you check availability and the options for your booking.',
  },
]

// Project gallery filter tabs. Each project in media.js uses one of these ids.
export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'painting', label: 'Painting' },
  { id: 'interiors', label: 'Interiors' },
  { id: 'pop-ceiling', label: 'POP Ceiling' },
  { id: 'waterproofing', label: 'Waterproofing' },
]
