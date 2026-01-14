import React from 'react';

type Carrier = {
    id: string;
    name: string;
};

type TrackingModalProps = {
    carrier: Carrier;
    onClose: () => void;
};

const TrackingModal: React.FC<TrackingModalProps> = ({ carrier, onClose }) => {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-md w-80">
                <h2 className="text-lg font-bold mb-4">Tracking Information for {carrier.name}</h2>
                <p className="mb-4">Your tracking details go here...</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default TrackingModal;