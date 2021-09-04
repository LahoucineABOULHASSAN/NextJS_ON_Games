import Head from "next/head";
import Series from "./Series";
const PARAMS = new URLSearchParams({
  apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY,
  hash: process.env.NEXT_PUBLIC_HASH_CODE,
  ts: 1,
});
const URL = `https://api.tvmaze.com/shows`;

export const getStaticProps = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  const shows = data.sort((a, b) => {
    return b.rating.average - a.rating.average;
  });

  return {
    props: { shows },
  };
};

export default function Home({ shows }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>TvMazeShow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Series shows={shows} />
      </main>
    </div>
  );
}
