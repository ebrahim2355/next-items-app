export default async function ItemDetails({ params }) {
    const res = await fetch(`http://localhost:5000/items/${params.id}`);
    const item = await res.json();

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
    );
}