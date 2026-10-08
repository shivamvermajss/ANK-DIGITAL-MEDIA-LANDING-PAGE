import React from 'react';

/**
 * GlobalBackground Component
 * Provides a continuous, unified atmospheric background across the entire landing page:
 * - Palette: #FFFFFF (pure light), #F8FAFF (soft icy-white base), #EDE9FE (soft violet), #DBEAFE (soft blue)
 * - Layered continuous vertical ambient wash with 5-15% color influence
 * - Strategic soft radial atmospheric glows at key vertical milestones
 * - Barely-there technical dot matrix (opacity 0.04-0.06)
 * - High-contrast preservation for all text and frosted glass cards
 */
export function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* 1. SEAMLESS VERTICAL AMBIENT WASH (Flows from Hero down to Footer) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(
            180deg,
            #FFFFFF 0%,
            #F8FAFF 6%,
            #F0F6FF 14%,
            #F8FAFF 22%,
            #F5F3FF 32%,
            #F8FAFF 44%,
            #EFF6FF 54%,
            #F8FAFF 65%,
            #F5F3FF 76%,
            #F0F7FF 87%,
            #F5F3FF 95%,
            #F8FAFF 100%
          )`,
        }}
      />

      {/* 2. SUBTLE GLOBAL TECHNICAL DOT MATRIX (Barely-there texture) */}
      <div
        className="absolute inset-0 w-full h-full opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* 3. STRATEGIC ATMOSPHERIC RADIAL GLOWS (Soft & Diffused, 5-15% visibility) */}

      {/* Hero Visual Area: Soft Cyan-Blue Light (Top-Right) */}
      <div
        className="absolute top-[2%] right-[-5%] w-[600px] sm:w-[750px] lg:w-[900px] h-[600px] sm:h-[750px] lg:h-[900px] rounded-full blur-[140px] opacity-60"
        style={{
          background: 'radial-gradient(circle, #DBEAFE 0%, #BFDBFE 45%, transparent 75%)',
        }}
      />

      {/* Hero / Services Transition: Soft Pastel Violet Light (Top-Left) */}
      <div
        className="absolute top-[8%] left-[-8%] w-[550px] sm:w-[700px] lg:w-[850px] h-[550px] sm:h-[700px] lg:h-[850px] rounded-full blur-[140px] opacity-45"
        style={{
          background: 'radial-gradient(circle, #EDE9FE 0%, #DDD6FE 40%, transparent 75%)',
        }}
      />

      {/* Services (Develop & Grow): Soft Violet Atmosphere (Left-Center) */}
      <div
        className="absolute top-[20%] left-[-5%] w-[600px] sm:w-[750px] lg:w-[900px] h-[600px] sm:h-[750px] lg:h-[900px] rounded-full blur-[150px] opacity-50"
        style={{
          background: 'radial-gradient(circle, #EDE9FE 0%, #F5F3FF 50%, transparent 75%)',
        }}
      />

      {/* Services (Connect & Power) / Process Transition: Soft Blue Glow (Right) */}
      <div
        className="absolute top-[38%] right-[-6%] w-[650px] sm:w-[800px] lg:w-[950px] h-[650px] sm:h-[800px] lg:h-[950px] rounded-full blur-[150px] opacity-45"
        style={{
          background: 'radial-gradient(circle, #DBEAFE 0%, #EFF6FF 50%, transparent 75%)',
        }}
      />

      {/* Process Section: Soft Violet Atmosphere (Left-Center) */}
      <div
        className="absolute top-[52%] left-[-5%] w-[600px] sm:w-[750px] lg:w-[900px] h-[600px] sm:h-[750px] lg:h-[900px] rounded-full blur-[150px] opacity-45"
        style={{
          background: 'radial-gradient(circle, #EDE9FE 0%, #DDD6FE 45%, transparent 75%)',
        }}
      />

      {/* Technologies Section: Cool Technical Blue Atmosphere (Right) */}
      <div
        className="absolute top-[68%] right-[-6%] w-[650px] sm:w-[800px] lg:w-[950px] h-[650px] sm:h-[800px] lg:h-[950px] rounded-full blur-[150px] opacity-50"
        style={{
          background: 'radial-gradient(circle, #DBEAFE 0%, #C7D2FE 40%, transparent 75%)',
        }}
      />

      {/* Contact Section: Soft Violet & Blue Atmosphere (Center) */}
      <div
        className="absolute top-[85%] left-[10%] w-[700px] sm:w-[900px] lg:w-[1100px] h-[700px] sm:h-[900px] lg:h-[1100px] rounded-full blur-[160px] opacity-50"
        style={{
          background: 'radial-gradient(circle at 40% 40%, #EDE9FE 0%, #DBEAFE 50%, transparent 75%)',
        }}
      />
    </div>
  );
}
