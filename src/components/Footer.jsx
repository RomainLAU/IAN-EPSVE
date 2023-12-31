import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from '../assets/Home.svg';
import { ReactComponent as Maps } from '../assets/Maps.svg';
import { ReactComponent as Profil } from '../assets/Profil.svg';

export default function Footer({ children }) {
    return (
        <footer className="flex justify-around content-center fixed bottom-0 left-0 w-screen bg-[#FFF]">
            <div className="flex justify-around content-center text-center w-full py-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex flex-col-reverse content-center items-center ${isActive ? 'isActive' : 'notActive'}`
                    }
                >
                    <p className="text-center">Home</p>
                    <Home />
                </NavLink>
                <NavLink
                    to="/map"
                    className={({ isActive }) =>
                        `flex flex-col-reverse content-center items-center ${isActive ? 'isActive' : 'notActive'}`
                    }
                >
                    <p>Maps</p>
                    <Maps />
                </NavLink>

                <NavLink
                    to="/profil"
                    className={({ isActive }) =>
                        `flex flex-col-reverse content-center items-center ${isActive ? 'isActive' : 'notActive'}`
                    }
                >
                    <p>Profil</p>
                    <Profil />
                </NavLink>
            </div>
        </footer>
    );
}
