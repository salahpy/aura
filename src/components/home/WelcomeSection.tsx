import { AuraLogo } from './AuraLogo';

export const WelcomeSection = () => {
  return (
    <div className="flex flex-col items-center gap-2 mb-8">
      <div className="relative mb-6">
        <AuraLogo />
      </div>
      <div className="flex items-center justify-center gap-2 text-center max-[768px]:flex-col">
        <h1 className="text-[48px] max-[768px]:text-[36px] font-bold leading-[48px] max-[768px]:leading-[36px] tracking-[0.35px] text-text-primary dark:text-white">
          Welcome to
        </h1>
        <h1 
          className="text-[48px] max-[768px]:text-[36px] font-bold leading-[48px] max-[768px]:leading-[36px] tracking-[0.35px] animate-gradient"
          style={{
            background: 'linear-gradient(90deg, #AD46FF 0%, #F6339A 25%, #AD46FF 50%, #F6339A 75%, #AD46FF 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shift 3s ease infinite',
          }}
        >
          Aura
        </h1>
      </div>
      <p className="text-[30px] max-[768px]:text-[24px] leading-9 max-[768px]:leading-7 tracking-[0.4px] text-text-primary dark:text-white mt-2 text-right max-[768px]:text-center w-full">
        How can I help you today?
      </p>

      <style>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};