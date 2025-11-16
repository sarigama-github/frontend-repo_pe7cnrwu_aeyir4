import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const cards = [
  {
    title: 'Conversational Commerce',
    body: 'We build chat-first storefronts that convert. NLP funnels, live agents on rails.',
    banner: ['/banners/commerce-1.jpg', '/banners/commerce-2.jpg'],
  },
  {
    title: 'Spatial Branding',
    body: 'Turn brand systems into living, breathing 3D canvases that audiences feel.',
    banner: ['/banners/brand-1.jpg', '/banners/brand-2.jpg'],
  },
  {
    title: 'Realtime Collaboration',
    body: 'Design, edit, and ship in multiplayer. Latency-obsessed experiences.',
    banner: ['/banners/live-1.jpg', '/banners/live-2.jpg'],
  },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const shellOpen = useTransform(scrollYProgress, [0, 0.25, 0.4], [0, 0.6, 1])
  const shellScale = useTransform(scrollYProgress, [0.35, 0.55, 0.7], [1, 1.8, 2.4])
  const shellZ = useTransform(scrollYProgress, [0.55, 0.75], [0, 1])

  const bannerIn = useTransform(scrollYProgress, [0.6, 0.8], [100, 0])
  const bannerDrop = useTransform(scrollYProgress, [0.8, 0.95], [-300, 0])

  const cardIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2])

  return (
    <section ref={ref} className="relative h-[350vh] bg-black text-white">
      {/* Spline background cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hqXbe5uy0NxM7CDI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve contrast, allow interaction with Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left text/cards */}
          <div className="sticky top-24 self-start">
            {cards.map((c, i) => (
              <Card key={i} index={i} cardIndex={cardIndex} {...c} />
            ))}
          </div>

          {/* Right shell + banner area */}
          <div className="relative h-[250vh]">
            <motion.div className="sticky top-24 h-[70vh] rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
              {/* The "shell" is represented by a glossy ring gradient that opens/closes */}
              <motion.div
                style={{ scale: shellScale }}
                className="absolute inset-0 grid place-items-center"
              >
                <motion.div
                  style={{
                    scale: useSpring(shellOpen, { stiffness: 120, damping: 20 }),
                  }}
                  className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-700 shadow-[0_0_60px_rgba(255,0,255,0.25)]"
                >
                  {/* inner pearl/brand placeholder */}
                  <motion.div
                    className="w-full h-full rounded-full grid place-items-center"
                  >
                    <motion.span className="text-sm font-semibold tracking-wide uppercase text-white/80">
                      Pearl
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Banner that slides in from right then drops */}
              <motion.div
                style={{ x: bannerIn, y: bannerDrop }}
                className="absolute right-4 top-6 bottom-6 w-[45%] bg-white/5 rounded-xl ring-1 ring-white/10 overflow-hidden"
              >
                <Banner cardIndex={cardIndex} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ title, body, banner, index, cardIndex }) {
  const opacity = useTransform(cardIndex, (v) => (Math.round(v) === index ? 1 : 0))
  const y = useTransform(cardIndex, (v) => (Math.round(v) === index ? 0 : 40))
  return (
    <motion.div style={{ opacity, y }} className="min-h-[60vh] flex flex-col justify-center">
      <h2 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">{title}</h2>
      <p className="text-white/80 text-base md:text-lg max-w-md">{body}</p>
    </motion.div>
  )
}

function Banner({ cardIndex }) {
  const idx = useTransform(cardIndex, (v) => Math.round(v))
  // Cheap noise filter overlay
  return (
    <div className="w-full h-full relative">
      <motion.div className="absolute inset-0">
        <motion.img
          key="b0"
          src={`https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop`}
          className="w-full h-full object-cover"
          style={{ opacity: useTransform(idx, [0, 1, 2], [1, 0, 0]) }}
        />
        <motion.img
          key="b1"
          src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop`}
          className="w-full h-full object-cover"
          style={{ opacity: useTransform(idx, [0, 1, 2], [0, 1, 0]) }}
        />
        <motion.img
          key="b2"
          src={`https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop`}
          className="w-full h-full object-cover"
          style={{ opacity: useTransform(idx, [0, 1, 2], [0, 0, 1]) }}
        />
      </motion.div>
      {/* noise overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30"
           style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
    </div>
  )
}
