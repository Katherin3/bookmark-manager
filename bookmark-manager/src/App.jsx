import './App.css'
import Card from './components/Card/Card'
import { Header } from './components/Layout/Header/Header'
import { Main } from './components/Layout/Main/Main'
import { Sidebar } from './components/Layout/Sidebar/Sidebar'

function App() {

  return (
    <div className="app">
        <Sidebar />
        <div className="app__right">
            <Header />
            <Main>
              <Card
                  id={1}
                  title="Example Bookmark"
                  url="example.com"
                  logo="/logo.png"
                  description="This is an example bookmark."
                  tags={['example', 'bookmark']}
                  views={100}
                  lastVisited="2023-01-01"
                  createdAt="2023-01-01"
                  pinned={true}
              />
            </Main>
        </div>
    </div>
  )
}

export default App
