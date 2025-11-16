export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold">Let’s build something iconic</h3>
        <p className="text-white/80 mt-3">Tell us about your product and timeline. We’ll reply within 24 hours.</p>
        <form className="mt-8 grid grid-cols-1 gap-4 text-left">
          <input placeholder="Your name" className="bg-white/5 ring-1 ring-white/10 rounded-lg px-4 py-3" />
          <input placeholder="Email" className="bg-white/5 ring-1 ring-white/10 rounded-lg px-4 py-3" />
          <textarea placeholder="Project details" rows={5} className="bg-white/5 ring-1 ring-white/10 rounded-lg px-4 py-3" />
          <button className="mt-2 bg-gradient-to-r from-fuchsia-500 to-purple-700 rounded-lg px-6 py-3 font-semibold">Send</button>
        </form>
      </div>
    </section>
  )
}
