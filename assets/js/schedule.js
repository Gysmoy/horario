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
          <span>
              ${days[i]}
          </span>
          <div>
      `;
      day.forEach(d => {
        template += `
          <div>${d.course}</div>
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
          <span>
              ${days[i]}
          </span>
          <div>- No hay clases en este día -</div>
        </div>
      `);
    }
  }
});
