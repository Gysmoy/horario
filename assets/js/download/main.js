// función para Guardar un archivo json
function saveFile(data, filename) {
    var blob = new Blob([data], { type: 'text/json' });
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    } else {
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}

$(document).on('click', '#download', function () {
    var checked = $('#form-download input:checked').length;
    if (checked == 0) {
        alert('Debe seleccionar al menos un elemento');
        return;
    } else {
        var attendants = $('#check_attendants').is(':checked') ?
            JSON.parse(localStorage.getItem('attendants')) : null;
        var subjects = $('#check_subjects').is(':checked') ?
            JSON.parse(localStorage.getItem('subjects')) : null;
        var events = $('#check_events').is(':checked') ?
            JSON.parse(localStorage.getItem('events')) : null;
        var data = {
            attendants: attendants,
            subjects: subjects,
            events: events
        };
        saveFile(JSON.stringify(data), 'backup.json');
    }
})