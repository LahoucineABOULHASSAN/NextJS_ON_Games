import { useState } from "react";
import { Card, SearchForm } from "../../components";
const Games = ({ games }) => {
  const [search, setSearch] = useState("");
  const handleFilter = (elem) => {
    const searchItem = elem.toLowerCase();
    setSearch(searchItem);
  };

  const alert = (
    <p className="rounded-2xl w-10/12 text-2xl text-center capitalize bg-red-200 p-4 my-8 mx-auto">
      this game is not on our list
    </p>
  );

  const data = games
    .filter((elem) => {
      return elem.title.toLowerCase().includes(search);
    })
    .map((game) => <Card game={game} key={game.id} />);

  return (
    <section>
      <SearchForm handleFilter={handleFilter} />
      {!data.length && alert}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 w-10/12 my-12 mx-auto">
        {data.length ? data : null}
      </div>
    </section>
  );
};

export default Games;
