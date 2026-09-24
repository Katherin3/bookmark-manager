export function getStorageKey(key, fallback) {
    try {
        const raw = localStorage.getItem(key);

        if (raw === null) {
            return fallback;
        }

        return JSON.parse(raw);
    } catch {
        return fallback;
    }
}

export function setStorageKey(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error setting storage key: ${key}`, error);
    }
}