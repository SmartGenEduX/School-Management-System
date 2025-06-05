import { cn } from "@/lib/utils";
import { LucideIcon } from "@/components/ui/icons";

interface ProfessionalButtonProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  onClick: () => void;
  variant?: "primary" | "secondary" | "accent" | "success";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProfessionalButton({
  title,
  subtitle,
  icon: Icon,
  onClick,
  variant = "primary",
  size = "md",
  className
}: ProfessionalButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-gray-800 border border-gray-200 shadow-md hover:shadow-lg",
    accent: "bg-gradient-to-r from-orange-400 to-orange-300 hover:from-orange-500 hover:to-orange-400 text-white shadow-lg hover:shadow-xl",
    success: "bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white shadow-lg hover:shadow-xl"
  };

  const sizes = {
    sm: "p-4 rounded-xl",
    md: "p-6 rounded-2xl",
    lg: "p-8 rounded-3xl"
  };

  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const textSizes = {
    sm: { title: "text-lg", subtitle: "text-sm" },
    md: { title: "text-2xl", subtitle: "text-base" },
    lg: { title: "text-3xl", subtitle: "text-lg" }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:-translate-y-1",
        "border-2 border-transparent",
        "group cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="smartgen-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#smartgen-pattern)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center space-x-4">
        {/* Icon Container */}
        <div className={cn(
          "flex-shrink-0 p-3 rounded-full",
          "bg-white/20 backdrop-blur-sm",
          "group-hover:bg-white/30 transition-all duration-300"
        )}>
          <Icon className={cn(iconSizes[size], "drop-shadow-sm")} />
        </div>

        {/* Text Container */}
        <div className="flex-1 text-left">
          <h3 className={cn(
            "font-bold tracking-tight",
            textSizes[size].title,
            "drop-shadow-sm"
          )}>
            {title}
          </h3>
          {subtitle && (
            <p className={cn(
              "opacity-90 font-medium",
              textSizes[size].subtitle,
              "drop-shadow-sm"
            )}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-pulse" />
      </div>
    </button>
  );
}

// Module-specific button variants
export function ExamManagementButton({ onClick }: { onClick: () => void }) {
  return (
    <ProfessionalButton
      title="Exam Management"
      subtitle="Schedule, Invigilation & Distribution"
      icon={() => (
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">📋</span>
        </div>
      )}
      onClick={onClick}
      variant="accent"
      size="lg"
    />
  );
}

export function TimetableButton({ onClick }: { onClick: () => void }) {
  return (
    <ProfessionalButton
      title="Timetable Manager"
      subtitle="Smart Scheduling & Class Management"
      icon={() => (
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">📅</span>
        </div>
      )}
      onClick={onClick}
      variant="primary"
      size="lg"
    />
  );
}

export function ReportsButton({ onClick }: { onClick: () => void }) {
  return (
    <ProfessionalButton
      title="Report Tracker"
      subtitle="Student Performance & Analytics"
      icon={() => (
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">📊</span>
        </div>
      )}
      onClick={onClick}
      variant="success"
      size="lg"
    />
  );
}