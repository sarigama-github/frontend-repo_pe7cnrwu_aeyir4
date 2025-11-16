import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const studies = [
  { brand: 'Aether', summary: 'Climate fintech platform turning offsets into impact.' },
  { brand: 'NOVA', summary: 'Spatial commerce toolkit for pop-ups and launches.' },
]

export default function CaseStudies() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const openClose = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 0.2, 1])

  return (
    <section id="work" ref={ref} className="relative h-[220vh] bg-black text-white">
      <div className="sticky top-20 h-[80vh]">
        <motion.div
          layoutId="shell-logo"
          style={{ scale: openClose }}
          className="mx-auto mt-8 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-700 shadow-[0_0_80px_rgba(255,0,255,0.25)] ring-2 ring-white/30 grid place-items-center"
        >
          <div className="text-center px-8">
            <p className="text-xs uppercase tracking-wider text-white/70">Brand in the pearl</p>
            <h3 className="text-3xl md:text-5xl font-semibold">{studies[0].brand}</h3>
            <p className="text-white/80 mt-2 max-w-sm mx-auto">{studies[0].summary}</p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-24 space-y-16">
        {studies.map((s, i) => (
          <div key={i} className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              <h4 className="text-2xl font-semibold">{s.brand}</h4>
            </div>
            <div className="md:col-span-2 text-white/80">
              {s.summary}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
