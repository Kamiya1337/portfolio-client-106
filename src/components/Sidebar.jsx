import { BookOpen, CheckSquare, FileCheck, Home, Menu, MessageSquare, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'home', icon: Home, label: 'Overview' },
  { id: 'projects', icon: BookOpen, label: 'Assignments' },
  { id: 'evidence', icon: FileCheck, label: 'Evidence' },
  { id: 'rubric', icon: CheckSquare, label: 'Rubric' },
  { id: 'summary', icon: MessageSquare, label: 'Reflection' },
];

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const { student } = portfolioData;
  const selectTab = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <header className="portfolio-mobile-header sticky top-0 z-[60] mx-3 mt-3 flex h-16 items-center justify-between rounded-[1.45rem] border border-primary/10 bg-[#FBE9E6]/90 px-5 text-charcoal shadow-md backdrop-blur-xl md:hidden">
        <div>
          <p className="font-display text-lg font-normal text-primary">{student.name}</p>
          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-muted-dark">English Language & Culture Learning Portfolio</p>
        </div>
        <button type="button" aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} className="icon-button-dark">
          {isMobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>
 
      <aside className={`portfolio-sidebar fixed inset-y-0 left-0 z-50 m-0 flex w-[300px] flex-col rounded-none border-r border-primary/10 bg-[#FBE9E6]/90 px-4 py-5 text-charcoal shadow-[0_30px_90px_rgba(154,77,104,0.16)] backdrop-blur-2xl transition-transform duration-300 md:m-4 md:w-[252px] md:translate-x-0 md:rounded-[2rem] md:border md:border-white/70 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="border-b border-primary/10 px-3 pb-7 pt-2">
          <p className="font-display text-3xl font-normal leading-none tracking-[-0.02em] text-primary">Portfolio</p>
          <p className="mt-4 inline-flex rounded-full bg-[#F2678E]/16 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Academic Year {student.academicYear}</p>
          <div className="mt-8 flex items-center gap-3">
            <img src="/images.jpg" alt={`${student.name} portfolio owner`} className="h-12 w-12 rounded-2xl border border-white/70 object-cover shadow-md" />
            <div className="space-y-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-dark">
              <p className="font-bold text-charcoal">{student.name}</p>
              <p>{student.shortUniversity}</p>
            </div>
          </div>
          <div className="mt-5 space-y-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-dark">
            <p>{student.major}</p>
          </div>
        </div>
 
        <nav className="flex-1 px-1 py-7 space-y-1" aria-label="Portfolio sections">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;
            return (
              <button type="button" key={item.id} onClick={() => selectTab(item.id)} className={`group relative flex w-full items-center gap-3 rounded-[1.25rem] px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.16em] transition duration-200 ${isActive ? 'text-[#0F6B7D]' : 'text-muted-dark hover:bg-white/45 hover:text-primary'}`}>
                {isActive && <motion.span layoutId="active-nav-blob" className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-[#0F9AB2]" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />}
                <span className="relative z-10 flex items-center gap-3">
                <Icon size={17} strokeWidth={1.7} />
                <span>{String(index + 1).padStart(2, '0')} {item.label}</span>
                </span>
              </button>
            );
          })}
        </nav>
 
        <div className="rounded-[1.4rem] border border-white/70 bg-white/55 px-4 py-5 shadow-sm">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-primary">Portfolio Index</p>
          <p className="mt-3 text-xs text-muted-dark">Editorial Academic Archive</p>
        </div>
      </aside>
 
      {isMobileOpen && <button type="button" aria-label="Đóng menu" className="portfolio-mobile-overlay fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setIsMobileOpen(false)} />}
    </>
  );
}
