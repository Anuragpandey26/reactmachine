import { useState } from "react";
function App() {
  const dataList = [
    { id: 1, name: "Apple", category: "Fruit", price: 120 },
    { id: 2, name: "Banana", category: "Fruit", price: 40 },
    { id: 3, name: "Carrot", category: "Vegetable", price: 60 },
    { id: 4, name: "Tomato", category: "Vegetable", price: 30 },
    { id: 5, name: "Mango", category: "Fruit", price: 150 },
  ];
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const result = dataList
    .filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(item =>
      filter ? item.category === filter : true
    )
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });
  return (
    <div>
      <h1>Dynamic Search + Sort + Filter</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br /><br />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
      </select>
      <br /><br />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
      <br /><br />
      <ul>
        {result.map(item => (
          <li key={item.id}>
            {item.name} — {item.category} — ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
