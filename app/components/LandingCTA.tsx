"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function LandingCTA() {
    const { status } = useSession();

    if (status === "authenticated") {
        return (
            <Link
                href="/items"
                className="inline-block mt-6 px-8 py-3 rounded
                   bg-[var(--primary)] text-white hover:opacity-90 transition"
            >
                Go to Items
            </Link>
        );
    }

    return (
        <Link
            href="/login"
            className="inline-block mt-6 px-8 py-3 rounded
                 bg-[var(--primary)] text-white hover:opacity-90 transition"
        >
            Login Now
        </Link>
    );
}