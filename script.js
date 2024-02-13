const loadAllData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};
const loadmusicdata = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1001")
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};
const loadcomedydata = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1003")
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};
const loadnoData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1002") // ${id}
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};

const displayData = (data) => {
  console.log(data);
  const alldata = document.getElementById("printdata");
  data.forEach((dt) => {
    const card = document.createElement("div");
    card.classList.add("box");
    card.innerHTML = `
    <div class="imgdiv">
      <img style = "border-radius: 10px; width:350px ;height : 200px;" class
      "imgbox" src="${dt. thumbnail}" alt="s">
      <br />
      <div class="d-flex">
        <div>
        <img class="author" src="${dt.authors[0].profile_picture}" alt="" />
        </div>
        <div id = "insideinfo">
        <p class = "p-info" style = "font-size : 20px; font-weight: bold;">${dt.title}</p>
        <p class = "p-info" style = "opacity : 60%">${dt.authors[0].profile_name}</p>
        <p class = "p-info" style = "opacity : 60%">${dt.others.views}</p>
        </div>
      </div>
    </div>
        `;
    alldata.appendChild(card);
  });
};
loadAllData();




 