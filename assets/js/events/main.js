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
$(document).on('click', '.event-header', function() {
    // mostrar y ocultar event-body y event-footer
    $(this).parent().find('.event-body, .event-footer').toggle(125);
});

$(document).ready(function () {
    var table = $('#events');
    var template = String(table.html());
    table.empty();
    var events = getEvents();
    for (id in events) {
        var event = events[id];
        if (event !== null) {
            for (pos in event.days) {
                // convertir el array de dias en un string
                event.days[pos] = days_label[event.days[pos]];
            }
            table.append(template
                .replaceAll('{id}', id)
                .replaceAll('{subject.name}', event.subject.name)
                .replaceAll('{attendant.name}', event.attendant.name)
                .replaceAll('{days}', event.days.join(', '))
                .replaceAll('{time.start}', event.time.start)
                .replaceAll('{time.end}', event.time.end)
            );
            $(`#${id}`).attr('data', JSON.stringify(event));
        }
    }
});