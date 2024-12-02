import { useState } from "react";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Form from "./Form";
import Item from "./Item";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems) => [ ...prevItems, item ]);
  }

  function handleUpdateItem(id) {
    setItems((prevItems) => prevItems.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} />
      <Stats items={items} />
    </div>
  );
}

export default App;