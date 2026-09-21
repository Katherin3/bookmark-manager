import './App.css'
import Card from './components/Card/Card'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
