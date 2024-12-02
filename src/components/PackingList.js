
// Parent Component to Item component
// Responsible for passing data to child component
export default function PackingList([ items, onDeleteItem, onUpdateItem ]) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item packingItem={item} key={item.id} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />
          ))}
        </ul>
      </div>
    );
  }