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

$(document).on('click', '#download', function() {
    var data = {
        attendants: JSON.parse(localStorage.getItem('attendants')),
        subjects: JSON.parse(localStorage.getItem('subjects')),
        events: JSON.parse(localStorage.getItem('events'))
    };
    saveFile(JSON.stringify(data), 'backup.json');
})