import { useState } from 'react';
import Footer from '../components/Footer';
import InteractiveMap from '../components/InteractiveMap';
import Modal from '../components/Modal';

export default function Map() {
    const [activeElement, setActiveElement] = useState(null);

    return (
        <div className="h-screen w-screen max-h-screen">
            <InteractiveMap activeElement={activeElement} setActiveElement={setActiveElement} />
            {activeElement && <Modal activeElement={activeElement} />}
            <Footer />
        </div>
    );
}
