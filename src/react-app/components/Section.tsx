interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'royal' | 'imperial' | 'onyx' | 'mist';
  id?: string;
}

export default function Section({ 
  children, 
  className = '',
  background = 'white',
  id
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    royal: 'bg-gradient-to-br from-royal to-royal-dark',
    imperial: 'bg-gradient-to-br from-imperial to-imperial-dark',
    onyx: 'bg-gradient-to-br from-onyx to-onyx-light',
    mist: 'bg-mist'
  };

  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${backgrounds[background]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
