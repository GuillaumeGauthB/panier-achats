import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

// Remarquez la destructuration dèobjet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default function Entete({panier}) {
    // console.log("Les props du composant Entête : ", props);
    // console.log("Le panier dans Entête : ", props.panier);
    const {articlesDifferents, articlesTotaux, sousTotal, taxes, total} = calculerInfoPanier(Object.values(panier));
    console.log("Le panier (Entete): ", panier);
    console.log("La tableau des valeurs du panier: ", Object.values(panier))
    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <input type="checkbox" id="cc-sommaire-panier" />
            <div className="sommaire-panier">
                <h3>Sommaire du panier</h3>
                <div><span>Articles differents</span><span>{articlesDifferents}</span></div>
                <div><span>ArticleS totaux</span><span>{articlesTotaux}</span></div>
                <div><span>Sous-total</span><span>{sousTotal}</span></div>
                <div><span>Taxes</span><span>{taxes}</span></div>
                <div><span>Total</span><span>{total}</span></div>
            </div>
            <nav>
                <Badge badgeContent={articlesTotaux} color="secondary">
                <label htmlFor="cc-sommaire-panier"><ShoppingCartSharpIcon/></label>
                </Badge>
                <a href="#">Contactez-nous</a>
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
    const _sousTotal = panierAchats.reduce((acc, courant) => acc+courant.qte * courant.prix, 0);
    const _taxes = _sousTotal* 0.14975;
    return{
        articlesDifferents: panierAchats.length,
        articlesTotaux: panierAchats.reduce((acc, courant) => acc+courant.qte, 0),
        sousTotal: _sousTotal,
        taxes: _taxes,
        total: _sousTotal + _taxes
    }
}