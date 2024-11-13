"use client";

import React, { useEffect, useRef, useState } from "react";

interface SmoothScrollTextProps {
  children: React.ReactNode;
  threshold?: number;
}

const SmoothScrollText: React.FC<SmoothScrollTextProps> = ({
  children,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerTarget = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (observerTarget) {
      observer.observe(observerTarget);
    }

    return () => {
      if (observerTarget) {
        observer.unobserve(observerTarget);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export interface Section {
  title?: string;
  content: string[];
}

interface ScrollTextProps {
  sections: Section[];
}

const ScrollTextSection: React.FC<{ section: Section }> = ({ section }) => (
  <SmoothScrollText>
    {section.title && (
      <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{section.title}</h2>
    )}
    {section.content.map((paragraph, index) => (
      <p
        key={index}
        className={`text-base md:text-lg ${
          !section.title && index === 0 ? "font-medium italic leading-relaxed text-muted-foreground" : ""
        } ${index > 0 ? "mt-3" : ""}`}
      >
        {paragraph}
      </p>
    ))}
  </SmoothScrollText>
);

export function ScrollText({ sections }: ScrollTextProps) {
  return (
    <div className="min-h-screen p-4 md:p-8 space-y-8 md:space-y-12 max-w-4xl mx-auto">
      {sections.map((section, index) => (
        <ScrollTextSection key={index} section={section} />
      ))}
    </div>
  );
}