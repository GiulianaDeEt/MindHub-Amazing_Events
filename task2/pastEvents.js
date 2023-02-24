let htmlPast = "";
let cardPast = document.getElementById("cardsPast")
for(let event of data.events){
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);

    if (eventDate < currentDate) {
        htmlPast += `<div class="col-12 col-md-6 col-xl-4 py-4">
        <div class="card" style="width: 18rem;">
            <img src="${event.image}">
            <div class="card-body">
                <h5<>${event.name}</h5>
                <p>${event.description}</p>
                <div class="d-flex justify-content-between"> 
                    <h6>${event.price}</h6>               
                    <a href="./task1/details.html" class="btn btn-primary">Ver más...</a>
                </div>
            </div>
        </div>
    </div>`
    }
}
// console.log(htmlPast);
cardPast.innerHTML = htmlPast;