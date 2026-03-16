const Button = (props) => {
    const {
        className,
        children,
        type,
        onClick,
        isDisabled,
    } = props

    return (
        <button
        className={`button ${className}`}
        onClick={onClick}
        type={type}
        disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default Button