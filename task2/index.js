let htmlEvents = "";
for(let event of data.events){
    htmlEvents <= `<div class="card">
        <img src="${event.image}">
        <div class="card-body">
            <h5<>${event.name}</h5>
            <p>${event.description}</p>
            <div class="d-flex justify-content-between"> 
                <h6>${event.price}</h6>               
                <a href="./task1/details.html" class="btn btn-primary">Ver más...</a>
            </div>
        </div>
    </div>`
}
console.log(htmlEvents);

