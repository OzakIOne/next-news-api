const Search = ({ value, onChange }) => {
  return (
    <input
      className="p-2 border-2 border-gray-400 rounded-lg "
      type="search"
      placeholder="Search"
      value={value}
      onChange={({ target }) => onChange(target.value)}
    />
  );
};

export default Search;
