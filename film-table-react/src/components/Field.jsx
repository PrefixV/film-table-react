const Field = (props) => {
    const {
        className,
        placeholder,
        id,
        value,
        onInput,
        type,
        error,
    } = props

    return (
        <>
        <input
            className={`field ${className}`}
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onInput={onInput}
        />
    {error && (
        <span className={`field ${error ? 'is-invalid' : ''}`}>
            {error}
        </span>
    )}
        </>
    )
}

export default Field