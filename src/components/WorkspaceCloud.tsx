import React, { useState } from 'react';
import { RaxaLogo } from '../assets/logo';
import { ClientProfile, ModuleInfo } from '../types';

interface WorkspaceCloudProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onLogout: () => void;
}

const MOCK_CLIENTS: ClientProfile[] = [
  {
    id: 'DefaultUser1',
    name: 'Ra Systems',
    accountId: 'DefaultClient1',
    userId: 'DefaultUser1',
    trialDaysLeft: 52,
    modules: ['human-resource', 'customers-sales', 'inventory-logistics', 'customer-experience', 'purchase-expenses', 'dashboard', 'management'],
  },
  {
    id: 'DefaultUser2',
    name: 'Xa Models',
    accountId: 'DefaultClient2',
    userId: 'DefaultUser2',
    trialDaysLeft: 47,
    modules: ['customers-sales', 'customer-experience', 'dashboard', 'management'],
  },
];

const MODULE_LIST: ModuleInfo[] = [
  {
    id: 'human-resource',
    title: 'Human Resource',
    description: 'Team directory, attendance records, payroll computation, leave management, and employee onboarding.',
    iconType: 'hr',
    x: '19.94%',
    y: '7.5%',
  },
  {
    id: 'customers-sales',
    title: 'Customers and Sales',
    description: 'CRM pipeline, customer accounts, sales orders, automated invoicing, and deal tracking.',
    iconType: 'sales',
    x: '3.75%',
    y: '37.5%',
  },
  {
    id: 'inventory-logistics',
    title: 'Inventory and Logistics',
    description: 'Multi-warehouse stock control, shipments, barcode tracking, reorder alerts, and supplier receipts.',
    iconType: 'inventory',
    x: '3.75%',
    y: '70%',
  },
  {
    id: 'customer-experience',
    title: 'Customer Experience',
    description: 'Live feedback channels, omnichannel tickets, NPS scores, customer delight insights, and SLA timers.',
    iconType: 'cx',
    x: '41.75%',
    y: '1%',
    w: '16.5%',
    h: '28%',
    isLg: true,
  },
  {
    id: 'purchase-expenses',
    title: 'Purchase and Expenses',
    description: 'Purchase orders, vendor disbursements, expense approvals, receipt scans, and vendor reconciliation.',
    iconType: 'purchase',
    x: '65.56%',
    y: '7.5%',
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Real-time revenue metrics, profit margins, KPI performance gauges, and growth forecasting.',
    iconType: 'dashboard',
    x: '83.125%',
    y: '37.5%',
  },
  {
    id: 'management',
    title: 'Management',
    description: 'Role-based access permissions, audit logs, workspace security settings, and organizational branches.',
    iconType: 'management',
    x: '83.125%',
    y: '70%',
  },
];

export const WorkspaceCloud: React.FC<WorkspaceCloudProps> = ({
  theme,
  onToggleTheme,
  onLogout,
}) => {
  const [activeClient, setActiveClient] = useState<ClientProfile>(MOCK_CLIENTS[0]);
  const [activeModule, setActiveModule] = useState<ModuleInfo | null>(null);

  const handleTileClick = (e: React.MouseEvent, mod: ModuleInfo) => {
    e.preventDefault();
    setActiveModule(mod);
  };

  const isModuleAllowed = (moduleId: string) => {
    return activeClient.modules.includes(moduleId) || moduleId === 'management';
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-8 lg:px-16 bg-[var(--sec)] transition-colors" id="modules">
      <div className="max-w-7xl mx-auto">
        {/* Client Selector Segment */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
          <span className="font-extrabold text-[var(--ink)] text-sm sm:text-base">
            Preview as:
          </span>
          <div className="inline-flex p-1 bg-[#12263a] rounded-full border border-[#24405a]">
            {MOCK_CLIENTS.map((client) => {
              const selected = activeClient.id === client.id;
              return (
                <button
                  key={client.id}
                  type="button"
                  onClick={() => {
                    setActiveClient(client);
                    setActiveModule(null);
                  }}
                  className={`px-4 sm:px-6 py-1.5 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                    selected
                      ? 'bg-[var(--rx-lime)] text-[#12263a] font-extrabold shadow-sm'
                      : 'text-[#eef1f7] hover:text-[var(--rx-lime)] bg-transparent'
                  }`}
                >
                  {client.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mockup Notice Box */}
        <div
          role="note"
          className="flex items-start gap-3 p-3.5 sm:p-4 mb-6 rounded-xl border border-[color-mix(in_srgb,var(--rx-blue)_30%,transparent)] border-l-4 border-l-[var(--rx-lime)] bg-[color-mix(in_srgb,var(--rx-blue)_10%,var(--bg))] text-[var(--ink)] text-xs sm:text-sm"
        >
          <svg
            className="w-5 h-5 shrink-0 text-[var(--rx-ico)] mt-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5M12 7.5v.01" />
          </svg>
          <p className="m-0 leading-relaxed">
            <strong>This is only a mockup version.</strong> The Landing workspace currently demonstrates how the interface will behave for the selected client/user. Client-specific data and functionality will be connected in a later implementation.
          </p>
        </div>

        {/* Landing Mockup Box */}
        <div
          id="landingMockup"
          className="bg-[var(--sec)] border border-[color-mix(in_srgb,var(--rx-blue)_35%,transparent)] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden transition-colors"
        >
          {/* Mockup Nav Header */}
          <header className="flex flex-wrap items-center justify-between gap-4 min-h-[64px] px-4 sm:px-8 py-3 bg-[#12263a] border-b border-[#24405a]">
            {/* User Identity */}
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[var(--rx-lime)] text-[#12263a] font-extrabold flex items-center justify-center text-base shadow-sm">
                {activeClient.name.charAt(0).toUpperCase()}
              </span>
              <div className="leading-tight">
                <span className="block font-extrabold text-[#eef1f7] text-sm sm:text-base">
                  {activeClient.name}
                </span>
                <span className="block text-xs font-semibold text-[#9fb2c6]">
                  Account ID: {activeClient.accountId}
                </span>
              </div>
            </div>

            {/* Trial Badge */}
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-extrabold tabular-nums border-2 ${
                activeClient.trialDaysLeft < 10
                  ? 'text-[#ff4d4f] border-[#ff4d4f] bg-[#ff4d4f]/10'
                  : 'text-[#ff7a45] border-[#ff7a45] bg-[#ff7a45]/10'
              }`}
            >
              Trial: {activeClient.trialDaysLeft} days left
            </span>

            {/* Actions: Theme Toggle & Logout */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                className="w-10 h-10 rounded-full border-2 border-[var(--rx-lime)] text-[#eef1f7] hover:bg-[var(--rx-lime)] hover:text-[#12263a] flex items-center justify-center transition-colors cursor-pointer"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 13.5A9 9 0 1 1 10.5 3a7 7 0 0 0 10.5 10.5Z" />
                  </svg>
                )}
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onLogout();
                }}
                className="px-4 py-1.5 text-xs sm:text-sm font-bold text-[#eef1f7] rounded-full border-2 border-[var(--rx-lime)] hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors cursor-pointer"
              >
                Log out
              </button>
            </div>
          </header>

          {/* If a module is active, show the interactive module view; otherwise, show the Cloud Map */}
          {activeModule ? (
            <div className="p-6 sm:p-10 animate-in fade-in duration-200">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[color-mix(in_srgb,var(--rx-blue)_25%,transparent)]">
                <button
                  type="button"
                  onClick={() => setActiveModule(null)}
                  className="px-4 py-2 bg-[#12263a] text-[#eef1f7] text-xs sm:text-sm font-bold rounded-full border-2 border-[var(--rx-lime)] hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>&larr;</span> Back to workspace
                </button>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink)] m-0">
                  {activeModule.title}
                </h3>
              </div>

              {/* Module Interactive Mockup Canvas */}
              <div className="bg-[var(--bg)] border border-[color-mix(in_srgb,var(--rx-blue)_30%,transparent)] rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="max-w-2xl">
                  <span className="text-xs font-bold text-[var(--rx-blue)] uppercase tracking-wider block mb-1">
                    Connected Module
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-[var(--ink)] mb-2">
                    {activeModule.title} Hub
                  </h4>
                  <p className="text-[var(--sub)] text-sm sm:text-base leading-relaxed mb-6">
                    {activeModule.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-[var(--sec)] border border-slate-200/50">
                      <div className="text-xs font-semibold text-[var(--sub)]">Active Status</div>
                      <div className="text-lg font-extrabold text-[#5a8700] flex items-center gap-1.5 mt-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#5a8700]" />
                        Operational
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[var(--sec)] border border-slate-200/50">
                      <div className="text-xs font-semibold text-[var(--sub)]">Account</div>
                      <div className="text-lg font-extrabold text-[var(--ink)] mt-1">
                        {activeClient.accountId}
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[var(--sec)] border border-slate-200/50">
                      <div className="text-xs font-semibold text-[var(--sub)]">Data Sync</div>
                      <div className="text-lg font-extrabold text-[var(--rx-blue)] mt-1">
                        Cloud Realtime
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-slate-800/40 border border-blue-100 dark:border-slate-700 text-xs text-[var(--sub)] leading-relaxed">
                    Module preview is connected in safe mockup mode. All actions operate with empty target safety.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-10">
              <div className="mb-6">
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--ink)] mb-2">
                  Your workspace
                </h2>
                <p className="text-[var(--sub)] text-base sm:text-lg">
                  Open any module from the cloud.
                </p>
              </div>

              {/* Responsive Cloud Canvas */}
              <div className="rx-map relative w-full">
                <div className="rx-cloudbox relative w-full aspect-[2/1]">
                  {/* SVG Wires and Cloud */}
                  <svg className="absolute inset-0 w-full h-full block" viewBox="0 0 1600 800" aria-hidden="true">
                    <defs>
                      <filter id="rxGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" />
                      </filter>
                      <filter id="rxShadow" x="-20%" y="-20%" width="140%" height="150%">
                        <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#14283c" floodOpacity="0.18" />
                      </filter>
                      <linearGradient id="rxCloudFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--rx-cloud-1, #fff)" />
                        <stop offset="100%" stopColor="var(--rx-cloud-2, #eaf2fb)" />
                      </linearGradient>

                      <path id="rxW1" d="M435 260V318Q435 338 455 338H650" />
                      <path id="rxW2" d="M270 400H570" />
                      <path id="rxW3" d="M270 660H430" />
                      <path id="rxW4" d="M800 232V300" />
                      <path id="rxW5" d="M1165 260V318Q1165 338 1145 338H980" />
                      <path id="rxW6" d="M1330 400H1080" />
                      <path id="rxW7" d="M1330 660H1180" />
                    </defs>

                    {/* Wires */}
                    <g>
                      {['rxW1', 'rxW2', 'rxW3', 'rxW4', 'rxW5', 'rxW6', 'rxW7'].map((wId, idx) => {
                        const mod = MODULE_LIST[idx];
                        const show = !mod || isModuleAllowed(mod.id);
                        if (!show) return null;
                        return (
                          <g key={wId}>
                            <use href={`#${wId}`} className="rx-wire" stroke="var(--rx-blue)" strokeWidth="5" fill="none" />
                            <use href={`#${wId}`} className="rx-flow" stroke="var(--rx-lime)" strokeWidth="5" strokeDasharray="9 10" fill="none" />
                          </g>
                        );
                      })}
                    </g>

                    {/* Cloud Body with Shadow */}
                    <g filter="url(#rxShadow)">
                      <path
                        d="M520 740C400 740 340 680 340 600C340 520 400 470 470 460C470 380 540 330 620 340C650 270 730 230 810 240C900 250 950 300 960 350C1050 330 1130 380 1140 450C1220 460 1270 520 1270 600C1270 690 1200 740 1120 740Z"
                        fill="url(#rxCloudFill)"
                        stroke="var(--rx-blue, #2f72bf)"
                        strokeWidth="9"
                        strokeLinejoin="round"
                      />
                    </g>

                    {/* Connection Dots */}
                    <g>
                      {[
                        [435, 260, 0],
                        [270, 400, 1],
                        [270, 660, 2],
                        [800, 232, 3],
                        [1165, 260, 4],
                        [1330, 400, 5],
                        [1330, 660, 6],
                      ].map(([cx, cy, modIdx], i) => {
                        const mod = MODULE_LIST[modIdx];
                        if (mod && !isModuleAllowed(mod.id)) return null;
                        return (
                          <g key={i}>
                            <circle cx={cx} cy={cy} r="13" fill="var(--rx-lime)" opacity="0.5" filter="url(#rxGlow)" />
                            <circle cx={cx} cy={cy} r="7" fill="var(--rx-lime)" />
                          </g>
                        );
                      })}
                    </g>
                  </svg>

                  {/* Center Panda Logo inside the Cloud */}
                  <div
                    className="absolute left-[36%] top-[43%] w-[28%] flex items-center justify-center pointer-events-none"
                    style={{ aspectRatio: '3730 / 2239' }}
                  >
                    <RaxaLogo variant={theme === 'dark' ? 'white' : 'navy'} className="w-full h-auto drop-shadow-md" />
                  </div>
                </div>

                {/* Module Tiles Navigation */}
                <nav className="absolute inset-0 pointer-events-none" aria-label="Modules">
                  {MODULE_LIST.map((mod) => {
                    const show = isModuleAllowed(mod.id);
                    if (!show) return null;

                    return (
                      <a
                        key={mod.id}
                        href={`#${mod.id}`}
                        onClick={(e) => handleTileClick(e, mod)}
                        style={{
                          position: 'absolute',
                          left: mod.x,
                          top: mod.y,
                          width: mod.w || '14.5%',
                          height: mod.h || '25%',
                        }}
                        className={`pointer-events-auto flex flex-col items-center justify-center gap-1.5 p-2 bg-[var(--rx-tile-bg)] text-[var(--rx-tile-text)] border-[2.5px] border-[var(--rx-blue)] rounded-2xl shadow-lg hover:-translate-y-1.5 hover:border-[var(--rx-lime)] hover:shadow-2xl transition-all cursor-pointer group no-underline ${
                          mod.isLg ? 'border-3' : ''
                        }`}
                      >
                        <span className="absolute top-2 right-2 text-xs font-extrabold text-[var(--rx-lime)] opacity-0 group-hover:opacity-100 transition-opacity">
                          &rarr;
                        </span>

                        <div className="w-1/2 max-w-[50px] aspect-square flex items-center justify-center text-[var(--rx-ico)] group-hover:text-[var(--rx-lime)] transition-colors">
                          <ModuleIcon type={mod.iconType} />
                        </div>

                        <b className="px-1 text-center font-extrabold text-[clamp(11px,1.2vw,16px)] leading-tight">
                          {mod.title}
                        </b>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// SVG icons for ERP modules
function ModuleIcon({ type }: { type: string }) {
  switch (type) {
    case 'hr':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
        </svg>
      );
    case 'sales':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'inventory':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case 'cx':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    case 'purchase':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    case 'dashboard':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      );
    case 'management':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
  }
}
