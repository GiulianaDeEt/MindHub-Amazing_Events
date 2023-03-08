/*GENERADOR DE CARDS*/
let htmlEvents = "";
let cardEvents = document.getElementById("cardsStructure")
for(let event of data.events){
    htmlEvents += `
    <div class="col-12 col-md-6 col-xl-4 py-4" data-category="${event.category}">
        <div class="card mx-auto text-center" style="width: 18rem">
            <img src="${event.image}" class="card-img-top" style="height:10rem">
            <div class="card-body d-flex flex-column text-center">
                <h5>${event.name}</h5>
                <p>${event.description.substring(0, 40)}...</p>
                <div class="card-footer d-flex justify-content-between align-items-center"> 
                    <h6 class="mb-0">$${event.price}</h6>               
                    <a href="./task1/details.html?id=${event.id}" class="btn btn-primary">Ver más...</a>
                </div>
            </div>
        </div>
    </div>
`} cardEvents.innerHTML = htmlEvents;