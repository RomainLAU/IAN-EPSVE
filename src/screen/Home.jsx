import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
    return (
        <div className="flex justify-center align-center flex-col gap-4">
            <Header />
            <h1>Home</h1>
            <div className="flex col bg-LightBlue">
                <div className="flex justify-between">
                    <h2>Batiment A</h2>
                    <div>a</div>
                </div>
                <h2>Batiment A</h2>
                <div>
                    <div></div>
                    <div className="bar">
                        <div className="progress-bar" />
                    </div>
                </div>
                <div className="flex gap-[12px] jusitfy-between w-[230px]">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
