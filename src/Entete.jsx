import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';
import {NavLink} from 'react-router-dom';

// Remarquez la destructuration dèobjet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default function Entete({panier, util, setUtil}) {
    // console.log("Les props du composant Entête : ", props);
    // console.log("Le panier dans Entête : ", props.panier);
    const {articlesDifferents, articlesTotaux, sousTotal, taxes, total} = calculerInfoPanier(Object.values(panier));
    console.log("Le panier (Entete): ", panier);
    console.log("La tableau des valeurs du panier: ", Object.values(panier))
    return (
        <header className="Entete">
            <h1><NavLink to="/">Magasin général</NavLink></h1>
            <nav className="nav-principale">
                <NavLink to="/nos-produits" className={(lien) => lien.isActive ? 'lien-actif' : ''}>Produits</NavLink>
                <NavLink to="/notre-histoire"  className={(lien) => lien.isActive ? 'lien-actif' : ''}>Notre histoire</NavLink>
            </nav>
            <nav className="nav-secondaire">
            <input type="checkbox" id="cc-sommaire-panier" />
            <div className="sommaire-panier">
                <h3>Sommaire du panier</h3>
                <div><span>Articles differents</span><span>{articlesDifferents}</span></div>
                <div><span>ArticleS totaux</span><span>{articlesTotaux}</span></div>
                <div><span>Sous-total</span><span>{sousTotal}</span></div>
                <div><span>Taxes</span><span>{taxes}</span></div>
                <div><span>Total</span><span>{total}</span></div>
            </div>
                <div>{util.displayName}</div>
                <button>Déconnexion</button>
                <Badge badgeContent={articlesTotaux} color="secondary">
                <label htmlFor="cc-sommaire-panier"><ShoppingCartSharpIcon/></label>
                </Badge>
                <NavLink to="/contactez-nous">Contactez-nous</NavLink>
            </nav>
        </header>
    );
}

/**
 * Calculer l'information du sommaire du panier
 * 
 * @param Object panier Pbjet panier d'achats
 * 
 * @returns Object Objet contenant les 5 info requises du panier
 */

function calculerInfoPanier(panierAchats){
    const _sousTotal = Math.round(panierAchats.reduce((acc, courant) => acc+courant.qte * courant.prix, 0));
    const _taxes = Math.round(_sousTotal* 0.14975);
    return{
        articlesDifferents: panierAchats.length,
        articlesTotaux: panierAchats.reduce((acc, courant) => acc+courant.qte, 0),
        sousTotal: _sousTotal,
        taxes: _taxes,
        total: Math.round(_sousTotal + _taxes)
    }
}