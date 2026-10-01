import { Button } from "../Button/Button";
import Styles from "./BookmarkModal.module.css";

export const BookmarkModal = ({setIsModalOpen}) => {
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  }
  return (
    <div className={Styles.modal__overlay} onClick={handleOverlayClick}>
      <div className={Styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className={Styles.modal__close} aria-label="Close" onClick={() => setIsModalOpen(false)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <h2 className={Styles.modal__title} id="modal-title">
          Add a bookmark
        </h2>
        <p className={Styles.modal__subtitle}>
          Save a link with details to keep your collection organized. We extract the
          favicon automatically from the URL.
        </p>

        <form className="form">
          {/* ---- Title ---- */}
          <div className={Styles.form__group}>
            <label className={Styles.form__label} htmlFor="title">
              Title <span className={Styles.form__required}>*</span>
            </label>
            <input className={Styles.form__input} type="text" id="title" name="title" />
          </div>

          {/* ---- Description ---- */}
          <div className={Styles.form__group}>
            <label className={Styles.form__label} htmlFor="description">
              Description <span className={Styles.form__required}>*</span>
            </label>
            <textarea
              className={Styles.form__textarea}
              id="description"
              name="description"
              maxLength={280}
              rows={5}
            ></textarea>
            <span className={Styles.form__counter}>0/280</span>
          </div>

          {/* ---- Website URL ---- */}
          <div className={Styles.form__group}>
            <label className={Styles.form__label} htmlFor="url">
              Website URL <span className={Styles.form__required}>*</span>
            </label>
            <input className={Styles.form__input} type="url" id="url" name="url" />
          </div>

          {/* ---- Tags ---- */}
          <div className={Styles.form__group}>
            <label className={Styles.form__label} htmlFor="tags">
              Tags <span className={Styles.form__required}>*</span>
            </label>
            <input
              className={Styles.form__input}
              type="text"
              id="tags"
              name="tags"
              placeholder="e.g. Design, Learning, Tools"
            />
          </div>

          {/* ---- Actions ---- */}
          <div className={Styles.form__actions}>
            <Button style="ghost" icon={false} title="Cancel" type="button"  onClick={() => setIsModalOpen(false)} />

            <Button style="primary" icon={true} title="Add Bookmark" type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}
