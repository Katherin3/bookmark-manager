import '../App.css'
import { useBookmarks } from '../hooks/useBookmarks'
import { EmptyData } from '../components/EmptyData'
import Card from '../components/Card/Card'
import { useState, useEffect } from 'react'

export const CardList = ({ searchTerm, sortBy, selectedTags }) => {
    const { bookmarks, isLoading, error, setBookmarks } = useBookmarks();
    const [menuId, setMenuId] = useState(null);
        

    const filteredBookmarks = bookmarks.filter((bookmark) => {
        const matchesSearch = bookmark.title.toLowerCase().includes(searchTerm?.toLowerCase());
        const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => bookmark.tags.includes(tag));
        return matchesSearch && matchesTags;
    }).sort((a, b) => {
        if (sortBy === 'newest') {
            return new Date(b.createdAt) - new Date(a.createdAt);
        } else {
            return new Date(a.createdAt) - new Date(b.createdAt);
        }
    }).sort((a, b) => {
        if (a.isPinned && !b.isPinned) {
            return -1;
        }
        if (!a.isPinned && b.isPinned) {
            return 1;
        }
        return 0;
    }); 

    function handleMenuToggle(bookmarkId) {
        setMenuId((prevMenuId) => (prevMenuId === bookmarkId ? null : bookmarkId));
    }

    useEffect(() => {
        if (menuId === null) return;

        function handleClickOutside(event) {
            if (event.target instanceof Element && !event.target.closest('[data-card-menu]')) {
                setMenuId(null);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuId]);


    function handleEdit(bookmarkId) {
    console.log(`Edit bookmark with ID: ${bookmarkId}`);
    // Implement the logic to edit a bookmark
    }

    function handleDelete(bookmarkId) {
    console.log(`Delete bookmark with ID: ${bookmarkId}`);
    // Implement the logic to delete a bookmark
    }

    function handlePin(bookmarkId) {
        setBookmarks(bookmarks.map((bookmark) => bookmark.id === bookmarkId ? { ...bookmark, isPinned: !bookmark.isPinned } : bookmark));
    }
    
  return (
    <>
        {
            isLoading ? (
            <p>Loading...</p>
            ) : filteredBookmarks.length === 0 ? (
                <EmptyData />
            ) : filteredBookmarks.map((bookmark) => (
                <Card key={bookmark.id} bookmark={bookmark} onEdit={handleEdit} onDelete={handleDelete} onTogglePin={handlePin} 
                menuId={() => handleMenuToggle(bookmark.id)} menuOpen={bookmark.id === menuId} menuClose={() => setMenuId(null)} />
            ))
        }

        {error && <p>Error: {error}</p>}
    </>
  )
}
