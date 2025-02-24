function Footer(){
    const date = new Date();
    return (
      <footer>
        <p>&#169; Tous droits réservés - {date.getFullYear()}</p>
      </footer>
    );
}
export default Footer;