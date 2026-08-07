export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20 border-t border-line">
      <p className="font-mono text-sm text-cobalt mb-4">// 04 — contact</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl max-w-xl">
        Let's build something.
      </h2>
      <p className="font-body text-ink-soft text-lg mt-4 max-w-xl">
        Open for internships, collabs, and cool ideas. Let's talk.
      </p>
      <div className="flex gap-6 mt-8 font-mono text-sm">
        <a href="mailto:code@mattpham.dev" className="hover:text-cobalt transition-colors">email</a>
        <a href="https://github.com/matthewphamm" target="_blank" rel="noreferrer" className="hover:text-cobalt transition-colors">github</a>
        <a href="https://linkedin.com/in/matthewphamm" target="_blank" rel="noreferrer" className="hover:text-cobalt transition-colors">linkedin</a>
      </div>
    </section>
  );
}