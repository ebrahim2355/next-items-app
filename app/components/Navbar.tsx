"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useSession, signOut } from "next-auth/react";

type Theme = "light" | "dark";

export default function Navbar() {
    /* ---------------- AUTH (NextAuth ONLY) ---------------- */
    const { data: session, status } = useSession();

    /* ---------------- THEME STATE ---------------- */
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "light";
        return (localStorage.getItem("theme") as Theme) || "light";
    });

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

    /* ---------------- UI ---------------- */
    return (
        <header className="sticky top-0 z-50 border-b shadow-md bg-[var(--background)]">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-semibold text-[var(--primary)]"
                >
                    NextItems
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-6">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/items">Items</NavLink>

                    {/* Auth-aware links */}
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

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="border rounded px-3 py-1 text-sm
                       border-[var(--muted)] hover:bg-[var(--muted)]/10"
                    >
                        {theme === "light" ? "Dark" : "Light"}
                    </button>
                </div>
            </nav>
        </header>
    );
}

/* ---------------- NAV LINK ---------------- */

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className={clsx(
                "text-sm font-medium transition",
                "text-[var(--foreground)] hover:opacity-80"
            )}
        >
            {children}
        </Link>
    );
}