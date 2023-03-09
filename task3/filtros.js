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

/*FILTRO CATEGORIAS*/

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



/*BUSCADOR*/

const searchInput = document.getElementById('search-input');
const clearBtn = document.querySelector('.clear-btn');
const filterBtn = document.getElementById('filterBtn');
const eventsList = document.querySelector('#cardsStructure');
const events = data.events;

/*FILTRO BUSCADOR*/

function filterEvents(searchTerm) {
    const filteredEvents = eventDOM.filter((event) => {
        return (
            event.name.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm)
        );
    }); 
    mostrarProductos(filteredEvents);
}

console.log(filterBtn);
filterBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    filterEvents(searchTerm);
});



