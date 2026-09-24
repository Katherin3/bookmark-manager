import Styles from "./Card.module.css";
import { useState } from "react";

function Card({ bookmark, onEdit, onDelete, onTogglePin }) {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <div className={Styles.card__menu}>
          <button className={Styles.card__menu_btn} aria-label="Bookmark options" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>

          {menuOpen && (
            <ul className={Styles.card__dropdown}>
              <li>
                <button
                  className={Styles.card__dropdown_item}
                  onClick={() => {
                    onTogglePin(bookmark.id);
                    setMenuOpen(false);
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 3h6l-1 6 4 3v2H6v-2l4-3-1-6z" />
                    <path d="M12 14v7" />
                  </svg>
                  {bookmark.isPinned ? "Unpin" : "Pin"}
                </button>
              </li>

              <li>
                <button
                  className={Styles.card__dropdown_item}
                  onClick={() => {
                    onToogleArchive(bookmark.id);
                    setMenuOpen(false);
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="5" rx="1" />
                    <path d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
                    <path d="M12 17v-5M9.5 14.5L12 12l2.5 2.5" />
                  </svg>
                  {bookmark.isArchived ? "Restore" : "Archive"}
                </button>
              </li>

              <li>
                <button
                  className={Styles.card__dropdown_item}
                  onClick={() => {
                    onEdit(bookmark.id);
                    setMenuOpen(false);
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17v3z" />
                    <path d="M14.5 6.5l3 3" />
                  </svg>
                  Edit
                </button>
              </li>

              <li>
                <button
                  className={Styles.card__dropdown_item}
                  onClick={() => {
                    onDelete(bookmark.id);
                    setMenuOpen(false);
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17v3z" />
                    <path d="M14.5 6.5l3 3" />
                  </svg>
                  Delete
                </button>
              </li>
            </ul>
          )}
        </div>
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
            {bookmark.visitCount}
          </span>

          <span className={Styles.card__stat} title="Last visited">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            {new Date(bookmark.lastVisitedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
              })}
          </span>

          <span className={Styles.card__stat} title="Date added">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 10h18M8 3v4M16 3v4" />
            </svg>
              {new Date(bookmark.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
              })}
          </span>
        </div>

        {bookmark.isPinned && (
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
