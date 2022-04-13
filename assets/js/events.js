const days = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
function fn_subjects(cbo, value = null) {
    $(cbo).html(`<option value="" selected disabled>- Seleccione -</option>`);
    var subjects = JSON.parse(localStorage.subjects);
    subjects.forEach((subject, id) => {
        $(cbo).append(`
        <option value="${id}">${subject.name}</option>
        `);
    });
}
function fn_attendants(cbo, value = null) {
    $(cbo).html(`<option value="" selected disabled>- Seleccione -</option>`);
    var attendants = JSON.parse(localStorage.attendants);
    attendants.forEach((attendant, id) => {
        $(cbo).append(`
        <option value="${id}">${attendant.name}</option>
        `);
    });
}

fn_subjects('#cbo_subjects');
fn_attendants('#cbo_attendants');

// time-mask
$('.input-time').inputmask({'mask': '99:99'});

$(document).ready(function () {
    var table = $('#table-list tbody');
    table.empty();
    var events = getEvents();
    console.log(events)
    events.forEach((event, id) => {
        if (event !== null) {
            var days_template = '';
            event.days.forEach(day => {
                days_template += `<span class="d_in_t">${days[day]}</span>`;
            })
            table.append(`
            <tr>
                <td>${id}</td>
                <td>${event.subject.name}</td>
                <td>${event.attendant.name}</td>
                <td>${event.time.start}<br>-<br>${event.time.end}</td>
                <td>${days_template}</td>
                <td>
                    <button id="btn-edit" class="action-btn fa fa-pencil"></button>
                    <button id="btn-delete" class="action-btn fa fa-trash"></button>
                </td>
            </tr>
            `);
        }
    })
});