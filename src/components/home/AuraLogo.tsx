import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: string;
  y: string;
  size: number;
  color: string;
}

const particles: Particle[] = [
  { id: 1, x: '-8px', y: '28px', size: 8, color: '#FFFFFF' },
  { id: 2, x: '75px', y: '32px', size: 6, color: '#E9D4FF' },
  { id: 3, x: '63px', y: '-6px', size: 8, color: '#FCCEE8' },
  { id: 4, x: '-1px', y: '55px', size: 4, color: '#FFFFFF' },
  { id: 5, x: '1px', y: '68px', size: 6, color: '#DAB2FF' },
  { id: 6, x: '32px', y: '77px', size: 4, color: '#FDA5D5' },
];

export const AuraLogo = () => {
  return (
    <div className="relative w-20 h-20">
      {/* Main Orb */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(98.99% 98.99% at 30% 30%, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(135deg, #E879F9 0%, #A855F7 30%, #D946EF 60%, #A855F7 100%)',
          opacity: 0.9,
          boxShadow: '0px 10px 40px rgba(168, 85, 247, 0.3), 0px 0px 60px rgba(168, 85, 247, 0.4), 0px 0px 100px rgba(168, 85, 247, 0.2), inset -5px -5px 20px rgba(0, 0, 0, 0.2), inset 5px 5px 20px rgba(255, 255, 255, 0.3)',
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            boxShadow: `0px 0px ${particle.size}px ${particle.color}`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3 + particle.id * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.2,
          }}
        />
      ))}
    </div>
  );
};