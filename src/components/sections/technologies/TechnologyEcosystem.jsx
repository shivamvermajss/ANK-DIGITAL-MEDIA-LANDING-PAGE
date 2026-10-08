import React, { useRef, useCallback, useEffect } from 'react';
import { ECOSYSTEM_DATA } from '../../../data/technologies';
import { TechnologyCore } from './TechnologyCore';
import { TechnologyCapabilityGrid } from './TechnologyCapabilityGrid';
import { TechnologyCapabilityBadge } from './TechnologyCapabilityBadge';

/**
 * TechnologyEcosystem
 * Right showcase panel containing:
 * - Ambient radial glow layer (Layer 2)
 * - Large white glass ecosystem container (Layer 3: bg-white/75, backdrop-blur-2xl, subtle indigo shadow)
 * - Header with "LIVE ECOSYSTEM" live status pill
 * - Dynamic domain title & description with safe fallback
 * - Dark frosted glass "DIGITAL EXPERIENCE" central node (Layer 5)
 * - 2-column capability cards (Layer 4)
 * - Floating glass capability badges (Layer 6)
 * - rAF-throttled cursor spotlight via CSS variables (zero React re-renders on mousemove)
 */
export const TechnologyEcosystem = React.memo(function TechnologyEcosystem({
  activeTabId = 'web',
  onSelectDomain,
}) {
  const containerRef = useRef(null);
  const rectRef = useRef(null);
  const rafIdRef = useRef(null);

  // Safe fallback ensuring UI NEVER crashes
  const activeDomain = ECOSYSTEM_DATA[activeTabId] ?? ECOSYSTEM_DATA.web;

  // Cache bounding rect on enter to avoid layout thrashing during mouse move
  const handleMouseEnter = useCallback(() => {
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
  }, []);

  // Performance-optimized cursor spotlight via CSS custom properties and rAF
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current || !rectRef.current) return;

    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    const clientX = e.clientX;
    const clientY = e.clientY;

    rafIdRef.current = requestAnimationFrame(() => {
      if (!containerRef.current || !rectRef.current) return;
      const x = clientX - rectRef.current.left;
      const y = clientY - rectRef.current.top;
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    rectRef.current = null;
    if (containerRef.current) {
      containerRef.current.style.setProperty('--mouse-x', `-9999px`);
      containerRef.current.style.setProperty('--mouse-y', `-9999px`);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const badges = activeDomain.floatingBadges || [
    { text: 'Responsive Web', duration: 4.5, delay: 0 },
    { text: 'Custom Software', duration: 5.0, delay: 0.6 },
    { text: 'API Connected', duration: 5.5, delay: 1.2 },
  ];

  return (
    <div className="relative w-full">
      {/* LAYER 2: Ambient Radial Glow behind the right showcase card */}
      <div
        className="pointer-events-none absolute -inset-8 bg-gradient-to-tr from-indigo-300/20 via-purple-200/20 to-cyan-200/20 blur-[120px] rounded-3xl -z-20"
        aria-hidden="true"
      />

      {/* LAYER 3: Main Showcase Card (bg-white/75, backdrop-blur-2xl, subtle shadow) */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        id={`ecosystem-panel-${activeDomain.id}`}
        role="tabpanel"
        aria-labelledby={`domain-tab-${activeDomain.id}`}
        className="relative w-full rounded-3xl p-6 sm:p-8 lg:p-9 bg-white/75 backdrop-blur-2xl border border-slate-200/70 shadow-[0_24px_70px_-30px_rgba(79,70,229,0.20)] overflow-hidden transition-all duration-300"
      >
        {/* Subtle cursor spotlight glow (no layout triggers, CSS variable based) */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-3xl transition-opacity duration-300 opacity-60"
          style={{
            background:
              'radial-gradient(550px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(99, 102, 241, 0.08), transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* LAYER 6: Floating Capability Badges around the perimeter */}
        <div className="hidden sm:block">
          {badges[0] && (
            <TechnologyCapabilityBadge
              text={badges[0].text}
              duration={badges[0].duration || 4.5}
              delay={badges[0].delay || 0}
              className="absolute top-4 right-6"
            />
          )}
          {badges[1] && (
            <TechnologyCapabilityBadge
              text={badges[1].text}
              duration={badges[1].duration || 5.0}
              delay={badges[1].delay || 0.8}
              className="absolute bottom-6 left-6"
            />
          )}
          {badges[2] && (
            <TechnologyCapabilityBadge
              text={badges[2].text}
              duration={badges[2].duration || 5.5}
              delay={badges[2].delay || 1.4}
              className="absolute bottom-6 right-6"
            />
          )}
        </div>

        {/* Top Header of Showcase: LIVE ECOSYSTEM indicator & domain description */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200/70">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              {/* Live Indicator Pill */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-700 uppercase">
                  LIVE ECOSYSTEM
                </span>
              </div>
              <span className="text-xs font-mono text-slate-600 font-semibold">
                {activeDomain.eyebrow}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-black tracking-tight text-slate-900">
              {activeDomain.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xs font-sans leading-relaxed">
            {activeDomain.description}
          </p>
        </div>

        {/* LAYER 5: Central Visual Hub (Dark Frosted Glass Core with CORE ENGINE ACTIVE) */}
        <TechnologyCore activeTabId={activeDomain.id} onSelectDomain={onSelectDomain} />

        {/* LAYER 4: Dynamic Capability Capsules (2-Column Grid) */}
        <div className="mt-4 pt-4 border-t border-slate-200/60">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-mono font-bold tracking-wider text-slate-600 uppercase">
              VERIFIED CAPABILITIES
            </span>
            <span className="text-[11px] font-mono text-indigo-600 font-semibold">
              {activeDomain.capabilities.length} ACTIVE CAPABILITIES
            </span>
          </div>

          <TechnologyCapabilityGrid
            capabilities={activeDomain.capabilities}
            activeDomainId={activeDomain.id}
          />
        </div>
      </div>
    </div>
  );
});
