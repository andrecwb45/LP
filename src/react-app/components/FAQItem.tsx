import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-mist-dark last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center gap-4 text-left group"
      >
        <h3 className="font-inter-tight font-bold text-xl text-onyx group-hover:text-royal transition-colors duration-300 letter-spacing-wide">
          {question}
        </h3>
        <ChevronDown 
          className={`w-6 h-6 text-gold transition-all duration-500 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <p className="font-inter text-onyx-light text-lg leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
