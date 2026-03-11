import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#1a1a1a]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-[#287A7A] text-white w-10 h-10 flex items-center justify-center font-bold text-xl">
                FA
              </div>
              <div className="flex flex-col">
                <h1 className="text-[22px] font-bold leading-none text-gray-900 tracking-tight">FinancialAdvisa</h1>
                <span className="text-[10px] font-semibold text-gray-500 tracking-[0.2em] uppercase mt-1">Money Made Simple</span>
              </div>
            </Link>
            
            <div className="hidden md:flex relative w-[480px]">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="Search topics, questions, or advice..." 
                className="w-full bg-[#F3F4F6] border-none rounded-md py-2.5 pl-12 pr-4 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#287A7A]"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="bg-[#287A7A] text-white px-5 py-2.5 rounded text-[15px] font-medium flex items-center gap-2 hover:bg-[#206060] transition-colors">
              <span className="material-symbols-outlined text-[18px]">edit_square</span>
              Write
            </button>
            <button className="text-gray-600 hover:text-gray-900 flex items-center gap-1.5 text-[15px] font-medium">
              <span className="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
              Help
            </button>
            <button className="text-gray-600 hover:text-gray-900 relative">
              <span className="material-symbols-outlined text-[24px]">notifications</span>
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-[#10B981] rounded-full border border-white"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-sm font-bold ml-2">
              JS
            </div>
          </div>
        </div>

        {/* Sub-navigation */}
        <div className="border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex gap-8">
            <Link to="/" className={`flex items-center gap-2 py-3.5 text-[15px] font-medium ${path === '/' ? 'text-[#287A7A] border-b-2 border-[#287A7A]' : 'text-gray-600 hover:text-gray-900'}`}>
              <span className="material-symbols-outlined text-[20px]">home</span>
              Home
            </Link>
            <Link to="/easy-reads" className={`flex items-center gap-2 py-3.5 text-[15px] font-medium ${path === '/easy-reads' ? 'text-[#287A7A] border-b-2 border-[#287A7A]' : 'text-gray-600 hover:text-gray-900'}`}>
              <span className="material-symbols-outlined text-[20px]">menu_book</span>
              Easy Reads
            </Link>
            <Link to="/qna" className={`flex items-center gap-2 py-3.5 text-[15px] font-medium ${path === '/qna' ? 'text-[#287A7A] border-b-2 border-[#287A7A]' : 'text-gray-600 hover:text-gray-900'}`}>
              <span className="material-symbols-outlined text-[20px]">help_outline</span>
              Q&A
            </Link>
            <Link to="/experts" className={`flex items-center gap-2 py-3.5 text-[15px] font-medium ${path === '/experts' ? 'text-[#287A7A] border-b-2 border-[#287A7A]' : 'text-gray-600 hover:text-gray-900'}`}>
              <span className="material-symbols-outlined text-[20px]">person_search</span>
              Ask an Expert
            </Link>
            <Link to="/consultation" className={`flex items-center gap-2 py-3.5 text-[15px] font-medium ${path === '/consultation' ? 'text-[#287A7A] border-b-2 border-[#287A7A]' : 'text-gray-600 hover:text-gray-900'}`}>
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              Consultation
            </Link>
            <Link to="/admin" className={`flex items-center gap-2 py-3.5 text-[15px] font-medium ${path === '/admin' ? 'text-[#287A7A] border-b-2 border-[#287A7A]' : 'text-gray-600 hover:text-gray-900'}`}>
              <span className="material-symbols-outlined text-[20px]">shield_person</span>
              Admin
            </Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
