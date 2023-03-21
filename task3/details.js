
getData().then(data => {
    const queryString = location.search
    const params = new URLSearchParams(queryString)
    const id = params.get("id")
    const detailsCard = document.querySelector("#cardsStructure")
    
    const detailsEvent = data.events.find(e => id == e._id);
    console.log(detailsEvent);

    detailsEvent.assistance ? detailsEvent.assistance : detailsEvent.assistance = detailsEvent.estimate;
    console.log(id);
    
    detailsCard.innerHTML = `
                            <div class="d-flex justify-content-center">
                                <div class="card mt-3 col-xs-3 col-sm-6 col-md-8 mx-auto">
                                    <div class="container text-center">
                                        <img src="${detailsEvent.image}" class="card-img-top img-fluid mt-3">
                                        <div class="card-body d-flex flex-column align-items-center">
                                        <p class="card-text" style="color: #898989">${detailsEvent.date}</p>
                                        <h5 class="card-text" style="color: #f838ae">${detailsEvent.category}</h5>        
                                        <h2 class="card-title">${detailsEvent.name}</h2>
                                            <p class="card-text">${detailsEvent.description}</p>
                                            <p class="card-text">Capacity: ${detailsEvent.capacity}</p>
                                            <p class="card-text">Place: ${detailsEvent.place}</p>
                                            <p class="card-text">Estimate: ${detailsEvent.estimate}</p>
                                        </div>
                                        <div class="card-footer mb-3">
                                            <p class="card-text"><h4>$${detailsEvent.price}</h4></p>
                                        </div>
                                    </div>
                                </div>
                            </div>                
                            `;
})








//==========================================================================================
    // const queryString = window.location.search;
    // console.log(queryString)
    // const params = new URLSearchParams(queryString);
    // console.log(params)
    // const id = params.get("_id");
    // console.log(id)
    // const detailsCard = document.querySelector("#cardsStructure")
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
