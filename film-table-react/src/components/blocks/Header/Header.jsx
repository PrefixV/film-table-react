import Nav from "./Nav.jsx";

const Header = (props) =>  {
    const {
        openModal,
        films,
        setSearchQuery,
        searchQuery,
        doneFilms,
    } = props

    return (
        <header className="header">
            <h1 className="logo header__logo">
                Film Table
            </h1>
            <Nav
                openModal={openModal}
                films={films}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                doneFilms={doneFilms}
            />
        </header>
    )
}

export default Header;