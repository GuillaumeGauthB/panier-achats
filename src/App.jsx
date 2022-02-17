import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import {useState} from 'react';

function App() {
  // Etat React pour gerer un panier d'achats
  const etatPanier = useState({});
  // Remarquez que useState retourne un tableau:
  // Le premier element du tableau represente le contenu de l'etat
  const panier = etatPanier[0];
  // Le deuxieme elelement est une fonction qui sert a reecrire l'etat
  // const setPanier = etatPanier[1];
  // Donc, alternativevment avec destructucturation

  // const [panier, setPanier] = etatPanier[0];
  console.log("L'état panier : ", panier);

  // let panier = {
  //     prd0003: {
  //       prix: 13.95,
  //       qte: 5
  //     },
  //     prd0001: {
  //       prix: 9.95,
  //       qte: 2
  //     },
  //     prd0004: {
  //       prix: 11.95,
  //       qte: 18
  //     }
  // };

  // let compteurClic = 0;
  // const etatCompteur = useState(0);
  const [compteur, setCompteur] = useState(0);
  return (
    <div className="App">
      <Entete panier={panier} />
      <ListeProduits etatPanier={etatPanier} />
      <div>
        <span>Nombre de clics: <i className='compteur'>{compteur}</i></span>
        <button onClick={() => {setCompteur(compteur + 1); /*compteurClic++;*/ console.log("hippity hoppity you are now my property: ", compteur)}}>CLiquez-moi</button>
      </div>
      <PiedPage />
    </div>
  );
}

export default App;
