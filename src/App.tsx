import { useState } from 'react';
import { LeadForm } from './components/LeadForm';
import { Dashboard } from './components/Dashboard';

function App() {
  const [view, setView] = useState<'form' | 'dashboard'>('form');

  return (
    <div className="min-h-screen bg-[#fcfaff] selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-[#eef2ff]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <span className="text-xl font-black text-[#1e1b4b] tracking-tight">LeadSystem</span>
          </div>

          <div className="flex items-center gap-2 bg-[#f8f7ff] p-1.5 rounded-2xl border border-[#eef2ff]">
            <button
              onClick={() => setView('form')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${view === 'form'
                  ? 'bg-white text-indigo-600 shadow-sm shadow-indigo-100'
                  : 'text-[#94a3b8] hover:text-indigo-500'
                }`}
            >
              Submission Form
            </button>
            <button
              onClick={() => setView('dashboard')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${view === 'dashboard'
                  ? 'bg-white text-indigo-600 shadow-sm shadow-indigo-100'
                  : 'text-[#94a3b8] hover:text-indigo-500'
                }`}
            >
              Dashboard
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="py-12">
        {view === 'form' ? <LeadForm /> : <Dashboard />}
      </main>

      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-indigo-100/50 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-blue-50/50 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}

export default App;
