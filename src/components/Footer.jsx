import { NavLink } from "react-router-dom"
import { ReactComponent as Home } from "../assets/Home.svg"
import { ReactComponent as Maps } from "../assets/Maps.svg"
import { ReactComponent as Profil } from "../assets/Profil.svg"



export default function Footer({children}) {
    return (
            <footer className="flex justify-around content-center fixed bottom-0 w-screen">
                <div className="flex justify-around content-center text-center w-full py-4 bg-gradient-to-t from-[#FFFFFF] from-%">
                    <NavLink to="/" className="flex flex-col-reverse content-center items-center">
                        <p className="text-center">Home</p>
                        <Home/>
                    </NavLink>
                    <NavLink to="/map" className="flex flex-col-reverse content-center items-center">
                        <p>Maps</p>    
                        <Maps/>
                    </NavLink>
                    <NavLink to="/profil" className="flex flex-col-reverse content-center items-center">
                        <p>Profil</p>
                        <Profil/>
                    </NavLink>
                </div>
            </footer>

    )
}