import Footer from "../components/Footer";
import Modal from "../components/Modal";

export default function Map() {

    const activeElement = 
    {
        title: 'Bâtiment K, Allée 4',
        code: 1234,
        distance: '200m',
        time: '5min',
    }

    return (
        <div className="flex justify-center align-center flex-col gap-4">
            <h1>Map</h1>
            <Modal activeElement={activeElement}></Modal>
            <Footer/>
    </div>
    )
}