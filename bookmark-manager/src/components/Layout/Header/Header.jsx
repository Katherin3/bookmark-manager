import Styles from './Header.module.css'

export const Header = () => {
  return (
        <header className={Styles.header}>
            {/* ---- Search ---- */}
            <label className={Styles.header__search}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
                </svg>
                <input type="search" placeholder="Search by title..." />
            </label>
        
            {/* ---- Actions ---- */}
            <div className={Styles.header__actions}>
                <button className={Styles.header__add_btn}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 5v14M5 12h14" />
                </svg>
                Add Bookmark
                </button>
        
                <img className={Styles.header__avatar} src="public/avatar.png" alt="Your profile" />
            </div>
        </header>

    )
}
