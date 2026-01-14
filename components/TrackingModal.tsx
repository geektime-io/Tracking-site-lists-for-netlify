import React from 'react';
import { X } from 'lucide-react';
import { Carrier } from '../types';

interface TrackingModalProps {
  carrier: Carrier | null;
  onClose: () => void;
}

const TrackingModal: React.FC<TrackingModalProps> = ({ carrier, onClose }) => {
  if (!carrier) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>    
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-900">{carrier.flag} {carrier.name}</h2>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600"
            >
              <X size={24} />
            </button>
          </div>
          
          <p className="text-slate-600 mb-6">{carrier.description}</p>
          
          <div className="mb-6">
            <p className="text-sm text-slate-500 mb-2">Region:</p>
            <p className="text-slate-900 font-medium">{carrier.region}</p>
          </div>

          <div className="mb-6">
            <p className="text-sm text-slate-500 mb-2">Tags:</p>
            <div className="flex flex-wrap gap-2">
              {carrier.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={carrier.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Visit Tracking Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrackingModal;