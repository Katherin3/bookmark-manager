import './App.css'
import Card from './components/Card/Card'
import { Header } from './components/Layout/Header/Header'
import { Main } from './components/Layout/Main/Main'
import { Sidebar } from './components/Layout/Sidebar/Sidebar'

function App() {

    const bookmark = {
        id: 1,
        logo: "https://www.google.com/favicon.ico",
        title: "Google",
        url: "www.google.com",
        description: "Search the world's information, including webpages, images, videos and more.",
        tags: ["search", "technology", "internet"],
        views: 100,
        lastVisited: "2023-06-01",
        dateAdded: "2023-01-01"
    }

    return (
        <div className="app">
            <Sidebar />
            <div className="app__right">
                <Header />
                <Main>
                    <Card bookmark={bookmark} />
                </Main>
            </div>
        </div>
    )
}

export default App
