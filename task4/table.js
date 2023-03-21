getData().then(data => {
    //PRIMERA SECCIÓN  
    eventInfo(data)
    //SEGUNDA SECCIÓN
    upcomingInfo(data)
    //TERCERA SECCIÓN
    pastInfo(data)
})

//PRIMERA SECCIÓN 
function eventInfo(data){
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
}eventInfo(data);

//SEGUNDA SECCIÓN
function upcomingInfo(data){
  
    // if (data.category) {
    //   categoryCapacity = data.category.reduce((acc, curr) => {
    //     return acc + curr.capacity;
    //   }, 0);
    // } else {
    //   console.log("No se obtuvo la capacidad de las categorías");
    // }

    let categoryOrder = [];

    let currentDate = new Date();
    for (let event of data.events) {
      let eventDate = new Date(event.date);
      if (eventDate <= currentDate) {
        continue;
      }

      let categoryCapacity = event.capacity;
      let category = event.category;
      let eventRevenue = event.price * event.estimate;
      let eventEstimate = event.estimate;
      // if (!isFinite(eventEstimate)) {
      //   eventEstimate = 0;
      // }

      var index = categoryOrder.findIndex(function (obj) {
        return obj.category === event.category;
      });

      let categoryData = categoryOrder.find(item => item.category === category);
      if (index == -1) {
        categoryData = { category: category, revenue: eventRevenue, estimate: eventEstimate, capacity: categoryCapacity, percentage:0};
        categoryOrder.push(categoryData);
      }else{
        categoryOrder[index].revenue += eventRevenue;
        categoryOrder[index].estimate += eventEstimate;
        categoryOrder[index].capacity += categoryCapacity;

      }
    }

    for (let categoryData of categoryOrder) {
      if (categoryData.capacity > 0) {
        categoryData.percentage = (categoryData.estimate / categoryData.capacity) * 100;
      // } else {
      //   categoryData.attendancePercentage = 0;
      //   console.log("Sigue sin obtener infomración de la capacidad de cada categoría");
      }
      console.log(categoryData.category, categoryData.revenue, categoryData.percentage);
    }

    let tbodyUpcoming = document.getElementById("tbodyUpcoming");
    for (let categoryData of categoryOrder) {
      let tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${categoryData.category}</td>
        <td>$${categoryData.revenue}</td>
        <td>${categoryData.percentage.toFixed(2)}%</td>
      `;
      tbodyUpcoming.appendChild(tr);
    }
}upcomingInfo(data);

//TERCERA SECCIÓN
function pastInfo(data){
  let categoryOrder = [];

  let currentDate = new Date();
  for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) {
      continue;
    }

    let categoryCapacity = event.capacity;
    let category = event.category;
    let eventRevenue = event.price * event.assistance;
    let eventAssistance = event.assistance;

    console.log(categoryCapacity);
    console.log(category);
    console.log(eventRevenue);
    console.log(eventAssistance);
    // if (!isFinite(eventAssistance)) {
    //   eventAssistance = 0;
    // }

    var index = categoryOrder.findIndex(function (obj) {
      return obj.category === event.category;
    });

    let categoryData = categoryOrder.find(item => item.category === category);
    if (index == -1) {
      categoryData = { category: category, revenue: eventRevenue, assistance: eventAssistance, capacity: categoryCapacity, percentage:0};
      categoryOrder.push(categoryData);
    }else{
      categoryOrder[index].revenue += eventRevenue;
      categoryOrder[index].assistance += eventAssistance;
      categoryOrder[index].capacity += categoryCapacity;

    }
  }

  for (let categoryData of categoryOrder) {
    if (categoryData.capacity > 0) {
      categoryData.percentage = (categoryData.assistance / categoryData.capacity) * 100;
    // } else {
    //   categoryData.attendancePercentage = 0;
    //   console.log("Sigue sin obtener infomración de la capacidad de cada categoría");
    }
    console.log(categoryData.category, categoryData.revenue, categoryData.percentage);
  }

  let tbodyPast = document.getElementById("tbodyPast");
  for (let categoryData of categoryOrder) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${categoryData.category}</td>
      <td>$${categoryData.revenue}</td>
      <td>${categoryData.percentage.toFixed(2)}%</td>
    `;
    tbodyPast.appendChild(tr);
  }
}pastInfo(data);

/*==================================================================================================*/

