import React from 'react';
import { Button } from '../ui/Button';

interface CarouselSlideProps {
  title: string;
  description: string;
  ctaText: string;
  imageUrl: string;
  onCtaClick: () => void;
  isActive: boolean;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  title,
  description,
  ctaText,
  imageUrl,
  onCtaClick,
  isActive,
}) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="h-full grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">{title}</h2>
          <p className="text-xl text-gray-600">{description}</p>
          <Button onClick={onCtaClick}>{ctaText}</Button>
        </div>
        <div className="relative h-full">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg shadow-2xl object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};