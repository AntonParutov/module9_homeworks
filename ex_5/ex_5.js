const resultNode = document.querySelector(".result");
const btnNode = document.querySelector("button");

const refreshPage = localStorage.getItem("savepage");
if (refreshPage) {
  loadedImages(JSON.parse(refreshPage));
}
async function loadedImages(data) {
  for (item of data) {
    let img = document.createElement("img");
    img.setAttribute("src", item.download_url);
    img.setAttribute("width", "200");
    resultNode.innerHTML = "";
    setTimeout(() => {
      resultNode.append(img);
    });
  }
}

btnNode.addEventListener("click", () => {
  const pageNumber = document.querySelector(".pageNumber").value;
  const limit = document.querySelector(".limit").value;
  if (pageNumber >= 1 && pageNumber <= 10 && limit >= 1 && limit <= 10) {
    fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
      .then((response) => {
        result = response.json();
        return result;
      })
      .then((data) => {
        loadedImages(data);
        localStorage.setItem("savepage", JSON.stringify(data));
      });
  } else {
    resultNode.innerHTML = `<p>
                                число вне диапазона от 1 до 10
                            </p>`;
  }
});
