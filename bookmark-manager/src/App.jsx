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


  return (
        <div className="app">
            <Sidebar selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <div className="app__right">
                <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} setIsModalOpen={setIsModalOpen} />
                <Main sortBy={sortBy} setSortBy={setSortBy}>
                  <CardList  searchTerm={searchTerm} sortBy={sortBy} selectedTags={selectedTags} />

                  {isModalOpen && <ModalOverlay setIsModalOpen={setIsModalOpen}>
                        <BookmarkModal setIsModalOpen={setIsModalOpen} />
                    </ModalOverlay>}
                </Main>
            </div>
        </div>
    )
}

export default App
