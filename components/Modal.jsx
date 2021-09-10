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
      <h1 className="text-md text-center md:text-left text-purple-300 tracking-widest font-semibold capitalize w-auto md:ml-8 mb-4">
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
        className="modal hidden fixed z-1 left-0 top-0 bottom-0 right-0 w-full h-full overflow-auto"
      >
        <div className="flex flex-col items-center justify-around">
          <div className="w-11/12 md:max-w-screen-xl relative">
            {screenshots.map((screenshot, index) => (
              <div className="mySlides hidden" key={index}>
                <p className="flex flex-row items-center justify-between text-lg font-semibold text-gray-400 mt-8 my-1">
                  <span>
                    {index + 1} / {total}
                  </span>
                  {`${title} - Screenshot${index + 1}`}
                  <span
                    className="close text-4xl text-gray-300 hover:text-cerise-500 cursor-pointer"
                    onClick={closeModal}
                  >
                    &times;
                  </span>
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
              className="transition duration-500 ease-in-out cursor-pointer absolute top-2/4 md:top-auto md:bottom-2/4 w-auto text-gray-300 text-md md:text-2xl font-bold rounded-r-xl bg-cerise-900 px-2 py-1 md:p-4 hover:bg-black"
              onClick={() => plusSlides(-1)}
            >
              &#10094;
            </a>
            <a
              className="transition duration-500 ease-in-out cursor-pointer absolute right-0 top-2/4 md:top-auto md:bottom-2/4 w-auto text-gray-300 text-md md:text-2xl font-bold rounded-l-xl bg-cerise-900 px-2 py-1 md:p-4 hover:bg-black"
              onClick={() => plusSlides(1)}
            >
              &#10095;
            </a>

            {/* Thumbnail image controls */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 my-6">
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
