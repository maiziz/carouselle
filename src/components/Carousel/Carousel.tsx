import React, { useState, useEffect, useCallback } from 'react';
import { CarouselSlide } from './CarouselSlide';
import { CarouselDots } from './CarouselDots';
import { CarouselNavigation } from './CarouselNavigation';

const SLIDES = [
  {
    title: 'Streamline Your Workflow',
    description: 'Automate repetitive tasks and boost productivity with our intelligent workflow automation.',
    ctaText: 'Start Free Trial',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Make data-driven decisions with comprehensive analytics and beautiful visualizations.',
    ctaText: 'View Demo',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Seamless Team Collaboration',
    description: 'Connect your team with powerful collaboration tools and real-time communication.',
    ctaText: 'Learn More',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Rest easy with bank-level encryption and advanced security features.',
    ctaText: 'See Security Features',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Scale with Confidence',
    description: 'Our infrastructure grows with your business, ensuring reliable performance at any scale.',
    ctaText: 'Start Scaling',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
  },
];

export const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % SLIDES.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  const handleCtaClick = (index: number) => {
    console.log(`CTA clicked for slide ${index + 1}`);
    // Implement your CTA actions here
  };

  return (
    <div
      className="relative h-[600px] bg-gray-50"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative h-full overflow-hidden">
        {SLIDES.map((slide, index) => (
          <CarouselSlide
            key={index}
            {...slide}
            isActive={index === activeIndex}
            onCtaClick={() => handleCtaClick(index)}
          />
        ))}
      </div>
      
      <CarouselNavigation
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
      
      <div className="absolute bottom-6 w-full">
        <CarouselDots
          total={SLIDES.length}
          active={activeIndex}
          onDotClick={setActiveIndex}
        />
      </div>
    </div>
  );
};