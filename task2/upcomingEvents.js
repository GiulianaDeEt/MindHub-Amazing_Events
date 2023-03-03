let htmlUpcoming = "";
let cardUpcoming = document.getElementById("cardsUpcoming")
for(let event of data.events){
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);

    if (eventDate > currentDate) {
        htmlUpcoming += `<div class="col-12 col-md-6 col-xl-4 py-4">
        <div class="card" style="width: 18rem">
            <img src="${event.image}" class="card-img-top" style="height:10rem">
            <div class="card-body d-flex flex-column">
                <h5>${event.name}</h5>
                <p>${event.description}</p>
                <div class="card-footer d-flex justify-content-between"> 
                    <h6>${event.price}</h6>               
                    <a href="./task1/details.html" class="btn btn-primary">Ver más...</a>
                </div>
            </div>
        </div>
    </div>`
    }
} cardUpcoming.innerHTML = htmlUpcoming;