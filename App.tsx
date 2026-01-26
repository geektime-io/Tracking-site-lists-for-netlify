import React, { useState, useMemo } from 'react';
import { Map, Globe, Filter, Search } from 'lucide-react';
import { CARRIERS, LOGO_URL } from './constants';
import { Region, Carrier } from './types';
import CarrierCard from './components/CarrierCard';
import TrackingModal from './components/TrackingModal';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>(Region.ALL);
  const [selectedCarrier, setSelectedCarrier] = useState<Carrier | null>(null);

  // Group stats for the dashboard
  const stats = useMemo(() => {
    return {
      total: CARRIERS.length,
      regions: new Set(CARRIERS.map(c => c.region)).size,
    };
  }, []);

  // Filter Logic
  const filteredCarriers = useMemo(() => {
    return CARRIERS.filter((carrier) => {
      const matchesRegion = selectedRegion === Region.ALL || carrier.region === selectedRegion;
      return matchesRegion;
    });
  }, [selectedRegion]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="https://geektime.io/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src={LOGO_URL} alt="GeekTime Logo" className="h-10 w-auto object-contain" />
            </a>
            <div className="hidden md:block h-6 w-px bg-slate-300 mx-2"></div>
            <span className="hidden md:block text-slate-600 font-medium tracking-tight">Tracking Sites List</span>
          </div>
        </div>
      </nav>

      {/* Hero / Header Section */}
      <header className="bg-slate-900 text-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            {/* H1 Removed as requested */}
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Some tracking numbers cannot be found on standard tracking websites. You can use the specialized sites listed below to query your shipments. Please note that these logistics company URLs often expire or move to new addresses. If you are still unable to find your tracking information, please contact me directly.
            </p>
            
            {/* Quick Stats */}
            <div className="flex gap-6 text-sm font-medium">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <Globe className="text-teal-400" size={18} />
                <span>{stats.total} Special Channels</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <Map className="text-purple-400" size={18} />
                <span>{stats.regions} Global Regions</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area - Overlaps Header */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 w-full">
        
        {/* Region Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-2 mb-8 overflow-x-auto hide-scrollbar flex items-center gap-2">
           <div className="flex items-center gap-2 px-4 py-2 text-slate-500 border-r border-slate-100 mr-2 shrink-0">
             <Filter size={18} />
             <span className="text-sm font-bold uppercase tracking-wider">Regions</span>
           </div>
           {Object.values(Region).map((region) => (
             <button
               key={region}
               onClick={() => setSelectedRegion(region)}
               className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                 selectedRegion === region 
                   ? 'bg-slate-900 text-white shadow-md transform scale-105' 
                   : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
               }`}
             >
               {region}
             </button>
           ))}
        </div>

        {/* Results Grid */}
        {filteredCarriers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
            {filteredCarriers.map((carrier) => (
              <CarrierCard 
                key={carrier.id} 
                carrier={carrier} 
                onTrack={setSelectedCarrier}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border-2 border-dashed border-slate-200">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
              <Search className="text-slate-300" size={36} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">No carriers found</h3>
            <p className="text-slate-500 mt-2 max-w-xs mx-auto">
              There are no carriers listed for the selected region.
            </p>
            <button 
              onClick={() => setSelectedRegion(Region.ALL)}
              className="mt-6 text-white bg-teal-600 px-6 py-2 rounded-full font-medium hover:bg-teal-700 transition-colors shadow-sm"
            >
              View All Regions
            </button>
          </div>
        )}

      </main>

      <Footer />
      
      <TrackingModal 
        carrier={selectedCarrier} 
        onClose={() => setSelectedCarrier(null)} 
      />
    </div>
  );
};

export default App;