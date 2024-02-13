let all = false;
let music = false;
let comedy = false;
let drawing = false;
let toggle_all = false;
let toggle_music = false;
let toggle_comedy = false;
let toggle_drawing = false;
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
  fetch("https://openapi.programming-hero.com/api/videos/category/1002")
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};

const displayData = (data) => {
  console.log(data);
  if(data.length == 0) {
    const alldata = document.getElementById("printdata");
    const card = document.createElement("div");
    while(printdata.firstElementChild) printdata.removeChild(printdata.firstElementChild);
    card.classList.add("aladabox");
    card.innerHTML = `
    <div class="noContentimg">
      <div id = "contentimg">
      <img src="./img/Icon.png" alt="">
      </div>
      <h1 style = "margin-top: 20px;font-weight: bold">Oops!! Sorry,</h1>
      <h1 style = "font-weight : bold">There is no content here</h1>
    </div>
  </div>
    `
    alldata.appendChild(card);
    return;
  }
  const alldata = document.getElementById("printdata");
  while(printdata.firstElementChild) printdata.removeChild(printdata.firstElementChild);
  data.forEach((dt) => {
    const card = document.createElement("div");
    let ver = false;
    if(dt.authors[0].verified == true) ver = true;
    let second = dt.others.posted_date;
    
    let hours = Math.floor(second / 3600);
    let min = Math.floor((second % 3600) / 60);
    
    card.classList.add("box");
    card.innerHTML = `
    <div class="imgdiv">
      <img style = "border-radius: 10px; width:350px ;height : 200px;" class
      "imgbox" src="${dt. thumbnail}" alt="s">
      <br/>
      <div class="d-flex">
        <div>
        <img class="author" src="${dt.authors[0].profile_picture}" alt="" />
        </div>
        <div id = "insideinfo">
        <p class = "p-info" style = "font-size : 20px; font-weight: bold;">${dt.title}</p>
        <p class = "p-info" style = "opacity : 60%">${dt.authors[0].profile_name}        ${(dt.authors[0].verified == true) ? `<i class="fa-solid fa-circle-check" style="color: #001eff;"></i>` : ''}</p>
        <p class = "p-info" style = "opacity : 60%">${dt.others.views}</p>
        <p id = "time">${hours != 0 && min != 0 ? `<p id = "time2">${hours} hours ${min} minutes</p>` : ''}</p>
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
    if(!toggle_all) {
      sortbyview(1000);
      toggle_all = true;
    }
    else if(toggle_all) {
      sortbyviewD(1000);
      toggle_all = false;
    }
    
  }
  else if(music == true) {
    if(!toggle_music) {
      sortbyview(1001);
      toggle_music = true;
    }
    else if(toggle_music) {
      sortbyviewD(1001);
      toggle_music = false;
    }
  }
  else if(comedy == true) {
    if(!toggle_comedy) {
      sortbyview(1003);
      toggle_comedy = true;
    }
    else if(toggle_comedy) {
      sortbyviewD(1003);
      toggle_comedy = false;
    }
  }
  else {
    if(!toggle_music) {
      sortbyview(1001);
      toggle_music = true;
    }
    else if(toggle_music) {
      sortbyviewD(1001);
      toggle_music = false;
    }
  }
}) 