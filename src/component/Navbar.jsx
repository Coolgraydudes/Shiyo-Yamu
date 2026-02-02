// components/Navbar.jsx
export default function Navbar({ items, icon }) {
  return (
    <nav className="absolute top-0 left-0 w-full px-[48px] py-[32px] flex justify-between items-center text-white">

        <div className="w-8"></div>

        <ul className="flex justify-center gap-[62px] text-sm font-light">
            {items.map((item, index) => (
            <li key={index} className="cursor-pointer text-lg hover:opacity-80">
                {item}
            </li>
            ))}
        </ul>

        <div className="cursor-pointer hover:opacity-80">
            <img 
            src={icon}
            alt="" 
            className="w-6 h-6 object-contain"
            />

        </div>

    </nav>
  );
}