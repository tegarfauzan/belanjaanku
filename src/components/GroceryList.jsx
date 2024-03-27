import { useState } from "react";
import Item from "./Item";

export default function GroceryList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    case "reversechecked":
      sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <>
      {/* problem */}
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      {/* problem */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan sesuai yang kamu masukkan</option>
          <option value="name">Urutkan sesuai nama barang (a-z)</option>
          <option value="checked">Urutkan sesuai belum ceklis</option>
          <option value="reversechecked">Urutkan sesuai sudah ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}

