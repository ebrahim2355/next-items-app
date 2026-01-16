import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AddItemPage() {
    const session = await getServerSession();

    if (!session) {
        redirect("/login");
    }

    return <div>Add Item Form</div>;
}