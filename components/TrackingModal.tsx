import React from 'react';
import Modal from 'react-modal';

// Modal styles can be customized or added here
Modal.setAppElement('#root');

interface TrackingModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    trackingInfo: string;
}

const TrackingModal: React.FC<TrackingModalProps> = ({ isOpen, onRequestClose, trackingInfo }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Tracking Information"
        >
            <h2>Tracking Information</h2>
            <div>{trackingInfo}</div>
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default TrackingModal;