import { MessageCircle, Phone, Instagram, Mail } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  icon?: 'whatsapp' | 'phone' | 'instagram' | 'email' | 'none';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  variant = 'primary', 
  icon = 'none',
  children, 
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = "px-6 sm:px-8 py-3 sm:py-4 rounded-full font-manrope font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 btn-premium letter-spacing-wide w-full sm:w-auto";
  
  const variants = {
    primary: "bg-gold text-white hover:bg-gold-light shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 animate-shimmer",
    secondary: "bg-transparent border-2 border-gold text-white hover:bg-gold/10"
  };

  const IconComponent = icon === 'whatsapp' ? MessageCircle : icon === 'phone' ? Phone : icon === 'instagram' ? Instagram : icon === 'email' ? Mail : null;

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {IconComponent && <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />}
      <span className="truncate">{children}</span>
    </button>
  );
}
