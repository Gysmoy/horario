const days = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
const days_label = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
moment.locale('es');

// agregar events, attendants, subjects si no existen en localstorage
if (!localStorage.getItem('events')) {
    localStorage.setItem('events', JSON.stringify({}));
}
if (!localStorage.getItem('attendants')) {
    localStorage.setItem('attendants', JSON.stringify({}));
}
if (!localStorage.getItem('subjects')) {
    localStorage.setItem('subjects', JSON.stringify({}));
}