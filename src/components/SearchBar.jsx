import mic from '../assets/mic.png';
import search from '../assets/search.png';

export default function SearchBar() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="h-[60px] bg-[#FFFFFF] flex items-center justify-between rounded-full w-[360px] shadow-md p-2">
                <button className="h-[40px] w-[40px] flex items-center justify-center ml-5">
                    <img src={search} alt="Bouton rechercher" className="h-[20px] w-[20px]" />
                </button>
                
                <input type="text" placeholder="Où veux tu aller ?"
                className="outline-0 text-[16px] w-[220px] ml-4 font-bold font-calibri"/>

                <button className="bg-LightBlue h-[40px] w-[40px] flex items-center justify-center rounded-full"
                style={{ border: '1px solid rgba(0, 0, 0, 0.3)' }}>
                    <img src={mic} alt="Bouton du micro" 
                    className="h-[20px]"/>
                </button>
            </div>
        </div>
    );
}
