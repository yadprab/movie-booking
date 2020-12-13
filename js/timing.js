function timingFn() {
  //get title
  const movieTitleBookings = document.querySelector("#movie-name-booking");
  const title = localStorage.getItem("title");

  //get nav-button
  const hamburgerIcon = document.querySelector("#nav-button");

  //get close-button
  const closeButton = document.querySelector("#close-button");

  //get overlay
  const overlay = document.querySelector(".overlay");

  movieTitleBookings.textContent = `${title}`;

  //get timings container
  const container = document.querySelector(".timings-container");
  const time = container.querySelectorAll("a:not(.housefull)");

  function showTiming(e) {
    //get time
    const movieTime = e.target.textContent;
    localStorage.setItem("time", movieTime);
  }

  function navFn(e) {
    e.preventDefault();
    //get overlay

    //add class
    overlay.classList.add("visible");
  }

  function closeFn(e) {
    e.preventDefault();
    //get overlay

    //add class
    overlay.classList.remove("visible");
  }

  //
  time.forEach((show) => show.addEventListener("click", showTiming));
  hamburgerIcon.addEventListener("click", navFn);
  closeButton.addEventListener("click", closeFn);
}

//window event
window.addEventListener("DOMContentLoaded", timingFn);
