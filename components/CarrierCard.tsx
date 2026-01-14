import React from 'react';

interface CarrierCardProps {
  carrierName: string;
  carrierLogoUrl: string;
  trackingNumber: string;
  deliveryStatus: string;
}

const CarrierCard: React.FC<CarrierCardProps> = ({ carrierName, carrierLogoUrl, trackingNumber, deliveryStatus }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', width: '300px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <img src={carrierLogoUrl} alt={`${carrierName} logo`} style={{ width: '100%', borderRadius: '4px' }} />
      <h2 style={{ fontSize: '20px', margin: '8px 0' }}>{carrierName}</h2>
      <p style={{ fontSize: '14px', color: '#555' }}>Tracking Number: <strong>{trackingNumber}</strong></p>
      <p style={{ fontSize: '14px', color: '#555' }}>Status: <strong>{deliveryStatus}</strong></p>
    </div>
  );
};

export default CarrierCard;
