// Simple icon components to replace lucide-react and fix build timeout
import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export const ChevronLeft = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>‹</span>
);

export const ChevronRight = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>›</span>
);

export const ChevronDown = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>▼</span>
);

export const X = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>×</span>
);

export const Search = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🔍</span>
);

export const Menu = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>☰</span>
);

export const Home = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🏠</span>
);

export const User = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>👤</span>
);

export const Settings = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⚙️</span>
);

export const Calendar = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📅</span>
);

export const BookOpen = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📖</span>
);

export const BarChart = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📊</span>
);

export const BarChart3 = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📊</span>
);

export const Users = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>👥</span>
);

export const FileText = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📄</span>
);

export const Check = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>✓</span>
);

export const Plus = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>+</span>
);

export const Minus = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>−</span>
);

export const Edit = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>✏️</span>
);

export const Trash = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🗑️</span>
);

export const Bell = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🔔</span>
);

export const Mail = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>✉️</span>
);

export const Phone = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📞</span>
);

export const Clock = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🕐</span>
);

export const Star = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⭐</span>
);

export const Heart = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>❤️</span>
);

export const Download = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⬇️</span>
);

export const Upload = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⬆️</span>
);

export const Save = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>💾</span>
);

export const Copy = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📋</span>
);

export const Share = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📤</span>
);

export const Lock = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🔒</span>
);

export const Unlock = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🔓</span>
);

export const Eye = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>👁️</span>
);

export const EyeOff = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🙈</span>
);

export const Info = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>ℹ️</span>
);

export const Warning = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⚠️</span>
);

export const CheckCircle = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>✅</span>
);

export const XCircle = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>❌</span>
);

export const MoreHorizontal = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⋯</span>
);

export const Dot = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>•</span>
);

export const GripVertical = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⋮</span>
);

export const Circle = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>○</span>
);

export const ArrowRight = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>→</span>
);

export const ExternalLink = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>↗</span>
);

export const MoreVertical = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⋮</span>
);

export const LogOut = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⇥</span>
);

export const UserCheck = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>👤✓</span>
);

export const Shield = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🛡️</span>
);

export const FileQuestion = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📄?</span>
);

export const MessageSquare = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>💬</span>
);

export const Video = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🎥</span>
);

export const Send = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📨</span>
);

export const LayoutDashboard = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📊</span>
);

export const ClipboardList = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📋</span>
);

export const Bot = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🤖</span>
);

export const Brain = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🧠</span>
);

export const GraduationCap = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🎓</span>
);

export const UserCheck2 = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>👤✅</span>
);

export const DollarSign = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>💲</span>
);

export const School = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🏫</span>
);

export const FileSpreadsheet = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📊</span>
);

export const MessageCircle = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>💬</span>
);

export const HelpCircle = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>❓</span>
);

export const RefreshCw = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🔄</span>
);

export const Filter = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🔽</span>
);

export const SortAsc = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>↑</span>
);

export const SortDesc = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>↓</span>
);

export const AlertTriangle = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⚠️</span>
);

export const CheckCircle2 = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>✅</span>
);

export const CalendarDays = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📅</span>
);

export const Clock3 = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🕐</span>
);

export const MapPin = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📍</span>
);

export const Target = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🎯</span>
);

export const TrendingUp = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📈</span>
);

export const Award = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🏆</span>
);

export const Users2 = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>👥</span>
);

export const BookOpenCheck = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📖✓</span>
);

export const Zap = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⚡</span>
);

export const Sparkles = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>✨</span>
);

export const Lightbulb = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>💡</span>
);

export const Palette = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🎨</span>
);

export const FileImage = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🖼️</span>
);

export const PresentationChart = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📊</span>
);

export const Presentation = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📽️</span>
);

export const CalendarPlus = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📅+</span>
);

export const UserPen = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>👤✏️</span>
);

export const Building = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🏢</span>
);

export const CreditCard = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>💳</span>
);

export const Receipt = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🧾</span>
);

export const BanknoteIcon = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>💵</span>
);

export const IndianRupee = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>₹</span>
);

export const Banknote = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>💵</span>
);

export const PiggyBank = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🐷</span>
);

export const Wallet = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>👛</span>
);

export const Calculator = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🧮</span>
);

export const QrCode = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📱</span>
);

export const Smartphone = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📱</span>
);

export const Landmark = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🏛️</span>
);

export const Calendar1 = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📅</span>
);

export const Clock4 = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🕐</span>
);

export const CheckSquare = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>☑️</span>
);

export const Square = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>☐</span>
);

export const Repeat = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🔁</span>
);

export const ArrowLeft = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>←</span>
);

export const ArrowDown = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>↓</span>
);

export const ArrowUp = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>↑</span>
);

export const ChevronUp = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>▲</span>
);

export const Trophy = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🏆</span>
);

export const FileDown = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📥</span>
);

export const Wand2 = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🪄</span>
);

export const Layers = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📚</span>
);

export const Book = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📖</span>
);

export const Loader2 = ({ className }: IconProps) => (
  <span className={cn("inline-block animate-spin", className)}>⟳</span>
);

export const Share2 = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📤</span>
);

export const AlertCircle = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⚠️</span>
);

export const PlayCircle = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>▶️</span>
);

export const PauseCircle = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⏸️</span>
);

export const StopCircle = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⏹️</span>
);

export const Mic = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🎤</span>
);

export const MicOff = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🔇</span>
);

export const Camera = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📷</span>
);

export const CameraOff = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📷❌</span>
);

export const Play = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>▶️</span>
);

export const Database = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🗄️</span>
);

export const Activity = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📈</span>
);

export const PieChart = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📊</span>
);

export const LineChart = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📈</span>
);

// Additional icons needed for complete build
export const Crown = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>👑</span>
);

export const Gift = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🎁</span>
);

export const PartyPopper = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🎉</span>
);

export const Shuffle = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🔀</span>
);

export const Edit3 = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>✏️</span>
);

export const Trash2 = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>🗑️</span>
);

export const CalendarIcon = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📅</span>
);

export const Clipboard = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>📋</span>
);

export const PanelLeft = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⊞</span>
);

export const LucideIcon = ({ className }: IconProps) => (
  <span className={cn("inline-block", className)}>⚡</span>
);

// Complete set of remaining icons to fix build
export const Music = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🎵</span> );
export const Pause = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⏸️</span> );
export const Stop = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⏹️</span> );
export const Rewind = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⏪</span> );
export const FastForward = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⏩</span> );
export const SkipBack = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⏮️</span> );
export const SkipForward = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⏭️</span> );
export const Volume = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🔊</span> );
export const VolumeX = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🔇</span> );
export const Image = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🖼️</span> );
export const FileVideo = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🎬</span> );
export const FileAudio = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🎵</span> );
export const Folder = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>📁</span> );
export const FolderOpen = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>📂</span> );
export const Archive = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🗄️</span> );
export const FileCode = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>📄</span> );
export const Code = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>💻</span> );
export const Terminal = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⌨️</span> );
export const Server = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🖥️</span> );
export const Globe = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🌐</span> );
export const Wifi = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>📶</span> );
export const Bluetooth = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>📶</span> );
export const Battery = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🔋</span> );
export const Power = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⚡</span> );
export const Plug = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🔌</span> );
export const Cpu = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🔧</span> );
export const HardDrive = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>💾</span> );
export const Monitor = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🖥️</span> );
export const Printer = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🖨️</span> );
export const Scanner = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>📠</span> );
export const Mouse = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🖱️</span> );
export const Keyboard = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⌨️</span> );
export const Headphones = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🎧</span> );
export const Gamepad = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🎮</span> );
export const Tv = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>📺</span> );
export const Radio = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>📻</span> );
export const Maximize = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⛶</span> );
export const Minimize = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⊟</span> );
export const Maximize2 = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⛶</span> );
export const Minimize2 = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⊟</span> );
export const Move = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⤢</span> );
export const Resize = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⤡</span> );
export const RotateCw = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>↻</span> );
export const RotateCcw = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>↺</span> );
export const FlipHorizontal = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⇄</span> );
export const FlipVertical = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>⇅</span> );

export const Key = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>🔑</span> );
export const Cloud = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>☁️</span> );
export const Snowflake = ({ className }: IconProps) => ( <span className={cn("inline-block", className)}>❄️</span> );