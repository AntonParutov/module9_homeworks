const resultNode = document.querySelector(".result");
const btnNode = document.querySelector("button");

btnNode.addEventListener("click", () => {
  const width = document.querySelector(".width").value;
  const height = document.querySelector(".height").value;
  if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
    fetch(`https://picsum.photos/${width}/${height}`).then((response) => {
      resultUrl = response.url;
      let cards = "";
      const cardBlock = `
      <div class="card">
        <img
          src="${resultUrl}"
          class="card-image"
        />
      </div>
    `;
      cards = cards + cardBlock;

      resultNode.innerHTML = cards;
    });
  } else {
    resultNode.innerHTML = `<p>
                                число вне диапазона от 100 до 300
                            </p>`;
  }
});
