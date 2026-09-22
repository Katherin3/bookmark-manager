import Styles from "./Card.module.css";

function Card({ bookmark }) {
  return (
    <article className={Styles.card}>
      {/* ---- Header: logo + title/url + menu button ---- */}
      <header className={Styles.card__header}>
        <div className={Styles.card__logo}>
          <img src={bookmark.logo} alt="" />
        </div>

        <div className={Styles.card__title_wrap}>
          <h3 className={Styles.card__title}>{bookmark.title}</h3>
          <a className={Styles.card__url} href={`https://${bookmark.url}`} target="_blank" rel="noreferrer">
            {bookmark.url}
          </a>
        </div>

        <button className={Styles.card__menu_btn} aria-label="Bookmark options">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>
      </header>

      {/* ---- Body: description + tags ---- */}
      <div className={Styles.card__body}>
        <p className={Styles.card__description}>{bookmark.description}</p>

        <ul className={Styles.card__tags}>
          {bookmark.tags.map((tag) => (
            <li key={tag} className={Styles.card__tag}>{tag}</li>
          ))}
        </ul>
      </div>

      {/* ---- Footer: stats + pin ---- */}
      <footer className={Styles.card__footer}>
        <div className={Styles.card__stats}>
          <span className={Styles.card__stat} title="Views">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {bookmark.views}
          </span>

          <span className={Styles.card__stat} title="Last visited">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            {bookmark.lastVisited}
          </span>

          <span className={Styles.card__stat} title="Date added">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 10h18M8 3v4M16 3v4" />
            </svg>
            {bookmark.dateAdded}
          </span>
        </div>

        {bookmark.pinned && (
          <span className={Styles.card__pin} title="Pinned">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 3h6l-1 6 4 3v2H6v-2l4-3-1-6z" />
              <path d="M12 14v7" />
            </svg>
          </span>
        )}
      </footer>
    </article>
  );
}

export default Card;
