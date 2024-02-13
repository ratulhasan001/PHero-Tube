let all = false;
let music = false;
let comedy = false;
let drawing = false;
let cnt = 0;
document.getElementById("all_btn").addEventListener("click", function(e) {
  all = true;
  music = false;
  comedy = false;
  drawing = false;
}) 
document.getElementById("music_btn").addEventListener("click", function(e) {
  music = true;
  all = false;
  comedy = false;
  drawing = false;
}) 
document.getElementById("comedy_btn").addEventListener("click", function(e) {
  comedy = true;
  all = false;
  music = false;
  drawing = false;
}) 
document.getElementById("drawing_btn").addEventListener("click", function(e) {
  drawing = true;
  all = false;
  music = false;
  comedy = false;
}) 

// video loading section

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
  while(printdata.firstElementChild) printdata.removeChild(printdata.firstElementChild);
  data.forEach((dt) => {
    const card = document.createElement("div");
    let ver = false;
    if(dt.authors[0].verified == true) ver = true;
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
        <p class = "p-info" style = "opacity : 60%">${dt.authors[0].profile_name}        ${(dt.authors[0].verified == true) ? `<i class="fa-solid fa-circle-check" style="color: #001eff;"></i>` : ''}</p>
        <p class = "p-info" style = "opacity : 60%">${dt.others.views}</p>
        </div>
      </div>
    </div>
        `;
    alldata.appendChild(card);
  });
};
loadAllData();

// sorting section

const sortbyview = (categoryId) => {
  fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
  .then((res) => res.json())
  .then((data) => {
      data.data.sort(function(a, b) {
          var viewsA = parseInt(a.others.views);
          var viewsB = parseInt(b.others.views);

          return viewsB - viewsA; 
      });

      displayData(data.data);
  });
}
const sortbyviewD = (categoryId) => {
  fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
  .then((res) => res.json())
  .then((data) => {
      data.data.sort(function(a, b) {
          var viewsA = parseInt(a.others.views);
          var viewsB = parseInt(b.others.views);

          return viewsA - viewsB; 
      });

      displayData(data.data);
  });
}

document.getElementById("sortbyview").addEventListener("click", function(e) {

  if(all == true) {
    sortbyview(1000);
  }
  else if(music == true) {
    sortbyview(1001);
  }
  else if(comedy == true) {
    sortbyview(1003);
  }
  else {
    sortbyview(1002);
  }
}) 