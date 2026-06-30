import { useState, useCallback } from 'react';
import './RippleEffect.css';

function RippleEffect({ children, className = '', color = 'rgba(255,255,255,0.4)', ...props }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  }, []);

  return (
    <div
      className={`ripple-container ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripples.map(r => (
        <span
          key={r.id}
          className="ripple-effect"
          style={{
            left: r.x,
            top: r.y,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}

export default RippleEffect;
