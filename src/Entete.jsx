import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

// Remarquez la destructuration dèobjet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default function Entete({panier}) {
    // console.log("Les props du composant Entête : ", props);
    // console.log("Le panier dans Entête : ", props.panier);
    console.log("Le panier (Entete): ", panier);
    console.log("La tableau des valeurs du panier: ", Object.values(panier))
    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <nav>
                <Badge badgeContent={Object.values(panier).reduce((acc, article) => acc+article.qte, 0)} color="secondary">
                    <ShoppingCartSharpIcon/>
                </Badge>
                <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}