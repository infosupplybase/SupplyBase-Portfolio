import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Marquee from './components/Marquee.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Hero from './sections/Hero.jsx'
import Work from './sections/Work.jsx'
import DesignCatalogue from './sections/DesignCatalogue.jsx'
import Catalogue from './sections/Catalogue.jsx'
import Services from './sections/Services.jsx'
import About from './sections/About.jsx'
import Process from './sections/Process.jsx'
import Reviews from './sections/Reviews.jsx'
import FAQ from './sections/FAQ.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Work />
        <DesignCatalogue />
        <Catalogue />
        <Services />
        <About />
        <Process />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
