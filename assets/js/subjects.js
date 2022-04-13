const days = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
$(document).ready(function(){
    var data = getSubjects_();
    var table = $('#table-list-subjects tbody');
  
    table.empty();
    console.log(data)
    data.forEach((subject, id) => {
        var links = '';
        if (subject !== null) {

            subject.links.forEach((a,b) =>{
                console.log(a);
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

    console.log(JSON.parse(data));
})