function requestNewTab() {
    var newTab = window.open("", "myWindow", 
    "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no, width=200, height=200"); 
    if (newTab == null || typeof(newTab)=='undefined') {  
        alert('Para abrir los enlaces de forma predeterminada, habilite las ventanas emergentes en su navegador.');
    } else {
        newTab.close();
    }
}