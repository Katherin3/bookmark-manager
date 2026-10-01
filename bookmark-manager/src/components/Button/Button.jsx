
export const Button = ({ style, icon, title, type, onClick}) => {
  return (
    <button className={[`btn__${style}`]} type={type} onClick={onClick}>
        {icon && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 5v14M5 12h14" />
            </svg>
        )}
        { title }
    </button>
  )
}
