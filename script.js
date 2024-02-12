const loadAllData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
   .then((res) => res.json())
   .then((data) => displayData(data.data))
};

const displayData = (data) => {
    console.log(data);
    const alldata = document.getElementById("printdata");
    data.forEach((dt) => {
        const card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `
        <div class = "imgdiv">
        <img style = "width:350px ;height : 200px;" class "imgbox" src="${dt.thumbnail}" alt="s">
        <br>
        <img class = "author" src = "${dt.authors[0].profile_picture}" alt = "" >
        </div>
        `;
        alldata.appendChild(card);
    }) 
};
loadAllData();



function msToTime(s) {

    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
  
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    
    return [pad(hrs), pad(mins), pad(secs), pad(ms, 3)]
  }