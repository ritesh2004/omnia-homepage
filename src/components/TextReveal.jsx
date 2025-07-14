import React, { useState, useEffect } from 'react';

export default function TextReveal({phrases, color = 'text-white', size = 'text-3xl md:text-5xl'}) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[index];

    let typingSpeed = isDeleting ? 30 : 80;

    const typeTimeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1500); // pause before deleting
        }
      } else {
        setDisplayedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typeTimeout);
  }, [charIndex, isDeleting, index]);

  useEffect(() => {
    setVisible(false);
    const visibilityTimeout = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(visibilityTimeout);
  }, [index]);

  return (
    <h2
      className={`${size} font-bold ${color} transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {displayedText}
      <span className="border-r-2 border-white animate-pulse ml-1"></span>
    </h2>
  );
}
