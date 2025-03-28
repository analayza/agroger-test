import '../buttonComponent/ButtonNewSession.sass';
import { PiCoffeeLight } from "react-icons/pi";

export default function ButtonNewSession({ label, onClick}){
    return (
        <button onClick={onClick} className="custom-button">
            <div className='div-icon-coffee-button'>
              <PiCoffeeLight className='iconCoffeButton'></PiCoffeeLight>
            </div>
           
            <strong>{label}</strong>
        </button>
      );
}