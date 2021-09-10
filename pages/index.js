import Head from "next/head";
import Games from "./games/Games";

const URL = `https://www.freetogame.com/api/games?sort-by=release-date`;

export const getStaticProps = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  return {
    props: { games: data.slice(0, 8) },
  };
};

export default function Home({ games }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>OnGames</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {games && <Games games={games} />}
    </div>
  );
}
