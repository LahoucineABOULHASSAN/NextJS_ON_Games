import Head from "next/head";
import Games from "./Games";

const URL = `https://www.freetogame.com/api/games`;

export const getStaticProps = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  return {
    props: { games: data },
  };
};

export default function Home({ games }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>ONGAMES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Games games={games} />
      </main>
    </div>
  );
}
