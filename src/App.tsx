import { useState } from 'react';
import { GHOST_LAYERS, type ArchitectureLayer } from './data/ghostArchitecture';
import { Header } from './components/Header';
import { ArchitectureCard } from './components/ArchitectureCard';
import { DetailModal } from './components/DetailModal';
import { QaDashboard } from './components/QaDashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'qa-matrix'>('architecture');
  const [selectedLayer, setSelectedLayer] = useState<ArchitectureLayer | null>(null);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 font-sans">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-6xl mx-auto">
        {activeTab === 'architecture' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GHOST_LAYERS.map((layer) => (
              <ArchitectureCard 
                key={layer.id} 
                layer={layer} 
                onSelect={setSelectedLayer} 
              />
            ))}
          </div>
        ) : (
          <QaDashboard />
        )}
      </main>

      <DetailModal 
        layer={selectedLayer} 
        onClose={() => setSelectedLayer(null)} 
      />
    </div>
  );
}