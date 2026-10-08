import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navigationLinks } from '../../data/navigation';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Unified, rAF-throttled scroll detection for glassmorphism and active section
  useEffect(() => {
    const sectionIds = ['services', 'technologies', 'about'];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const scrolled = currentY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

          const scrollPosition = currentY + 140;
          let current = '';
          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                current = `#${id}`;
                break;
              }
            }
          }
          setActiveSection((prev) => (prev !== current ? current : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setHoveredLink(null);
  };

  return (
    <motion.header
      ref={navRef}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3.5 sm:top-4 lg:top-5 left-4 right-4 sm:left-6 sm:right-6 max-w-[1080px] mx-auto z-50"
    >
      {/* Floating Centered Island */}
      <div
        className={cn(
          'relative w-full rounded-full transition-all duration-300',
          'h-[64px] sm:h-[68px] px-4 sm:px-5 lg:px-6 flex items-center justify-between',
          isScrolled
            ? 'bg-white/[0.78] backdrop-blur-[28px] border border-[rgba(224,231,255,0.75)] shadow-[0_12px_34px_-10px_rgba(0,0,0,0.09),0_2px_8px_-2px_rgba(15,23,42,0.04),0_0_24px_-4px_rgba(99,102,241,0.08)]'
            : 'bg-white/[0.72] backdrop-blur-[24px] border border-white/85 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.07),0_2px_6px_-2px_rgba(15,23,42,0.03),0_0_20px_-4px_rgba(99,102,241,0.04)]'
        )}
      >
        {/* Subtle Glass Sheen Layer */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.45),transparent_35%,rgba(129,140,248,0.06),transparent_70%)]" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        </div>

        {/* 1. BRAND / LOGO + COMPANY NAME */}
        <div className="relative z-10 flex items-center">
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none select-none"
            aria-label="ANK Digital Media Homepage"
          >
            {/* Actual ANK Digital Media Logo Asset */}
            <img
              src="/logo.webp"
              alt="ANK Digital Media Logo"
              width="44"
              height="44"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-10 sm:h-11 w-auto object-contain mix-blend-multiply transition-transform duration-200 group-hover:scale-[1.04]"
            />

            {/* Company Name */}
            <div className="flex flex-col text-left justify-center">
              <span className="font-heading font-black text-base sm:text-[17px] tracking-tight text-slate-900 leading-none">
                ANK
              </span>
              <span className="font-sans text-[10px] sm:text-[10.5px] font-semibold tracking-widest text-slate-500 uppercase mt-0.5 leading-none">
                Digital Media
              </span>
            </div>
          </a>
        </div>

        {/* 2. NAVIGATION LINKS WITH SLIDING ACTIVE/HOVER PILL */}
        <nav
          aria-label="Main Navigation"
          className="relative z-10 hidden md:flex items-center"
          onMouseLeave={() => setHoveredLink(null)}
        >
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {navigationLinks.map((link) => {
              const isHighlighted = hoveredLink
                ? hoveredLink === link.href
                : activeSection === link.href;

              return (
                <li key={link.label} className="relative">
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onFocus={() => setHoveredLink(link.href)}
                    onBlur={() => setHoveredLink(null)}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 block select-none z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
                      isHighlighted
                        ? 'text-indigo-600 font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    )}
                  >
                    {isHighlighted && (
                      <motion.div
                        layoutId={shouldReduceMotion ? undefined : 'navbar-active-pill'}
                        className="absolute inset-0 bg-[#EEF2FF]/90 border border-[#C7D2FE]/50 rounded-full shadow-[0_2px_8px_rgba(99,102,241,0.08)] -z-10"
                        transition={{
                          type: 'spring',
                          stiffness: 420,
                          damping: 32,
                        }}
                      />
                    )}
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 3. RIGHT: LET'S TALK CTA */}
        <div className="relative z-10 hidden md:flex items-center">
          <motion.a
            href="#contact"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="relative group inline-flex items-center gap-2 px-5 sm:px-6 h-[42px] sm:h-[44px] rounded-full text-sm font-semibold text-white bg-[linear-gradient(90deg,#4f46e5,#7c3aed,#ec4899)] shadow-[0_8px_24px_rgba(124,58,237,0.22)] hover:shadow-[0_10px_28px_rgba(124,58,237,0.35)] transition-all duration-200 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
          >
            {/* Subtle inner highlight sweep on hover */}
            <span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              aria-hidden="true"
            />
            <span className="relative z-10">Let's Talk</span>
            <ArrowRight
              className={cn(
                'relative z-10 w-4 h-4 transition-transform duration-200',
                !shouldReduceMotion && 'group-hover:translate-x-1'
              )}
            />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="relative z-10 flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 sm:p-2.5 rounded-full bg-white/70 backdrop-blur-md border border-slate-200/70 text-slate-700 shadow-sm hover:bg-white/90 hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE NAVIGATION DROPDOWN CARD */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-2.5 w-full bg-white/80 backdrop-blur-[24px] border border-white/85 rounded-2xl p-5 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.12),0_0_20px_-4px_rgba(99,102,241,0.06)] overflow-hidden"
          >
            <nav aria-label="Mobile Navigation">
              <ul className="flex flex-col gap-1.5 list-none m-0 p-0">
                {navigationLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={handleLinkClick}
                        className={cn(
                          'flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all',
                          isActive
                            ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
                        )}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile CTA */}
              <div className="pt-4 mt-3 border-t border-slate-200/70">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-[linear-gradient(90deg,#4f46e5,#7c3aed,#ec4899)] shadow-[0_8px_24px_rgba(124,58,237,0.25)] transition-transform active:scale-[0.98] cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
