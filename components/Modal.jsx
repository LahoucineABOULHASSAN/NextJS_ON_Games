import { useEffect } from "react";

const Modal = ({ game }) => {
  let slideIndex = 1;

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  };
  // Open the Modal
  const openModal = () => {
    document.getElementById("myModal").style.display = "block";
  };

  // Close the Modal
  const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
  };

  // Next/previous controls
  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };

  // Thumbnail image controls
  const currentSlide = (n) => {
    showSlides((slideIndex = n));
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  const { screenshots, title } = game;
  const total = screenshots.length;
  return (
    <div>
      {/* <!-- Images used to open the lightbox --> */}
      <div className="row">
        {screenshots.map((screenshot, index) => (
          <div className="column" key={index}>
            <img
              src={screenshot.image}
              alt={`${title} - screenshot - ${index + 1}`}
              onClick={() => {
                openModal();
                currentSlide(index + 1);
              }}
              className="hover-shadow"
            />
          </div>
        ))}
      </div>

      {/* <!-- The Modal/Lightbox --> */}
      <div id="myModal" className="modal">
        <span className="close cursor" onClick={closeModal}>
          &times;
        </span>
        <div className="modal-content">
          {screenshots.map((screenshot, index) => (
            <div className="mySlides" key={index}>
              <div className="numbertext">
                {index + 1} / {total}
              </div>
              <img
                src={screenshot.image}
                className="w-full"
                alt={`${title} - screenshot - ${index + 1}`}
              />
            </div>
          ))}

          {/* <!-- Next/previous controls --> */}
          <a className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={() => plusSlides(1)}>
            &#10095;
          </a>

          {/* <!-- Caption text --> */}
          <div className="caption-container">
            <p id="caption"></p>
          </div>

          {/* Thumbnail image controls */}
          {screenshots.map((screenshot, index) => (
            <div className="column" key={index}>
              <img
                className="demo"
                src={screenshot.image}
                onClick={() => currentSlide(index + 1)}
                alt={`${title} - screenshot - ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
