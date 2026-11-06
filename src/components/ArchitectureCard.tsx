import React from 'react';
import type { ArchitectureLayer } from '../data/ghostArchitecture';

interface CardProps {
  layer: ArchitectureLayer;
  onSelect: (layer: ArchitectureLayer) => void;
}

export const ArchitectureCard: React.FC<CardProps> = ({ layer, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(layer)}
      className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col justify-between group"
    >
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-700 text-indigo-300 border border-slate-600">
            {layer.category}
          </span>
          <span className={`text-xs font-bold px-2 py-0.5 rounded ${
            layer.securityRisk === 'High' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
          }`}>
            {layer.securityRisk} Risk
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors mb-2">
          {layer.name}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {layer.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {layer.techStack.map((tech) => (
            <span key={tech} className="text-xs bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center text-xs text-slate-400 pt-3 border-t border-slate-700/60">
          <span>Test Coverage</span>
          <span className="font-semibold text-emerald-400">{layer.testCoverage}%</span>
        </div>
      </div>
    </div>
  );
};