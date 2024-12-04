import React from 'react';

interface CarouselDotsProps {
  total: number;
  active: number;
  onDotClick: (index: number) => void;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({
  total,
  active,
  onDotClick,
}) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            active === index
              ? 'bg-blue-600 scale-110'
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};