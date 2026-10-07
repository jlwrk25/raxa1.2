import React, { useState } from 'react';
import { ActiveModal } from '../types';

interface ModalsProps {
  activeModal: ActiveModal;
  onClose: () => void;
}

export const Modals: React.FC<ModalsProps> = ({ activeModal, onClose }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  if (!activeModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d1c2b]/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[var(--bg)] border border-[color-mix(in_srgb,var(--rx-blue)_30%,transparent)] rounded-3xl p-6 sm:p-8 shadow-2xl text-[var(--ink)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-[var(--sub)] hover:text-[var(--ink)] flex items-center justify-center text-xl font-bold cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Modal Content depending on activeModal */}
        {activeModal === 'login' && (
          <div>
            <h3 className="text-2xl font-extrabold mb-2">Sign in to RaXa</h3>
            <p className="text-xs sm:text-sm text-[var(--sub)] mb-6">
              Access your RaXa workspace and cloud ERP modules.
            </p>

            {loginSuccess ? (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 text-emerald-700 dark:text-emerald-300 text-sm font-bold text-center">
                Signed in successfully as {loginEmail || 'DefaultUser1'}.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLoginSuccess(true);
                  setTimeout(() => {
                    setLoginSuccess(false);
                    onClose();
                  }, 1200);
                }}
                className="flex flex-col gap-4"
              >
                <div>
                  <label className="block text-xs font-bold mb-1">Email or Account ID</label>
                  <input
                    type="text"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="DefaultUser1 or user@raxa.system"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[var(--sec)] text-sm outline-none focus:border-[var(--rx-blue)]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Password</label>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[var(--sec)] text-sm outline-none focus:border-[var(--rx-blue)]"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-[var(--sub)]">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    Remember me
                  </label>
                  <a
                    href="#forgot"
                    onClick={(e) => e.preventDefault()}
                    className="text-[var(--rx-ico)] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 mt-2 bg-[#12263a] text-white font-extrabold rounded-full border-2 border-[var(--rx-lime)] hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors cursor-pointer"
                >
                  Sign in
                </button>
              </form>
            )}
          </div>
        )}

        {activeModal === 'meetJuan' && (
          <div>
            <span className="text-xs font-bold text-[var(--rx-blue)] uppercase tracking-wider block mb-1">
              About the Creator
            </span>
            <h3 className="text-2xl font-extrabold mb-3">Meet Juan &amp; Pricing</h3>
            <p className="text-sm text-[var(--sub)] leading-relaxed mb-4">
              Juan is the lead creator behind RaXa Systems. Driven by the philosophy of giant pandas &mdash; accomplishing massive results with efficient, sustainable energy &mdash; RaXa replaces bloated enterprise software with lightweight, focused modules.
            </p>
            <div className="p-4 rounded-2xl bg-[var(--sec)] border border-slate-200/60 dark:border-slate-700 mb-6 flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm font-extrabold">
                <span>Free Trial Period</span>
                <span className="text-[#5a8700]">52 Days Full Access</span>
              </div>
              <div className="flex justify-between items-center text-sm font-extrabold">
                <span>Subscription</span>
                <span>Transparent Tier Pricing</span>
              </div>
              <div className="text-xs text-[var(--sub)] mt-1">
                No credit card required to start. Setup takes under 2 minutes.
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-[#12263a] text-white font-extrabold rounded-full border-2 border-[var(--rx-lime)] hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors cursor-pointer"
            >
              Explore Workspace
            </button>
          </div>
        )}

        {activeModal === 'privacy' && (
          <div>
            <h3 className="text-2xl font-extrabold mb-3">Privacy Statement</h3>
            <div className="text-xs sm:text-sm text-[var(--sub)] leading-relaxed space-y-3 mb-6">
              <p>
                At RaXa Systems, privacy is foundational. We treat your company records, employee data, and business operations with bank-grade encryption.
              </p>
              <p>
                <strong>Data Protection:</strong> All records stored across modules (Human Resource, Sales, Inventory, Purchase) remain strictly your property. We never sell, track, or share business intelligence.
              </p>
              <p>
                <strong>Public Comments:</strong> Any public feedback submitted is sanitized and masked (e.g., ma***) to protect user identity.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-[#12263a] text-white font-bold rounded-full border-2 border-[var(--rx-lime)] hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors cursor-pointer"
            >
              Understood
            </button>
          </div>
        )}

        {activeModal === 'support' && (
          <div>
            <h3 className="text-2xl font-extrabold mb-3">Support &amp; Help Desk</h3>
            <p className="text-sm text-[var(--sub)] leading-relaxed mb-4">
              Need assistance configuring a module or onboarding your team? The pandas are here to help.
            </p>
            <div className="space-y-3 mb-6 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-[var(--sec)] border border-slate-200/60 dark:border-slate-700">
                <b className="block text-[var(--ink)] mb-1">Email Support</b>
                <span className="text-[var(--sub)]">support@raxa.systems &bull; Typical reply under 2 hours</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--sec)] border border-slate-200/60 dark:border-slate-700">
                <b className="block text-[var(--ink)] mb-1">Documentation &amp; Guides</b>
                <span className="text-[var(--sub)]">Step-by-step setup guides for all 7 ERP cloud modules</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-[#12263a] text-white font-bold rounded-full border-2 border-[var(--rx-lime)] hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

        {activeModal === 'about' && (
          <div>
            <h3 className="text-2xl font-extrabold mb-3">About RaXa Systems</h3>
            <p className="text-sm text-[var(--sub)] leading-relaxed mb-4">
              Founded in 2021 by two pandas with a big idea and bamboo. We set out to create software that doesn&rsquo;t waste your time or your server resources.
            </p>
            <p className="text-sm text-[var(--sub)] leading-relaxed mb-6">
              Our cloud modules interconnect smoothly through real-time message streams, keeping human resource management, CRM, logistics, and company metrics unified in a single workspace.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-[#12263a] text-white font-bold rounded-full border-2 border-[var(--rx-lime)] hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

        {activeModal === 'projects' && (
          <div>
            <h3 className="text-2xl font-extrabold mb-3">Active Projects &amp; Modules</h3>
            <div className="space-y-3 mb-6 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-[var(--sec)] border border-slate-200/60 dark:border-slate-700 flex justify-between items-center">
                <div>
                  <b className="block text-[var(--ink)]">Core ERP Suite 1.0</b>
                  <span className="text-[var(--sub)]">Cloud workspace with 7 interconnected modules</span>
                </div>
                <span className="text-[#5a8700] font-bold">Production</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--sec)] border border-slate-200/60 dark:border-slate-700 flex justify-between items-center">
                <div>
                  <b className="block text-[var(--ink)]">A.I. Bamboo Optimizers</b>
                  <span className="text-[var(--sub)]">Automated inventory forecasting and expense audits</span>
                </div>
                <span className="text-blue-500 font-bold">In Preview</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-[#12263a] text-white font-bold rounded-full border-2 border-[var(--rx-lime)] hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

        {activeModal === 'trial' && (
          <div>
            <h3 className="text-2xl font-extrabold mb-2">52 Days Free Trial</h3>
            <p className="text-sm text-[var(--sub)] mb-6">
              Start your 52-day trial instantly with all modules unlocked.
            </p>
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-sm text-emerald-800 dark:text-emerald-200 font-medium mb-6">
              Welcome! Your trial is activated for <strong>52 full days</strong>. Explore your workspace cloud preview below.
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-[#12263a] text-white font-extrabold rounded-full border-2 border-[var(--rx-lime)] hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors cursor-pointer"
            >
              Go to Workspace
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
