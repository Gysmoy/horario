// Función para leer un archivo de un input file
function readFile(file, callback) {
    var reader = new FileReader();
    reader.onload = function (e) {
        callback(e.target.result);
    };
    reader.readAsText(file);
}

// Evento change para cambiar el label del input file
$('#backup').on('change', function () {
    var file = $('#backup').prop('files')[0];
    if (file) {
        $('#label-icon').removeClass('fa-upload').addClass('fa-file-code');
        $('#label-text').text(file.name);
    } else {
        $('#label-icon').removeClass('fa-file-code').addClass('fa-upload');
        $('#label-text').text('Seleccionar Archivo');
    }
});

// Evento submit para leer el archivo y cargar los datos
$('#form-backup').submit(e => {
    e.preventDefault()
    var file = $('#backup').prop('files')[0];
    if (file) {
        readFile(file, function (data) {
            var json = JSON.parse(data);
            if (json.attendants) {
                localStorage.setItem('attendants', JSON.stringify(json.attendants));
            }
            if (json.subjects) {
                localStorage.setItem('subjects', JSON.stringify(json.subjects));
            }
            if (json.events) {
                localStorage.setItem('events', JSON.stringify(json.events));
            }
            alert('Datos restaurados con éxito');
            location.href = './';
        });
    } else {
        alert('No se ha seleccionado ningun archivo')
    }
})
$('#form-backup').on('reset', function () {
    $('#backup').val(null).trigger('change');
})