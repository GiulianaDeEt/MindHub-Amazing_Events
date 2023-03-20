//DEBIDO A QUE SE ROMPÍA, HE TENIDO QUE REPLICARLO EN CADA PÁGINA: INDEX, UPCOMING, PAST...

// getData().then(data => {
//     /*CREADOR DE CATEGORÍAS*/

//     let uniqueCategories = [];
//     let categoriesHtml = "";

//     data.events.forEach(event => {
//         if (!uniqueCategories.includes(event.category)) {
//             uniqueCategories.push(event.category);
//             categoriesHtml += `<label data-category="${event.category}"><input type="checkbox" value="${event.category}" name="category" class="categoria-checkbox">${event.category}</label>`;
//         }
//     });

//     const container = document.getElementById("checkbox-container");
//     container.innerHTML = categoriesHtml;

//     /*FILTRO CATEGORIAS*/

//     const checkboxes = document.querySelectorAll('.categoria-checkbox');
//     checkboxes.forEach(checkbox => {
//         checkbox.addEventListener('change', () => {
//             if (checkbox.checked) {
//                 filtroCategorias.push(checkbox.value);
//             } else {
//                 filtroCategorias = filtroCategorias.filter(category => category !== checkbox.value);
//             }
//             const filteredEvents = data.events.filter(event => filtroCategorias.includes(event.category));
//             mostrarProductos(filteredEvents);
//         });
//     });


//     /*BUSCADOR*/

//     const searchInput = document.getElementById('search-input');
//     const filterBtn = document.getElementById('filterBtn');
//     const eventsList = document.querySelector('#cardsStructure');

//     /*FILTRO BUSCADOR*/

//     function filterEvents(searchTerm) {
//         const filteredEvents = data.events.filter((event) => {
//             return (
//                 event.name.toLowerCase().includes(searchTerm) ||
//                 event.description.toLowerCase().includes(searchTerm)
//             );
//         }); 
//         mostrarProductos(filteredEvents);
//     }

//     filterBtn.addEventListener('click', () => {
//         const searchTerm = searchInput.value.toLowerCase();
//         filterEvents(searchTerm);
//     });

//     mostrarProductos();
// });