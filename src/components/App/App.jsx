import { useState } from 'react'; //permet de gérer des états dans les composants. useState est un hook. 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Tous les composants sont des fonctions
function App(){
    //nbClic est une variable, setNbClic est une fonction qui permet de changer la valeur de nbClic
    let [nbClic, setNbClic] = useState(0); //on peut mettre une valeur par défaut. Ici, 0. S'il y a un changement, on va changer la valeur de nbClic
    let [nom, setNom] = useState('');
    // ici, on pourrait mettre du code JS
    function onPageClick(event){
        nbClic++;
        setNbClic(nbClic);
        if(nbClic > 10){
            setNom('Sylviane');
        }
    }
    // const nom = 'Sylviane';

    // return <h1>Allo encore</h1> OU
    return (
        // on met soit une div soit un fragment pour englober les éléments
        <>
            <Header id="3" nom={nom}/>
            <h1 onClick={onPageClick}>Vous avez cliqué {nbClic}</h1>
            {/* faire une condition si on a un nom  */}
            {nom !== '' ? <main>Bonjour, {nom}</main> : <main>Bonjour inconnu</main>}
            <Footer/>
        </>
    );
}

export default App;