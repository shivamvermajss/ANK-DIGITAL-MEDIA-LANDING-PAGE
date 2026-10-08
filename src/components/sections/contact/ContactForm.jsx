import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, RotateCcw, Loader2, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PROJECT_SCOPES } from '../../../data/contact';
import { ProjectTypeSelector } from './ProjectTypeSelector';

const INITIAL_FORM = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  details: '',
  scope: '',
};

export function ContactForm() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid work or personal email address.';
    }
    if (!formData.projectType) {
      errs.projectType = 'Please select a project type.';
    }
    if (!formData.details.trim() || formData.details.trim().length < 10) {
      errs.details = 'Please provide a brief overview of your project (at least 10 characters).';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

    // Structured email payload for ANK Digital Media inbox
    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim() || 'Not specified',
      service: Array.isArray(formData.projectType)
        ? formData.projectType.join(', ')
        : formData.projectType,
      projectStage: formData.scope || 'Not specified',
      projectDetails: formData.details.trim(),
      to_email: 'ankdigitalmedia@gmail.com',
      to_name: 'ANK Digital Media',
      recipient: 'ankdigitalmedia@gmail.com',
      reply_to: formData.email.trim(),
      subject: 'New Project Inquiry — ANK Digital Media',
    };

    try {
      if (!serviceId || !templateId || !publicKey) {
        console.warn(
          'EmailJS environment variables (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) are not set.'
        );
        setSubmitError(
          "Email service is not yet configured with API credentials. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env, or email us directly at ankdigitalmedia@gmail.com."
        );
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('EmailJS submission failed:', {
        status: error?.status,
        text: error?.text,
        message: error?.message || (typeof error === 'string' ? error : undefined),
      });
      setIsSubmitting(false);
      setSubmitError(
        "We couldn't send your project brief. Please try again or contact us directly at ankdigitalmedia@gmail.com."
      );
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.78)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(226, 232, 240, 0.85)',
        boxShadow: '0 25px 60px -25px rgba(99, 102, 241, 0.14)',
        borderRadius: '24px',
      }}
      className="p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-300"
    >
      {/* Subtle Corner Gradient Wash: Blue → Indigo → Transparent */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-bl from-blue-400/15 via-indigo-400/10 to-transparent blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            /* 1. INTERACTIVE PROJECT INTAKE FORM */
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              noValidate
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Form Title & Technical Indicator with thin divider */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                <div>
                  <span className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight block">
                    Project Brief
                  </span>
                  <span className="text-xs text-slate-500 font-sans mt-0.5 block">
                    Inquiries are sent directly to ankdigitalmedia@gmail.com
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/80">
                  Direct Inquiries
                </span>
              </div>

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 01 - NAME */}
                <div className="group">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 group-focus-within:text-indigo-600 transition-colors"
                  >
                    01 — Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={`w-full px-4 py-3 rounded-[13px] text-sm text-slate-900 placeholder-slate-400 font-sans shadow-[inset_0_1px_2px_rgba(15,23,42,0.02)] transition-all duration-200 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:shadow-[0_8px_24px_-12px_rgba(99,102,241,0.30)] focus:outline-none ${
                      errors.name
                        ? 'border-rose-400 bg-rose-50/30'
                        : 'bg-white/82 border border-slate-200/90'
                    }`}
                  />
                  {errors.name && (
                    <p id="contact-name-error" role="alert" className="text-xs text-rose-500 font-mono mt-1.5">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* 02 - EMAIL */}
                <div className="group">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 group-focus-within:text-indigo-600 transition-colors"
                  >
                    02 — Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-[13px] text-sm text-slate-900 placeholder-slate-400 font-sans shadow-[inset_0_1px_2px_rgba(15,23,42,0.02)] transition-all duration-200 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:shadow-[0_8px_24px_-12px_rgba(99,102,241,0.30)] focus:outline-none ${
                      errors.email
                        ? 'border-rose-400 bg-rose-50/30'
                        : 'bg-white/82 border border-slate-200/90'
                    }`}
                  />
                  {errors.email && (
                    <p id="contact-email-error" role="alert" className="text-xs text-rose-500 font-mono mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* 03 - COMPANY (Optional) */}
              <div className="group">
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="contact-company"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 group-focus-within:text-indigo-600 transition-colors"
                  >
                    03 — Company
                  </label>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100/70 px-2 py-0.5 rounded-full">
                    Optional
                  </span>
                </div>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  placeholder="Company or organization"
                  className="w-full px-4 py-3 rounded-[13px] bg-white/82 border border-slate-200/90 text-sm text-slate-900 placeholder-slate-400 font-sans shadow-[inset_0_1px_2px_rgba(15,23,42,0.02)] transition-all duration-200 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:shadow-[0_8px_24px_-12px_rgba(99,102,241,0.30)] focus:outline-none"
                />
              </div>

              {/* 04 - WHAT DO YOU NEED? (Project Type Selection Chips) */}
              <ProjectTypeSelector
                selectedType={formData.projectType}
                onSelectType={(type) => handleChange('projectType', type)}
                error={errors.projectType}
              />

              {/* 05 - PROJECT DETAILS */}
              <div className="group">
                <label
                  htmlFor="contact-details"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 group-focus-within:text-indigo-600 transition-colors"
                >
                  05 — Project Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-details"
                  name="details"
                  rows={4}
                  required
                  value={formData.details}
                  onChange={(e) => handleChange('details', e.target.value)}
                  placeholder="Tell us briefly about your project, goals, or requirements..."
                  aria-invalid={Boolean(errors.details)}
                  aria-describedby={errors.details ? 'contact-details-error' : undefined}
                  className={`w-full px-4 py-3 rounded-[13px] text-sm text-slate-900 placeholder-slate-400 font-sans shadow-[inset_0_1px_2px_rgba(15,23,42,0.02)] transition-all duration-200 resize-y min-h-[110px] focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:shadow-[0_8px_24px_-12px_rgba(99,102,241,0.30)] focus:outline-none ${
                    errors.details
                      ? 'border-rose-400 bg-rose-50/30'
                      : 'bg-white/82 border border-slate-200/90'
                  }`}
                />
                {errors.details && (
                  <p id="contact-details-error" role="alert" className="text-xs text-rose-500 font-mono mt-1.5">
                    {errors.details}
                  </p>
                )}
              </div>

              {/* 06 - PROJECT STAGE (Optional) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    id="contact-scope-label"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700"
                  >
                    06 — Project Stage
                  </label>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100/70 px-2 py-0.5 rounded-full">
                    Optional
                  </span>
                </div>
                <div
                  role="group"
                  aria-labelledby="contact-scope-label"
                  className="grid grid-cols-3 gap-2"
                >
                  {PROJECT_SCOPES.map((scope) => {
                    const isSelected = formData.scope === scope;

                    return (
                      <motion.button
                        key={scope}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() =>
                          handleChange('scope', isSelected ? '' : scope)
                        }
                        whileHover={shouldReduceMotion ? {} : { y: -1 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                        style={
                          isSelected
                            ? {
                                background: 'linear-gradient(90deg, #2563EB, #6366F1, #8B5CF6)',
                                boxShadow: '0 8px 20px -10px rgba(99, 102, 241, 0.45)',
                              }
                            : undefined
                        }
                        className={`px-3 py-2.5 rounded-xl text-xs font-heading font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer select-none text-center border ${
                          isSelected
                            ? 'text-white border-transparent'
                            : 'bg-white/80 hover:bg-indigo-50/50 text-slate-700 hover:text-slate-900 border-slate-200/90 hover:border-indigo-300/80 shadow-2xs'
                        }`}
                      >
                        {isSelected && (
                          <motion.span
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.15 }}
                            className="shrink-0"
                          >
                            <Check className="w-3 h-3 text-white stroke-[2.5]" />
                          </motion.span>
                        )}
                        <span className="truncate">{scope}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Inline Submission Error Notification */}
              {submitError && (
                <div
                  role="alert"
                  className="p-3.5 rounded-xl bg-rose-50/90 border border-rose-200 text-rose-700 text-xs font-sans leading-relaxed flex items-start gap-2.5 shadow-2xs"
                >
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-semibold block mb-0.5">Submission Notice:</span>
                    <span>{submitError}</span>
                  </div>
                </div>
              )}

              {/* 07 - CTA SUBMIT BUTTON */}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  style={{
                    background: 'linear-gradient(90deg, #2563EB, #6366F1, #8B5CF6)',
                    boxShadow: '0 16px 35px -15px rgba(99, 102, 241, 0.38)',
                  }}
                  className="relative w-full h-[54px] sm:h-[56px] rounded-full flex items-center justify-center gap-2.5 px-8 text-sm font-heading font-bold text-white tracking-wide transition-all duration-200 group border border-white/25 select-none cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.48)]"
                >
                  {/* Subtle Light/Shimmer Sweep on Hover */}
                  <span
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-full"
                    aria-hidden="true"
                  />

                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white shrink-0" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>START THE CONVERSATION</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          ) : (
            /* 2. CONFIRMATION / SUCCESS STATE */
            <motion.div
              key="success"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-center py-6 sm:py-8"
            >
              {/* Success Badge */}
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-5 shadow-soft-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              {/* Confirmation Eyebrow & Title */}
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 block mb-1">
                PROJECT BRIEF SENT ✓
              </span>
              <h4 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight mb-3">
                Thanks for reaching out.
              </h4>

              {/* Clear confirmation copy */}
              <p className="text-sm text-slate-600 font-sans leading-relaxed max-w-md mx-auto mb-6">
                Your project brief has been sent successfully to <span className="font-semibold text-slate-900">ankdigitalmedia@gmail.com</span>. We will review your requirements and respond shortly.
              </p>

              {/* Summary of Captured Data */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/90 text-left max-w-md mx-auto mb-6 space-y-2.5 font-mono text-xs text-slate-700 shadow-2xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                  <span className="text-slate-400">Project Type:</span>
                  <span className="font-bold text-indigo-600">{formData.projectType}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                  <span className="text-slate-400">Contact:</span>
                  <span className="font-bold text-slate-900">{formData.name} ({formData.email})</span>
                </div>
                {formData.company && (
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                    <span className="text-slate-400">Organization:</span>
                    <span className="text-slate-900">{formData.company}</span>
                  </div>
                )}
                {formData.scope && (
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                    <span className="text-slate-400">Project Stage:</span>
                    <span className="text-indigo-600 font-semibold">{formData.scope}</span>
                  </div>
                )}
                <div className="pt-1 text-slate-600 font-sans text-xs">
                  <span className="text-slate-400 font-mono text-[11px] block mb-1">Details:</span>
                  <p className="line-clamp-2 italic text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                    "{formData.details}"
                  </p>
                </div>
              </div>

              {/* Reset / Start Another Project Button */}
              <motion.button
                type="button"
                onClick={handleReset}
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold text-slate-700 bg-white border border-slate-200 shadow-soft-sm hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                <span>START ANOTHER PROJECT</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
