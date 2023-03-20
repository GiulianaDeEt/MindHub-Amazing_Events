getData().then(data => {

    //PRIMERA SECCIÓN  
    console.log(data);
    let assistancePercentage = [];
    let capacityOrder = [];
  
    for (let event of data.events) {
      let eventName = event.name;
      let eventAssistance = (event.assistance / event.capacity) * 100;
      assistancePercentage.push({ eventName, eventAssistance });
      
      let eventCapacity = event.capacity;
      capacityOrder.push({ eventName, capacity: eventCapacity });
    }
  
    let highAssistance = [...assistancePercentage].sort((a, b) => b['eventAssistance'] - a['eventAssistance']).slice(0, 3);
    let lowAssistance = [...assistancePercentage].sort((a, b) => a['eventAssistance'] - b['eventAssistance']).slice(0, 3);
    let topCapacity = capacityOrder.sort((a, b) => b.capacity - a.capacity).slice(0, 3);
  
    console.log(highAssistance);
    console.log(lowAssistance);
    console.log(topCapacity);

    let tbodyEvents = document.getElementById("tbodyEvents");
    let tr1 = document.createElement("tr");
    tr1.innerHTML = `
      <td>${highAssistance[0].eventName}: ${highAssistance[0].eventAssistance.toFixed(2)}%</td>
      <td>${lowAssistance[0].eventName}: ${lowAssistance[0].eventAssistance.toFixed(2)}%</td>
      <td>${topCapacity[0].eventName}: ${topCapacity[0].capacity}</td>
    `;
    let tr2 = document.createElement("tr");
    tr2.innerHTML = `
      <td>${highAssistance[1].eventName}: ${highAssistance[1].eventAssistance.toFixed(2)}%</td>
      <td>${lowAssistance[1].eventName}: ${lowAssistance[1].eventAssistance.toFixed(2)}%</td>
      <td>${topCapacity[1].eventName}: ${topCapacity[1].capacity}</td>
    `;
    let tr3 = document.createElement("tr");
    tr3.innerHTML = `
      <td>${highAssistance[2].eventName}: ${highAssistance[2].eventAssistance.toFixed(2)}%</td>
      <td>${lowAssistance[2].eventName}: ${lowAssistance[2].eventAssistance.toFixed(2)}%</td>
      <td>${topCapacity[2].eventName}: ${topCapacity[2].capacity}</td>
    `;
  
    tbodyEvents.appendChild(tr1);
    tbodyEvents.appendChild(tr2);
    tbodyEvents.appendChild(tr3);


    //SEGUNDA SECCIÓN
    let categoryCapacity = 0;
if (data.category) {
  categoryCapacity = data.category.reduce((acc, curr) => {
    return acc + curr.capacity;
  }, 0);
} else {
  console.log("No se obtuvo la capacidad de las categorías");
}

let categoryOrder = [];

let currentDate = new Date();

for (let event of data.events) {
  let eventDate = new Date(event.date);
  if (eventDate <= currentDate) {
    continue;
  }

  let category = event.category;
  let eventRevenue = event.price * event.estimate;
  let eventAttendance = (event.estimate / event.capacity) * 100;
  if (!isFinite(eventAttendance)) {
    eventAttendance = 0;
  }

  let categoryData = categoryOrder.find(item => item.category === category);
  if (!categoryData) {
    categoryData = { category: category, revenue: 0, attendance: 0, capacity: categoryCapacity };
    categoryOrder.push(categoryData);
  }

  categoryData.revenue += eventRevenue;
  categoryData.attendance += eventAttendance;
}

for (let categoryData of categoryOrder) {
  if (categoryData.capacity > 0) {
    categoryData.attendancePercentage = (categoryData.attendance / categoryData.capacity) * 100;
  } else {
    categoryData.attendancePercentage = 0;
  }
  console.log(categoryData.category, categoryData.revenue, categoryData.attendancePercentage);
}

let tbodyUpcoming = document.getElementById("tbodyUpcoming");
for (let categoryData of categoryOrder) {
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${categoryData.category}</td>
    <td>$${categoryData.revenue}</td>
    <td>${categoryData.attendancePercentage.toFixed(2)}%</td>
  `;
  tbodyUpcoming.appendChild(tr);
}

    
})




// getData().then(data => {

//   // Obtener los datos
//   console.log(data);
//   const events = data.events;

//   // Crear arrays para almacenar eventos con mayor y menor porcentaje de asistencia
//   // const maxestimateEvents = [];
//   // const minAssistanceEvents = [];

//   // // Iterar sobre los eventos
//   // for (let i = 0; i < events.length; i++) {
//   //   const event = events[i];

//   // Ordenar eventos según asistencia
//   const assistanceOrder = events.sort((a, b) => (b.attendance / b.capacity) - (a.attendance / a.capacity));
//   console.log(assistanceOrder);
//   // Ordenar eventos según capacidad
//   const capacityOrder = events.sort((a, b) => b.capacity - a.capacity);
//   console.log(capacityOrder);
//   // Obtener los 3 eventos con mayor asistencia
//   const highAssistance = assistanceOrder.slice(0, 3).map(event => event.name);

//   // Obtener los 3 eventos con menor asistencia
//   const lowAssistance = assistanceOrder.slice(-3).map(event => event.name);

//   // Obtener los 3 eventos con mayor capacidad
//   const topCapacity = capacityOrder.slice(0, 3).map(event => event.name);

//   console.log(highAssistance); // Verifica los eventos con mayor asistencia
// console.log(lowAssistance); // Verifica los eventos con menor asistencia
// console.log(topCapacity); // Verifica los eventos con mayor capacidad
//   // Inyectar los nombres de los eventos en las celdas de la tabla correspondientes
//   document.getElementById("c11").textContent = highAssistance[0];
//   document.getElementById("c12").textContent = highAssistance[1];
//   document.getElementById("c13").textContent = highAssistance[2];
//   document.getElementById("c21").textContent = lowAssistance[0];
//   document.getElementById("c22").textContent = lowAssistance[1];
//   document.getElementById("c23").textContent = lowAssistance[2];
//   document.getElementById("c31").textContent = topCapacity[0];
//   document.getElementById("c32").textContent = topCapacity[1];
//   document.getElementById("c33").textContent = topCapacity[2];

// }).catch(error => {
//   console.log(error);
// });

// //Crear arrays vacíos para los eventos con mayor y menor asistencia
// let maxAssistanceEvents = [];
// let minAssistanceEvents = [];

//Crear variables para el evento con mayor capacidad y su cantidad de asistentes
// let maxCapacityEvent = [];
// let maxCapacity = 0;

// //Iterar a través de cada evento
// for (let i = 0; i < events.length; i++) {
//   const event = events[i];

//   //Calcular el porcentaje de asistencia
//   const assistancePercentage = (event.assistance / event.capacity) * 100;

//   //Agregar el evento a los arrays correspondientes si su porcentaje de asistencia es mayor o menor que los eventos actuales
//   if (maxAssistanceEvents.length < 3 || assistancePercentage > maxAssistanceEvents[maxAssistanceEvents.length - 1].assistancePercentage) {
//     maxAssistanceEvents.push({ name: event.name, assistancePercentage });
//     maxAssistanceEvents.sort((a, b) => b.assistancePercentage - a.assistancePercentage);
//     maxAssistanceEvents = maxAssistanceEvents.slice(0, 3);
//   } else{
//     if (minAssistanceEvents.length < 3 || assistancePercentage < minAssistanceEvents[minAssistanceEvents.length - 1].assistancePercentage) {
//     minAssistanceEvents.push({ name: event.name, assistancePercentage });
//     minAssistanceEvents.sort((a, b) => a.assistancePercentage - b.assistancePercentage);
//     minAssistanceEvents = minAssistanceEvents.slice(0, 3);
//     }
//   }

//   //Actualizar la variable del evento con mayor capacidad si el evento actual tiene una capacidad mayor
//   if (event.capacity > maxCapacity) {
//     maxCapacityEvent = event.name;
//     maxCapacity = event.capacity;
//   }
// }

// //Imprimir los resultados en la consola
// console.log("Eventos con mayor porcentaje de asistencia:");
// for (let i = 0; i < maxAssistanceEvents.length; i++) {
//   console.log(maxAssistanceEvents[i].name + " - " + maxAssistanceEvents[i].assistancePercentage.toFixed(2) + "%");
// }

// console.log("Eventos con menor porcentaje de asistencia:");
// for (let i = 0; i < minAssistanceEvents.length; i++) {
//   console.log(minAssistanceEvents[i].name);
// }

// console.log("Evento con mayor capacidad: " + maxCapacityEvent);


// })
