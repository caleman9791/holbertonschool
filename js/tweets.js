document.addEventListener('readystatechange', event => {


  let seconds = 10;
  let intervalID = setInterval(function(argument) {
    seconds -= 1;

    if (seconds == 0) {
      let tweets_container = document.querySelector(".tweets_container");

      tweets_container.style.display = "block";
      clearInterval(intervalID);

    }

    if (seconds == 1) {
      let charging = document.querySelector(".charging");
      charging.style.display = "none";
    }
  }, 1000, );


});