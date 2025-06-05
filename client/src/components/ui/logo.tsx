import logoImage from "@assets/SmartGenEduX_20250518_005919_0000.jpg";

export function SmartGenEduXLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-16 h-16"
  };

  return (
    <img 
      src={logoImage} 
      alt="SmartGenEduX Logo" 
      className={`${sizeClasses[size]} rounded-lg object-contain`}
    />
  );
}

export function SmartGenEduXBrand({ showTagline = false }: { showTagline?: boolean }) {
  return (
    <div className="flex items-center space-x-3">
      <SmartGenEduXLogo />
      <div>
        <h1 className="text-lg font-bold text-white whitespace-nowrap">SmartGenEduX</h1>
        {showTagline && <p className="text-xs text-slate-400">Happy Automation</p>}
      </div>
    </div>
  );
}