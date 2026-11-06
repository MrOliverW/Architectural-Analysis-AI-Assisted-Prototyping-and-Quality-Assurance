import React from 'react';
import { QA_METRICS } from '../data/ghostArchitecture';

export const QaDashboard: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Quality Assurance Audit Suite</h2>
          <p className="text-slate-400 text-sm">Automated and manual test matrix evaluations for Ghost CMS</p>
        </div>
        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
          3/4 Passed
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-900/60 text-slate-400 uppercase text-xs">
            <tr>
              <th className="p-3 rounded-l-lg">Test Suite</th>
              <th className="p-3">Category</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              <th className="p-3 rounded-r-lg">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {QA_METRICS.map((metric) => (
              <tr key={metric.id} className="hover:bg-slate-700/30 transition-colors">
                <td className="p-3 font-semibold text-white">{metric.testSuite}</td>
                <td className="p-3 text-slate-400">{metric.category}</td>
                <td className="p-3">
                  <span className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-300">
                    {metric.automated ? 'Automated' : 'Manual'}
                  </span>
                </td>
                <td className="p-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    metric.status === 'Passed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {metric.status}
                  </span>
                </td>
                <td className="p-3 text-slate-400 text-xs max-w-xs">{metric.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};