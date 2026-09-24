import './App.css'
import { useState } from 'react'
import Card from './components/Card/Card'
import { Header } from './components/Layout/Header/Header'
import { Main } from './components/Layout/Main/Main'
import { Sidebar } from './components/Layout/Sidebar/Sidebar'
import { EmptyData } from './components/EmptyData'

function App() {
    const [bookmarks, setBookmarks] = useState([
        {
            id: 1,
            logo: "https://www.google.com/favicon.ico",
            title: "Google",
            url: "www.google.com",
            description: "Search the world's information, including webpages, images, videos and more.",
            tags: ["search", "technology", "internet"],
            visitCount: 100,
            lastVisitedAt: "2026-09-18T18:40:00.000Z",
            createdAt: "2025-11-03T00:00:00.000Z",
            isPinned: true,
            isArchived: false
        },
        {
            id: 2,
            logo: "https://www.google.com/favicon.ico",
            title: "Google",
            url: "www.google.com",
            description: "Search the world's information, including webpages, images, videos and more.",
            tags: ["search", "technology", "internet"],
            visitCount: 100,
            lastVisitedAt: "2026-09-18T18:40:00.000Z",
            createdAt: "2025-11-03T00:00:00.000Z",
            isPinned: true,
            isArchived: false
        },
        {
            id: 3,
            logo: "https://www.google.com/favicon.ico",
            title: "Google",
            url: "www.google.com",
            description: "Search the world's information, including webpages, images, videos and more.",
            tags: ["search", "technology", "internet"],
            visitCount: 100,
            lastVisitedAt: "2026-09-18T18:40:00.000Z",
            createdAt: "2025-11-03T00:00:00.000Z",
            isPinned: true,
            isArchived: false
        }, 
        {
            id: 4,
            logo: "https://www.google.com/favicon.ico",
            title: "Google",
            url: "www.google.com",
            description: "Search the world's information, including webpages, images, videos and more.",
            tags: ["search", "technology", "internet"],
            visitCount: 100,
            lastVisitedAt: "2026-09-18T18:40:00.000Z",
            createdAt: "2025-11-03T00:00:00.000Z",
            isPinned: true,
            isArchived: false
        }
    ])

   function onTogglePin(bookmarkId) {
        setBookmarks((prevBookmarks) =>
            prevBookmarks.map((bookmark) =>
                bookmark.id === bookmarkId ? { ...bookmark, isPinned: !bookmark.isPinned } : bookmark
            )
        );
    }

    return (
        <div className="app">
            <Sidebar />
            <div className="app__right">
                <Header />
                <Main>
                    {bookmarks.length === 0 ? <EmptyData /> : null}
                    
                    {bookmarks.map((bookmark) => (
                        <Card key={bookmark.id} bookmark={bookmark} onTogglePin={onTogglePin}  />
                    ))}
                </Main>
            </div>
        </div>
    )
}

export default App
