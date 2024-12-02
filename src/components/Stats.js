export default function Stats({ items }) {
    const numItems = items.length;
    const numPackedItems = items.filter((item) => item.packed).length;
    const percentPacked = numItems > 0 ? Math.round(numPackedItems / numItems * 100) : 0;
    return (
      <footer className="stats">
        {
          percentPacked === 100 
          ? <strong>Great work! Everything is packed!</strong> 
          : `You have ${numItems} items in the list. You already packed ${numPackedItems} (${percentPacked}%).`
        }
        <em>You have {numItems} items in the list. You already packed {numPackedItems} ({percentPacked}%).</em>
      </footer>
    );
  }