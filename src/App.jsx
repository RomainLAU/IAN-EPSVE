import Step from './screen/Steps';
import Map from './screen/Map';
import Profil from './screen/Profil';
import Home from './screen/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='integration' element={<Step />} />
                <Route path="map" element={<Map />} />
                <Route path="profil" element={<Profil />} />
            </Routes>
        </BrowserRouter>
    );
}
