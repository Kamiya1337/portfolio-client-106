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
      <header className="portfolio-mobile-header sticky top-0 z-[60] mx-3 mt-3 flex h-16 items-center justify-between rounded-[1.45rem] border border-white/10 bg-obsidian/95 px-5 text-white shadow-md backdrop-blur-xl md:hidden">
        <div>
          <p className="font-display text-lg font-normal text-white">{student.name}</p>
          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">English Language & Culture Learning Portfolio</p>
        </div>
        <button type="button" aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} className="icon-button-dark border-white/10 bg-white/5 text-white hover:bg-white/10">
          {isMobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>
 
      <aside className={`portfolio-sidebar fixed inset-y-0 left-0 z-50 m-0 flex w-[300px] flex-col rounded-none border-r border-white/10 bg-obsidian/95 px-4 py-5 text-white shadow-[0_30px_90px_rgba(30,27,24,0.34)] backdrop-blur-2xl transition-transform duration-300 md:m-4 md:w-[252px] md:translate-x-0 md:rounded-[2rem] md:border md:border-white/10 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="border-b border-white/10 px-3 pb-7 pt-2">
          <p className="font-display text-3xl font-normal tracking-[-0.02em] text-white">Portfolio</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Academic Year {student.academicYear}</p>
          <div className="mt-8 flex items-center gap-3">
            <img src="/images.jpg" alt={`${student.name} portfolio owner`} className="h-12 w-12 rounded-2xl object-cover shadow-md border border-white/10" />
            <div className="space-y-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-300">
              <p className="text-white font-bold">{student.name}</p>
              <p className="text-slate-400">{student.shortUniversity}</p>
            </div>
          </div>
          <div className="mt-5 space-y-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
            <p>{student.major}</p>
          </div>
        </div>
 
        <nav className="flex-1 px-1 py-7 space-y-1" aria-label="Portfolio sections">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;
            return (
              <button type="button" key={item.id} onClick={() => selectTab(item.id)} className={`group relative flex w-full items-center gap-3 rounded-[1.25rem] px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.16em] transition duration-200 ${isActive ? 'text-charcoal' : 'text-[#9DA9BA] hover:bg-white/5 hover:text-white'}`}>
                {isActive && <motion.span layoutId="active-nav-blob" className="absolute inset-0 rounded-[1.25rem] bg-white shadow-[0_16px_45px_rgba(255,255,255,0.16)]" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />}
                <span className="relative z-10 flex items-center gap-3">
                <Icon size={17} strokeWidth={1.7} />
                <span>{String(index + 1).padStart(2, '0')} {item.label}</span>
                </span>
              </button>
            );
          })}
        </nav>
 
        <div className="border-t border-white/10 px-3 py-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">Editorial Academic Archive</p>
        </div>
      </aside>
 
      {isMobileOpen && <button type="button" aria-label="Đóng menu" className="portfolio-mobile-overlay fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setIsMobileOpen(false)} />}
    </>
  );
}
