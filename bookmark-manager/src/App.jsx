import './App.css'
import Card from './components/Card/Card'
import { Header } from './components/Layout/Header/Header'
import { Main } from './components/Layout/Main/Main'
import { Sidebar } from './components/Layout/Sidebar/Sidebar'
import { EmptyData } from './components/EmptyData'
import { useBookmarks } from './hooks/useBookmarks'

function App() {
  const { bookmarks, isLoading, error } = useBookmarks();

  function handleEdit(bookmarkId) {
    console.log(`Edit bookmark with ID: ${bookmarkId}`);
    // Implement the logic to edit a bookmark
  }

  function handleDelete(bookmarkId) {
    console.log(`Delete bookmark with ID: ${bookmarkId}`);
    // Implement the logic to delete a bookmark
  }

  function handlePin(bookmarkId) {
    console.log(`Toggle pin for bookmark with ID: ${bookmarkId}`);
    // Implement the logic to pin/unpin a bookmark
  } 

  return (
        <div className="app">
            <Sidebar />
            <div className="app__right">
                <Header />
                <Main>
                    {isLoading && <p>Loading...</p>}

                    {error && <p>Error: {error}</p>}

                    {bookmarks.length === 0 ? <EmptyData /> : null}

                    {bookmarks.map((bookmark) => (
                        <Card key={bookmark.id} bookmark={bookmark} onEdit={handleEdit} onDelete={handleDelete} onTogglePin={handlePin} />
                    ))}
                </Main>
            </div>
        </div>
    )
}

export default App
