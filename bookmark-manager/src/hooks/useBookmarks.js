import { useState, useEffect } from "react";
import { getStorageKey, setStorageKey } from "../utils/storage";
import { STORAGE_KEYS } from "../constants/storageKeys";

const SEED_URL = "/public/data/bookmarks.json";
const LOADING_DELAY = 500;

export function useBookmarks() {
    const [bookmarks, setBookmarks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadBookmarks() {
            try {
                const stored = getStorageKey(STORAGE_KEYS.BOOKMARKS, null);

                if (stored !== null) {
                    setBookmarks(stored);
                    return;
                }

                const response = await fetch(SEED_URL);

                if (!response.ok) {
                    throw new Error("Failed to fetch bookmarks with status: " + response.status);
                }

                const data = await response.json();
                setBookmarks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        const timeoutId = setTimeout(loadBookmarks, LOADING_DELAY);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {

        
        if (isLoading || error) {
            return;
        }

        setStorageKey(STORAGE_KEYS.BOOKMARKS, bookmarks);
    }, [isLoading, error, bookmarks]);

    return { bookmarks, isLoading, error };
}