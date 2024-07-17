const container = document.querySelector("#cards");
const name1 = document.querySelector("#search");
const btn = document.querySelector("#ser-btn");
const txt1 = document.querySelector("#text1");

const fn = async () => {
  txt1.innerHTML = "Search Results";
  console.log(name1.value);
  await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name1.value}`)
    .then((res) => res.json())
    .then((res) => {
      data = res.items;
      console.log(data);
      data.map((el) => {
        const html = `<div id="card">
            <img src=${el.volumeInfo.imageLinks?.thumbnail} alt="" />
            <h3>${el.volumeInfo.title}</h3>
            <p>
            ${el.volumeInfo.description?.slice(0, 100)}
            </p>
            <a class="read-btn" href="${el.volumeInfo.previewLink}">Read</a>
          </div>`;
        container.insertAdjacentHTML("beforeend", html);
      });
    });
};

btn.addEventListener("click", fn);

const clr = function () {
  container.innerHTML = "";
  name1.value = "";
  txt1.innerHTML = "Search for Books and Read them";
};
