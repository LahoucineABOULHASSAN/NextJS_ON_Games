import Head from "next/head";

import About from "./About";
import GameHeader from "./GameHeader";

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
  return (
    <>
      <Head>
        <title>ONGAMES | {game.title}</title>
      </Head>
      <section className="bg-gray-300">
        <GameHeader game={game} />
        <About game={game} />
      </section>
    </>
  );
};

export default Serie;
