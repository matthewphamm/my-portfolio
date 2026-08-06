import { useState, useEffect } from "react";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = "currently overfitting on coffee.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 pt-40 pb-24">
      <p className="font-mono text-sm text-cobalt mb-4">// hello world</p>
      <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight">
        CS student building<br />AI systems that learn.
      </h1>
      <p className="font-mono text-ink-soft mt-6 text-lg h-6">
        {typed}<span className="animate-pulse">|</span>
      </p>
      <div className="flex gap-4 mt-8">
        <a href="#projects" className="bg-ink text-paper px-5 py-2.5 rounded-full font-medium hover:bg-cobalt transition-colors">
          See my work
        </a>
        <a href="/resume.pdf" target="_blank" className="border border-line px-5 py-2.5 rounded-full font-medium hover:border-cobalt hover:text-cobalt transition-colors">
          Resume
        </a>
      </div>
    </section>
  );
}