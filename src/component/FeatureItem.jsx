export default function FeatureItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0">
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>
      <div className="flex flex-col">
        <h4 className="text-white font-bold text-xl mb-1 tracking-tight">
          {title}
        </h4>
        <p className="text-sm text-neutral-400 leading-relaxed max-w-[250px]">
          {desc}
        </p>
      </div>
    </div>
  );
}