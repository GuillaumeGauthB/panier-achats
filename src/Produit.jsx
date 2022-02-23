import './Produit.scss';
import BtnAjoutPanier from './BtnAjoutPanier';

export default function Produit({etatPanier, nom, prix, pid}) {
    // let panier = props.panier;
    // let setPanier = props.setPanier;

    const [panier, setPanier] = etatPanier;
    let qte = panier[pid] ? panier[pid].qte : 0;
    // if(panier[props.pid]) {
    //     qte = panier[props.pid].qte;
    // }
    console.log("Quantité du produit : ", pid, " : ", qte);

    function ajouterAuPanier() {
        if(panier[pid]){
            panier[pid].qte++;
        }
        else{
                panier[pid] = {
                prix: prix,
                qte: 1
            };
        }
        console.log("Le panier apres ajout : ", panier);
        // Notifier React que le panier a changé :
        // Il faut cloner l'objet panier pour que react detecte que le panier 
        // a changer:

        // OPTION 1: transformer panier en string de type objet avec stringify et parse
    //    setPanier(JSON.parse(JSON.stringify(panier)));

        // OPTION 2: copier le contenu de panier dans clonePanier, qui va ensuite entre mit dans setPanier()
        // let clonePanier = Object.assign({} ,panier);
        // setPanier(clonePanier);

        // OPTION 3: Etaler l'objet panier dans clonePanier, avant de l'envoyer dans setPanier
        // let clonePanier = {... panier};
        setPanier({... panier});

        // ++; ce que l'etalement fait I.E: l'etalement clone les valeurs de panier a clonePanier
        // for (let prop in panier){
        //     clonePanier[prop] = panier[prop];
        // }
    }

    return (
        <article className="Produit">
            <img src={"images-produits/" + pid + ".webp"} alt={nom} />
            <div className="titre">{nom}</div> 
            <div className="prix">{prix}</div>
            <BtnAjoutPanier qte={qte} onClick={ajouterAuPanier} />
        </article>
    );
}