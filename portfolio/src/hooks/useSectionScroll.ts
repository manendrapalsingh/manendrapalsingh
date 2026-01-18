import { useEffect, useState } from 'react';

export const useSectionScroll = () => {
  const [currentSection, setCurrentSection] = useState<string>('hero');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'experience', 'portfolio', 'contact'];
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (currentSection !== sections[i]) {
              setIsScrolling(true);
              setCurrentSection(sections[i]);
              
              clearTimeout(scrollTimeout);
              scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
              }, 600);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentSection, isScrolling]);

  return { currentSection, isScrolling };
};
