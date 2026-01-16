"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddItemForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const newItem = {
            name: formData.get("name"),
            description: formData.get("description"),
            price: Number(formData.get("price")),
            image: formData.get("image"),
        };

        try {
            const res = await fetch("https://next-js-server1.vercel.app/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newItem),
            });

            if (!res.ok) {
                throw new Error("Failed to add item");
            }

            toast.success("Item added successfully");
            router.push("/items");
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 border border-[var(--muted)]/40 p-6 rounded-lg"
        >
            <input
                name="name"
                placeholder="Item name"
                required
                className="w-full border px-3 py-2 rounded bg-transparent"
            />

            <textarea
                name="description"
                placeholder="Item description"
                required
                className="w-full border px-3 py-2 rounded bg-transparent"
            />

            <input
                name="price"
                type="number"
                placeholder="Price"
                required
                className="w-full border px-3 py-2 rounded bg-transparent"
            />

            <input
                name="image"
                placeholder="Image URL (optional)"
                className="w-full border px-3 py-2 rounded bg-transparent"
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full py-2 rounded bg-[var(--primary)] text-white
                   hover:opacity-90 disabled:opacity-60"
            >
                {loading ? "Adding..." : "Add Item"}
            </button>
        </form>
    );
}