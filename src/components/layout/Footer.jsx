import React from 'react';
import { Terminal, ArrowUp, Globe, Mail, ArrowUpRight } from 'lucide-react';
import { studioMetadata } from '../../data/navigation';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-slate-400 border-t border-brand-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-surface flex items-center justify-center text-white border border-brand-border">
                <Terminal className="w-4 h-4 text-brand-cyan" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                ANK<span className="text-brand-cyan ml-1">Digital Media</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-5">
              {studioMetadata.tagline}
            </p>
            {/* Verified Contact Quick Access */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs font-mono text-slate-400">
              <a
                href="mailto:contact@ankdigitalmedia.com"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border hover:text-white hover:border-brand-indigo/50 transition-colors"
                aria-label="Email ANK Digital Media"
              >
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                <span>contact@ankdigitalmedia.com</span>
              </a>
              <a
                href="https://www.ankdigitalmedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border hover:text-white hover:border-brand-indigo/50 transition-colors"
                aria-label="Official Website"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Official Website</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider text-slate-200 mb-4 font-heading">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web & Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Digital Marketing & SEO
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  SMS & Communication
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Online Infrastructure
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation / Studio */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider text-slate-200 mb-4 font-heading">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services Overview
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">
                  Technology Ecosystem
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {CURRENT_YEAR} ANK Digital Media. All rights reserved. Web Development Practice.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
