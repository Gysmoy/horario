function drawTable(events) {
    events = events.sort(function (x, y) {
        if (x.time.start > y.time.start) return 1;
        if (x.time.start < y.time.start) return -1;
        return 0;
    })
    $('#schedule-container table tbody').html(null);
    if (events.length > 0) {
        var lastEnd = '00:00';
        events.forEach((event, id) => {
            if (lastEnd < event.time.start) {
                $('#schedule-container table tbody').append(`
                <tr class="none">
                    <td>${lastEnd}</td>
                    <td>${event.time.start}</td>
                    <td>- No hay eventos registrados -</td>
                </tr>
                `);
            }
            var days_label = '';
            event.days.forEach(day => {
                days_label += `<span class="d_in_t">${days[day]}</span>`;
            })
            var links_btn = '';
            event.subject.links.forEach(link => {
                links_btn += `
                <a href="${link.url}" target="_blank">
                    ${link.name.toUpperCase()} ☍
                </a>
                `;
            });
            $('#schedule-container table tbody').append(`
            <tr id="event-${id}">
                <td>${event.time.start}</td>
                <td>${event.time.end}</td>
                <td>
                    <span class="subject_name">${event.subject.name}</span>
                    <div class="extra_info">
                        <p class="attendant">${event.attendant.name}</p>
                        ${days_label}
                        <div class="links">${links_btn}</div>
                        <div class="time_bar">
                            100%
                        </div>
                    </div>
                </td>
            </tr>
            `);
            $(`#event-${id}`).attr('data-event', JSON.stringify(event));
            lastEnd = event.time.end;
        });
        if (lastEnd != '00:00') {
            $('#schedule-container table tbody').append(`
            <tr class="none">
                <td>${lastEnd}</td>
                <td>24:00</td>
                <td>- No hay eventos registrados -</td>
            </tr>
            `);
        }
    } else {
        $('#schedule-container table tbody').html(`
        <tr class="none">
            <td colspan="3">- No hay eventos registrados hoy -</td>
        </tr>
        `)
    }
}