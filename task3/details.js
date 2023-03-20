
getData().then(data => {
    const queryString = location.search
    const params = new URLSearchParams(queryString)
    const id = params.get("id")
    const detailsCard = document.querySelector(".cardsStructure")

    //Filtro los eventos con el ID y renderizo el resultado
    const selectedEvent = data.events.find(e => id == e._id);
    console.log(selectedEvent);
    selectedEvent.estimate ? selectedEvent.estimate : selectedEvent.estimate = selectedEvent.assistance;

    if (!selectedEvent) {
        console.error('El evento seleccionado no existe');
        return;
      }
    detailsCard.innerHTML = `
                <img src="${selectedEvent.image}" width="300" alt="People running a marathon" class="img-fluid">
                <div class="card-description">
                    <h1>${selectedEvent.name}</h1>
                    <p><small class="text-muted">${selectedEvent.date}<br><span class="event-category">${selectedEvent.category}</span></small></p>
                    <p class="card-text">
                    ${selectedEvent.description}
                    </p>
                    <p><strong>Location:</strong> ${selectedEvent.place}</p>
                    <p><strong>Capacity:</strong> ${selectedEvent.capacity}</p>
                    <p><strong>Assistance / estimated:</strong> ${selectedEvent.estimate}</p>
                    <p>Price: $${selectedEvent.price}</p>
                </div>
                `
    // const queryString = window.location.search;
    // console.log(queryString)
    // const params = new URLSearchParams(queryString);
    // console.log(params)
    // const id = params.get("_id");
    // console.log(id)
    // const detailsCard = document.querySelector(".detail-card")
    // const algo = data.events.find(card => card._id == id);
    // let datoPasado = "";
    // let currentDate = new Date(data.currentDate);
    // let eventDate = algo.date;

    // if(eventDate < currentDate){
    //     datoPasado = `<p class="card-text">Assistance: ${algo.assistance}</p>`
    // }
    // const event = {
    //     id: params.get("_id"),
    //     category: params.get('category'),
    //     image: params.get('image'),
    //     name: params.get('name'),
    //     date: params.get('date'),
    //     place: params.get('place'),
    //     description: params.get('description'),
    //     price: params.get('price')
    // };
    // console.log(event);
    // if (!event) {
    //     console.error(`No se encontró un evento con el ID ${id}`);
    //     return;
    // }

    // let currentDate = new Date(data.currentDate);
    // let eventDate = event.date;
    // if(eventDate < currentDate){
    //     datoPasado = `<p class="card-text">Assistance: ${event.assistance}</p>`
    // }

    // const div = document.getElementById("cardsStructure");
    // div.innerHTML = `
    //     <div class="d-flex justify-content-center">
    //         <div class="card mt-3 col-xs-3 col-sm-6 col-md-8 mx-auto">
    //             <div class="container text-center">
    //                 <img src="${event.image}" class="card-img-top img-fluid mt-3">
    //                 <div class="card-body d-flex flex-column align-items-center">
    //                     <h3 class="card-title">${event.name}</h3>
    //                     <p class="card-text">${event.description}</p>
    //                     <p class="card-text">Capacity: ${event.capacity}</p>
    //                     ${datoPasado}
    //                 </div>
    //                 <div class="card-footer mb-3">
    //                     <p class="card-text"><h4>$${event.price}</h4></p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // `;
}).catch(error => {
    console.error('Está mas roto que roto', error);
});
