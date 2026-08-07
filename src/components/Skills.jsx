import { useState } from "react";
import { skills, skillCategories } from "../data/projects";

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20 border-t border-line">
      <p className="font-mono text-sm text-cobalt mb-4">// 03 — skills</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="font-mono text-sm border border-line rounded-full px-3 py-1.5 hover:border-cobalt hover:text-cobalt transition-colors"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}