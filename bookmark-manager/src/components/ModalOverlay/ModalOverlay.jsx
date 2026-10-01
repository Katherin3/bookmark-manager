import Styles from './ModalOverlay.module.css';

export const ModalOverlay = ({children, setIsModalOpen}) => {
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  }
  return (
    <div className={Styles.modal__overlay} onClick={handleOverlayClick}>
      {children}
    </div>

  )
}
