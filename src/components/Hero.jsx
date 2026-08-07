import { useState, useEffect } from "react";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "currently overfitting on coffee.";

  useEffect(() => {
    const typingSpeed = 45;
    const deletingSpeed = 25;
    const pauseAfterTyping = 1800;
    const pauseAfterDeleting = 400;

    let timeout;

    if (!isDeleting && typed.length < fullText.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setTyped(fullText.slice(0, typed.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && typed.length === fullText.length) {
      // Full text reached — pause, then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
    } else if (isDeleting && typed.length > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setTyped(fullText.slice(0, typed.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && typed.length === 0) {
      // Fully deleted — pause, then start typing again
      timeout = setTimeout(() => setIsDeleting(false), pauseAfterDeleting);
    }

    return () => clearTimeout(timeout);
  }, [typed, isDeleting, fullText]);

  return (
    <section className="max-w-4xl mx-auto px-6 pt-40 pb-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="font-mono text-sm text-cobalt mb-4">// hello world</p>
          <h1 className="font-display font-bold text-5xl md:text-5xl leading-tight">
            Hi, I'm Matt-a developer, designer, and student.
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
        </div>

        <img
          src="/memoji.PNG"
          alt="Matt Pham"
          className="w-48 h-48 md:w-64 md:h-64 object-contain flex-shrink-0"
        />
      </div>
    </section>
  );
}