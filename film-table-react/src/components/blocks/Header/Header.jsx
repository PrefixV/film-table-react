import Nav from "./Nav.jsx";

const Header = () =>  {
    return (
        <header className="header">
            <h1 className="logo header__logo">
                Film Table
            </h1>
            <Nav />
        </header>
    )
}

export default Header;