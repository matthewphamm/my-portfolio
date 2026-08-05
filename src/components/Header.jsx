export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-paper/90 backdrop-blur-sm border-b border-line z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-lg">Matt Pham</a>
        <nav className="font-mono text-sm text-ink-soft flex gap-6">
          <a href="#about" className="hover:text-cobalt transition-colors">about</a>
          <a href="#projects" className="hover:text-cobalt transition-colors">projects</a>
          <a href="#skills" className="hover:text-cobalt transition-colors">skills</a>
          <a href="#contact" className="hover:text-cobalt transition-colors">contact</a>
        </nav>
      </div>
    </header>
  );
}