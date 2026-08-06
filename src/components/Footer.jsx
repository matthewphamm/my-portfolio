export default function Footer() {
    return (
        <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-line">
            <p className="font-mono text-xs text-ink-soft">
                $ git log "built by Matt Pham, {new Date().getFullYear()}"
            </p>
        </footer>
    );
}