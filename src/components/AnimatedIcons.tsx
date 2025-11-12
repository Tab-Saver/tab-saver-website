import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Sparkles, RotateCcw, Bookmark, Pin, Tag, FolderOpen, Brain, Save, Clock } from 'lucide-react';

interface FloatingIcon {
  id: number;
  Icon: any;
  x: number;
  delay: number;
}

export default function AnimatedIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const iconComponents = [Sparkles, RotateCcw, Bookmark, Pin, Tag, FolderOpen, Brain, Save, Clock];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIcon = iconComponents[Math.floor(Math.random() * iconComponents.length)];
      const randomX = Math.random() * 80 + 10; // 10% to 90% from left
      
      setIcons((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          Icon: randomIcon,
          x: randomX,
          delay: 0,
        },
      ]);

      // Remove old icons after animation completes
      setTimeout(() => {
        setIcons((prev) => prev.slice(1));
      }, 4000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          initial={{ y: '100%', opacity: 0, scale: 0.5 }}
          animate={{ 
            y: '-100%', 
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.8],
          }}
          transition={{
            duration: 4,
            ease: 'linear',
            opacity: {
              times: [0, 0.1, 0.7, 1],
              duration: 4,
            },
          }}
          className="absolute"
          style={{ left: `${icon.x}%` }}
        >
          <icon.Icon className="w-8 h-8 text-white opacity-60" />
        </motion.div>
      ))}
    </div>
  );
}
