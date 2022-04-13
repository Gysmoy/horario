// Script para leer el contenido del archivo subido
function readFile(file, callback) {
    var reader = new FileReader();
    reader.onload = function (e) {
        callback(e.target.result);
    };
    reader.readAsText(file);
}

// cambiar nombre del label del input file cuando se seleccione un archivo
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

$('#form-backup').submit(e => {
    e.preventDefault()
    var file = $('#backup').prop('files')[0];
    if (file) {
        readFile(file, function (data) {
            var json = JSON.parse(data);
            localStorage.setItem('attendants', JSON.stringify(json.attendants));
            localStorage.setItem('subjects', JSON.stringify(json.subjects));
            localStorage.setItem('events', JSON.stringify(json.events));
            alert('Datos restaurados con éxito');
            location.href = './';
        });
    } else {
        alert('No se ha seleccionado ningun archivo')
    }
})
$('#form-backup').on('reset', function() {
    $('#backup').val(null).trigger('change');
})