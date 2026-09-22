import Styles from './Main.module.css'

export const Main = ({ children}) => {
    return (
        <main className={Styles.main}>
            {/* ---- Title + Sort ---- */}
            <div className={Styles.main__top}>
                <h1 className={Styles.main__title}>All bookmarks</h1>

                <button className={Styles.main__sort_btn}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 4v16M3 8l4-4 4 4M17 20V4M13 16l4 4 4-4" />
                    </svg>
                    Sort by
                </button>
            </div>

            {/* ---- Cards grid ---- */}
            <div className={Styles.main__grid}>{children}</div>
        </main>
    )
}
