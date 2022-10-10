import logo from'../images/logo.svg'

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Латиницей написано слово место и Россия" />
        </header>
    )
}
export default Header;