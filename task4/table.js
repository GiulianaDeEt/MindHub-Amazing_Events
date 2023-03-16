fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(data => {
    // Ordenar los eventos por porcentaje de asistencia
    const sorted_by_attendance = data.sort((a, b) => b.attendance_percentage - a.attendance_percentage);
    
    // Seleccionar los 3 eventos con mayor porcentaje de asistencia
    const top_attendance_events = sorted_by_attendance.slice(0, 3);
    
    // Seleccionar los 3 eventos con menor porcentaje de asistencia
    const bottom_attendance_events = sorted_by_attendance.slice(-3);
    
    // Ordenar los eventos por capacidad
    const sorted_by_capacity = data.sort((a, b) => b.capacity - a.capacity);
    
    // Seleccionar los 3 eventos con mayor capacidad, después de excluir los 2 que ya aparecieron en las primeras 2 columnas
    const top_capacity_events = sorted_by_capacity.filter(event => ![...top_attendance_events, ...bottom_attendance_events].includes(event)).slice(0, 3);
    
    // Crear la tabla HTML
    let table_html = '<table><thead><tr><th colspan="3"><h4>Events Statistics</h4></th></tr><tr><th>Events with the highest percentage of attendance</th><th>Events with the lowest percentage of attendance</th><th>Event with larger capacity</th></tr></thead><tbody>';
    
    // Agregar las filas de la tabla con los nombres de los eventos
    for (let i = 0; i < 3; i++) {
      table_html += '<tr>';
      if (i < top_attendance_events.length) {
        table_html += `<td>${top_attendance_events[i].name}</td>`;
      } else {
        table_html += '<td></td>';
      }
      if (i < bottom_attendance_events.length) {
        table_html += `<td>${bottom_attendance_events[i].name}</td>`;
      } else {
        table_html += '<td></td>';
      }
      if (i < top_capacity_events.length) {
        table_html += `<td>${top_capacity_events[i].name}</td>`;
      } else {
        table_html += '<td></td>';
      }
      table_html += '</tr>';
    }
    
    table_html += '</tbody></table>';
    
    // Mostrar la tabla en la página
    document.getElementById('table-container').innerHTML = table_html;
  })
  .catch(error => console.error(error));
