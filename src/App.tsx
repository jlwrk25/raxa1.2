import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkspaceCloud } from './components/WorkspaceCloud';
import { PandaTraits } from './components/PandaTraits';
import { FeedbackSection } from './components/FeedbackSection';
import { UsersChart } from './components/UsersChart';
import { Modals } from './components/Modals';
import { ActiveModal } from './types';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToWorkspace = () => {
    const el = document.getElementById('modules');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)] transition-colors duration-200">
      {/* Top Sticky Header */}
      <Navbar onOpenModal={setActiveModal} onScrollToTop={scrollToTop} />

      <main className="flex-1">
        {/* Navy Hero Section */}
        <Hero onOpenModal={setActiveModal} onScrollToWorkspace={scrollToWorkspace} />

        {/* Your Workspace: Cloud Map with 7 Module Tiles and Client Switcher */}
        <WorkspaceCloud
          theme={theme}
          onToggleTheme={toggleTheme}
          onLogout={() => setActiveModal('login')}
        />

        {/* Panda Traits Section */}
        <PandaTraits />

        {/* Comments and Feedback Section */}
        <FeedbackSection />

        {/* Users Growth Interactive Chart */}
        <UsersChart />
      </main>

      {/* Footer */}
      <footer className="py-7 px-4 text-center text-xs sm:text-sm text-[var(--sub)] border-t border-[var(--rx-chart-grid)] bg-[var(--bg)]">
        &copy; 2021&ndash;2026 RaXa Systems. Built with care by two pandas. All links and actions set with safe targets.
      </footer>

      {/* Interactive In-App Dialog Modals */}
      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
