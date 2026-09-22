import './App.css'
import Card from './components/Card/Card'
import { Sidebar } from './components/Layout/Sidebar/Sidebar'

function App() {

  return (
    <div className="app">
        <Sidebar />
        <div className="app__right">
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
        </div>
       
    </div>
  )
}

export default App
