import FeatureItem from "./FeatureItem";

import icon1 from "../assets/for1.svg";
import icon2 from "../assets/for2.svg";
import icon3 from "../assets/for3.svg";
import icon4 from "../assets/for4.svg";
import sushiImage from "../assets/fly.png"; 

const featuresLeft = [
  { icon: icon1, title: "Authentic Recipes", desc: "Made using traditional Japanese techniques to preserve original taste." },
  { icon: icon2, title: "Balanced Flavors", desc: "Each dish is crafted to achieve harmony between taste and texture." },
];

const featuresRight = [
  { icon: icon3, title: "Fresh Ingredients", desc: "Carefully selected ingredients to ensure quality and freshness." },
  { icon: icon4, title: "Traditional Cooking", desc: "Prepared with methods inspired by Japanese culinary culture." },
];

export default function FeatureSection() {
  return (
    <section className="w-full bg-black py-20">

      <div className="max-w-[1440px] mx-auto px-12 flex flex-col lg:flex-row gap-16 items-center">
        

        <div className="flex-1">
          
          <div className="flex flex-wrap gap-x-20 gap-y-6 mb-16">
            <h2 className="text-4xl font-bold uppercase tracking-tighter leading-tight font-korosu">
              Authentic <br /> <span className="text-white">Japanese Flavors</span>
            </h2>
            <h2 className="text-4xl font-bold uppercase tracking-tighter leading-tight text-neutral-200 font-korosu">
              Quality & <br /> Tradition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 mb-16">
            <div className="space-y-12">
              {featuresLeft.map((item, i) => (
                <FeatureItem key={i} {...item} />
              ))}
            </div>
            <div className="space-y-12">
              {featuresRight.map((item, i) => (
                <FeatureItem key={i} {...item} />
              ))}
            </div>
          </div>


          <button className="bg-[#FF2626] hover:bg-red-700 transition-all duration-300 px-12 py-4 rounded-full text-white font-bold text-lg shadow-xl shadow-red-600/10">
            Order Now!
          </button>
        </div>

        <div className="flex-shrink-0">
          <div className="relative group">
            <div className="rounded-[40px] overflow-hiddenshadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">
              <img 
                src={sushiImage} 
                alt="Sushi Display" 
                className="w-full h-auto max-w-[500px] object-cover"
              />
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}