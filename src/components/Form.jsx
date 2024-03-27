import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmite(e) {
    e.preventDefault();

    if (!name) {
      return;
      }
      
      


    const newItem = { name, quantity, checked: false, id: Date.now() };
    onAddItem(newItem);
    console.log(newItem);
    setName("");
    setQuantity(1);
  }

  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));
    
    

  return (
    <form className="add-form" onSubmit={(e) => handleSubmite(e)}>
      <h3>Belanja terus pe dadi opo?</h3>
      <div className="form-control">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="ayo buruan masukin daftar....."
          value={name}
          onChange={(e) => setName(e.target.value) }
        />
        <button>Tambah</button>
      </div>
    </form>
  );
}
