

import landingBg from "../assets/landing.png";
import iconFile from "../assets/bag.svg";
import logo from "../assets/yamu.svg";
import Navbar from "./Navbar";

export default function Landing() {
  const navList = ["About us", "Delivery", "Location", "Contacts"];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${landingBg})` }}
    >
      <Navbar items={navList} icon={iconFile} />

      <div className="flex items-center h-[100vh] px-[48px]">
        
        <div className="w-1/2 text-white">

          <img
            src={logo}
            alt="Shiyo Yamu"
            className="w-[405px] mt-[32px]"
          />

          <div className="mt-[15px]">
            <h2 className="uppercase text-xl/[80%] tracking-wider font-semibold font-korosu">
              A Celebration<br />
              Authentic of<br />
              Japanese Flavors
            </h2>

            <p className=" m-0 w-[300px] text-sm text-neutral-300  ">
              Authentic Japanese dishes made with honest ingredients,
              traditional techniques, and flavors that truly satisfy.
            </p>
          </div>



          <button className="mt-4 rounded-full bg-[#FF2626] px-8 py-3 text-sm font-semibold hover:bg-red-700 transition">
            Order Now!
          </button>

        </div>

        {/* RIGHT (kosong dulu / nanti gambar ramen) */}
        <div className="w-1/2"></div>
        

      </div>
    </div>
  );
}
