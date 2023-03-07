import React from 'react';

const CustomCursor = () => {
  const cursorRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    const cursorScale = document.querySelectorAll('.cursor-scale');
    cursorScale.forEach((link) => {
      link.addEventListener('mouseleave', () => {
        cursorRef.current.classList.remove('link-super-large');
      });
      link.addEventListener('mousemove', () => {
        cursorRef.current.classList.add('link-super-large');
      });
    });
  }, []);
  return <div className="cursor" ref={cursorRef} />;
};

export default CustomCursor;
