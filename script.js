

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
        card.innerHTML = `
        <img src="${dt.thumbnail}" alt="">
        <h2>${dt?.others.views}</h2>
        `;
        alldata.appendChild(card);
    }) 
};