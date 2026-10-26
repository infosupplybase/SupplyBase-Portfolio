import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Services from './sections/Services.jsx'
import DesignCatalogue from './sections/DesignCatalogue.jsx'
import Catalogue from './sections/Catalogue.jsx'
import WhyChoose from './sections/WhyChoose.jsx'
import Projects from './sections/Projects.jsx'
import Videos from './sections/Videos.jsx'
import Process from './sections/Process.jsx'
import FAQ from './sections/FAQ.jsx'
import Contact from './sections/Contact.jsx'
import useTilt3D from './hooks/useTilt3D.js'

export default function App() {
  useTilt3D()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <DesignCatalogue />
        <Catalogue />
        <WhyChoose />
        <Projects />
        <Videos />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
