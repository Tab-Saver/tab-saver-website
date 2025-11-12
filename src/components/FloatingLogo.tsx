import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import yellowFolderIcon from 'figma:asset/yellow-folder-bookmark-icon.png';

export default function FloatingLogo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-10 right-10 w-20 h-20 pointer-events-none z-10"
      animate={{
        x: position.x,
        y: position.y,
        rotate: [0, 360],
      }}
      transition={{
        x: { type: 'spring', stiffness: 50, damping: 10 },
        y: { type: 'spring', stiffness: 50, damping: 10 },
        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
      }}
    >
      <img src={yellowFolderIcon} alt="Tab Saver" className="w-full h-full" />
    </motion.div>
  );
}