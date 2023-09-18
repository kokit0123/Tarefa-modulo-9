$(document).ready(function() {
    
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        var taskName = $('#newTask').val();
        if (taskName) {
            $('#taskList').append('<li>' + taskName + '</li>');
            $('#newTask').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});



