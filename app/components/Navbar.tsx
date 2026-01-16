"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useSession, signOut } from "next-auth/react";

type Theme = "light" | "dark";

export default function Navbar() {
    /* ---------------- AUTH (NextAuth ONLY) ---------------- */
    const { status } = useSession();

    /* ---------------- THEME STATE ---------------- */
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "light";
        return (localStorage.getItem("theme") as Theme) || "light";
    });

    /* ---------------- MOBILE MENU STATE ---------------- */
    const [menuOpen, setMenuOpen] = useState(false);

    /* ---------------- APPLY THEME ---------------- */
    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.setAttribute("data-theme", "dark");
        } else {
            root.removeAttribute("data-theme");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    const closeMenu = () => setMenuOpen(false);

    /* ---------------- UI ---------------- */
    return (
        <header className="sticky top-0 z-50 border-b shadow-md bg-[var(--background)]">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-semibold text-[var(--primary)]"
                    onClick={closeMenu}
                >
                    NextItems
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/items">Items</NavLink>

                    {status === "authenticated" ? (
                        <>
                            <NavLink href="/add-item">Add Item</NavLink>
                            <button
                                onClick={() => signOut({ callbackUrl: "/login" })}
                                className="text-sm text-red-500 hover:underline"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink href="/login">Login</NavLink>
                    )}

                    <ThemeButton theme={theme} toggleTheme={toggleTheme} />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(prev => !prev)}
                    className="md:hidden border rounded px-3 py-1 text-sm border-[var(--muted)] cursor-pointer"
                >
                    Menu
                </button>
            </nav>

            {/* Mobile Menu Panel */}
            {menuOpen && (
                <div className="md:hidden border-t bg-[var(--background)] px-6 py-4 space-y-4">
                    <NavLink href="/" onClick={closeMenu}>
                        Home
                    </NavLink>

                    <NavLink href="/items" onClick={closeMenu}>
                        Items
                    </NavLink>

                    {status === "authenticated" ? (
                        <>
                            <NavLink href="/add-item" onClick={closeMenu}>
                                Add Item
                            </NavLink>

                            <button
                                onClick={() => {
                                    closeMenu();
                                    signOut({ callbackUrl: "/login" });
                                }}
                                className="text-sm text-red-500 hover:underline block"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink href="/login" onClick={closeMenu}>
                            Login
                        </NavLink>
                    )}

                    <ThemeButton theme={theme} toggleTheme={toggleTheme} />
                </div>
            )}
        </header>
    );
}

/* ---------------- NAV LINK ---------------- */

function NavLink({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={clsx(
                "block text-sm font-medium transition",
                "text-[var(--foreground)] hover:opacity-80"
            )}
        >
            {children}
        </Link>
    );
}

/* ---------------- THEME BUTTON ---------------- */

function ThemeButton({
    theme,
    toggleTheme,
}: {
    theme: Theme;
    toggleTheme: () => void;
}) {
    return (
        <button
            onClick={toggleTheme}
            className="border rounded px-3 py-1 text-sm
                 border-[var(--muted)] hover:bg-[var(--muted)]/10"
        >
            {theme === "light" ? "Dark" : "Light"}
        </button>
    );
}