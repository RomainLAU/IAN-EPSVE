import Step from "./screen/Step";
import Footer from "./components/Footer";
import Map from "./screen/Map";
import Profil from "./screen/Profil";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route index element={<Step />} />
                    <Route path="map" element={<Map />} />
                    <Route path="profil" element={<Profil />} />
            </Routes>
        </BrowserRouter>
    );
}
