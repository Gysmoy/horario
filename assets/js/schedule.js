$(document).on("click", "#schedule", function () {
  var modal = $("#schedule-table");
  modal.empty();
  modal.modal("open");
  for (let i = 0; i < 7; i++) {
    var day = horario[`day${i}`];
    if (day) {
      var template = '';
      template += `
        <div>
          <span class="day span day${i}">
              ${days[i]}
          </span>
          <div class="day day${i}">
      `;
      day.forEach(d => {
        template += `
          <div class="day day${i}">${d.course}</div>
        `;
      });
      template += `    
          </div>
        </div>
      `;
      modal.append(template)
    } else {
      modal.append(`
        <div>
          <span class="day span day${i}">
              ${days[i]}
          </span>
          <div class="day day${i}">- No hay clases en este día -</div>
        </div>
      `);
    }
  }
});
