import { cn } from "@/lib/utils";
import { LucideIcon } from "@/components/ui/icons";

interface SmartGenModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  variant?: "exam" | "timetable" | "reports" | "questions" | "vipu" | "whatsapp" | "analytics" | "invitations";
  isActive?: boolean;
}

export function SmartGenModuleCard({
  title,
  description,
  icon: Icon,
  onClick,
  variant = "exam",
  isActive = false
}: SmartGenModuleCardProps) {
  
  const variants = {
    exam: {
      gradient: "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400",
      accent: "bg-gradient-to-r from-orange-400 to-orange-300",
      pattern: "from-orange-200/20 to-coral-100/20"
    },
    timetable: {
      gradient: "bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400", 
      accent: "bg-gradient-to-r from-teal-400 to-teal-300",
      pattern: "from-teal-200/20 to-emerald-100/20"
    },
    reports: {
      gradient: "bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400",
      accent: "bg-gradient-to-r from-pink-400 to-pink-300", 
      pattern: "from-pink-200/20 to-purple-100/20"
    },
    questions: {
      gradient: "bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-400",
      accent: "bg-gradient-to-r from-cyan-400 to-cyan-300",
      pattern: "from-cyan-200/20 to-indigo-100/20"
    },
    vipu: {
      gradient: "bg-gradient-to-br from-violet-600 via-violet-500 to-violet-400",
      accent: "bg-gradient-to-r from-purple-400 to-purple-300",
      pattern: "from-purple-200/20 to-violet-100/20"
    },
    whatsapp: {
      gradient: "bg-gradient-to-br from-green-600 via-green-500 to-green-400",
      accent: "bg-gradient-to-r from-lime-400 to-lime-300",
      pattern: "from-lime-200/20 to-green-100/20"
    },
    analytics: {
      gradient: "bg-gradient-to-br from-slate-600 via-slate-500 to-slate-400",
      accent: "bg-gradient-to-r from-gray-400 to-gray-300",
      pattern: "from-gray-200/20 to-slate-100/20"
    },
    invitations: {
      gradient: "bg-gradient-to-br from-rose-600 via-rose-500 to-rose-400",
      accent: "bg-gradient-to-r from-pink-400 to-pink-300",
      pattern: "from-pink-200/20 to-rose-100/20"
    }
  };

  const currentVariant = variants[variant];

  return (
    <div 
      onClick={onClick}
      className={cn(
        "relative group cursor-pointer overflow-hidden",
        "rounded-3xl shadow-lg hover:shadow-2xl",
        "transform transition-all duration-500 ease-out",
        "hover:scale-105 hover:-translate-y-2",
        "border border-white/20",
        isActive && "ring-4 ring-white/40 scale-105"
      )}
    >
      {/* Main gradient background inspired by your design */}
      <div className={cn("p-8 h-48 relative", currentVariant.gradient)}>
        
        {/* Background decorative pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id={`pattern-${variant}`} x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <circle cx="12.5" cy="12.5" r="1.5" fill="white" opacity="0.4"/>
                <circle cx="6.25" cy="6.25" r="0.8" fill="white" opacity="0.2"/>
                <circle cx="18.75" cy="18.75" r="0.8" fill="white" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#pattern-${variant})`} />
          </svg>
        </div>

        {/* Floating elements like your design */}
        <div className="absolute top-4 right-4 opacity-30">
          <div className="w-16 h-16 rounded-full bg-white/40 flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Icon className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 opacity-10">
          <div className="w-12 h-12 rounded-full bg-white/20" />
        </div>

        {/* Main content area */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          
          {/* Title section matching your design */}
          <div className="space-y-2">
            <div className={cn(
              "inline-block px-4 py-2 rounded-lg text-black font-bold text-xl",
              "transform -rotate-1 shadow-lg",
              currentVariant.accent
            )}>
              {title}
            </div>
          </div>

          {/* Description section */}
          <div className="bg-white/90 rounded-xl p-3 shadow-lg backdrop-blur-sm">
            <p className="text-gray-800 font-medium text-sm leading-relaxed">
              {description}
            </p>
          </div>

        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

      </div>

      {/* Bottom accent bar inspired by your design */}
      <div className={cn("h-2", currentVariant.accent)} />
      
    </div>
  );
}