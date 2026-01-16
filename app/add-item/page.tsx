export const dynamic = "force-dynamic";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AddItemForm from "./AddItemForm";

export default async function AddItemPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <main className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-semibold text-[var(--primary)] mb-6">
                Add New Item
            </h1>
            <AddItemForm />
        </main>
    );
}