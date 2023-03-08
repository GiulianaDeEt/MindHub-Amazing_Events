/*CREADOR DE CATEGORÍAS*/
let uniqueCategories = [];
let categoriesHtml = "";

data.events.forEach(event => {
    if (!uniqueCategories.includes(event.category)) {
        uniqueCategories.push(event.category);
        categoriesHtml += `<label data-category="${event.category}"><input type="checkbox" value="${event.category}" name="category" class="categoria-checkbox">${event.category}</label>`;
    }
});

const container = document.getElementById("checkbox-container");
container.innerHTML = categoriesHtml;

/*FILTRO*/
let todasLasCategorias = data.events;
let filtroCategorias = []; 

function mostrarProductos() {
    const contenedorProductos = document.getElementById("cardsStructure"); 
    contenedorProductos.innerHTML = "";
    let categorieEvent = "";
    for(let event of todasLasCategorias){
        if (filtroCategorias.length === 0 || filtroCategorias.includes(event.category)) {
            categorieEvent += `
                <div class="col-12 col-md-6 col-xl-4 py-4" data-category="${event.category}">
                    <div class="card" style="width: 18rem">
                        <img src="${event.image}" class="card-img-top" style="height:10rem">
                        <div class="card-body d-flex flex-column">
                            <h5>${event.name}</h5>
                            <p>${event.description}</p>
                            <div class="card-footer d-flex justify-content-between"> 
                                <h6>$${event.price}</h6>               
                                <a href="./task1/details.html" class="btn btn-primary">Ver más...</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    } 
    contenedorProductos.innerHTML = categorieEvent;
}

const checkboxes = document.querySelectorAll('.categoria-checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            filtroCategorias.push(checkbox.value);
        } else {
            filtroCategorias = filtroCategorias.filter(category => category !== checkbox.value);
        }
        mostrarProductos();
    });
});