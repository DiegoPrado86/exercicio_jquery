const form = document.getElementById('form-task');
const tarefaCasa = document.getElementById('task-home');
const tarefa = [];


$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();
        validaTarefa();

    }); 
    function validaTarefa() {
        if(tarefa.includes(tarefaCasa.value)){
            alert(`A tarefa ${tarefaCasa.value} já foi inclusa`);
        } else {
            tarefa.push(tarefaCasa.value);
            let task = $('#adiciona-tarefas');
        console.log(task);
        let newTask = $('#task-home').val()
        task.append(`<li><a href='#'>${newTask}</a></li>`);
        $('#task-home').val('')
        }

        $('li').click(function() {
            $(this).css('text-decoration', 'line-through');
        });
    }
    
});


