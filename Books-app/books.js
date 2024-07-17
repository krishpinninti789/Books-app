const container1 = document.querySelector("#cards");

const fn1 = async () => {
  await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=india&filter=free-ebooks"
  )
    .then((res) => res.json())
    .then((res) => {
      data = res.items;
      console.log(data);
      data.slice(0, 4).map((el) => {
        const html = `<div id="card">
            <img src=${el.volumeInfo.imageLinks.thumbnail} alt="" />
            <h3>${el.volumeInfo.title}</h3>
            <p>
${el.volumeInfo.authors}            </p>
            <a class="read-btn" href="${el.volumeInfo.previewLink}">Read</a>
          </div>`;
        container1.insertAdjacentHTML("beforeend", html);
      });
    });
};

fn1();

const container2 = document.querySelector("#harry-potter>#cards");

const fn2 = async () => {
  await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=harry+potter&filter=free-ebooks&download=epub"
  )
    .then((res) => res.json())
    .then((res) => {
      data = res.items;
      console.log(data);
      data.slice(0, 4).map((el) => {
        const html = `<div id="card">
            <img src=${el.volumeInfo.imageLinks.thumbnail} alt="" />
            <h3>${el.volumeInfo.title}</h3>
            <p>
            ${el.volumeInfo.authors}
            </p>
           <a class="read-btn" href="${el.volumeInfo.previewLink}">Read</a>
          </div>`;
        container2.insertAdjacentHTML("beforeend", html);
      });
    });
};

fn2();

const container3 = document.querySelector("#c-s>#cards");

const fn3 = async () => {
  await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=computer+science&filter=free-ebooks"
  )
    .then((res) => res.json())
    .then((res) => {
      data = res.items;
      console.log(data);
      data.slice(0, 4).map((el) => {
        const html = `<div id="card">
            <img src=${el.volumeInfo.imageLinks.thumbnail} alt="" />
            <h3>${el.volumeInfo.title}</h3>
            <p>
${el.volumeInfo.authors}            </p>
            <a class="read-btn" href="${el.volumeInfo.previewLink}">Read</a>
          </div>`;
        container3.insertAdjacentHTML("beforeend", html);
      });
    });
};

fn3();
