$(document).ready(function() {
    $('#logForm').submit(function(e) {
        const logData = {
            exercisename: $('#exercises').val(),
            duration: $('#durationlimit').val(),
            meal: $('#meals').val(),
            calories: $('#calorie').val(),
            hydration: $('#hydrations').val(),
            sleep: $('#sleeps').val(),
        };

        $.ajax({
            url: 'http://localhost:9800/logs/save',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(logData),
            success: function(response) {
                $('#message').text('Logs entry added successfully!');
                $('#logForm')[0].reset();
            },
            error: function(xhr, status, error) {
                $('#message').text('Error adding logs: ' + error);
            }
        });

        setTimeout(function () {
            window.location.href = 'insights.html';
        }, 1000); 
    });
});