import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";


export default function App() {
  const [items, setItems] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
    const pathname = window.location.pathname;

    if (pathname.includes('/hafsyah')) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  if (!isAuthorized) {
    return (
      <div>
        <h1>Anda tidak diizinkan untuk mengakses halaman ini.</h1>
      </div>
    );
  }

  function handleAddItem(item) {
    setItems([...items, item]);
    localStorage.setItem("items", JSON.stringify([...items, item]));
  }


  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <>
      <div className="app">
        <Header />
        <Form onAddItem={handleAddItem} />
        <GroceryList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearItems={handleClearItems}
        />
        <Footer items={items} />
      </div>
    </>
  );
}
