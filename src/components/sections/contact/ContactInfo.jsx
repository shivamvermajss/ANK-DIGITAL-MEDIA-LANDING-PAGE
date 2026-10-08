import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { VERIFIED_CONTACT_CHANNELS } from '../../../data/contact';

const CONTACT_ICONS = {
  Phone,
  Mail,
  MapPin,
};

export function ContactInfo() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (e, text, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="space-y-3">
      {VERIFIED_CONTACT_CHANNELS.map((channel) => {
        const IconComponent = CONTACT_ICONS[channel.icon] || MapPin;
        const isClickable = Boolean(channel.href);
        const canCopy = channel.id === 'phone' || channel.id === 'email';
        const isCopied = copiedId === channel.id;

        const cardStyle = {
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          boxShadow: '0 8px 24px -15px rgba(15, 23, 42, 0.14)',
        };

        const cardInner = (
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3.5 min-w-0">
              {/* Icon Container with subtle indigo hover */}
              <div className="w-11 h-11 rounded-xl bg-slate-100/90 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200/80 shadow-2xs group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200/80 transition-all duration-200 mt-0.5">
                <IconComponent className="w-4 h-4" />
              </div>

              {/* Label & Value */}
              <div className="min-w-0">
                <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase tracking-wider">
                  {channel.label}
                </span>
                <span className="font-heading font-bold text-sm text-slate-900 block leading-snug group-hover:text-indigo-600 transition-colors break-words">
                  {channel.value}
                </span>
              </div>
            </div>

            {/* Actions: Quick Copy Feedback + External Arrow */}
            <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
              {canCopy && (
                <button
                  type="button"
                  title={`Copy ${channel.label}`}
                  onClick={(e) => handleCopy(e, channel.value, channel.id)}
                  className="px-2 py-1 rounded-lg text-xs font-mono text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-200/60 transition-all flex items-center gap-1 cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span className="text-[10px] text-emerald-600 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="text-[10px] hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              )}

              {isClickable && (
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              )}
            </div>
          </div>
        );

        if (isClickable) {
          return (
            <a
              key={channel.id}
              href={channel.href}
              style={cardStyle}
              className="block p-3.5 sm:p-4 rounded-2xl hover:border-indigo-300/80 hover:shadow-[0_12px_28px_-12px_rgba(99,102,241,0.2)] hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
            >
              {cardInner}
            </a>
          );
        }

        return (
          <div
            key={channel.id}
            style={cardStyle}
            className="p-3.5 sm:p-4 rounded-2xl group transition-all duration-200"
          >
            {cardInner}
          </div>
        );
      })}
    </div>
  );
}
