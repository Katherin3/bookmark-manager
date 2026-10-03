import './App.css'
import { Header } from './components/Layout/Header/Header'
import { Main } from './components/Layout/Main/Main'
import { Sidebar } from './components/Layout/Sidebar/Sidebar'
import { CardList } from './components/CardList'
import { useState } from 'react'
import { BookmarkModal } from './components/BookMarkModal/BookmarkModal'
import { ModalOverlay } from './components/ModalOverlay/ModalOverlay'

function App() {
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ sortBy, setSortBy ] = useState('newest');
    const [selectedTags, setSelectedTags] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [view, setView] = useState('Home');

    function toggleView(viewName) {
        setView(viewName);
    }

    return (
        <div className="app">
            <Sidebar selectedTags={selectedTags} setSelectedTags={setSelectedTags} toggleView={toggleView} view={view} />
            <div className="app__right">
                <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} setIsModalOpen={setIsModalOpen} />
                <Main sortBy={sortBy} setSortBy={setSortBy}>
                  <CardList  searchTerm={searchTerm} sortBy={sortBy} selectedTags={selectedTags} view={view} />

                  {isModalOpen && <ModalOverlay setIsModalOpen={setIsModalOpen}>
                        <BookmarkModal setIsModalOpen={setIsModalOpen} />
                    </ModalOverlay>}
                </Main>
            </div>
        </div>
    )
}

export default App
