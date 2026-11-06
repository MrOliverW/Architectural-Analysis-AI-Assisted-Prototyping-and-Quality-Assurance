import React from 'react';

interface HeaderProps {
  activeTab: 'architecture' | 'qa-matrix';
  setActiveTab: (tab: 'architecture' | 'qa-matrix') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="max-w-6xl mx-auto border-b border-slate-700 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-indigo-400">
          Ghost CMS Architectural Visualizer
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          AI-Assisted Prototyping & Quality Assurance Analysis
        </p>
      </div>

      <div className="flex gap-2 bg-slate-800 p-1.5 rounded-lg border border-slate-700">
        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'architecture'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
          }`}
        >
          System Architecture
        </button>
        <button
          onClick={() => setActiveTab('qa-matrix')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'qa-matrix'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
          }`}
        >
          QA & Testing Matrix
        </button>
      </div>
    </header>
  );
};