import './ListeProduits.scss';
import Produit from './Produit';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { bdFirestore as bd } from './firebase/init.js';

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default function ListeProduits({etatPanier}) {
    // Variable d'etat des produits
    const [produits,setProduits] = useState([]);
    // Obtenir les produits de la collection Firestore
    useEffect(function() {
        // Obtenir tous les doucments de la collection 'maggen-produits'
        getDocs(collection(bd, 'maggen-produits')).then(
            qs=> setProduits(qs.docs.map(doc => ({id: doc.id, ...doc.data()})))
        );
    }, []);
    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {
                    produits.map(p => <Produit etatPanier={etatPanier} setPanier={setProduits} key={p.id} nom={p.nom} prix={p.prix} pid={p.id} />)
                }
            </div>
        </section>
    );
}