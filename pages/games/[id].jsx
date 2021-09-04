import Seasons from "./Seasons";
import CastAndCrew from "./CastAndCrew";
import About from "./About";

const URL = "https://api.tvmaze.com/shows";

export const getStaticPaths = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  const paths = data.map((show) => {
    return {
      params: { id: show.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  // fetch single show
  const showRes = await fetch(`${URL}/${id}`);
  const show = await showRes.json();

  // fetch seasons
  const seasonsRes = await fetch(`${URL}/${id}/seasons`);
  const seasons = await seasonsRes.json();

  // fetch cast
  const castandcrewRes = await fetch(`${URL}/${id}/cast`);
  const castandcrew = await castandcrewRes.json();

  return {
    props: { show, seasons, castandcrew },
  };
};

const Serie = ({ show, seasons, castandcrew }) => {
  const { name, image, rating } = show;
  return (
    <section>
      <div className="w-full overflow-hidden show-header relative">
        <div className="absolute top-0 w-full show-header-title">
          <h1 className="relative text-6xl font-bold tracking-widest text-gray-400 w-full uppercase w-10/12 py-8 mx-auto">
            {name}
            <small className="absolute bottom-0 left-10 text-lg tracking-wide text-green-300">
              {rating.average} <span className="text-sm">/10</span>
            </small>
          </h1>
        </div>
        <img
          height="944"
          width="1679"
          className="w-full h-full"
          src={image.original}
          alt={name}
        />
        <div className="absolute bottom-0 w-full h-full show-header-shadow"></div>
      </div>
      <Seasons name={name} seasons={seasons} />
      <CastAndCrew castandcrew={castandcrew} />
      <About show={show} />
    </section>
  );
};

export default Serie;
