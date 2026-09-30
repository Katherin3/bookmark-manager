import Styles from './Sidebar.module.css'
import { useBookmarks } from '../../../hooks/useBookmarks'




export const Sidebar = ({ selectedTags, setSelectedTags }) => {

    const tagCounts = useBookmarks().bookmarks.reduce((acc, currentBookmark) => {
       (currentBookmark.tags || []).forEach((tag) => {
            acc[tag] = (acc[tag] || 0) + 1;
        });
        
        return acc;
    }, {});

    const tagsData = Object.entries(tagCounts).map(([key, value]) => ({
        name: key,
        count: value,
    }));


    function handleCheckboxChange(event, tagName) {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedTags((prevSelectedTags) => [...prevSelectedTags, tagName]);
        } else {
            setSelectedTags((prevSelectedTags) =>
                prevSelectedTags.filter((tag) => tag !== tagName)
            );
        }
    }  

    return (
        <aside className={Styles.sidebar}>
            {/* ---- Logo ---- */}
            <div className={Styles.sidebar__logo}>
                <span className={Styles.sidebar__logo_icon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M7 4h10v16l-5-4-5 4z" />
                    </svg>
                </span>
                Bookmark Manager
            </div>

            {/* ---- Navigation ---- */}
            <nav className={Styles.sidebar__nav}>
                <a href="#" className={Styles.sidebar__link + ' ' + Styles.sidebar__link_active}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
                    </svg>
                    Home
                </a>
                <a href="#" className={Styles.sidebar__link}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="5" rx="1" />
                    <path d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9M10 13h4" />
                    </svg>
                    Archived
                </a>
            </nav>

            {/* ---- Tags ---- */}
            <p className={Styles.sidebar__heading}>Tags</p>

            <ul className={Styles.sidebar__tags}>
            {tagsData.map((tag) => (
                <li key={tag.name}>
                <label className={Styles.sidebar__tag}>
                    <input type="checkbox" onChange={(event) => handleCheckboxChange(event, tag.name)} className={Styles.sidebar__checkbox} />
                    <span className={Styles.sidebar__tag_name}>{tag.name}</span>
                    <span className={Styles.sidebar__count}>{tag.count}</span>
                </label>
                </li>
            ))}
            </ul>
        </aside>
    )
}
