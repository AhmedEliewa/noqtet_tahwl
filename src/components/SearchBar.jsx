const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="mb-6 text-center">
      <input
        type="text"
        placeholder="ابحث عن المدرسة بالاسم ..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="p-2 rounded border w-full max-w-md bg-transparent text-white"
      />
    </div>
  );
};

export default SearchBar;
