import React from 'react';
import type { ArchitectureLayer } from '../data/ghostArchitecture';

interface ModalProps {
  layer: ArchitectureLayer | null;
  onClose: () => void;
}

export const DetailModal: React.FC<ModalProps> = ({ layer, onClose }) => {
  if (!layer) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-700/50"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {layer.category}
          </span>
          <span className="text-xs text-slate-400">Coverage: {layer.testCoverage}%</span>
        </div>

        <h2 className="text-2xl font-bold text-indigo-300 mb-3">{layer.name}</h2>
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">{layer.description}</p>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Core Responsibilities</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
              {layer.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">QA & Testing Considerations</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
              {layer.qaConsiderations.map((qa, idx) => (
                <li key={idx}>{qa}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-700 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};