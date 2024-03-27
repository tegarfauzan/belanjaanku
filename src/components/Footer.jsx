export default function Footer({ items }) {
  if (items.length === 0) {
    return <footer className="stats-kosong">Belanjaan masih kosong ya ges ya✨</footer>;
  }

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  if (totalItems === checkedItems) {
    return <footer className="stats-penuh">Barang terbeli semuanya ges</footer>;
  }

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah
      dibeli ({percentage}%).
    </footer>
  );
}