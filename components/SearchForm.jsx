const SearchForm = ({ handleFilter }) => {
  return (
    <form
      className=" w-2/4 mt-12 mx-auto"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        className="border border-1 rounded-2xl border-gray-700 focus:outline-none focus:border-green-600 focus:bg-green-50 py-2 px-4 w-full"
        type="search"
        placeholder="Search"
        onChange={(event) => handleFilter(event.target.value)}
      />
    </form>
  );
};

export default SearchForm;
