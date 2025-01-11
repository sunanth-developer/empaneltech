import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = ({title, description }) => {
  const canvasRef = useRef(null);
  const headerRef = useRef(null);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    const header = headerRef.current;
    const ctx = canvas.getContext('2d');
    let dots = [];
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = header.offsetWidth;
      canvas.height = header.offsetHeight;
    };

    const initDots = () => {
      dots = [];
      const numberOfDots = 150;
      for (let i = 0; i < numberOfDots; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        dots.push({
          x: x,
          y: y,
          originalX: x,
          originalY: y,
          baseX: x,
          baseY: y,
          radius: 4,
          speed: 0.15,
          maxMoveDistance: 5,
          velocityX: (Math.random() - 0.5) * 2,
          velocityY: (Math.random() - 0.5) * 2,
          moveSpeed: 0.5 + Math.random() * 0.5,
          isInPattern: false,
          patternId: null,
          distanceToMouse: Infinity,
          elasticity: 0.25
        });
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Reset pattern states
      dots.forEach(dot => {
        dot.isInPattern = false;
        dot.patternId = null;
        dot.distanceToMouse = Infinity;
      });

      // Identify patterns and calculate distances to mouse
      let patternId = 0;
      
      // Create a separate function outside the loop
      const findConnectedDots = (startDot, currentPatternId) => {
        const connectedDots = [startDot];
        let checkIndex = 0;
        
        while (checkIndex < connectedDots.length) {
          const currentDot = connectedDots[checkIndex];
          
          dots.forEach((otherDot) => {
            if (!otherDot.patternId) {
              const dx = otherDot.x - currentDot.x;
              const dy = otherDot.y - currentDot.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 120) {
                otherDot.patternId = currentPatternId;
                otherDot.distanceToMouse = Math.sqrt(
                  Math.pow(mouse.x - otherDot.x, 2) + 
                  Math.pow(mouse.y - otherDot.y, 2)
                );
                connectedDots.push(otherDot);
              }
            }
          });
          
          checkIndex++;
        }
      };

      // Use the separate function in the main loop
      dots.forEach((dot) => {
        if (!dot.patternId) {
          patternId++;
          dot.patternId = patternId;
          
          // Calculate pattern's distance to mouse
          const dx = mouse.x - dot.x;
          const dy = mouse.y - dot.y;
          dot.distanceToMouse = Math.sqrt(dx * dx + dy * dy);

          // Find connected dots using the separate function
          findConnectedDots(dot, patternId);
        }
      });

      // Find the nearest pattern
      let nearestPatternId = null;
      let minPatternDistance = Infinity;
      
      dots.forEach(dot => {
        if (dot.patternId && dot.distanceToMouse < minPatternDistance) {
          minPatternDistance = dot.distanceToMouse;
          nearestPatternId = dot.patternId;
        }
      });

      // Animate dots
      dots.forEach((dot, index) => {
        // Natural movement
        dot.baseX += dot.velocityX * dot.moveSpeed;
        dot.baseY += dot.velocityY * dot.moveSpeed;

        // Bounce off walls
        if (dot.baseX < 0 || dot.baseX > canvas.width) {
          dot.velocityX *= -1;
          dot.baseX = Math.max(0, Math.min(canvas.width, dot.baseX));
        }
        if (dot.baseY < 0 || dot.baseY > canvas.height) {
          dot.velocityY *= -1;
          dot.baseY = Math.max(0, Math.min(canvas.height, dot.baseY));
        }

        // Move only the nearest pattern
        if (dot.patternId === nearestPatternId && minPatternDistance < 200) {
          const dx = mouse.x - dot.baseX;
          const dy = mouse.y - dot.baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const force = Math.min((200 - distance) / 200, 0.5);
          
          // Calculate movement with distance preservation
          const moveX = dx * force * dot.speed;
          const moveY = dy * force * dot.speed;
          
          // Apply movement with elasticity
          dot.x += (dot.baseX + moveX * dot.elasticity - dot.x) * 0.1;
          dot.y += (dot.baseY + moveY * dot.elasticity - dot.y) * 0.1;
        } else {
          // Return to base position
          dot.x += (dot.baseX - dot.x) * 0.1;
          dot.y += (dot.baseY - dot.y) * 0.1;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();

        // Connect nearby dots
        dots.forEach((otherDot, otherIndex) => {
          if (index !== otherIndex) {
            const dx = otherDot.x - dot.x;
            const dy = otherDot.y - dot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(otherDot.x, otherDot.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance/120)})`;
              ctx.lineWidth = 1.5;
              ctx.stroke();
            }
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    setCanvasSize();
    initDots();
    
    // Event listeners
    window.addEventListener('resize', () => {
      setCanvasSize();
      initDots();
    });
    header.addEventListener('mousemove', handleMouseMove);
    
    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      header.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      <canvas ref={canvasRef} className="dots-canvas" />
      <div className="header-content">
        <div className="text-container">
          <div className="text-card">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
