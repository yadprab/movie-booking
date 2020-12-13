function seatFn() {
  window.alert("select the class first");

  //get select
  const select = document.querySelector("select");
  //get container
  const seatContainer = document.querySelector(".seats-container");

  //get seats
  const seats = document.querySelectorAll(".seats:not(.occupied)");

  const bookNow = document.querySelector("#book-now");
  const seatId = document.querySelector(".selected-seats");

  function bookNowFn(e) {
    e.preventDefault();

    if (seatId.textContent == "") {
      window.alert("select seats first");
    }
  }

  //events
  bookNow.addEventListener("click", bookNowFn);

  function movieSelect() {
    //get selectValue
    const selectValue = select.value;
    //get name and time and class
    let movieName = document.querySelector("#movie-name");
    const movieTime = document.querySelector("#time");
    const movieClass = document.querySelector("#class");

    //set everything from localStorage
    movieName.textContent = localStorage.getItem("title");
    movieTime.textContent = localStorage.getItem("time");
    movieClass.textContent = select.value;
    //get section fromSearContainer
    const classes = seatContainer.querySelectorAll(`section`);
    classes.forEach((seatClass) => {
      if (seatClass.classList.contains(selectValue)) {
        seatClass.classList.remove("class-off");
      } else {
        seatClass.classList.add("class-off");
      }
    });

    function selectedSeats() {
      const selected = document.querySelectorAll(".selected");
      const selectedArr = [...selected];
      const seatNo = selectedArr.map((ele) => ele.getAttribute("data-value"));
      if (selectedArr.length > 10) {
        window.alert("each user allowed to book only 10 tickets");
      }

      localStorage.setItem("seats", seatNo);

      const seatsId = localStorage.getItem("seats");
      //get selected seats span

      if (selectedArr.length <= 10) {
        seatId.textContent = seatsId;
      }

      //get price
      const price = document.querySelector(".price");

      switch (selectValue) {
        case "firstclass":
          {
            if (selectedArr.length <= 10) {
              price.textContent = `₹${selectedArr.length * 180}`;
            }
          }
          break;
        case "secondclass":
          {
            if (selectedArr.length <= 10) {
              price.textContent = `₹${selectedArr.length * 120}`;
            }
          }
          break;
        case "thirdclass": {
          if (selectedArr.length <= 10) {
            price.textContent = `₹${selectedArr.length * 90}`;
          }
        }
      }

      localStorage.setItem("price", price.textContent);

      function occupiedFn(e) {
        e.preventDefault();
        selectedArr.forEach((elem) => elem.classList.remove("selected"));
        selectedArr.forEach((elem) => {
          elem.classList.add("occupied");
        });

        //get overlay

        const overlay = document.querySelector(".overlay");

        //get container
        const ticketBooked = document.querySelector(".ticket--booked");
        const bookedTime = document.querySelector("#movie--time");
        const bookedClass = document.querySelector("#seat--class");
        const bookedSeats = document.querySelector(".selected--seats");
        const totalPrice = document.querySelector(".total--price");

        const img = ticketBooked.querySelector("img");

        img.src = localStorage.getItem("poster").replace(/"/g, "");
        bookedTime.textContent = localStorage.getItem("time");
        bookedClass.textContent = selectValue;
        bookedSeats.textContent = localStorage.getItem("seats");
        totalPrice.textContent = localStorage.getItem("price");

        overlay.classList.add("visible");
      }

      //events

      bookNow.addEventListener("click", occupiedFn);
    }

    function seatSelect(e) {
      e.target.classList.toggle("selected");
      selectedSeats();
    }

    //
    seats.forEach((seat) => seat.addEventListener("click", seatSelect));
  }

  //

  //events
  select.addEventListener("change", movieSelect);
}

//window Event
window.addEventListener("DOMContentLoaded", seatFn);
