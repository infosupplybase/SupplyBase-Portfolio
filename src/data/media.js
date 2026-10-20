// Every image and video slot in the portfolio is listed here.
//
// To add media: put the file in /public/images or /public/videos, then set
// its path below, e.g. src: '/images/painting-1.jpg'.
// Any slot left as null shows a styled placeholder, so the site always renders.
// Videos have had their audio track removed and always play muted.

export const heroMedia = {
  video: '/videos/v01.mp4', // short, muted background loop
  poster: '/images/poster-v01.jpg', // shown while the video loads
}

export const aboutImage = '/images/bedroom-02.jpg'

// One cover image per service, keyed by the service id in siteData.js
export const serviceImages = {
  'interior-design': '/images/bedroom-05.jpg',
  'interior-by-choice': '/images/bedroom-03.jpg',
  painting: '/images/poster-v05.jpg',
  waterproofing: '/images/ibc/waterproofing/terrace.webp',
  'pop-ceiling': '/images/ibc/pop-ceiling/living-room-cove.webp',
}

// Project gallery. category must match an id in projectCategories (siteData.js).
// Filter tabs with no projects are hidden automatically.
const blueBlossom = 'Blue Blossom Master Bedroom'
export const projects = [
  { id: 1, title: 'Cove-lit Floating Bed & Ceiling', project: blueBlossom, category: 'pop-ceiling', src: '/images/bedroom-05.jpg' },
  { id: 2, title: 'Mural Wall & Ceiling Wrap', project: blueBlossom, category: 'pop-ceiling', src: '/images/bedroom-02.jpg' },
  { id: 3, title: 'Channel-tufted Headboard', project: blueBlossom, category: 'interiors', src: '/images/bedroom-03.jpg' },
  { id: 4, title: 'L-shaped Wardrobe', project: blueBlossom, category: 'interiors', src: '/images/bedroom-04.jpg' },
  { id: 5, title: 'Backlit Mirror & Pelmet', project: blueBlossom, category: 'interiors', src: '/images/bedroom-06.jpg' },
  { id: 6, title: 'Wallpapered POP Ceiling', project: blueBlossom, category: 'pop-ceiling', src: '/images/bedroom-07.jpg' },
  { id: 7, title: 'Dresser & Mirror Unit', project: blueBlossom, category: 'interiors', src: '/images/bedroom-01.jpg' },
  { id: 8, title: 'Floating Bedside & Arched Door', project: blueBlossom, category: 'interiors', src: '/images/bedroom-08.jpg' },
]

const video = (n, title) => ({
  id: n,
  title,
  src: `/videos/v${n}.mp4`,
  poster: `/images/poster-v${n}.jpg`,
})

// Video sliders — one slider per category, in this order.
export const videoCategories = [
  {
    id: 'before-after',
    title: 'Before & After',
    text: 'Bare sites turned into finished, ready-to-live homes.',
    videos: [
      video('03', 'Bare Shell to Living Room'),
      video('10', 'Bedroom Repaint & Styling'),
      video('11', 'Bedroom Carpentry to Finish'),
      video('15', 'Full Home Transformation'),
      video('13', 'Apartment Before & After'),
      video('08', 'Concept Before & After'),
    ],
  },
  {
    id: 'painting',
    title: 'Painting',
    text: 'Wall preparation, texture finishes and colour that transform a room.',
    videos: [
      video('06', 'Texture Wall Finish'),
      video('04', 'Wall Prep to Final Coat'),
      video('05', 'Painted Wall Moulding'),
      video('14', 'Choosing the Right Colour'),
      video('07', 'Colour Options for Your Room'),
    ],
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    text: 'Kitchens, wardrobes and wall panelling designed and built by our team.',
    videos: [
      video('01', 'Modular Kitchen & Living'),
      video('12', 'Handleless Modular Kitchen'),
      video('02', 'L-shaped Kitchen Walkthrough'),
      video('09', 'Wall Panelling with Gold Beading'),
      video('16', 'Wardrobe Finish Options'),
    ],
  },
]
