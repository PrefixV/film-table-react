const Button = (props) => {
    const {
        className,
        children,
        type,
        onClick,
    } = props

    return (
        <button
        className={`button ${className}`}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
    )
}

export default Button