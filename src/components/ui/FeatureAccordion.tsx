"use client";

import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import './FeatureAccordion.css';

interface AccordionItemProps {
  text: string;
  description: string;
  image: string;
}

export function FeatureAccordion({ items = [] }: { items: AccordionItemProps[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="feature-accordion-wrap" onMouseLeave={() => setActiveIndex(null)}>
      <div className="feature-accordion">
        {items.map((item, idx) => (
          <AccordionItem
            key={idx}
            {...item}
            isActive={activeIndex === idx}
            onMouseEnter={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ text, description, image, isActive, onMouseEnter }: AccordionItemProps & { isActive: boolean; onMouseEnter: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!contentRef.current) return;
    
    if (isActive) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.inOut',
        overwrite: 'auto'
      });
    }
  }, [isActive]);

  return (
    <div 
      className={`accordion__item ${isActive ? 'is-active' : ''}`} 
      onMouseEnter={onMouseEnter}
    >
      <div className="accordion__item-header">
        <span className="accordion__item-bullet">✦</span>
        {text}
      </div>
      <div className="accordion__item-content-wrap" ref={contentRef}>
        <div className="accordion__item-content">
          <div className="accordion__item-text">
            <p>{description}</p>
          </div>
          <div className="accordion__item-image-wrap">
            <div className="accordion__item-image" style={{ backgroundImage: `url(${image})` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
