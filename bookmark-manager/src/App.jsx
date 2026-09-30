import './App.css'
import { Header } from './components/Layout/Header/Header'
import { Main } from './components/Layout/Main/Main'
import { Sidebar } from './components/Layout/Sidebar/Sidebar'
import { CardList } from './components/CardList'
import { useState } from 'react'

function App() {
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ sortBy, setSortBy ] = useState('newest');
    const [selectedTags, setSelectedTags] = useState([]);


  return (
        <div className="app">
            <Sidebar selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <div className="app__right">
                <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Main sortBy={sortBy} setSortBy={setSortBy}>
                  <CardList  searchTerm={searchTerm} sortBy={sortBy} selectedTags={selectedTags} />
                </Main>
            </div>
        </div>
    )
}

export default App
