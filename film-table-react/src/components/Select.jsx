const Select = (props) => {
    const {
        className,
        children,
        value,
        onChange,
    } = props
    return (
        <select
            className={`select ${className}`}
            value={value}
            onChange={onChange}
        >
            {children}
        </select>
    )
}

export default Select