import React, { useEffect, useRef } from "react";

const DynamicCursor = () => {
  const cursorContainerRef = useRef(null);
  const requestRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const previous = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor globally
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(styleElement);

    const handleMouseMove = (e) => {
      position.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop for smooth following effect
    const animate = () => {
      if (!cursorContainerRef.current) return;

      // Smooth transition using Lerp
      previous.current.x += (position.current.x - previous.current.x) * 0.15;
      previous.current.y += (position.current.y - previous.current.y) * 0.15;

      // Move the entire cursor container
      cursorContainerRef.current.style.transform = `translate(${previous.current.x}px, ${previous.current.y}px)`;

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div
      ref={cursorContainerRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      {/* Outer Circle */}
      <div className="w-8 h-8 border-2 border-lime-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      {/* Inner Circle */}
      <div className="w-3 h-2.5 bg-lime-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default DynamicCursor;
