import Styles from './Sidebar.module.css'

const tags = [
  { id: 1, name: "AI", count: 1 },
  { id: 2, name: "Community", count: 5 },
  { id: 3, name: "Compatibility", count: 1 },
  { id: 4, name: "CSS", count: 6 },
  { id: 5, name: "Design", count: 1 },
  { id: 6, name: "Framework", count: 2 },
  { id: 7, name: "Git", count: 1 },
  { id: 8, name: "HTML", count: 2 },
  { id: 9, name: "JavaScript", count: 3 },
  { id: 10, name: "Layout", count: 3 },
  { id: 11, name: "Learning", count: 6 },
  { id: 12, name: "Performance", count: 2 },
  { id: 13, name: "Practice", count: 5 },
  { id: 14, name: "Reference", count: 4 },
  { id: 15, name: "Tips", count: 4 },
  { id: 16, name: "Tools", count: 4 },
  { id: 17, name: "Tutorial", count: 3 },
];

export const Sidebar = () => {
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
            {tags.map((tag) => (
                <li key={tag.id}>
                <label className={Styles.sidebar__tag}>
                    <input type="checkbox" className={Styles.sidebar__checkbox} />
                    <span className={Styles.sidebar__tag_name}>{tag.name}</span>
                    <span className={Styles.sidebar__count}>{tag.count}</span>
                </label>
                </li>
            ))}
            </ul>
        </aside>
    )
}
