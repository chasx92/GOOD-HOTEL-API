import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Logo } from './Logo';

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
                        <Logo className="h-8" />
                        <span className="text-xl font-bold tracking-tight text-black">
                            Unlocky
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
