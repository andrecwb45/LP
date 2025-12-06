interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  type: 'desktop' | 'mobile';
}

export default function PortfolioCard({ title, description, imageUrl, type }: PortfolioCardProps) {
  return (
    <div className="bg-gradient-to-br from-onyx to-onyx-light rounded-3xl p-6 sm:p-8 card-zoom transition-all duration-300">
      <div className={`mb-4 sm:mb-6 overflow-hidden rounded-2xl shadow-xl ${type === 'mobile' ? 'max-w-[250px] sm:max-w-xs mx-auto' : ''}`}>
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-auto"
        />
      </div>
      
      <h3 className="font-inter-tight font-bold text-xl sm:text-2xl text-white mb-2 sm:mb-3 letter-spacing-wide">
        {title}
      </h3>
      <p className="font-inter text-mist text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
