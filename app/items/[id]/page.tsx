export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";

async function getItem(id: string) {
    const res = await fetch(`https://next-js-server1.vercel.app/items/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        notFound();
    }

    return res.json();
}

export default async function ItemDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const item = await getItem(id);

    return (
        <main className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-80 object-cover rounded-lg"
                />

                <div>
                    <h1 className="text-3xl font-bold text-[var(--foreground)]">
                        {item.name}
                    </h1>

                    <p className="mt-4 text-[var(--muted)]">
                        {item.description}
                    </p>

                    <p className="mt-6 text-xl font-semibold text-[var(--primary)]">
                        Price: ${item.price}
                    </p>

                    <a
                        href="/items"
                        className="inline-block mt-8 text-sm text-[var(--secondary)]
                       hover:underline"
                    >
                        ← Back to Items
                    </a>
                </div>
            </div>
        </main>
    );
}
