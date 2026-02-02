import ProductCard from "./ProductCard";
import karee from "../assets/karee.png"
// 1. DATA PRODUK (Simpan di luar fungsi biar rapi)
const products = [
  { id: 1, name: "Curry Rice", japaneseName: "カレーライス", price: "$9.00", image: "/src/assets/Karee.png" },
  { id: 2, name: "Sushi Set", japaneseName: "寿司", price: "$4.00", image: "/src/assets/Shushi.png" },
  { id: 3, name: "Gyudon", japaneseName: "牛丼", price: "$10.00", image: "/src/assets/Gyudon.png" },
  { id: 4, name: "Udon", japaneseName: "うどん", price: "$8.00", image: "/src/assets/Udon.png" },
  { id: 5, name: "Ramen", japaneseName: "ラーメン", price: "$9.00", image: "/src/assets/ramen.png" },
  { id: 6, name: "Tempura", japaneseName: "天ぷら", price: "$4.00", image: "/src/assets/tempura.png" },
  { id: 7, name: "Sashimi", japaneseName: "刺身", price: "$5.00", image: "/src/assets/sashimi.png" },
  { id: 8, name: "Onigiri", japaneseName: "おにぎり", price: "$4.00", image: "/src/assets/onigiri.png" },
];

export default function FavoriteSection() {
  return (
    <section className="bg-black py-20 px-[48px]">
      

      <div className="flex justify-between items-center mb-12 border-b border-neutral-800 pb-6">
        
        <div>
          <h2 className="text-white text-3xl font-bold uppercase tracking-[0.2em] font-korosu">
            Customer Favorite
          </h2>
          <p className="text-neutral-500 text-xs mt-2 uppercase tracking-widest">
            The most ordered dishes by our community
          </p>
        </div>

        <span className="text-white text-4xl font-light opacity-30 italic">
          お客様人気
        </span>

      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            image={product.image}
            price={product.price}
            name={product.name}
            japaneseName={product.japaneseName}
          />
        ))}

      </div>

    </section>
  );
}