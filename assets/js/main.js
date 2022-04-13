// Constantes
const days = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
const days_label = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
moment.locale('es');

$(document).ready(function () {
    textToSpeech('');
    requestNewTab(); 
    var date = new Date();
    var day = date.getDay()
    
    var btn = document.querySelector(`[data-value="${day}"]`);
    daysButton(btn);
})
$(document).on("click", function (e) {
    var container = $('#days');
    var button = $('#day');
    if (
        !button.is(e.target) &&
        button.has(e.target).length === 0 &&
        !container.is(e.target) &&
        container.has(e.target).length === 0
    ) {
        $('#days').fadeOut(125);
    }
});
$(document).on('click', '#day', function () {
    $('#days').fadeToggle(125);
})
$(document).on('click', '#schedule-container tbody td:nth-child(3)', function () {
    var div = $(this).find('.extra_info');
    $('.extra_info').each(function () {
        if ($(this).is(div)) {
            $(this).toggle(125);
        } else {
            $(this).hide(125);
        }
    });
})
function showDay(id) {
    $('#day_label').text(days_label[id]);
    var horario = getEvents(id);
    $('#schedule-container table').attr('id', id);
    drawTable(horario);
}
function daysButton(btn) {
    var value = $(btn).attr('data-value');
    var label = $(btn).text();
    $('#days').fadeOut(125);
    $('#day').attr('data-value', value).text(label);
    showDay(value);
}
$(document).on('click', '#days button', function () {
    daysButton(this);
})
$(document).on('click', '#prev', function () {
    var value = $('#day').attr('data-value');
    var day = parseInt(value) - 1;
    day = (day < 0) ? 6 : day;
    $('#day').attr('data-value', day).text(days[day]);
    showDay(day);
})
$(document).on('click', '#next', function () {
    var value = $('#day').attr('data-value');
    var day = parseInt(value) + 1;
    day = (day > 6) ? 0 : day;
    $('#day').attr('data-value', day).text(days[day]);
    showDay(day);
})