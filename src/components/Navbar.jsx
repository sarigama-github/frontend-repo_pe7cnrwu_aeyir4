import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Navbar() {
  const ref = useRef(null)
  useScroll({ target: ref })
  return (
    <div ref={ref} className="sticky top-0 z-40 backdrop-blur bg-black/20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          {/* Shell logo placeholder */}
          <motion.div
            layoutId="shell-logo"
            className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-600 shadow-lg ring-2 ring-white/30"
          />
          <span className="font-semibold tracking-wide">PearlWorks</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#articles" className="hover:text-white transition">Articles</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </div>
  )
}
