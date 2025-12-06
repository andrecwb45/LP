import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
}

export default function TestimonialCard({ name, role, content, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 card-premium border border-mist-dark">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
        ))}
      </div>
      
      <p className="font-inter text-onyx-light text-lg leading-relaxed mb-6 italic">
        "{content}"
      </p>
      
      <div className="border-t border-mist-dark pt-4">
        <h4 className="font-inter-tight font-bold text-onyx text-lg">
          {name}
        </h4>
        <p className="font-manrope text-onyx-light/70 text-sm mt-1">
          {role}
        </p>
      </div>
    </div>
  );
}
