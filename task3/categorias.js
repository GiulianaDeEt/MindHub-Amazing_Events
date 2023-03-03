let uniqueCategories = [];
let categoriesHtml = "";

data.events.forEach(event => {
    if (!uniqueCategories.includes(event.category)) {
        uniqueCategories.push(event.category);
        categoriesHtml += `<label><input type="checkbox" value="${event.category}" name="category">${event.category}</label>`;
    }
});

const container = document.getElementById("checkbox-container");
container.innerHTML = categoriesHtml;
