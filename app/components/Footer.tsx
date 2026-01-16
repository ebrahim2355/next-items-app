export default function Footer() {
    return (
        <footer className="mt-20 border-t border-[var(--muted)]/30">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                {/* Brand */}
                <div>
                    <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">
                        NextItems
                    </h3>
                    <p className="text-[var(--muted)]">
                        A simple Next.js application demonstrating authentication,
                        routing, and item management.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-2">
                        Navigation
                    </h4>
                    <ul className="space-y-1 text-[var(--muted)]">
                        <li className="hover:text-[var(--primary)] cursor-pointer">
                            Home
                        </li>
                        <li className="hover:text-[var(--primary)] cursor-pointer">
                            Items
                        </li>
                        <li className="hover:text-[var(--primary)] cursor-pointer">
                            Login
                        </li>
                    </ul>
                </div>

                {/* Meta */}
                <div>
                    <h4 className="font-semibold text-[var(--foreground)] mb-2">
                        Tech Stack
                    </h4>
                    <p className="text-[var(--muted)]">Next.js (App Router)</p>
                    <p className="text-[var(--muted)]">Express.js API</p>
                    <p className="text-[var(--muted)]">Tailwind CSS</p>
                </div>
            </div>

            <div className="border-t border-[var(--muted)]/30 py-4 text-center text-xs text-[var(--muted)]">
                © {new Date().getFullYear()} NextItems. All rights reserved.
            </div>
        </footer>
    );
}