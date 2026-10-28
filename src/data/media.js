// Every image and video used outside the design catalogues is listed here.
//
// To add media: put the file in /public/images or /public/videos, then set
// its path below, e.g. src: '/images/painting-1.jpg'.
// Videos have had their audio track removed and always play muted.

export const heroMedia = {
  image: '/images/bedroom-05.jpg', // main hero photo (real project)
  video: '/videos/v01.mp4', // small looping clip beside it
  poster: '/images/poster-v01.jpg',
}

export const aboutImage = '/images/bedroom-02.jpg'

// One cover image per service, keyed by the service id in siteData.js
export const serviceImages = {
  'interior-design': '/images/bedroom-03.jpg',
  'interior-by-choice': '/images/catalogue/sb-05.webp',
  painting: '/images/poster-v05.jpg',
  waterproofing: '/images/ibc/waterproofing/terrace.webp',
  'pop-ceiling': '/images/poster-v01.jpg',
}

// "Our Work" filter tabs. Each work item lists one or more of these ids.
// Tabs with no items are hidden automatically.
export const workCategories = [
  { id: 'all', label: 'All Work' },
  { id: 'interiors', label: 'Interior Design' },
  { id: 'pop-ceiling', label: 'POP Ceiling' },
  { id: 'painting', label: 'Painting' },
  { id: 'before-after', label: 'Before & After' },
]

const video = (n, title, categories, text) => ({
  id: `v${n}`,
  type: 'video',
  title,
  categories,
  text,
  src: `/videos/v${n}.mp4`,
  cover: `/images/poster-v${n}.jpg`,
})

// Photo projects open as a gallery; videos open as a player.
// Add `location` only when it is confirmed.
export const work = [
  {
    id: 'blue-blossom',
    type: 'project',
    title: 'Blue Blossom Master Bedroom',
    categories: ['interiors', 'pop-ceiling'],
    text: 'A calm master bedroom in soft blue: a floral mural that wraps from the wall onto the ceiling, a cove-lit floating bed, a channel-tufted headboard and an L-shaped wardrobe.',
    cover: '/images/bedroom-05.jpg',
    images: [
      { src: '/images/bedroom-05.jpg', caption: 'Cove-lit floating bed and ceiling' },
      { src: '/images/bedroom-02.jpg', caption: 'Mural wall and ceiling wrap' },
      { src: '/images/bedroom-03.jpg', caption: 'Channel-tufted headboard' },
      { src: '/images/bedroom-04.jpg', caption: 'L-shaped wardrobe' },
      { src: '/images/bedroom-06.jpg', caption: 'Backlit mirror and pelmet' },
      { src: '/images/bedroom-07.jpg', caption: 'Wallpapered POP ceiling' },
      { src: '/images/bedroom-01.jpg', caption: 'Dresser and mirror unit' },
      { src: '/images/bedroom-08.jpg', caption: 'Floating bedside and arched door' },
    ],
  },
  video('03', 'Bare Shell to Living Room', ['before-after', 'interiors'], 'A bare site turned into a finished living room.'),
  video('01', 'Modular Kitchen & Living', ['interiors', 'pop-ceiling'], 'Walkthrough of a finished kitchen and living area.'),
  video('06', 'Texture Wall Finish', ['painting'], 'Applying a texture finish to a feature wall.'),
  video('15', 'Full Home Transformation', ['before-after'], 'One home, from start to the finished rooms.'),
  video('12', 'Handleless Modular Kitchen', ['interiors'], 'A handleless modular kitchen, built and fitted by our team.'),
  video('04', 'Wall Prep to Final Coat', ['painting'], 'Wall preparation through to the final coat of paint.'),
  video('10', 'Bedroom Repaint & Styling', ['before-after', 'painting'], 'A bedroom repainted and styled.'),
  video('09', 'Wall Panelling with Gold Beading', ['interiors'], 'Wall panelling finished with gold beading.'),
  video('11', 'Bedroom Carpentry to Finish', ['before-after', 'interiors'], 'Bedroom carpentry from the first frame to the finish.'),
  video('05', 'Painted Wall Moulding', ['painting'], 'Wall moulding, painted and finished.'),
  video('02', 'L-shaped Kitchen Walkthrough', ['interiors'], 'Walkthrough of an L-shaped kitchen.'),
  video('13', 'Apartment Before & After', ['before-after'], 'An apartment before and after the work.'),
  video('14', 'Choosing the Right Colour', ['painting'], 'How colour changes the feel of a room.'),
  video('16', 'Wardrobe Finish Options', ['interiors'], 'Finish options for a built-in wardrobe.'),
  video('08', 'Concept Before & After', ['before-after'], 'A room concept, before and after.'),
  video('07', 'Colour Options for Your Room', ['painting'], 'Colour options shown on the same room.'),
  video('17', 'Before & After 2 BHK', ['before-after'], 'A 2 BHK home before and after.'),
  video('18', 'Before & After 1 BHK', ['before-after'], 'A 1 BHK home before and after.'),
]
