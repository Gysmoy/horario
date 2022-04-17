$(document).ready(function(){
    var data = getSubjects_();
    var table = $('#table-list-subjects tbody');
  
    table.empty();
    data.forEach((subject, id) => {
        var links = '';
        if (subject !== null) {

            subject.links.forEach((a,b) =>{
                
                links+=`<a href="${a.url}">${a.name}</a>`
            })

            console.log(id)
            table.append(`
            <tr>
                <td>${id}</td>
                <td>${subject.name}</td>
                <td class="links">${links}</td>
                <td>
                    <button id="btn-edit" class="action-btn fa fa-pencil"></button>
                    <button id="btn-delete" class="action-btn fa fa-trash"></button>
                </td>
            </tr>
            `);
        }
    })
})

function guardar_asunto(){
    var sunject = $('#subject').val();
    var subject_url = $('#subject-url').val();

    if (sunject == ''){
        console.log('Ingrese datos para guardar');
    }else{
        var links = '';
        var dataSubject =  getSubjects_();


        dataSubject.push({'name': sunject,'links':links})
        console.log(dataSubject);
    }
}

$('#save-subject').click(function (e) { 
    e.preventDefault();
    guardar_asunto();
});

function add_links(){
    var template = $('.link').html();
}