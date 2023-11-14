import Step from './screen/Step';
import Map from './screen/Map';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Step />} />
                <Route path="map" element={<Map />} />
            </Routes>
        </BrowserRouter>
    );
}
