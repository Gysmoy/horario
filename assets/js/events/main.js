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
    var template = String(table.html());
    table.empty();
    var events = getEvents();
    for (id in events) {
        var event = events[id];
        if (event !== null) {
            var days_template = '';
            event.days.forEach(day => {
                days_template += `<span class="d_in_t">${days[day]}</span>`;
            })
            table.append(template
                .replaceAll('{id}', id)
                .replaceAll('{subject.name}', event.subject.name)
                .replaceAll('{attendant.name}', event.attendant.name)
                .replaceAll('{days}', days_template)
                .replaceAll('{time.start}', event.time.start)
                .replaceAll('{time.end}', event.time.end)
            );
            $(`#${id}`).attr('data', JSON.stringify(event));
        }
    }
});