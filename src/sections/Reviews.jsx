import { useRef } from 'react'
import { reviews } from '../data/reviews.js'
import { contact } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ArrowLink from '../components/ArrowLink.jsx'
import Review from '../components/Review.jsx'
import Icon from '../components/Icons.jsx'

export default function Reviews() {
  const track = useRef(null)
  const scroll = (dir) => {
    const el = track.current
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 460), behavior: 'smooth' })
  }

  return (
    <section id="reviews" className="section section--dark reviews">
      <div className="container">
        <SectionHeading
          index="07"
          eyebrow="Client Stories"
          title={
            <>
              In our clients&rsquo; <em>words</em>
            </>
          }
          text="Five-star reviews from homeowners, copied as written from our Google Business profile."
          aside={
            <div className="reviews__controls">
              <button onClick={() => scroll(-1)} aria-label="Previous reviews">
                <Icon name="arrow" size={18} style={{ rotate: '180deg' }} />
              </button>
              <button onClick={() => scroll(1)} aria-label="Next reviews">
                <Icon name="arrow" size={18} />
              </button>
            </div>
          }
        />

        <ul className="reviews__track" ref={track} tabIndex={0} aria-label="Customer reviews">
          {reviews.map((r) => (
            <Review key={r.name} {...r} />
          ))}
        </ul>

        <ArrowLink href={contact.googleReviews}>Read all reviews on Google</ArrowLink>
      </div>
    </section>
  )
}
