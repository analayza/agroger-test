import {FaUserCircle} from "react-icons/fa";
import {IoIosSearch} from "react-icons/io";
import IconNotification from "../IconNotificationComponent/IconNotification";
import "../navBarComponent/navBarComponent.sass";

export default function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="divprofile"><FaUserCircle className="profile-icon"/></div>

                <div className="search-container">
                    <IoIosSearch className="search-icon" />
                    <input type="text" placeholder="Buscar sessão" className="searchbar" />
                </div>
                
                <IconNotification />
            </nav>
        </>
    )
}