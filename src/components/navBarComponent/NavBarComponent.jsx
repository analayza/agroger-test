import Profile from "../../assets/profile-user.png"
import IconNotification from "../IconNotificationComponent/IconNotification";
import "../navBarComponent/navBarComponent.sass";

export default function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="divprofile"><img src={Profile} alt="" className="profile" /></div>
                <input type="text" placeholder="Buscar sessão" className="searchbar"></input>
                <IconNotification />
            </nav>
        </>
    )
}