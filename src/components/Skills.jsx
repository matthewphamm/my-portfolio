import { useState } from "react";
import { skills, skillCategories } from "../data/projects";

export default function Skills() {
  const [active, setActive] = useState("all");

  const sortByName = (a, b) => a.name.localeCompare(b.name);

  const filtered =
    active === "all"
      ? skills
      : skills.filter((s) => s.category === active).sort(sortByName);

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20 border-t border-line">
      <p className="font-mono text-sm text-cobalt mb-4">// 03 — skills</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`font-mono text-sm rounded-full px-3 py-1.5 border transition-colors ${
              active === cat.id
                ? "bg-cobalt text-paper border-cobalt"
                : "border-line text-ink-soft hover:border-cobalt hover:text-cobalt"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {filtered.map((s) => (
          <span
            key={s.name}
            className="font-mono text-sm border border-line rounded-full px-3 py-1.5"
          >
            {s.name}
          </span>
        ))}
      </div>
    </section>
  );
}