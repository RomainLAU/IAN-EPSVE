import logo from '../assets/logo.png';
import userPicture from '../assets/user.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div className="h-[70px] w-full flex items-center justify-between">
            <Link className="h-[35px] flex items-center justify-center ml-5"
            to="/">
                <img src={logo} alt="Logo" className="h-[35px]"/>
            </Link>
            <div className="h-[50px] w-[50px] flex items-center justify-center mr-5 rounded-full">
                <img src={userPicture} alt="Profile" className="h-[50px] w-[50px]"/>
            </div>
        </div>
    )
}
