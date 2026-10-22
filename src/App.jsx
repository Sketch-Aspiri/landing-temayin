import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Characters from './components/Characters.jsx'
import RouteSection from './components/RouteSection.jsx'
import Merida from './components/Merida.jsx'
import Riddle from './components/Riddle.jsx'
import Axes from './components/Axes.jsx'
import Rigor from './components/Rigor.jsx'
import Modes from './components/Modes.jsx'
import Reviews from './components/Reviews.jsx'
import Arrival from './components/Arrival.jsx'
import Pending from './components/Pending.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a href="#contenido" className="skip">Saltar al contenido</a>
      <Header />
      <main id="contenido" tabIndex={-1} style={{ outline: 'none' }}>
        <Hero />
        <Characters />
        <RouteSection />
        <Merida />
        <Riddle />
        <Axes />
        <Rigor />
        <Modes />
        <Reviews />
        <Arrival />
        <Pending />
      </main>
      <Footer />
    </>
  )
}
