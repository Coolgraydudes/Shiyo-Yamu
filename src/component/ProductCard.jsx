
import { useState } from "react";

export default function ProductCard({ image, price, name, japaneseName }) {
  const [count, setCount] = useState(0);

  const tambah = () => setCount(count + 1)
  const kurang = () => setCount(count - 1)


  return (
    <div className="bg-[#111111] rounded-sm p-6 flex flex-col justify-between group hover:bg-[#1a1a1a] transition-all border border-transparent hover:border-neutral-800">
        
        <div className="flex justify-center mb-8 h-48">
            <img 
            src={image} 
            alt={name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
        </div>

        <div className="flex justify-between items-end">
            <div className="text-white">
                <p className="text-sm font-bold mb-1 text-red-500">{price}</p>
                <h2 className="text-lg font-bold leading-none uppercase">{name}</h2>
                <p className="text-[10px] text-neutral-500 mt-1">{japaneseName}</p>
            </div>

            <div className="flex flex-col items-center gap-2">
  

                {count > 0 && (
                    <div className="flex items-center bg-neutral-800 rounded-md">
                    <button onClick={() => setCount(count - 1)} className="px-3 text-white py-1">-</button>
                    <span className="px-2 text-white font-bold cursor-pointer">
                        {count}
                    </span>
                    
                    <button onClick={() => setCount(count + 1)} className="px-3 text-white py-1">+</button>
                    </div>
                )}

                    <button 
                        onClick={() => setCount(count + 1)} 
                        className="bg-red-600 px-6 py-2 rounded-md text-xs font-bold text-white"
                    >
                        {count > 0 ? "Add More" : "Add"}
                    </button>
            </div>
        </div>

    </div>
  );
}