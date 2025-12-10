import { motion, AnimatePresence } from 'motion/react';
import { Wifi, Battery, Signal, Radio } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

type CardType = 'hotel' | 'spa' | 'parking';

interface PassCard {
  id: CardType;
  title: string;
  subtitle: string;
  roomOrZone: string;
  gradient: string;
  textColor: string;
  labelTop: string;
  labelBottom1: string;
  labelBottom2: string;
  valueBottom1: string;
  valueBottom2: string;
  icon: 'key' | 'nfc';
  nfcColor: string;
}

const allCards: PassCard[] = [
  {
    id: 'hotel',
    title: 'Le Grand Hôtel',
    subtitle: 'Clé de chambre',
    roomOrZone: '503',
    gradient: 'linear-gradient(135deg, #1A4B6F 0%, #2E6B8F 100%)',
    textColor: '#FFFFFF',
    labelTop: 'Chambre',
    labelBottom1: 'Séjour',
    labelBottom2: 'Client',
    valueBottom1: '13–15 Nov',
    valueBottom2: 'M. Dupont',
    icon: 'key',
    nfcColor: '#007AFF',
  },
  {
    id: 'spa',
    title: 'Spa Access',
    subtitle: 'WELLNESS PASS',
    roomOrZone: 'Premium',
    gradient: 'linear-gradient(135deg, #1A4B8E 0%, #2563EB 50%, #3B82F6 100%)',
    textColor: '#FFFFFF',
    labelTop: 'Zone',
    labelBottom1: 'Valid From',
    labelBottom2: 'Expires',
    valueBottom1: '13 NOV',
    valueBottom2: '15 NOV',
    icon: 'nfc',
    nfcColor: '#3B82F6',
  },
  {
    id: 'parking',
    title: 'Parking',
    subtitle: 'VALET PARKING',
    roomOrZone: 'Level 2',
    gradient: 'linear-gradient(135deg, #C0392B 0%, #E74C3C 50%, #EC7063 100%)',
    textColor: '#FFFFFF',
    labelTop: 'Zone',
    labelBottom1: 'Valid From',
    labelBottom2: 'Expires',
    valueBottom1: '13 NOV',
    valueBottom2: '15 NOV',
    icon: 'nfc',
    nfcColor: '#E74C3C',
  },
];

export function WalletCard() {
  const [showNFC, setShowNFC] = useState(false);
  const [currentTime, setCurrentTime] = useState('9:41');
  const [activeCard, setActiveCard] = useState<CardType>('hotel');
  const cardRef = useRef<HTMLDivElement>(null);

  // Simulate NFC animation after 2s
  useEffect(() => {
    const timer = setTimeout(() => setShowNFC(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Current time
  useEffect(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}`);
  }, []);

  const handleCardClick = (cardId: CardType) => {
    setActiveCard(cardId);
  };

  const activeCardData = allCards.find(card => card.id === activeCard)!;
  const stackedCards = allCards.filter(card => card.id !== activeCard);

  return (
    <div
      className="relative w-full py-4 md:py-6 lg:py-8"
      style={{
        background: 'transparent',
        minHeight: 'auto',
      }}
    >

      {/* Content wrapper */}
      <div className="relative flex flex-col items-center justify-center px-4 md:px-6">
        {/* Pulsing NFC ambient rings - Outside phone */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`ambient-${i}`}
              className="absolute rounded-full"
              style={{
                width: '420px',
                height: '420px',
                border: '2px solid rgba(195, 163, 110, 0.15)',
              }}
              animate={{
                scale: [1, 1.15, 1.3],
                opacity: [0.2, 0.1, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: i * 1.2,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        {/* Pedestal shadow under phone */}
        <motion.div
          className="absolute"
          style={{
            width: '480px',
            height: '52px',
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '40%',
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(28, 28, 30, 0.14) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          aria-hidden="true"
        />

        {/* iPhone 15 Pro Mockup - Enhanced with parallax/tilt */}
        <motion.div
          ref={cardRef}
          role="img"
          aria-label="iPhone 15 Pro affichant une clé d'hôtel dans Apple Wallet"
          className="relative w-[260px] sm:w-[280px] md:w-[320px] lg:w-[340px] h-[531px] sm:h-[572px] md:h-[653px] lg:h-[694px] rounded-[42px] sm:rounded-[46px] md:rounded-[50px] lg:rounded-[54px] bg-black overflow-hidden mx-auto"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{
            scale: 1.02,
            rotateY: 2,
            rotateX: -1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            scale: { type: 'spring', stiffness: 300, damping: 25 },
          }}
          style={{
            boxShadow: '0 32px 96px rgba(0, 0, 0, 0.18), 0 12px 40px rgba(0, 0, 0, 0.14), 0 0 0 0.5px rgba(255, 255, 255, 0.12) inset',
            transformStyle: 'preserve-3d',
            perspective: '1200px',
          }}
        >
          {/* Glass reflection overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-[100] rounded-[42px] sm:rounded-[46px] md:rounded-[50px] lg:rounded-[54px]"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 45%, rgba(255, 255, 255, 0.04) 100%)',
              mixBlendMode: 'overlay',
            }}
            aria-hidden="true"
          />
          {/* Screen - WHITE BACKGROUND */}
          <div
            className="absolute inset-[2.5px] sm:inset-[2.8px] md:inset-[3px] rounded-[38px] sm:rounded-[44px] md:rounded-[47px] lg:rounded-[51px] overflow-hidden"
            style={{ background: '#FFFFFF' }}
          >
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-[40px] sm:h-[46px] md:h-[50px] lg:h-[54px] z-50 px-3 sm:px-4 md:px-5 lg:px-6 flex items-center justify-between">
              <span
                className="text-[13px] sm:text-[14px] md:text-[15px]"
                style={{
                  color: '#000000',
                  fontWeight: 600,
                }}
              >
                {currentTime}
              </span>

              {/* Dynamic Island */}
              <div
                className="absolute left-1/2 top-[7px] sm:top-[8px] md:top-[9px] lg:top-[10px] -translate-x-1/2 w-[96px] h-[28px] sm:w-[104px] sm:h-[30px] md:w-[115px] md:h-[34px] lg:w-[126px] lg:h-[37px] rounded-full"
                style={{
                  background: '#000000',
                }}
              />

              <div className="flex items-center gap-1 sm:gap-1.5" aria-label="État du téléphone">
                <Signal className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px]" style={{ color: '#000000' }} strokeWidth={2.5} aria-label="Signal réseau" />
                <Wifi className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] lg:w-[17px] lg:h-[17px]" style={{ color: '#000000' }} strokeWidth={2.5} aria-label="WiFi" />
                <Battery className="w-[19px] h-[9px] sm:w-[20px] sm:h-[10px] md:w-[23px] md:h-[11px] lg:w-[25px] lg:h-[12px]" style={{ color: '#000000' }} strokeWidth={2.5} aria-label="Batterie" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-[50px] sm:pt-[56px] md:pt-[64px] lg:pt-[70px] px-3.5 sm:px-4 md:px-4.5 lg:px-5">
              {/* Active Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  className="relative rounded-[13px] sm:rounded-[14px] md:rounded-[15px] lg:rounded-[16px] overflow-hidden shadow-xl h-[150px] sm:h-[165px] md:h-[185px] lg:h-[200px]"
                  style={{
                    background: activeCardData.gradient,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Shine effect for non-hotel cards */}
                  {activeCardData.icon === 'nfc' && (
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                      }}
                    />
                  )}

                  {/* Active Badge - Top Right */}
                  <motion.div
                    className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                      boxShadow: '0 2px 8px rgba(16, 185, 129, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.3)',
                    }}
                    initial={{ opacity: 0, scale: 0.8, x: 10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-1">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-white"
                        animate={{
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <span
                        className="text-[8px] sm:text-[9px] uppercase tracking-wider"
                        style={{
                          color: '#FFFFFF',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        ACTIVE
                      </span>
                    </div>
                  </motion.div>

                  {/* Card Header */}
                  <div className="absolute top-0 left-0 right-0 px-4 sm:px-5 pt-3 sm:pt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p
                          className="text-[10px] sm:text-[11px] uppercase tracking-wider mb-0.5 sm:mb-1"
                          style={{
                            color: activeCardData.icon === 'key' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.7)',
                            fontWeight: activeCardData.icon === 'key' ? 600 : 700,
                            letterSpacing: activeCardData.icon === 'key' ? '0.02em' : '0.1em',
                          }}
                        >
                          {activeCardData.subtitle}
                        </p>
                        <h3
                          className="text-[18px] sm:text-[20px]"
                          style={{
                            color: activeCardData.textColor,
                            fontWeight: 700,
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {activeCardData.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Card Middle */}
                  <div className="absolute top-[62px] sm:top-[70px] left-4 sm:left-5 right-4 sm:right-5">
                    <div className="space-y-2 sm:space-y-3">
                      <div>
                        <p
                          className="text-[9px] sm:text-[10px] uppercase tracking-wide mb-0.5"
                          style={{
                            color: activeCardData.icon === 'key' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.6)',
                            fontWeight: 600,
                          }}
                        >
                          {activeCardData.labelTop}
                        </p>
                        <p
                          className="text-[23px] sm:text-[26px]"
                          style={{
                            color: '#FFFFFF',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                          }}
                        >
                          {activeCardData.roomOrZone}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-5 right-4 sm:right-5 flex items-end justify-between">
                    <div>
                      <p
                        className="text-[9px] sm:text-[10px] uppercase tracking-wide mb-0.5"
                        style={{
                          color: activeCardData.icon === 'key' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.6)',
                          fontWeight: 600,
                        }}
                      >
                        {activeCardData.labelBottom1}
                      </p>
                      <p
                        className="text-[12px] sm:text-[13px]"
                        style={{
                          color: '#FFFFFF',
                          fontWeight: activeCardData.icon === 'key' ? 500 : 600,
                          letterSpacing: activeCardData.icon === 'key' ? 'normal' : '0.05em',
                        }}
                      >
                        {activeCardData.valueBottom1}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className="text-[9px] sm:text-[10px] uppercase tracking-wide mb-0.5"
                        style={{
                          color: activeCardData.icon === 'key' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.6)',
                          fontWeight: 600,
                        }}
                      >
                        {activeCardData.labelBottom2}
                      </p>
                      <p
                        className="text-[12px] sm:text-[13px]"
                        style={{
                          color: '#FFFFFF',
                          fontWeight: activeCardData.icon === 'key' ? 500 : 600,
                          letterSpacing: activeCardData.icon === 'key' ? 'normal' : '0.05em',
                        }}
                      >
                        {activeCardData.valueBottom2}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* NFC Animation - Color changes based on active card */}
              <AnimatePresence>
                {showNFC && (
                  <motion.div
                    key={activeCard}
                    className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Pulsing NFC Icon */}
                    <div className="relative">
                      {/* Pulse rings - Dynamic color */}
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 rounded-full"
                          style={{
                            border: `2px solid ${activeCardData.nfcColor}`,
                            opacity: 0.3,
                          }}
                          animate={{
                            scale: [1, 2, 2.5],
                            opacity: [0.3, 0.15, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: 'easeOut',
                          }}
                        />
                      ))}

                      {/* NFC Icon - Dynamic color */}
                      <motion.div
                        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                        style={{
                          border: `3px solid ${activeCardData.nfcColor}`,
                          background: '#FFFFFF',
                          boxShadow: `0 4px 16px ${activeCardData.nfcColor}40`,
                        }}
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Radio
                          className="w-7 h-7 sm:w-8 sm:h-8"
                          style={{ color: activeCardData.nfcColor }}
                          strokeWidth={2}
                        />
                      </motion.div>
                    </div>

                    <motion.p
                      className="mt-4 sm:mt-5 md:mt-6 text-center text-[14px] sm:text-[15px] md:text-[16px]"
                      style={{
                        color: '#8E8E93',
                        fontWeight: 400,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Approchez du lecteur
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Stacked cards at bottom - Interactive */}
              <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-5 right-4 sm:right-5">
                <div className="relative space-y-1">
                  {stackedCards.map((card, i) => (
                    <motion.button
                      key={card.id}
                      onClick={() => handleCardClick(card.id)}
                      className="h-[38px] sm:h-[42px] md:h-[44px] rounded-t-[13px] sm:rounded-t-[14px] mx-auto block cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        width: `${96 - i * 4}%`,
                        background: card.gradient,
                        boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.15), 0 -1px 3px rgba(0,0,0,0.1)',
                        opacity: 0.85,
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 0.85, y: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-3 sm:px-4 pt-2 sm:pt-2.5 flex items-center justify-between">
                        <p className="text-white text-[10px] sm:text-[11px]" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
                          {card.title}
                        </p>
                        {card.icon === 'nfc' ? (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="opacity-60">
                            <rect x="6" y="6" width="12" height="12" rx="1" stroke="white" strokeWidth="2.5" />
                            <path d="M9 4V6M15 4V6M9 18V20M15 18V20M4 9H6M4 15H6M18 9H20M18 15H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="opacity-60">
                            <circle cx="7" cy="7" r="4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M10 10L19 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                          </svg>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Home Indicator */}
            <div
              className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-[120px] sm:w-[140px] h-[4px] sm:h-[5px] rounded-full"
              style={{ background: '#000000' }}
            />
          </div>

          {/* iPhone Frame Buttons */}
          <div className="absolute -right-[3px] top-[90px] sm:top-[100px] w-[3px] h-[45px] sm:h-[50px] bg-black rounded-l-sm" />
          <div className="absolute -right-[3px] top-[145px] sm:top-[160px] w-[3px] h-[45px] sm:h-[50px] bg-black rounded-l-sm" />
          <div className="absolute -right-[3px] top-[200px] sm:top-[220px] w-[3px] h-[80px] sm:h-[90px] bg-black rounded-l-sm" />
          <div className="absolute -left-[3px] top-[120px] sm:top-[130px] w-[3px] h-[28px] sm:h-[30px] bg-black rounded-r-sm" />
        </motion.div>

        {/* UX Guidance - Legend & CTA */}
        <motion.div
          className="mt-6 md:mt-8 text-center max-w-md mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p
            className="text-sm md:text-base mb-3"
            style={{
              color: '#3C3C43',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Approchez votre téléphone du lecteur —{' '}
            <motion.span
              className="inline-block"
              style={{
                color: '#C3A36E',
                fontWeight: 600,
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              la porte s'ouvre instantanément
            </motion.span>
          </p>

          {/* Help icon with tooltip */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              className="group relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center cursor-help"
                style={{
                  border: '1.5px solid rgba(195, 163, 110, 0.3)',
                  background: 'rgba(195, 163, 110, 0.08)',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C3A36E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="17" r="0.5" fill="#C3A36E" />
                </svg>
              </div>

              {/* Tooltip */}
              <motion.div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: 'rgba(28, 28, 30, 0.95)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                }}
                initial={{ opacity: 0, y: 5 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p
                  className="text-xs"
                  style={{
                    color: '#FFFFFF',
                  }}
                >
                  Fonctionne même iPhone verrouillé (Express Mode)
                </p>
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
                  style={{
                    borderLeft: '4px solid transparent',
                    borderRight: '4px solid transparent',
                    borderTop: '4px solid rgba(28, 28, 30, 0.95)',
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile-only availability info */}
          <div className="md:hidden flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-1.5 text-sm text-gray-700">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-label="Apple Wallet">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.51-1.3 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="text-xs font-medium">Apple Wallet</span>

              <span className="mx-1 text-gray-400">•</span>

              <svg className="w-4 h-4" viewBox="0 0 24 24" aria-label="Google Wallet">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-xs font-medium">Google Wallet</span>
            </div>
            <span className="text-xs font-semibold text-gray-900">Disponible maintenant</span>
          </div>

        </motion.div>
      </div>
    </div>
  );
}