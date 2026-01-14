import React from 'react';

interface Carrier {
    name: string;
    details: string;
}

interface CarrierCardProps {
    carrier: Carrier;
    onTrack: () => void;
}

const CarrierCard: React.FC<CarrierCardProps> = ({ carrier, onTrack }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md transition duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold text-gray-800">{carrier.name}</h2>
            <p className="text-gray-600">{carrier.details}</p>
            <button 
                onClick={onTrack} 
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Track
            </button>
        </div>
    );
};

export default CarrierCard;