const Field = (props) => {
    const {
        className,
        placeholder,
        id,
        value,
        onInput,
        type,
    } = props

    return (
        <input
            className={`field ${className}`}
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onInput={onInput}
        />
    )
}

export default Field