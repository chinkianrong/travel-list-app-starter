// Child Component
// Template to render a packing item to a <li> tag
export default function Item({ packingItem, onDeleteItem, onUpdateItem }) {
    return (
      <li>
        <input type="checkbox" value={packingItem.packed} onChange={() => onUpdateItem(packingItem.id)} />
        <span style={packingItem.packed ? "packed" : ""}>
          {packingItem.description} ({packingItem.quantity})
        </span>
        <button onClick={() => onDeleteItem(packingItem.id)}>Remove</button>
      </li>
    )
  }