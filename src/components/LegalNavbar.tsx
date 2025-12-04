import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { FONT_HEADING } from '../styles/typography';

export function LegalNavbar() {
    return (
        <motion.nav
            aria-label="Navigation légale"
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-24 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo - Returns to Home */}
                    <Link
                        to="/"
                        className="flex items-center gap-2.5 cursor-pointer group"
                    >
                        <div className="relative w-9 h-9 flex items-center justify-center rounded-xl overflow-hidden" style={{
                            background: 'linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%)',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
                        }}>
                            <span className="font-bold text-xl text-white relative z-10">O</span>
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4B886] via-[#B68D40] to-transparent opacity-40" />
                            <div className="absolute inset-0" style={{
                                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 60%)',
                            }} />
                        </div>

                        <span className="text-xl font-bold tracking-tight" style={{
                            background: 'linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontFamily: FONT_HEADING
                        }}>
                            Openli
                        </span>
                    </Link>

                    {/* Back Link */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Retour au site
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
