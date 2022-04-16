const days = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
function fn_subjects(cbo, value = null) {
    $(cbo).html(`<option value="" selected>- Seleccione -</option>`);
    var subjects = JSON.parse(localStorage.subjects);
    for (id in subjects) {
        var subject = subjects[id];
        $(cbo).append(`
        <option value="${id}">${subject.name}</option>
        `);
    };
}
function fn_attendants(cbo, value = null) {
    $(cbo).html(`<option value="" selected>- Seleccione -</option>`);
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
    var template = String(table.html());
    var events = getEvents();
    for (id in events) {
        var event = events[id];
        if (event !== null) {
            var days_template = '';
            event.days.forEach(day => {
                days_template += `<span class="d_in_t">${days[day]}</span>`;
            })
            table.append(`
            <tr id="${id}">
                <td>${event.subject.name}
                    <br>-<br>
                    ${event.attendant.name}
                </td>
                <td>${event.time.start}<br>-<br>${event.time.end}</td>
                <td>${days_template}</td>
                <td>
                    <button id="btn-edit" class="action-btn fa fa-pencil"></button>
                    <button id="btn-delete" class="action-btn fa fa-trash"></button>
                </td>
            </tr>
            `);
            $(`#${id}`).attr('data', JSON.stringify(event));
        }
    }
});