export const dynamic = "force-dynamic";

import Link from "next/link";

async function getItems() {
    const res = await fetch("https://next-js-server1.vercel.app/items", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch items");
    }

    return res.json();
}

export default async function ItemsPage() {
    const items = await getItems();

    return (
        <main className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-semibold mb-8 text-[var(--foreground)]">
                Items
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {items.map((item: any) => (
                    <Link
                        key={item.id}
                        href={`/items/${item.id}`}
                        className="border border-[var(--muted)]/40 rounded-lg overflow-hidden
                       hover:shadow-md transition bg-[var(--background)]"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-40 w-full object-cover"
                        />

                        <div className="p-5">
                            <h3 className="font-semibold text-lg">{item.name}</h3>

                            <p className="text-sm text-[var(--muted)] mt-1 line-clamp-2">
                                {item.description}
                            </p>

                            <p className="mt-3 font-medium text-[var(--primary)]">
                                ${item.price}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
