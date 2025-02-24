import Nav from '../Nav/Nav';
import './Header.css';
function Header(props){
    const {nom} = props;
    console.log(props);
    // Object { id: "3", nom: "Sylviane" }
    
    return (
        <header className={nom == ""?"" : "connexion"}>
            <h1>Mon logo - {nom}</h1>
            <Nav/>
        </header>
    )
}
export default Header;