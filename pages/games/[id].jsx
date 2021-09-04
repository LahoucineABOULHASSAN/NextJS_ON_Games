import About from "./About";

const URL = "https://www.freetogame.com/api/games";

export const getStaticPaths = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  const paths = data.map((game) => {
    return {
      params: { id: game.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  // fetch single game
  const gameRes = await fetch(`https://www.freetogame.com/api/game?id=${id}`);
  const game = await gameRes.json();

  return {
    props: { game },
  };
};

const Serie = ({ game }) => {
  const { title } = game;
  return (
    <section>
      <h1>{title}</h1>
      <About game={game} />
    </section>
  );
};

export default Serie;
