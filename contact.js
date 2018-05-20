$(document).ready(function() {

    $("#submit").click(function(e) {
        e.preventDefault();

        var name = $("#name").val(),
            email = $("#email").val(),
            message = $("#message").val();

        $.ajax({
            type: "POST",
<<<<<<< HEAD
            url: 'https://j1o99q2g7a.execute-api.eu-west-1.amazonaws.com/prod/sender',
=======
            url: 'https://j1o99q2g7a.execute-api.eu-west-1.amazonaws.com/prod',
>>>>>>> e7bc2ced9c739f5e8592d7c736e2d3f14b27e05a
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
