$(document).ready(function() {

    $("#submit").click(function(e) {
        e.preventDefault();

        var name = $("#name").val(),
            email = $("#email").val(),
            message = $("#message").val();

        $.ajax({
            type: "POST",
            url: 'https://j1o99q2g7a.execute-api.eu-west-1.amazonaws.com/prod/sender',
            crossDomain: true,
            contentType: 'application/json',
            data: JSON.stringify({
                'name': name,
                'email': email,
                'message': message
            }),
            success: function(res){
                $('#form-response').text('Vaše zpráva byla odeslána, děkujeme! Co nejdříve se Vám ozveme zpátky.');
            },
            error: function(){
                $('#form-response').text('Došlo k chybě, omlouváme se! Zpráva nejspíš nebyla odeslána.');
            }
        });

    })

});
