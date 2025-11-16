import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import Articles from './components/Articles'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <CaseStudies />
      <Articles />
      <Contact />
    </div>
  )
}

export default App
