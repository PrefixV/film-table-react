import "./styles/styles.scss"
import Header from "./components/blocks/Header/Header.jsx";
import AddFilmModal from "./components/blocks/Modal/AddFilmModal.jsx";
import FilmsTable from "./components/blocks/FilmsContainer/FilmsTable.jsx";
import { FilmsProvider } from "./context/FilmsContext.jsx";
import EditModal from "./components/blocks/EditModal/EditModal.jsx";

function App() {

  return (
    <>
        <FilmsProvider>
            <Header />
            <AddFilmModal />
            <FilmsTable />
            <EditModal />
        </FilmsProvider>
    </>
  )
}

export default App
