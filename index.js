const quote = document.querySelector(".quote");
const button = document.getElementsByTagName("button");

const getQuote = async () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.textContent = data.content;
      quote.style.textAlign = "center";
    })
    .catch((err) => {
      console.log(err);
      quote.textContent = "404 (Not Found!!)";
    });
};

button[0].addEventListener("click", (e) => {
  getQuote();
});
