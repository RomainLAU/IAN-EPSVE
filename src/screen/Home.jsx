import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ArrowRight from '../assets/ArrowR.png';
import { Link } from 'react-router-dom';
import Mic from '../assets/Mic.svg';
import Destination from '../assets/destination.png';
import Flag from '../assets/flag.png';
import I1 from '../assets/item-illustration-1.png';
import I2 from '../assets/item-illustration-2.png';
import SwiperArrow from '../assets/swiper-arrow.png';
import Cancel from '../assets/cancel.png';

export default function Home() {
    return (
        <div className="flex justify-center align-center flex-col gap-4">
            <Header />
            <h1 className="text-[44px] font-calibri ml-[10px]">
                Bonjour Julie
            </h1>
            <SearchBar />
            <div className="w-full p-3">
                <h2 className='text-[24px] font-calibri mb-5'>Ma localisation</h2>
                <div className='flex flex-wrap gap-[6%]'>
                    <div className="border-round flex flex-col bg-LightBlue p-4 h-[212px]">
                        <div className="flex justify-between">
                            <h2 className='text-[40px] font-calibri'>Batiment A</h2>
                            <Link className="bg-[#FFFFFF] rounded-full flex justify-center items-center w-[40px] h-[40px]" to='/integration'>
                                <img src={ArrowRight} alt="Aller à la destination" className="w-[18px] h-[17px]" />
                            </Link>
                        </div>
                        <h2 className='text-[32px] font-light font-calibri leading-none mb-6 flex'>Code:4567
                        <button className='bg-[#FFFFFF] ml-1 rounded-full flex justify-center items-center w-[24px] h-[24px]'>
                            <img src={Mic} alt="Aller à la destination" className="w-[12px] h-[14px]" />
                        </button>
                        </h2>
                        <div className='flex justify-start gap-4 mt-5 items-center'>
                            <img src={Destination} alt="pictogramme de la destination" />
                            <div className="bar">
                                <div className="progress-bar" />
                                <img className="destination-flag" src={Flag} alt="Drapeau d'arriver" />
                                <span className='flag-footer'></span>
                            </div>
                        </div>
                        <div className="flex gap-[12px] justify-around w-full">
                            <p className='text-[#FFFFFF]'>2 Km</p>
                            <p className='text-[#FFFFFF]'>10 min</p>
                            <p className='text-[#FFFFFF]'>16:15</p>
                        </div>
                    </div>

                    <Link className='border-round mt-4 flex flex-col pt-5 pb-5 bg-DarkBlue w-[47%] overflow-hidden'
                    to="/integration">
                        <p className='text-[22px] font-calibri text-[#FFFFFF] leading-none ml-3'>Intégration</p>
                        <p className='text-[16px] font-calibri text-custom-white leading-none mt-3 ml-3'>
                        Découvrez le fonctionnement de notre application !
                        </p>
                        <img src={I1} alt="Illustration" />
                    </Link>
                    <div className='border-round mt-4 flex items-center p-5 flex-col bg-[#38BD83] w-[47%]'>
                        <p className='text-[22px] font-calibri text-[#FFFFFF] leading-none text-center'>Direction vers Bâtiment A</p>
                        <div className='flex gap-5 w-full justify-around mt-5 mb-5'>
                            <img src={SwiperArrow} alt="Précédent" className='cursor-pointer'/>
                            <img src={Cancel} alt="Annuler" className='cursor-pointer'/>
                            <img src={SwiperArrow} alt="Suivant"  className='cursor-pointer rotate-180 disable-arrow'/>
                        </div>
                        <img src={I2} alt="Illustration de boussole" 
                        className='aspect-square w-[110px]'/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
