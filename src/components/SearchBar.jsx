function SearchBar({ value, onChange }) {
    return (
        <input
            type="search"
            className="search"
            placeholder="Search by name or category…"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default SearchBar
