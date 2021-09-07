import { useEffect } from "react";
import {
  showSlides,
  openModal,
  closeModal,
  plusSlides,
  currentSlide,
} from "../utilities/main";
const Modal = ({ game }) => {
  useEffect(() => {
    showSlides(1);
  }, []);

  const { screenshots, title } = game;
  const total = screenshots.length;
  return (
    <div>
      <h1 className="text-md text-purple-300 tracking-widest font-semibold capitalize w-auto ml-8 mb-4">
        Screenshots
      </h1>

      {/* <!-- Images used to open the lightbox --> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {screenshots.map((screenshot, index) => (
          <div className="float-left" key={index}>
            <img
              className="rounded-md hover-shadow cursor-pointer transition-shadow duration-500"
              src={screenshot.image}
              alt={`${title} - screenshot - ${index + 1}`}
              onClick={() => {
                openModal();
                currentSlide(index + 1);
              }}
            />
          </div>
        ))}
      </div>

      {/* <!-- The Modal/Lightbox --> */}
      <div
        id="myModal"
        className="modal hidden fixed z-1 left-0 top-0 w-full h-full overflow-auto"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div
            className="close text-4xl font-bold text-right text-gray-300 hover:text-cerise-500 w-11/12 mx-auto cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </div>
          <div className="w-11/12 max-w-screen-xl relative">
            {screenshots.map((screenshot, index) => (
              <div className="mySlides hidden" key={index}>
                <p className="text-lg font-semibold text-gray-400 text-center my-4">
                  <span className="float-left">
                    {index + 1} / {total}
                  </span>
                  {`${title} - Screenshot${index + 1}`}
                </p>
                <img
                  src={screenshot.image}
                  className="w-full"
                  alt={`${title} - screenshot - ${index + 1}`}
                />
              </div>
            ))}

            {/* <!-- Next/previous controls --> */}
            <a
              className="transition duration-500 ease-in-out cursor-pointer absolute bottom-2/4 w-auto text-gray-300 text-2xl font-bold left-0 rounded-r-xl bg-cerise-900 p-4 hover:bg-black"
              onClick={() => plusSlides(-1)}
            >
              &#10094;
            </a>
            <a
              className="transition duration-500 ease-in-out cursor-pointer absolute right-0 bottom-2/4 w-auto text-gray-300 text-2xl font-bold rounded-l-xl bg-cerise-900 p-4 hover:bg-black"
              onClick={() => plusSlides(1)}
            >
              &#10095;
            </a>

            {/* Thumbnail image controls */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-4">
              {screenshots.map((screenshot, index) => (
                <div className="float-left" key={index}>
                  <img
                    className="demo rounded-md border-cerise-800 opacity-60 hover:scale-110 hover:opacity-100"
                    src={screenshot.image}
                    onClick={() => currentSlide(index + 1)}
                    alt={`${title} - screenshot - ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
