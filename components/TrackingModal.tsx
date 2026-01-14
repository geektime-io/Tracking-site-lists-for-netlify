import React from 'react';
import { Carrier } from '../types';
import { X, ExternalLink } from 'lucide-react';

type TrackingModalProps = {
    carrier: Carrier | null;
    onClose: () => void;
};

const TrackingModal: React.FC<TrackingModalProps> = ({ carrier, onClose }) => {
    if (!carrier) return null;

    const handleVisitSite = () => {
        window.open(carrier.url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-slate-900 text-white p-6 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                    <span className="text-4xl mb-3 block">{carrier.flag}</span>
                    <h2 className="text-2xl font-bold">{carrier.name}</h2>
                    <span className="text-sm text-slate-300 mt-1 block">{carrier.region}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                    <p className="text-slate-600 mb-4">{carrier.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {carrier.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <button
                        onClick={handleVisitSite}
                        className="w-full bg-teal-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <ExternalLink size={18} />
                        Visit Tracking Site
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrackingModal;