import '../buttonComponent/ButtonNewSession.sass';

export default function ButtonNewSession({ label, onClick }){
    return (
        <button onClick={onClick} className="custom-button">
          {label}
        </button>
      );
}