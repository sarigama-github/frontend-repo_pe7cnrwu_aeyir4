import { motion } from 'framer-motion'

const articles = Array.from({ length: 6 }).map((_, i) => ({
  title: `Article ${i + 1}`,
  excerpt: 'Thoughts on interfaces, systems, and momentum.',
}))

export default function Articles() {
  return (
    <section id="articles" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-semibold mb-10">Articles</h3>
        <div className="h-[60vh] overflow-y-scroll border border-white/10 rounded-xl p-6 space-y-6">
          {articles.map((a, i) => (
            <motion.article
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-5 rounded-lg bg-white/5 ring-1 ring-white/10"
            >
              <h4 className="text-xl font-semibold">{a.title}</h4>
              <p className="text-white/75 mt-1">{a.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
