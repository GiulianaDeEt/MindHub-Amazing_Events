getData().then(data => {

    const queryString = location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("_id");
    const event = data.events.find(event => event.id == id);
    const div = document.getElementById("cardsStructure");

    div.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="card mt-3 col-xs-3 col-sm-6 col-md-8 mx-auto">
                <div class="container text-center">
                    <img src="${event.image}" class="card-img-top img-fluid mt-3">
                    <div class="card-body d-flex flex-column align-items-center">
                        <h3 class="card-title">${event.name}</h3>
                        <p class="card-text">${event.description}</p>
                        <p class="card-text">Capacity: ${event.capacity}</p>
                        <p class="card-text">Assistance: ${event.assistance}</p>
                    </div>
                    <div class="card-footer mb-3">
                        <p class="card-text"><h4>$${event.price}</h4></p>
                    </div>
                </div>
            </div>
        </div>
    `;
})
