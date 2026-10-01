import Styles from './Header.module.css'
import { Button } from '../../Button/Button'

export const Header = ({ searchTerm, setSearchTerm, setIsModalOpen }) => {

    function modalOpenHandler() {
        setIsModalOpen(true);
    }

    return (
        <header className={Styles.header}>
            {/* ---- Search ---- */}
            <label className={Styles.header__search}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
                </svg>
                <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder="Search by title..." />
            </label>
        
            {/* ---- Actions ---- */}
            <div className={Styles.header__actions}>
                <Button style="primary" icon={true} title="Add Bookmark" type="button" onClick={modalOpenHandler} />
        
                <img className={Styles.header__avatar} src="public/avatar.png" alt="Your profile" />
            </div>
        </header>

    )
}
