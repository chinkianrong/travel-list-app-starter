import { useState } from "react";

export default function Form() {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleDescriptionChange(e) {
      setDescription(e.target.value);
    }
  
    function handleQuantityChange(e) {
      setQuantity(Number(e.target.value))
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!description) return;
  
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      }
  
      setDescription("");
      setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
          <h3>What do you need to pack?</h3>
          <select value={quantity} onChange={handleQuantityChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input placeholder="Item..." value={description} onChange={handleDescriptionChange} />
      
          <button id="add-form">Add</button>
        </form>
      );
}