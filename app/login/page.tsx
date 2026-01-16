"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        setLoading(false);

        if (res?.error) {
            toast.error("Invalid email or password");
        } else {
            toast.success("Login successful");
            router.push("/items");
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        await signIn("google", { callbackUrl: "/items" });
    };

    return (
        <main className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-lg border border-[var(--muted)]/40 p-8 shadow-sm bg-[var(--background)]">
                {/* Header */}
                <h1 className="text-2xl font-semibold text-[var(--primary)] text-center">
                    Welcome Back
                </h1>
                <p className="text-sm text-center text-[var(--muted)] mt-1">
                    Login to continue
                </p>

                {/* Credentials Login */}
                <form onSubmit={handleLogin} className="mt-6 space-y-4">
                    <input
                        name="email"
                        type="email"
                        placeholder="admin@example.com"
                        required
                        className="w-full border border-[var(--muted)]/50 px-3 py-2 rounded bg-transparent
                       focus:outline-none focus:border-[var(--primary)]"
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="123456"
                        required
                        className="w-full border border-[var(--muted)]/50 px-3 py-2 rounded bg-transparent
                       focus:outline-none focus:border-[var(--primary)]"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 rounded bg-[var(--primary)] text-white
                       hover:opacity-90 transition disabled:opacity-60"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-3 text-xs text-[var(--muted)]">
                    <div className="flex-1 h-px bg-[var(--muted)]/40" />
                    OR
                    <div className="flex-1 h-px bg-[var(--muted)]/40" />
                </div>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="w-full border border-[var(--muted)]/50 rounded py-2
                     hover:bg-[var(--muted)]/10 transition disabled:opacity-60"
                >
                    Continue with Google
                </button>

                {/* Demo Info */}
                <p className="text-xs text-center text-[var(--muted)] mt-4">
                    Demo credentials: <br />
                    <span className="font-medium">admin@example.com</span> /{" "}
                    <span className="font-medium">123456</span>
                </p>
            </div>
        </main>
    );
}