import { scroll } from "../utilities/main";

const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    className="bi bi-arrow-down-short inline-block animate-bounce"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
    />
  </svg>
);

const Header = () => {
  return (
    <header
      id="header"
      className="flex flex-col items-center justify-center bg-gradient-to-r from-red-500 to-pink-500"
    >
      <div className="header flex flex-col items-center justify-center tracking-widest w-full h-full">
        <h1 className="text-shadow-md text-4xl text-gray-400 mb-2">
          Welcome to TvMazeShow
        </h1>
        <h2 className="text-shadow-md text-2xl text-gray-400 mb-1">
          Pictures are from the{" "}
          <a
            className="font-semibold hover:underline hover:text-gray-300"
            href="https://pixabay.com/api/docs/"
            target="_blank"
            rel="noreferror"
          >
            TvMaze API
          </a>
        </h2>
        <button
          className="flex flex-row justify-center text-md font-bold tracking-widest stroke-current stroke-1 bg-green-500 hover:bg-green-700 transition ease-in-out duration-700 rounded-2xl py-3 pr-4 pl-5 mt-4"
          onClick={scroll}
        >
          Scroll Down {arrow}
        </button>
      </div>
    </header>
  );
};

export default Header;
