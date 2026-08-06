import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20 border-t border-line">
      <p className="font-mono text-sm text-cobalt mb-4">// 02 — projects</p>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group border border-line rounded-lg p-5 hover:border-cobalt transition-colors"
          >
            <span className="font-mono text-xs text-sage bg-sage/15 px-2 py-1 rounded">
              {p.tag}
            </span>
            <h3 className="font-display font-bold text-lg mt-3 group-hover:text-cobalt transition-colors">
              {p.title}
            </h3>
            <p className="text-ink-soft text-sm mt-2">{p.description}</p>
            <p className="font-mono text-xs text-ink-soft mt-4">
              {p.stack.join(" · ")}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}