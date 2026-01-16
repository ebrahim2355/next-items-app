async function getItems() {
    const res = await fetch("http://localhost:5000/items");
    return res.json();
}

export default async function ItemsPage() {
    const items = await getItems();

    return (
        <div>
            {items.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
}