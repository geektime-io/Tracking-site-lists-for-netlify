import React from 'react';
import { Carrier } from '../types';
import { ExternalLink } from 'lucide-react';

interface CarrierCardProps {
    carrier: Carrier;
    onTrack: (carrier: Carrier) => void;
}

const CarrierCard: React.FC<CarrierCardProps> = ({ carrier, onTrack }) => {
    return (
        <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{carrier.flag}</span>
                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                    {carrier.region}
                </span>
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">{carrier.name}</h2>
            <p className="text-slate-600 text-sm flex-grow mb-4">{carrier.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {carrier.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <button
                onClick={() => onTrack(carrier)}
                className="w-full mt-auto bg-slate-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
                <ExternalLink size={16} />
                Track Shipment
            </button>
        </div>
    );
};

export default CarrierCard;