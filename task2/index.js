let eventDOM = [];
let todasLasCategorias = [];
let filtroCategorias = []; 

async function getData(){
    try{
        const respuesta = await fetch('https://mindhub-xj03.onrender.com/api/amazing');
        const data = await respuesta.json();

        generadorCards(data);
        filtroCheckbox(data);
    }catch(error){
        console.log("No funciona y no se cuál es el error. Besiiii :3",error);
    }
}
getData();

function generadorCards(data){
    /*GENERADOR DE CARDS*/
    let htmlEvents = "";
            let cardEvents = document.getElementById("cardsStructure")
            data.events.sort(function (a, b) { return a.name - b.name ; })
            for(let event of data.events){
                events.push(event);
                htmlEvents += `
                <div class="col-12 col-md-6 col-xl-4 py-4" data-category="${event.category}">
                    <div class="card mx-auto text-center" style="width: 18rem">
                        <img src="${event.image}" class="card-img-top" style="height:10rem">
                        <div class="card-body d-flex flex-column text-center">
                            <h5>${event.name}</h5>
                            <p>${event.description.substring(0, 30)}...</p>
                            <div class="card-footer d-flex justify-content-between align-items-center"> 
                                <h6 class="mb-0">$${event.price}</h6>               
                                <a href="./task1/details.html?id=${event.id}" class="btn btn-primary buttonColor">Ver más...</a>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                eventDOM.push(event);
            }cardEvents.innerHTML = htmlEvents;
}


    /*FILTRO COMBINADO*/
    function mostrarProductos() {
        const contenedorProductos = document.getElementById("cardsStructure"); 
        contenedorProductos.innerHTML = "";
        let categorieEvent = "";
        for(let event of todasLasCategorias){
            if (filtroCategorias.length === 0 || filtroCategorias.includes(event.category)) {
                if(event.name.toLowerCase().includes(searchInput.value.toLowerCase()) || event.description.toLowerCase().includes(searchInput.value.toLowerCase())){
                    categorieEvent += `
                        <div class="col-12 col-md-6 col-xl-4 py-4" data-category="${event.category}">
                            <div class="card mx-auto text-center" style="width: 18rem">
                                <img src="${event.image}" class="card-img-top" style="height:10rem">
                                <div class="card-body d-flex flex-column text-center">
                                    <h5>${event.name}</h5>
                                    <p>${event.description.substring(0, 40)}...</p>
                                    <div class="card-footer d-flex justify-content-between align-items-center"> 
                                        <h6 class="mb-0">$${event.price}</h6>               
                                        <a href="../task1/details.html?id=${event.id}" class="btn btn-primary buttonColor">Ver más...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                                            `
                } else if(searchInput.value.toLowerCase() == ""){
                    categorieEvent += `
                        <div class="col-12 col-md-6 col-xl-4 py-4" data-category="${event.category}">
                            <div class="card mx-auto text-center" style="width: 18rem">
                                <img src="${event.image}" class="card-img-top" style="height:10rem">
                                <div class="card-body d-flex flex-column text-center">
                                    <h5>${event.name}</h5>
                                    <p>${event.description.substring(0, 40)}...</p>
                                    <div class="card-footer d-flex justify-content-between align-items-center"> 
                                        <h6 class="mb-0">$${event.price}</h6>               
                                        <a href="../task1/details.html?id=${event.id}" class="btn btn-primary buttonColor">Ver más...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    } 
                }
        } 
        if(categorieEvent == ""){
            categorieEvent = `
                <div class="alert alert-secondary" role="alert">
                <h4 class="alert-heading">¡Ooops!</h4>
                <hr>
                <p>No se ha encontrado ningún evento.</p>
                </div>                    
                `
        }
            contenedorProductos.innerHTML = categorieEvent;
    }


// document.addEventListener("DOMContentLoaded", () => {
//     

//     fetch('https://mindhub-xj03.onrender.com/api/amazing')
//         .then(response => response.json())
//         .then(data =>{
//         })
// })
// document.addEventListener("DOMContentLoaded", () => {
//     let cardIndex = document.getElementById("cardsStructure");
//     fetch('https://mindhub-xj03.onrender.com/api/amazing')
//         .then(response => response.json())
//         .then(data =>{            
//         })
// })


