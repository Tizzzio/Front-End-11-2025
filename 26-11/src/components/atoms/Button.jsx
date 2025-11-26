export default function Button({ children, onClick, variant = "primary", type = "button" }) {
  return (
    <button type={type} className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
//children permette a un componente di contenere qualsiasi cosa al suo interno, in modo flessibile, riutilizzabile e indipendente dal contenuto.
//onClick gestisce l'evento di clic sul pulsante, permettendo di eseguire azioni specifiche quando l'utente interagisce con esso.
//variant consente di personalizzare l'aspetto del pulsante in base al contesto in cui viene utilizzato.
//type specifica il tipo di pulsante, con "button" come valore predefinito per evitare comportamenti indesiderati in moduli.
//La combinazione di queste proprietà rende il componente Button versatile e adatto a diverse situazioni nell'interfaccia utente.
