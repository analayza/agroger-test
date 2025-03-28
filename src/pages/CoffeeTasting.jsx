import NavBar from "../components/navBarComponent/NavBarComponent.jsx";
import ButtonNewSession from "../components/buttonComponent/ButtonNewSession";
import "../style/CoffeeTasting.sass";


export default function CoffeTasting() {
    return (
        <>
            <div className="contener">
                <NavBar></NavBar>
                <ButtonNewSession label={"Nova sessão de prova"} />
            </div>
        </>
    )
}