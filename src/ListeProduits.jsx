import './ListeProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produits.json';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import "firebase/firestore";
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//  Initialiser Firestore
const bd = app.firestore();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlHQrPM1ntGG2oiuGdRYqdsMrNXH9eoQo",
    authDomain: "iwra-4pa.firebaseapp.com",
    projectId: "iwra-4pa",
    storageBucket: "iwra-4pa.appspot.com",
    messagingSenderId: "250341683171",
    appId: "1:250341683171:web:a5711114fc0087906fbad6",
    measurementId: "G-ERZ8N3C54W"
  };

// Chercher les donn/es dans la collection 'maggen-produits'
bd.collection('maggen-produits').get().then(
    reponse => reponse.forEach(
        prd = console.log('Info du produit: ', prd.data(), '/ id du produit', prd.id)
    )
);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default function ListeProduits({etatPanier, setPanier}) {
    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {
                    lesProduits.map(p => <Produit etatPanier={etatPanier} setPanier={setPanier} key={p.id} nom={p.nom} prix={p.prix} pid={p.id} />)
                }
            </div>
        </section>
    );
}